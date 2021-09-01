// import models vào
const Course = require('../models/Course');

// gọi mongooses xử lý xuất dữ liệu vào
const { mutipleMongooseToObject } = require('../../util/mongooses');

class NewsController {
    // GET home
    index(req, res, next) {
        // c1 : dùng callback xuất tất cả khóa học
        // Course.find({}, function (err, courses) {
        //    // kiểm tra không có lỗi thì xuất dữ liệu lên
        //    if(!err){
        //        res.json(courses);
        //    }
        //    else{
        //        res.status(400).json({erorr : 'lỗi'})
        //    }
        //   });

        // c2 :  dùng promise
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);

        // res.render('home');
    }
    // GET search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new NewsController();
