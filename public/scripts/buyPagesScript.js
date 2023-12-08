// const { response } = require("express");
const uuidv4 = require("uuid/v4");
window.addEventListener('load', (e) => {
    if(document.cookie) {
        var cookies;
        var id;
        var token;
        cookies = document.cookie.split(/\s*;\s*/);
        id = cookies[0].split(/\s*=\s*/)[1];
        token = cookies[1].split(/\s*=\s*/)[1];
    }

    var curprice = 10000;
    var remainPage = document.getElementById('remain-page');
    var balance = 0;
    async function getRemainPage() {
        await fetch("http://127.0.0.1:3000/users/profile", {
            method: "GET",
            headers: {
                "Authorization": id + " " + token
            }
        }).then(async (res) => {
            user = await res.json();
            remainPage.innerHTML = user.pages;
            balance = user.balance;
        }).catch((err) => {
            console.log(err);
        });
        document.getElementById('page-price').innerHTML = curprice;
    }
    getRemainPage();

    var totalPage = 0;
    var pagetype = 1;
    var pagenum = 0;
    document.getElementById('page-type').addEventListener('change', (e) => {
        if(e.target.value == "A3") pagetype = 2;
        else if(e.target.value == "A4") pagetype = 1;
        totalPage = pagetype*pagenum;
    });

    document.getElementById('page-num').addEventListener('change', (e) => {
        pagenum = e.target.value;
        totalPage = pagetype*pagenum;
        if(totalPage <= 0) {
            document.getElementById('submitbtn').disabled = true;
        }
        else {
            document.getElementById('submitbtn').disabled = false;
        }
    });

    var form = document.getElementById('form');
    var bptable = document.getElementById('bptable');
    form.addEventListener('submit', async (e) =>
    {
        e.preventDefault();
        const orderid = uuidv4();
        // Date here
        // totalPage here
        const amount = curprice*totalPage;
        const paidstt = 0;
        if(amount <= balance) {
            await commitPurchase();
            paidstt = 1;
        }

        const row = document.createElement("tr");
        const id = document.createElement("td");
        id.innerText = orderid;
        row.appendChild(id);
        const datebp = document.createElement("td");
        datebp.innerText = (new Date(Date.now()).toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' }));
        row.appendChild(date);
        const nump = document.createElement("td");
        nump.innerText = totalPage;
        row.appendChild(nump);
        const price = document.createElement("td");
        price.innerText = amount;
        row.appendChild(price);
        const paid = document.createElement("td");
        if(paidstt == 1) {
            paid.innerText = "Đã thanh toán";
            paid.style = "color: #000; font-weight: 500";
        }
        else {            
            row.setAttribute("id", orderid);
            row.setAttribute("OnClick", "pay(this.id)");
            paid.innerText = "Chưa thanh toán";
            paid.style = "color: #190482; font-weight: 500; text-decoration: underline";
        }
        row.appendChild(paid);
        bptable.appendChild(row);        
    });    

    async function commitPurchase() {
        const formData = new FormData(e);
        
        formData.append("number", totalPage);
        formData.append("money", amount);

        await fetch("http://127.0.0.1:3000/users/buypaper", {
            method: "POST",
            body: formData,
            headers: {
                "Authorization": id + " " + token
            }
        }).then((res) => {
            getRemainPage();
            form.reset();
        }).catch((err) => {
            console.log(err);
        });
        
    }

    async function pay(billID) {
        getRemainPage();
        const price = document.getElementById(billID).children[3].value;
        if(balance >= price) {
            await commitPurchase();
            const paid = document.getElementById(billID).children[4];
            paid.innerText = "Đã thanh toán";
            paid.style = "color: #000; font-weight: 500";
            const row = document.getElementById(billID);
            row.removeAttribute("id");
            row.removeAttribute("OnClick");
        }
        else
        {
            alert("Số tiền trong tài khoản không đủ để thanh toán!");
        }
    }
        
});