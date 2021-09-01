const express = require('express');
const router = express.Router();

// gọi controller vào
const courseController = require('../app/controller/CoursesController');

// đường dẫn trang news

// create
router.get('/create', courseController.create);
// store -> xử lý
router.post('/store', courseController.store);
// detail course
router.get('/:id', courseController.show);
// edit
router.get('/edit/:id', courseController.edit);
// store
router.put('/update/:id', courseController.update);
// delete
router.delete('/delete/:id', courseController.delete);
// patch
router.patch('/patch/:id', courseController.restore);
// delete force -> xóa vĩnh viễn
router.delete('/force/:id', courseController.force);
// delete force -> xóa vĩnh viễn
router.post('/handleFormAction/', courseController.handleFormAction);




//xuất ra
module.exports = router;
