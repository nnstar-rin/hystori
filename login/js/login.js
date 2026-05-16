document.getElementById("loginForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    try {
        const res = await fetch("https://herisusanta.my.id/javalogin/api/auth.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `action=login&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`
        });

        const data = await res.json();
        console.log(data);

        if (data.status === "success") {
            localStorage.setItem("username", data.username);
            localStorage.setItem("isLogin", "true");
            window.location.href = "../index.html";
        } else {
            alert("Username atau password salah!");
        }

    } catch (err) {
        alert("Server error!");
        console.error(err);
    }
});
