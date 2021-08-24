// gọi views vào
const newsRouter = require('./news');
// gọi site vào
const siteRouter = require('./site');

function route(app) {
  // news
  app.use('/news', newsRouter);
  //site
  app.use('/', siteRouter);

  // trang chủ
  // app.get('/', (req, res) => {
  //     res.render('home');
  // })
  // trang tin tức mới
  // app.get('/news', (req, res) => {
  //     res.render('news');
  // })

  // // trang tìm kiếm
  // app.get('/search', (req, res) => {
  //   res.render('search');
  // })
  // app.post('/search', (req, res) => {
  //   console.log(req.body.q);
  //   res.render('search');
  // })
}

module.exports = route;
