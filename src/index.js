// path
const path = require('path');
const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;
// import overight
const methodOverride = require('method-override');
// import middleware 
const SortMiddleware = require('./app/middleware/SortMiddleware');

// imprort connect
const db = require('./config/db');

// Connect to DB
db.connect();

// gọi file trong routes
const route = require('./routes');
const { connect } = require('http2');

// Http logger
app.use(morgan('combined'));

// sử dụng middleware toàn bộ hệ thống 
app.use(SortMiddleware);

// import overight khai báo phương thức
app.use(methodOverride('_method'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: 'hbs',
        helpers : {
            sum : (a,b) => a+b,
            sortable : (filed,sort) => {
                const sortType = filed === sort.column ? sort.type : 'default';
                const icons = {
                    default : 'oi oi-elevator',
                    asc : 'oi oi-sort-ascending',
                    desc : 'oi oi-sort-descending',
                };
                const types = {
                    default : 'desc',
                    asc : 'desc',
                    desc : 'asc',
                };

                const icon = icons[sortType];   
                const type = types[sortType];


                return `<a href="?_sort&column=${filed}&type=${type}">
                        <span class="${icon}"></span>
                </a>`;
                    

            }
        },
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
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`);
});
