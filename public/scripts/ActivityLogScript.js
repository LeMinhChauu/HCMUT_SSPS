window.addEventListener('load', (e) => {
    document.getElementById('logout').addEventListener("click", function () {
        document.getElementById('logout_popup').classList.add("open-popup");
    })
    document.getElementById('del').addEventListener("click", function () {
        document.getElementById('logout_popup').classList.remove("open-popup");
    })
});