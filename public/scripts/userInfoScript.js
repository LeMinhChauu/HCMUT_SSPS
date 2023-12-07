var cookies;
var id;
var token;

if(document.cookie) {
    cookies = document.cookie.split(/\s*;\s*/);
    id = cookies[0].split(/\s*=\s*/)[1];
    token = cookies[1].split(/\s*=\s*/)[1];
}

async function getUserInfo() {
    var user_name = document.getElementById('student-inf.name');
    if(user_name.innerHTML.length > 0) return;
    var user_id = document.getElementById('student-inf.MSSV');
    var user_balance = document.getElementById('student-inf.balance');
    var user_pages = document.getElementById('student-inf.pages');

    await fetch("http://127.0.0.1:3000/users/profile", {
        method: "GET",
        headers: {
            "Authorization": id + " " + token
        }
    }).then(async (res) => {
        user = await res.json();
        user_name.innerHTML = user.name;
        user_id.innerHTML = user.studentid;
        user_balance.innerHTML = user.balance;
        user_pages.innerHTML = user.pages;
    }).catch((err) => {
        console.log(err);
    });
};
getUserInfo();


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
// document.getElementById('feedback-overlay').addEventListener('click', function (event) {
//     if (event.target === this) {
//         closeFeedbackForm();
//     }
// });

// Gọi hàm closeFeedbackForm khi click vào nút "Close"
// document.getElementById('close-feedback-btn').addEventListener('click', function () {
//     closeFeedbackForm();
// });

// Gửi feedback (cần cập nhật hàm này tùy thuộc vào yêu cầu của bạn)
function submitFeedback() {
    // Thực hiện xử lý gửi feedback
    // ...
    // Sau khi xử lý xong, có thể đóng form feedback nếu cần
    closeFeedbackForm();
}

