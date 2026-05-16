document.getElementById("loginForm").addEventListener("submit", function(e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const savedUsername = localStorage.getItem("username");
    const savedPassword = localStorage.getItem("password");

    if (username === savedUsername && password === savedPassword) {

        alert("Login berhasil!");

        localStorage.setItem("isLogin", "true");

        window.location.href = "../index.html";

    } else {

        alert("Username atau Password salah!");
    }
});

function forgotPassword() {

    const email = prompt("Masukkan email kamu:");

    const savedEmail = localStorage.getItem("email");

    if (email && email.trim() === savedEmail) {

        const newPassword = prompt("Masukkan password baru:");

        if (!newPassword || newPassword.trim() === "") {

            alert("Password tidak boleh kosong!");
            return;
        }

        localStorage.setItem("password", newPassword.trim());

        alert("Password berhasil diubah!");

    } else {

        alert("Email tidak cocok!");
    }
}
