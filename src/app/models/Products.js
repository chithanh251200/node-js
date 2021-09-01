const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// khai báo slug tự động
const slug = require('mongoose-slug-generator');




const products = new Schema(
    {
        name: { type: String, maxLength: 255, required: true },
        value: { type: String, required: true },
        slug: { type: String, slug: 'name', unique: true },

        // chú ý : require là không đc để trống , unique là chỉ tồn tại 1 thoi
    },
    {
        timestamps: true,
    },
);




// import delete -> thư viện xóa tạm thời
const mongooseDelete = require('mongoose-delete');

//
mongoose.plugin(slug);

// import lugin delete
products.plugin( mongooseDelete, {
    overrideMethods: 'all',
    deletedAt : true ,
});


    

module.exports = mongoose.model('products', products);
