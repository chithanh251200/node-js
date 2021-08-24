const express = require('express');
const router = express.Router();

// gọi controller vào
const siteController = require('../app/controller/SiteController');

// đường dẫn trang news

// detail
router.use('/search', siteController.search);
// index
router.use('/', siteController.index);

//xuất ra
module.exports = router;
