document.addEventListener("DOMContentLoaded", function () {

    const user = localStorage.getItem("username");

    if (user) {
        document.getElementById("userInfo").innerText = "Halo, " + user;

        document.getElementById("authArea").innerHTML = `
            <button onclick="logout()" class="nav-cta">LOGOUT</button>
        `;
    }
});

function logout() {
    localStorage.removeItem("username");
    localStorage.removeItem("isLogin");
    location.reload();
}
