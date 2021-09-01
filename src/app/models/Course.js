const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// khai báo slug tự động
const slug = require('mongoose-slug-generator');


// 
const AutoIncrement = require('mongoose-sequence')(mongoose);



const Course = new Schema(
    {
       _id : {type : Number,},
        name: { type: String, maxLength: 255, required: true },
        description: { type: String, maxLength: 700, required: true },
        slug: { type: String, slug: 'name', unique: true },

        // chú ý : require là không đc để trống , unique là chỉ tồn tại 1 thoi
    },
    {
        _id:false,
        timestamps: true,
    },
);



// import delete -> thư viện xóa tạm thời
const mongooseDelete = require('mongoose-delete');

mongoose.plugin(slug);

// plugin id thành ->number 
Course.plugin(AutoIncrement);
// import lugin delete
Course.plugin( mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true ,
});


    

module.exports = mongoose.model('Course', Course);
