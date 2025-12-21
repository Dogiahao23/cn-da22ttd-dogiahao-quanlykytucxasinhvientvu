const express = require('express');
const router = express.Router();
const paymentsController = require('../controllers/paymentsController');
const auth = require('../middleware/auth');

// Admin routes
router.get('/', auth(['Admin', 'QuanLy']), paymentsController.getAll);
router.get('/students-with-rooms', auth(['Admin', 'QuanLy']), paymentsController.getStudentsWithRooms);
router.get('/stats', auth(['Admin', 'QuanLy']), paymentsController.getStats);
router.post('/', auth(['Admin', 'QuanLy']), paymentsController.create);
router.put('/:invoiceId', auth(['Admin', 'QuanLy']), paymentsController.update);
router.delete('/:invoiceId', auth(['Admin', 'QuanLy']), paymentsController.delete);

// Student routes
router.get('/student/:studentId', auth(), paymentsController.getByStudent);
router.put('/:invoiceId/pay', auth(), paymentsController.pay);

module.exports = router;
