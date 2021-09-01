const express = require('express');
const router = express.Router();

// gọi controller vào
const newsController = require('../app/controller/NewsController');

// đường dẫn trang news

// detail
router.get('/:slug', newsController.show);
// index
router.get('/', newsController.index);

//xuất ra
module.exports = router;
