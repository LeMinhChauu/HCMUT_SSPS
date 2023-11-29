async function getUser() {
    var user_inf = document.getElementById('student-inf');
    if(user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDEwNTYzMDYsImV4cCI6MTcwMTY2MTEwNn0.DCvYwayx02isHa22uwYUmW17fFr9tKFkWfFp0JJv89w"
        }
    }).then(async (res) => {
        user = await res.json();
        user_inf.innerHTML = user.name + "<br>" + user.studentid;

        // var pageleft = user.pages;
        // getTotalPage(pageleft);
    }).catch((err) => {
        console.log(err);
    });
};
getUser();

function getTotalPage(page) {
    var requestPage = document.getElementsByClassName('total-page');
    if(requestPage) {
        requestPage[0].children[0].innerHTML = page;
    }
}

