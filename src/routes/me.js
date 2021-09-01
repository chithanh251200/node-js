const express = require('express');
const router = express.Router();

// gọi controller vào
const meController = require('../app/controller/MesController');

// đường dẫn trang news

// list me
router.get('/list', meController.list);
router.get('/trash', meController.trash);

//xuất ra
module.exports = router;
