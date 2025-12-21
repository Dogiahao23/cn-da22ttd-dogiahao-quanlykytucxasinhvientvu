const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/supportsController');
const auth = require('../middleware/auth');

router.post('/', auth(), ctrl.create); // sinh viên đăng yêu cầu
router.get('/', auth(['Admin','NhanVien']), ctrl.getAll);

module.exports = router;
