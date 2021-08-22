// path 
const path = require('path');
const express = require('express');
const handlebars  = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

// Http logger 
app.use(morgan('combined'))

// Template engine
app.engine('hbs', handlebars({
  extname : 'hbs'
}));
app.set('view engine', 'hbs');

// img
app.use(express.static(path.join(__dirname,'public')));

//đường dẫn vào view
app.set('views',path.join(__dirname,'resources\\views'));

// trang chủ 
app.get('/', (req, res) => {
  res.render('home');
})
// trang tin tức mới 
app.get('/news', (req, res) => {
  res.render('news');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})