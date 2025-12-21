const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/studentsController');
const auth = require('../middleware/auth');

router.get('/', auth(['Admin','NhanVien']), ctrl.getAll); // chỉ nhân viên/admin
router.get('/:id', auth(), ctrl.getById);
router.post('/', auth(['Admin','NhanVien']), ctrl.create);

module.exports = router;
