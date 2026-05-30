(function () {
    'use strict';

    // =========================
    // NAV (tetap punyamu)
    // =========================
    var nav = document.getElementById('templatemo-nav');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    var navItems = document.querySelectorAll('.nav-links a');

    function handleNavScroll() {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleNavScroll);

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('open');
    });

    navItems.forEach(function (link) {
        link.addEventListener('click', function () {
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
        });
    });

    // =========================
    // DATA RESEP
    // =========================
    var recipes = {

        geprek: {
            title: "Ayam Geprek",
            body: `
                <h3>🍗 Bahan:</h3>
                <ul>
                    <li>Ayam crispy</li>
                    <li>Cabai rawit</li>
                    <li>Bawang putih</li>
                    <li>Garam</li>
                </ul>

                <h3>🔥 Cara:</h3>
                <ul>
                    <li>Goreng ayam sampai crispy</li>
                    <li>Ulek sambal</li>
                    <li>Geprek ayam di atas sambal</li>
                </ul>
            `
        },

        seblak: {
            title: "Seblak",
            body: `
                <h3>🌶️ Bahan:</h3>
                <ul>
                    <li>Kerupuk</li>
                    <li>Telur</li>
                    <li>Sosis</li>
                    <li>Kencur</li>
                </ul>

                <h3>🔥 Cara:</h3>
                <ul>
                    <li>Rendam kerupuk</li>
                    <li>Tumis bumbu</li>
                    <li>Masak semua bahan</li>
                </ul>
            `
        },

        nasi: {
            title: "Nasi Goreng",
            body: `
                <h3>🍚 Bahan:</h3>
                <ul>
                    <li>Nasi</li>
                    <li>Telur</li>
                    <li>Bawang putih</li>
                    <li>Kecap</li>
                </ul>

                <h3>🔥 Cara:</h3>
                <ul>
                    <li>Tumis bawang</li>
                    <li>Masukkan telur</li>
                    <li>Masukkan nasi + kecap</li>
                </ul>
            `
        },

        tiramisu: {
            title: "Tiramisu",
            body: `
                <h3>🍰 Bahan:</h3>
                <ul>
                    <li>Ladyfinger</li>
                    <li>Kopi</li>
                    <li>Whipping cream</li>
                    <li>Mascarpone</li>
                </ul>

                <h3>✨ Cara:</h3>
                <ul>
                    <li>Layer biskuit & cream</li>
                    <li>Dinginkan 3 jam</li>
                </ul>
            `
        },

        pancake: {
            title: "Pancake",
            body: `
                <h3>🥞 Bahan:</h3>
                <ul>
                    <li>Tepung</li>
                    <li>Telur</li>
                    <li>Susu</li>
                    <li>Gula</li>
                </ul>

                <h3>🔥 Cara:</h3>
                <ul>
                    <li>Campur adonan</li>
                    <li>Masak di teflon</li>
                </ul>
            `
        },

        dalgona: {
            title: "Dalgona Coffee",
            body: `
                <h3>☕ Bahan:</h3>
                <ul>
                    <li>Kopi instan</li>
                    <li>Gula</li>
                    <li>Air panas</li>
                    <li>Susu</li>
                </ul>

                <h3>✨ Cara:</h3>
                <ul>
                    <li>Kocok sampai foam</li>
                    <li>Tuang di atas susu</li>
                </ul>
            `
        }
    };

    // =========================
    // MODAL SYSTEM (FIXED)
    // =========================

    function createModal() {
        var modal = document.createElement('div');
        modal.className = "modal";
        modal.id = "recipeModal";

        modal.innerHTML = `
            <div class="modal-box">
                <button class="modal-close" id="closeModal">✖</button>
                <h2 id="modalTitle"></h2>
                <div id="modalBody"></div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('closeModal').onclick = function () {
            modal.classList.remove("show");
        };

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.classList.remove("show");
            }
        });

        return modal;
    }

    var modal = createModal();

    window.openRecipe = function (key) {
        var data = recipes[key];
        if (!data) return;

        document.getElementById('modalTitle').innerHTML = data.title;
        document.getElementById('modalBody').innerHTML = data.body;

        modal.classList.add("show");
    };

})();
