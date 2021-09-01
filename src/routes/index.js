// gọi views vào
const newsRouter = require('./news');
// gọi site vào
const siteRouter = require('./site');
// gọi course vào
const courseRouter = require('./course');
// gọi course vào
const mecourseRouter = require('./me');

function route(app) {
    // news
    app.use('/news', newsRouter);
    // course
    app.use('/course', courseRouter);
    //site
    app.use('/me/course/', mecourseRouter);
    // course
    app.use('/', siteRouter);
}

module.exports = route;
