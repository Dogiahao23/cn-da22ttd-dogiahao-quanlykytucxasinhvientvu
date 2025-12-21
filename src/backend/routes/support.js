const express = require('express');
const router = express.Router();
const supportController = require('../controllers/supportController');
const auth = require('../middleware/auth');

// Route công khai - Tạo yêu cầu hỗ trợ (không cần đăng nhập)
router.post('/', supportController.createSupportRequest);

// Routes cho Quản lý và Admin
router.get('/', auth(['QuanLy', 'Admin']), supportController.getAllSupportRequests);
router.put('/:id/status', auth(['QuanLy', 'Admin']), supportController.updateSupportStatus);
router.delete('/:id', auth(['QuanLy', 'Admin']), supportController.deleteSupportRequest);

module.exports = router;
