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
            body: new URLSearchParams({
                action: "login",
                username: username,
                password: password
            })
        });

        // 🔥 cek kalau server error
        if (!res.ok) {
            throw new Error("HTTP Error: " + res.status);
        }

        const text = await res.text();
        console.log("RAW RESPONSE:", text);

        let data;
        try {
            data = JSON.parse(text);
        } catch (err) {
            throw new Error("Response bukan JSON valid!");
        }

        console.log("PARSED DATA:", data);

        if (data.status === "success") {
            localStorage.setItem("username", data.username);
            localStorage.setItem("isLogin", "true");

            // ⚠️ pastikan path ini benar
            window.location.href = "../index.html";
        } else {
            alert(data.message || "Username atau password salah!");
        }

    } catch (err) {
        console.error(err);
        alert("Login gagal / server error!");
    }
});
