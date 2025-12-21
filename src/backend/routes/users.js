const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const auth = require('../middleware/auth');

// Tất cả routes yêu cầu authentication
router.use(auth());

// GET /api/users - Lấy danh sách người dùng
router.get('/', usersController.getAllUsers);

// PUT /api/users/:id - Cập nhật người dùng
router.put('/:id', usersController.updateUser);

// DELETE /api/users/:id - Xóa người dùng
router.delete('/:id', usersController.deleteUser);

// PUT /api/users/:id/password - Đổi mật khẩu
router.put('/:id/password', usersController.changePassword);

module.exports = router;
