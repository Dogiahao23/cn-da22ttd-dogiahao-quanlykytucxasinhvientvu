const express = require('express');
const router = express.Router();
const statsController = require('../controllers/statsController');
const auth = require('../middleware/auth');

// GET /api/stats - Lấy thống kê tổng quan (chỉ Admin/QuanLy)
router.get('/', auth(['Admin', 'QuanLy']), statsController.getStats);

module.exports = router;
