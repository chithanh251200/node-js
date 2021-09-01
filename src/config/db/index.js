const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/nodejs-chithanh');
        console.log('kết nối thành công');
    } catch (error) {
        console.log('lỗi');
    }
}

module.exports = { connect };
