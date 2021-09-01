const Course = require('../models/Course');

const { mutipleMongooseToObject } = require('../../util/mongooses');


class MesController {
    // Get me/course/list  ->  danh sách khóa học của tôi
    list(req, res , next) {

        let courseQuery = Course.find({});

        // kiểm tra _sort có trên đường dẫn không
        if(req.query.hasOwnProperty('_sort')){
            courseQuery = courseQuery.sort({
                [req.query.column] : req.query.type
            })
        }
    


        // kết hợp all promise để truyền 2 tham số , nếu dùng theo promise riêng như thế nó sẽ chạy xong xong không thể truyền đc
        Promise.all([ courseQuery,Course.countDocumentsDeleted({})])
        .then(([list_course , deletedCount])=>{
          
            res.render('me/course_list',{ 
                deletedCount,
                list_course: mutipleMongooseToObject(list_course) 
            })
        })

        // cách lấy tổng khóa học đã xóa tạm thời
            // Course.countDocumentsDeleted({})
            // .then((deletedCount) =>{
            //         console.log(deletedCount)
            // })
            // .catch(next)

        // lấy toàn bộ danh sách khóa học 
            // Course.find({})
            // .then( (list_course) => {
            //     res.render('me/course_list',{list_course: mutipleMongooseToObject(list_course) })
            // })
            // .catch(next)
    }
     // Get me/course/list
     trash(req, res , next) {
        Course.findDeleted({})
        .then(list_trash_course=>{
            res.render('me/course_list_trash',{
                list_trash_course : mutipleMongooseToObject(list_trash_course)
            })
        })
        .catch(next)
    }

}

module.exports = new MesController();
