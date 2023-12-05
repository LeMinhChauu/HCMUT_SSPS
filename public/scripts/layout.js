async function getUser() {
    var user_inf = document.getElementById('student-inf');
    if (user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE2ODg2OTIsImV4cCI6MTcwMjI5MzQ5Mn0.fiynwadmi2Mxg3-DZjo8z9MkN4UEp5O1l6-wHmfC-fs"
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
    if (requestPage) {
        requestPage[0].children[0].innerHTML = page;
    }
}
function OpenPopup() {
    var feedbackForm = document.getElementById('logout_popup');
    feedbackForm.style.display = 'block';

    // Đồng thời ẩn nút "Send Feedback" để tránh click nhiều lần
    var sendFeedbackBtn = document.getElementById('logout');
    sendFeedbackBtn.style = 'pointer-events:none; ';
}

// Đóng form feedback khi click vào nút "Close"
function ClosePopup() {
    var feedbackForm = document.getElementById('logout_popup');
    feedbackForm.style.display = 'none';

    // Hiển thị lại nút "Send Feedback"
    var sendFeedbackBtn = document.getElementById('logout');
    sendFeedbackBtn.style += 'pointer-events:auto;';
}