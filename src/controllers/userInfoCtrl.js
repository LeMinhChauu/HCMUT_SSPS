const { errorMonitor } = require("events");
const fs = require("fs");

const getUserInfo = async (req, res) => {
    try {
        const userId = req.params.userId;

        // Gửi yêu cầu GET đến API để lấy thông tin người dùng
        const response = await fetch(`http://127.0.0.1:3000/users/profile`, {
            method: 'GET',
            headers: {
                "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
            }
        });

        if (!response.ok) {
            // Xử lý lỗi nếu cần
            res.status(response.status).send('Error fetching user info');
            return;
        }

        // Parse dữ liệu JSON từ phản hồi
        const userInfo = await response.json();

        // Render trang userInfo.html với thông tin người dùng
        res.render('userInfor', { userInfo });
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

const updateUserProfile = async (req, res) => {
    try {
        const userId = req.params.userId;
        const formData = new FormData();

        // Điều chỉnh để phản ánh thực tế của ứng dụng của bạn
        formData.append("body", JSON.stringify(req.body));

        // Điều chỉnh để phản ánh thực tế của ứng dụng của bạn
        formData.append("orderfile", req.files[0]);

        // Gửi yêu cầu POST đến API để cập nhật thông tin người dùng
        const response = await fetch(`http://127.0.0.1:3000/users/profile`, {
            method: 'POST',
            body: formData,
            headers: {
                "Authorization": "655487f17a305c1ebe99a11f eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lc3RreW84MkBnbWFpbC5jb20iLCJfaWQiOiI2NTU0ODdmMTdhMzA1YzFlYmU5OWExMWYiLCJzdHVkZW50aWQiOiIxMjM0NTYiLCJpYXQiOjE3MDE3NDA1MDUsImV4cCI6MTcwMjM0NTMwNX0.ygTuhyUflp3EQYoExGtVY5U8f3qmAx9_X-ycwobTPM4"
            }
        });

        // Xóa tệp tạm sau khi gửi yêu cầu
        await fs.unlink(`./uploads/${req.files[0].filename}`);

        // Gửi kết quả trả về từ API về cho client
        res.send(response);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports = {
    getUserInfo,
    updateUserProfile
};