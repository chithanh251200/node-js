// path
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

// gọi file trong routes
const route = require('./routes');

// Http logger
app.use(morgan('combined'));

// Template engine
          app.engine(
  'hbs',
  handlebars({
    extname: 'hbs',
  }),
);

app.set('view engine', 'hbs');

// img
app.use(express.static(path.join(__dirname, 'public')));
// middewear
app.use(
  express.urlencoded({
    extended: true,
  }),
);
app.use(express.json());

//đường dẫn vào view
app.set('views', path.join(__dirname, 'resources\\views'));

// Routes init
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
