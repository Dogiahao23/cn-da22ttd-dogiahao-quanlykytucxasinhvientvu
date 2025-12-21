const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/contractsController');
const auth = require('../middleware/auth');

router.post('/', auth(['Admin','NhanVien']), ctrl.create);

module.exports = router;
