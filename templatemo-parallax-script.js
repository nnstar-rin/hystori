(function () {
    'use strict';

    // ==============================
    // NAV + PARALLAX (PUNYAMU TETAP)
    // ==============================
    var nav = document.getElementById('templatemo-nav');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    var navItems = document.querySelectorAll('.nav-links a');
    var sections = document.querySelectorAll('.parallax-section');

    // NAV SCROLL
    function handleNavScroll() {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleNavScroll);

    // MOBILE MENU
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

    // ==============================
    // RECIPE DATA
    // ==============================
var recipes = {

    geprek: {
        title: "Ayam Geprek",
        body: `
            <h3>🍗 Bahan:</h3>
            <ul>
                <li>1 potong ayam</li>
                <li>Tepung crispy</li>
                <li>Cabai rawit</li>
                <li>Bawang putih</li>
                <li>Garam</li>
            </ul>

            <h3>🔥 Cara Membuat:</h3>
            <ul>
                <li>Balur ayam dengan tepung, goreng sampai crispy</li>
                <li>Ulek cabai + bawang + garam</li>
                <li>Geprek ayam di atas sambal</li>
                <li>Sajikan dengan nasi hangat</li>
            </ul>
        `
    },

    seblak: {
        title: "Seblak Pedas",
        body: `
            <h3>🌶️ Bahan:</h3>
            <ul>
                <li>Kerupuk</li>
                <li>Telur</li>
                <li>Sosis / bakso</li>
                <li>Cabai rawit</li>
                <li>Bawang putih</li>
                <li>Kencur (biar khas)</li>
            </ul>

            <h3>🔥 Cara Membuat:</h3>
            <ul>
                <li>Rendam kerupuk sampai lembek</li>
                <li>Tumis bumbu halus sampai harum</li>
                <li>Masukkan telur & topping</li>
                <li>Tambahkan kerupuk & air sedikit</li>
                <li>Masak sampai meresap</li>
            </ul>
        `
    },

    nasi: {
        title: "Nasi Goreng",
        body: `
            <h3>🍚 Bahan:</h3>
            <ul>
                <li>Nasi putih (dingin lebih enak)</li>
                <li>2 siung bawang putih</li>
                <li>1 telur</li>
                <li>Kecap manis</li>
                <li>Garam & merica</li>
            </ul>

            <h3>🔥 Cara Membuat:</h3>
            <ul>
                <li>Tumis bawang sampai harum</li>
                <li>Masukkan telur, orak-arik</li>
                <li>Masukkan nasi</li>
                <li>Tambahkan kecap & bumbu</li>
                <li>Aduk rata sampai matang</li>
            </ul>
        `
    },

    tiramisu: {
        title: "Tiramisu Dessert",
        body: `
            <h3>🍰 Bahan:</h3>
            <ul>
                <li>Ladyfinger / biskuit</li>
                <li>Kopi hitam dingin</li>
                <li>Mascarpone / cream cheese</li>
                <li>Whipping cream</li>
                <li>Cocoa powder</li>
                <li>Gula halus</li>
            </ul>

            <h3>✨ Cara Membuat:</h3>
            <ul>
                <li>Kocok whipping cream sampai mengembang</li>
                <li>Campur dengan mascarpone</li>
                <li>Celup biskuit ke kopi sebentar</li>
                <li>Susun layer: biskuit → cream → ulangi</li>
                <li>Taburi cocoa powder</li>
                <li>Dinginkan 3–4 jam</li>
            </ul>
        `
    },

    pancake: {
        title: "Pancake",
        body: `
            <h3>🥞 Bahan:</h3>
            <ul>
                <li>Tepung terigu</li>
                <li>Telur</li>
                <li>Susu cair</li>
                <li>Gula</li>
                <li>Mentega</li>
            </ul>

            <h3>🔥 Cara Membuat:</h3>
            <ul>
                <li>Campur semua bahan sampai halus</li>
                <li>Panaskan teflon</li>
                <li>Tuang adonan</li>
                <li>Masak sampai muncul gelembung</li>
                <li>Balik dan masak sampai matang</li>
                <li>Sajikan dengan topping</li>
            </ul>
        `
    },

    dalgona: {
        title: "Dalgona Coffee",
        body: `
            <h3>☕ Bahan:</h3>
            <ul>
                <li>2 sdm kopi instan</li>
                <li>2 sdm gula</li>
                <li>2 sdm air panas</li>
                <li>Susu dingin</li>
            </ul>

            <h3>✨ Cara Membuat:</h3>
            <ul>
                <li>Kocok kopi + gula + air sampai creamy</li>
                <li>Siapkan susu di gelas</li>
                <li>Tuang foam kopi di atas susu</li>
                <li>Aduk sebelum diminum</li>
            </ul>
        `
    }

};
            `
        }

    };

    // ==============================
    // POPUP MODAL
    // ==============================

    function createModal() {
        var modal = document.createElement('div');
        modal.id = "recipeModal";
        modal.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            display: none;
            align-items: center;
            justify-content: center;
            z-index: 9999;
        `;

        modal.innerHTML = `
            <div style="
                background: #111;
                padding: 25px;
                max-width: 500px;
                width: 90%;
                border-radius: 10px;
                color: white;
                position: relative;
            ">
                <button id="closeModal" style="
                    position:absolute;
                    top:10px;
                    right:10px;
                    background:none;
                    border:none;
                    color:white;
                    font-size:20px;
                    cursor:pointer;
                ">✖</button>

                <h2 id="modalTitle"></h2>
                <div id="modalBody"></div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('closeModal').onclick = function () {
            modal.style.display = "none";
        };

        modal.addEventListener('click', function (e) {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });

        return modal;
    }

    var modal = createModal();

    // ==============================
    // OPEN RECIPE (GLOBAL)
    // ==============================
    window.openRecipe = function (key) {
        var data = recipes[key];
        if (!data) return;

        document.getElementById('modalTitle').innerHTML = data.title;
        document.getElementById('modalBody').innerHTML = data.body;

        modal.style.display = "flex";
    };

})();
})();
