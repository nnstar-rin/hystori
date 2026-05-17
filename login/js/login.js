document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
    });

    const data = await res.json();

    // ambil data reset password lokal
    const resetUser = localStorage.getItem("resetUser");
    const resetPass = localStorage.getItem("resetPass");

    // kalau user pernah reset password
    if (username === resetUser) {

        // cek password baru
        if (password === resetPass) {

            localStorage.setItem("username", username);

            window.location.href = "../index.html";

        } else {

            const alertBox = document.getElementById("alertBox");

            alertBox.innerText = "Password baru salah";

            alertBox.style.display = "block";

            setTimeout(() => {
                alertBox.style.display = "none";
            }, 3000);
        }

    // kalau belum pernah reset password
    } else if (data.status === "success") {

        localStorage.setItem("username", username);

        window.location.href = "../index.html";

    } else {

        const alertBox = document.getElementById("alertBox");

        alertBox.innerText = "Username atau Password salah";

        alertBox.style.display = "block";

        setTimeout(() => {
            alertBox.style.display = "none";
        }, 3000);
    }
});


// FORGOT PASSWORD
function forgotPassword() {

    const username = prompt("Masukkan username:");

    if (!username) return;

    const newPassword = prompt("Masukkan password baru:");

    if (!newPassword) return;

    localStorage.setItem("resetUser", username);
    localStorage.setItem("resetPass", newPassword);

    alert("Password berhasil diubah!");
}
