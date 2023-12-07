const buyPaper = (req, res) => {
    if(req.headers.cookie) {
        res.render('buyPages');
    }
    else {
        res.redirect('logIn');
    }
}

module.exports = {
    buyPaper
}