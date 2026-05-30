(function () {
'use strict';

// NAV
var nav = document.getElementById('templatemo-nav');
var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', function () {
    if (window.scrollY > 80) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
});

navToggle.addEventListener('click', function () {
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('open');
});

// =====================
// RECIPE DATA (FIXED KEY)
// =====================
var recipes = {

ayam: {
title: "Ayam Geprek",
img: "images/ayam-geprek.jpg",
body: `
<h3>🍗 Bahan:</h3>
<ul>
<li>1 ekor ayam (potong sesuai selera)</li>
<li>3 sdm tepung terigu</li>
<li>2 sdm tepung maizena</li>
<li>1 butir telur</li>
<li>Garam & merica secukupnya</li>
<li>Minyak untuk menggoreng</li>
</ul>

<h3>🌶️ Sambal:</h3>
<ul>
<li>10 cabai rawit (sesuaikan pedas)</li>
<li>3 siung bawang putih</li>
<li>Garam secukupnya</li>
</ul>

<h3>🔥 Cara Membuat:</h3>
<ul>
<li>Baluri ayam dengan garam, merica, dan telur</li>
<li>Campur tepung terigu + maizena</li>
<li>Goreng ayam sampai crispy dan matang</li>
<li>Ulek cabai + bawang + garam sampai halus</li>
<li>Geprek ayam di atas sambal</li>
<li>Sajikan dengan nasi hangat</li>
</ul>
`
},

seblak: {
title: "Seblak Pedas Bandung",
img: "images/seblak.jpg",
body: `
<h3>🍜 Bahan:</h3>
<ul>
<li>1 genggam kerupuk mentah</li>
<li>2 butir telur</li>
<li>2 sosis / bakso (opsional)</li>
<li>2 siung bawang putih</li>
<li>3–5 cabai rawit</li>
<li>1 ruas kencur</li>
<li>Garam, gula, kaldu bubuk</li>
</ul>

<h3>🔥 Cara Membuat:</h3>
<ul>
<li>Rendam kerupuk sampai agak lembek</li>
<li>Haluskan bawang, cabai, dan kencur</li>
<li>Tumis bumbu sampai harum</li>
<li>Masukkan telur lalu orak-arik</li>
<li>Tambahkan air dan kerupuk</li>
<li>Masukkan sosis/bakso</li>
<li>Masak sampai bumbu meresap</li>
</ul>
`
},

nasgor: {
title: "Nasi Goreng Rumahan",
img: "images/nasgor.jpg",
body: `
<h3>🍚 Bahan:</h3>
<ul>
<li>1 piring nasi putih (lebih enak nasi dingin)</li>
<li>2 siung bawang putih</li>
<li>1 butir telur</li>
<li>2 sdm kecap manis</li>
<li>Garam & merica</li>
<li>Minyak goreng</li>
</ul>

<h3>🔥 Cara Membuat:</h3>
<ul>
<li>Tumis bawang putih sampai harum</li>
<li>Masukkan telur, orak-arik</li>
<li>Masukkan nasi putih</li>
<li>Tambahkan kecap, garam, dan merica</li>
<li>Aduk sampai semua tercampur rata</li>
<li>Sajikan dengan kerupuk atau ayam goreng</li>
</ul>
`
},

tiramisu: {
title: "Tiramisu Dessert",
img: "images/tiramisu.jpg",
body: `
<h3>🍰 Bahan:</h3>
<ul>
<li>200 ml whipping cream</li>
<li>200 gr cream cheese / mascarpone</li>
<li>2–3 sdm gula halus</li>
<li>1 pack ladyfinger / biskuit</li>
<li>200 ml kopi hitam (dingin)</li>
<li>Cocoa powder</li>
</ul>

<h3>✨ Cara Membuat:</h3>
<ul>
<li>Kocok whipping cream sampai mengembang</li>
<li>Campur dengan cream cheese + gula</li>
<li>Celupkan biskuit ke kopi sebentar saja</li>
<li>Susun layer: biskuit → cream → ulangi</li>
<li>Lapisan paling atas taburi cocoa powder</li>
<li>Dinginkan minimal 3–4 jam di kulkas</li>
</ul>
`
},

pancake: {
title: "Fluffy Pancake",
img: "images/pancake.jpg",
body: `
<h3>🥞 Bahan:</h3>
<ul>
<li>100 gr tepung terigu</li>
<li>1 butir telur</li>
<li>150 ml susu cair</li>
<li>1 sdm gula</li>
<li>1 sdt baking powder</li>
<li>Mentega secukupnya</li>
</ul>

<h3>🔥 Cara Membuat:</h3>
<ul>
<li>Campur semua bahan sampai halus</li>
<li>Panaskan teflon dengan sedikit mentega</li>
<li>Tuang adonan kecil-kecil</li>
<li>Masak sampai muncul gelembung</li>
<li>Balik dan masak sampai matang</li>
<li>Sajikan dengan madu atau coklat</li>
</ul>
`
},

dalgona: {
title: "Dalgona Coffee",
img: "images/dalgona.jpg",
body: `
<h3>☕ Bahan:</h3>
<ul>
<li>2 sdm kopi instan</li>
<li>2 sdm gula pasir</li>
<li>2 sdm air panas</li>
<li>200 ml susu dingin</li>
</ul>

<h3>🔥 Cara Membuat:</h3>
<ul>
<li>Kocok kopi + gula + air panas sampai kental</li>
<li>Siapkan gelas berisi susu dingin</li>
<li>Tuang foam kopi di atas susu</li>
<li>Aduk sebelum diminum</li>
</ul>
`
}

};

// =====================
// MODAL
// =====================
var modal = document.createElement('div');
modal.className = "modal";
modal.innerHTML = `
<div class="modal-box">
<button class="modal-close">×</button>
<h2 id="m-title"></h2>
<img id="m-img" style="width:100%;border-radius:8px;margin:10px 0;">
<div id="m-body"></div>
</div>
`;
document.body.appendChild(modal);

var titleEl = document.getElementById('m-title');
var imgEl = document.getElementById('m-img');
var bodyEl = document.getElementById('m-body');

modal.querySelector('.modal-close').onclick = closeModal;
modal.onclick = function (e) {
if (e.target === modal) closeModal();
};

function closeModal() {
modal.classList.remove('show');
}

// GLOBAL FUNCTION
window.openRecipe = function (key) {
var data = recipes[key];
if (!data) return;

titleEl.innerHTML = data.title;
imgEl.src = data.img;
bodyEl.innerHTML = data.body;

modal.classList.add('show');
};

})();
