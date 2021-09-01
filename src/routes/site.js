const express = require('express');
const router = express.Router();

// gọi controller vào
const siteController = require('../app/controller/SiteController');

// đường dẫn trang news

// detail
router.get('/search', siteController.search);
// index
router.get('/', siteController.index);

//xuất ra
module.exports = router;
