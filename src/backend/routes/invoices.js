const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/invoicesController');
const auth = require('../middleware/auth');

router.get('/contract/:contractId', auth(['Admin','NhanVien']), ctrl.getByContract);
router.post('/', auth(['Admin','NhanVien']), ctrl.create);

module.exports = router;
