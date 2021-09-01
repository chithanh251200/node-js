const Course = require('../models/Course');

const { mongooseToObject } = require('../../util/mongooses');

class CourseController {
    //GET  /course/:slug
    show(req, res, next) {
        // res.json(req.params.slug);
        //    lấy sản phẩm
        Course.findOne({ _id: req.params.id })
            .then((course) => {
                // res.json(course);
                res.render('courses/course_detail', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //GET  /course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    // [POST]  /course/store
    store(req, res, next) {
        const FormData = req.body;
        const newCourse = new Course(FormData);
        newCourse
            .save()
            // điều hướng
            .then(() => res.redirect('/me/course/list'))
            .catch(next);

        // res.send('đã thêm thành công');
    }
    // [GET] me/course/store
    edit(req, res , next) {
        Course.findById(req.params.id)
        .then(id_course =>{
            res.render('courses/edit',{
                id_course: mongooseToObject(id_course)
            })
        })
    }
     // [PUT] /course/update/id
     update(req, res , next) {
       Course.updateOne({_id: req.params.id},req.body)
       .then(() =>{
            res.redirect('/me/course/list');
       })
       .catch(next)
    }
     // [DELETE] /course/delte/id
     delete(req, res , next) {
        Course.delete({_id: req.params.id})
        .then(() =>{
             res.redirect('back');
        })
        .catch(next)
     }
     // [DELETE] /course/delte/id
    restore(req, res , next) {
        Course.restore({_id: req.params.id})
        .then(() =>{
             res.redirect('back');
        })
        .catch(next)
     }
     // [DELETE] /course/force/id
     force(req, res , next) {
        Course.deleteOne({_id: req.params.id})
        .then(() =>{
             res.redirect('back');
        })
        .catch(next)
     }


      // [post] /course/handleFormAction -> xóa tam thời
      handleFormAction(req, res , next) {
          switch(req.body.action){
            case 'delete':  
                // sử dụng where in cho mảng 
                Course.delete({_id: { $in : req.body.coursesId }})
                .then(() =>{
                     res.redirect('back');
                })
                .catch(next)
                break;
            default :
                res.json({message : 'lỗi'})
          }
        
     }


}

module.exports = new CourseController();    
