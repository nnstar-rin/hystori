document.addEventListener("DOMContentLoaded", function () {

    function goLogin() {
        window.location.href = "login/index.html";
    }

    function logout() {
        localStorage.removeItem("username");
        location.reload();
    }

    const user = localStorage.getItem("username");

    const userInfo = document.getElementById("userInfo");
    const authArea = document.getElementById("authArea");

    if (user && userInfo && authArea) {
        userInfo.innerText = "Halo, " + user;

        authArea.innerHTML = `
            <button onclick="logout()" class="nav-cta">Logout</button>
        `;
    }

    window.goLogin = goLogin;
    window.logout = logout;

});
