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

async function getUserName() {
    var user_inf = document.getElementById('student-inf.name');
    if (user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
        }
    }).then(async (res) => {
        user = await res.json();
        user_inf.innerHTML = user.name;

        // var pageleft = user.pages;
        // getTotalPage(pageleft);
    }).catch((err) => {
        console.log(err);
    });
};
getUserName();
async function getUserMSSV() {
    var user_inf = document.getElementById('student-inf.MSSV');
    if (user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
        }
    }).then(async (res) => {
        user = await res.json();
        user_inf.innerHTML = user.studentid;

        // var pageleft = user.pages;
        // getTotalPage(pageleft);
    }).catch((err) => {
        console.log(err);
    });
};
getUserMSSV();
async function getUserbalance() {
    var user_inf = document.getElementById('student-inf.balance');
    if (user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
        }
    }).then(async (res) => {
        user = await res.json();
        user_inf.innerHTML = user.balance;

        // var pageleft = user.pages;
        // getTotalPage(pageleft);
    }).catch((err) => {
        console.log(err);
    });
};
getUserbalance();

getUserMSSV();
async function getUserpages() {
    var user_inf = document.getElementById('student-inf.pages');
    if (user_inf.innerHTML.length > 0) return;
    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
        }
    }).then(async (res) => {
        user = await res.json();
        user_inf.innerHTML = user.pages;
        // var pageleft = user.pages;
        // getTotalPage(pageleft);
    }).catch((err) => {
        console.log(err);
    });
};
getUserpages();
// Mở form feedback khi click vào nút "Send Feedback"
function openFeedbackForm() {
    var feedbackForm = document.getElementById('feedback-form');
    feedbackForm.style.display = 'block';

    // Đồng thời ẩn nút "Send Feedback" để tránh click nhiều lần
    var sendFeedbackBtn = document.getElementById('send-feedback-btn');
    sendFeedbackBtn.style.display = 'none';
}

// Đóng form feedback khi click vào nút "Close"
function closeFeedbackForm() {
    var feedbackForm = document.getElementById('feedback-form');
    feedbackForm.style.display = 'none';

    // Hiển thị lại nút "Send Feedback"
    var sendFeedbackBtn = document.getElementById('send-feedback-btn');
    sendFeedbackBtn.style.display = 'block';
}

// Gọi hàm closeFeedbackForm khi click vào overlay
document.getElementById('feedback-overlay').addEventListener('click', function (event) {
    if (event.target === this) {
        closeFeedbackForm();
    }
});

// Gọi hàm closeFeedbackForm khi click vào nút "Close"
document.getElementById('close-feedback-btn').addEventListener('click', function () {
    closeFeedbackForm();
});

// Gửi feedback (cần cập nhật hàm này tùy thuộc vào yêu cầu của bạn)
function submitFeedback() {
    // Thực hiện xử lý gửi feedback
    // ...
    // Sau khi xử lý xong, có thể đóng form feedback nếu cần
    closeFeedbackForm();
}
