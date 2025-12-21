const express = require('express');
const router = express.Router();
const registrationsController = require('../controllers/registrationsController');
const auth = require('../middleware/auth');
const upload = require('../middleware/upload');

// POST /api/registrations - Tạo đơn đăng ký (public - sinh viên có thể đăng ký)
router.post('/', 
  auth(), 
  upload.fields([
    { name: 'idCardFront', maxCount: 1 },
    { name: 'studentCard', maxCount: 1 }
  ]), 
  registrationsController.create
);

// GET /api/registrations - Lấy tất cả đơn đăng ký (Admin/QuanLy)
router.get('/', auth(['Admin', 'QuanLy']), registrationsController.getAll);

// PUT /api/registrations/:id/approve - Duyệt đơn (Admin/QuanLy)
router.put('/:id/approve', auth(['Admin', 'QuanLy']), registrationsController.approve);

// PUT /api/registrations/:id/reject - Từ chối đơn (Admin/QuanLy)
router.put('/:id/reject', auth(['Admin', 'QuanLy']), registrationsController.reject);

// DELETE /api/registrations/:id - Xóa đơn (Admin/QuanLy)
router.delete('/:id', auth(['Admin', 'QuanLy']), registrationsController.delete);

module.exports = router;
