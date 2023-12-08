const { errorMonitor } = require('events');
const fs = require('fs');


const buyPaper = async (req, res) => {
    if(req.headers.cookie) {
        var cookies = req.headers.cookie.split(/\s*;\s*/);
        var id = cookies[0].split(/\s*=\s*/)[1];
        var token = cookies[1].split(/\s*=\s*/)[1];
        
        await fetch("http://127.0.0.1:3000/users/profile", {
            method: "GET",
            headers: {
                "Authorization": id + " " + token
            }
        }).then(async (response) => {
            const user = await response.json();
            res.render("buyPages", {
                "request": req,
                "user": user
            });
        }).catch((err) => {
            console.log(err);
        }); 
    }
    else {
        res.redirect('logIn');
    }
}

module.exports = {
    buyPaper
}