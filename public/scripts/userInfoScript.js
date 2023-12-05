async function getUserName() {
    var user_inf = document.getElementById('student-name');
    if(user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
        }
    }).then(async (res) => {
        user = await res.json();
        user_inf.innerHTML = user.name ;

        // var pageleft = user.pages;
        // getTotalPage(pageleft);
    }).catch((err) => {
        console.log(err);
    });
};
getUserName();
