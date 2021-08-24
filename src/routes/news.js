const express = require('express');
const router = express.Router();

// gọi controller vào
const newsController = require('../app/controller/NewsController');

// đường dẫn trang news

// detail
router.use('/:slug', newsController.show);
// index
router.use('/', newsController.index);

//xuất ra
module.exports = router;
