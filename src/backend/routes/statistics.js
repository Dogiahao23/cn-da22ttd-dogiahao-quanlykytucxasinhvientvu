const express = require('express');
const router = express.Router();
const db = require('../db');

// Lấy thống kê đăng ký theo tháng
router.get('/registrations-by-month', async (req, res) => {
  try {
    const query = `
      SELECT 
        MONTH(NgayDangKy) as month,
        YEAR(NgayDangKy) as year,
        COUNT(*) as count,
        SUM(CASE WHEN TrangThai = 'approved' THEN 1 ELSE 0 END) as approved,
        SUM(CASE WHEN TrangThai = 'pending' THEN 1 ELSE 0 END) as pending,
        SUM(CASE WHEN TrangThai = 'rejected' THEN 1 ELSE 0 END) as rejected
      FROM dondangky
      WHERE NgayDangKy >= DATE_SUB(NOW(), INTERVAL 12 MONTH)
      GROUP BY YEAR(NgayDangKy), MONTH(NgayDangKy)
      ORDER BY year, month
    `;
    
    const [results] = await db.query(query);
    res.json(results);
  } catch (error) {
    console.error('Error fetching registration statistics:', error);
    res.status(500).json({ message: 'Lỗi khi lấy thống kê đăng ký' });
  }
});

// Lấy thống kê tổng quan
router.get('/overview', async (req, res) => {
  try {
    // Tổng số sinh viên
    const [students] = await db.query(
      "SELECT COUNT(*) as count FROM taikhoan WHERE VaiTro = 'SinhVien'"
    );
    
    // Tổng số phòng
    const [rooms] = await db.query('SELECT COUNT(*) as count FROM phong');
    
    // Phòng còn trống
    const [availableRooms] = await db.query(
      "SELECT COUNT(*) as count FROM phong WHERE TrangThai = 'Còn trống'"
    );
    
    // Đơn đăng ký chờ duyệt
    const [pendingRegistrations] = await db.query(
      "SELECT COUNT(*) as count FROM dondangky WHERE TrangThai = 'pending'"
    );
    
    // Yêu cầu hỗ trợ chưa xử lý
    const [pendingSupport] = await db.query(
      "SELECT COUNT(*) as count FROM yeucauhotro WHERE TrangThai = 'Chờ xử lý'"
    );
    
    res.json({
      totalStudents: students[0].count,
      totalRooms: rooms[0].count,
      availableRooms: availableRooms[0].count,
      pendingRegistrations: pendingRegistrations[0].count,
      pendingSupport: pendingSupport[0].count
    });
  } catch (error) {
    console.error('Error fetching overview statistics:', error);
    res.status(500).json({ message: 'Lỗi khi lấy thống kê tổng quan' });
  }
});

module.exports = router;
