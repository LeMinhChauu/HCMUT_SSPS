const { errorMonitor } = require("events");
const fs = require("fs");

const ActivityLog = async (req, res) => {
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE2ODg2OTIsImV4cCI6MTcwMjI5MzQ5Mn0.fiynwadmi2Mxg3-DZjo8z9MkN4UEp5O1l6-wHmfC-fs"
        }
    }).then(async (result) => {
        const user = await result.json();
        res.render("ActivityLog", {
            "request": req,
            "user": user
        });
    }).catch((err) => {
        console.log(err);
    });
}
module.exports = {
    ActivityLog
}