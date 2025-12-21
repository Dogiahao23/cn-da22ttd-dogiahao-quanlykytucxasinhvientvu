const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/roomsController');
const auth = require('../middleware/auth');

// GET /api/rooms - Danh sách phòng (Admin/NhanVien)
router.get('/', auth(['Admin','NhanVien']), ctrl.getAll);

// GET /api/rooms/available - Phòng trống (public)
router.get('/available', ctrl.getAvailable);

// GET /api/rooms/approved-students - Sinh viên đã duyệt chưa có phòng
router.get('/approved-students', auth(['Admin','NhanVien']), ctrl.getApprovedStudents);

// GET /api/rooms/:roomId/students - Sinh viên trong phòng
router.get('/:roomId/students', auth(['Admin','NhanVien']), ctrl.getStudentsInRoom);

// POST /api/rooms - Tạo phòng mới
router.post('/', auth(['Admin','NhanVien']), ctrl.create);

// POST /api/rooms/add-student - Thêm sinh viên vào phòng
router.post('/add-student', auth(['Admin','NhanVien']), ctrl.addStudentToRoom);

// POST /api/rooms/remove-student - Xóa sinh viên khỏi phòng
router.post('/remove-student', auth(['Admin','NhanVien']), ctrl.removeStudentFromRoom);

// PUT /api/rooms/:roomId - Cập nhật thông tin phòng
router.put('/:roomId', auth(['Admin','NhanVien']), ctrl.updateRoom);

// DELETE /api/rooms/:roomId - Xóa phòng
router.delete('/:roomId', auth(['Admin','NhanVien']), ctrl.deleteRoom);

module.exports = router;
