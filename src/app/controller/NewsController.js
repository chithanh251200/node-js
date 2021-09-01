class NewsController {
    // GET news
    index(req, res) {
        res.render('news');
    }

    show(req, res) {
        res.send('trang chi tiết sản phẩm');
    }
}

module.exports = new NewsController();
