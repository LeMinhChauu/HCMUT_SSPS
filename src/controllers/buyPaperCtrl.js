const buyPaper = (req, res) => {
    if(req.headers.cookie) {
        res.render('buyPages');
    }
    res.redirect('logIn');
}

module.exports = {
    buyPaper
}