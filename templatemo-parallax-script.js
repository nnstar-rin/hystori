/* ==========================================================================
   Parallax Starter - Free HTML CSS Template

TemplateMo 612 Parallax Starter

https://templatemo.com/tm-612-parallax-starter

   ========================================================================== */

(function () {
    'use strict';

    // --- Elements ---
    var nav = document.getElementById('templatemo-nav');
    var navToggle = document.getElementById('navToggle');
    var navLinks = document.getElementById('navLinks');
    var navItems = document.querySelectorAll('.nav-links a');
    var sections = document.querySelectorAll('.parallax-section');
    var parallaxBgs = document.querySelectorAll('.parallax-bg');
    var revealElements = document.querySelectorAll('.section-content');

    // --- Detect mobile ---
    var isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
                   || window.innerWidth <= 768;

    // =============================================
    // Smooth Parallax Engine
    // =============================================
    // How it works:
    // - Each .parallax-bg is 200% the height of the viewport
    //   and offset by -50% so there's plenty of image above
    //   and below to translate into.
    // - As the user scrolls, we calculate how far the section
    //   midpoint is from the viewport center (a value from -1 to +1).
    // - We multiply that by a large pixel range (half the viewport height)
    //   so the background shifts dramatically relative to the content.
    // - data-speed controls intensity: 0.5 = half viewport travel range.

    var ticking = false;

    function updateParallax() {
        if (isMobile) return;

        var scrollTop = window.pageYOffset;
        var windowHeight = window.innerHeight;

        parallaxBgs.forEach(function (bg) {
            var section = bg.parentElement;
            var rect = section.getBoundingClientRect();

            // Skip sections far outside viewport
            if (rect.bottom < -300 || rect.top > windowHeight + 300) {
                return;
            }

            var speed = parseFloat(bg.getAttribute('data-speed')) || 0.5;

            // How far is the section center from the viewport center?
            // sectionCenterY: vertical center of the section in viewport coords
            var sectionCenterY = rect.top + rect.height / 2;
            var viewportCenterY = windowHeight / 2;

            // offset: negative when section center is above viewport center (scrolled past)
            //         positive when section center is below viewport center (not yet reached)
            var offset = sectionCenterY - viewportCenterY;

            // Normalize to a -1 to +1 range based on how far through the viewport
            // the section has traveled. Using windowHeight + section height as the
            // total travel distance ensures full range coverage.
            var totalTravel = windowHeight + rect.height;
            var normalized = offset / (totalTravel / 2); // -1 to +1

            // Clamp
            normalized = Math.max(-1, Math.min(1, normalized));

            // The maximum pixel displacement — large value for visible effect
            // speed=0.5 means the bg can travel up to 50% of the viewport height
            var maxShift = windowHeight * speed * 0.25;

            // Apply translation — bg moves in the SAME direction as the offset
            // which means it moves SLOWER than the scroll (parallax lag)
            var translateY = normalized * maxShift;

            bg.style.transform = 'translate3d(0,' + translateY.toFixed(1) + 'px,0)';
        });

        ticking = false;
    }

    function onScroll() {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    if (!isMobile) {
        window.addEventListener('scroll', onScroll, { passive: true });
        updateParallax();
    }

    // Recalculate on resize
    window.addEventListener('resize', function () {
        isMobile = window.innerWidth <= 768;
        if (!isMobile) {
            updateParallax();
        } else {
            parallaxBgs.forEach(function (bg) {
                bg.style.transform = 'translate3d(0,0,0)';
            });
        }
    });

    // --- Navigation Scroll Effect ---
    function handleNavScroll() {
        if (window.scrollY > 80) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', handleNavScroll, { passive: true });
    handleNavScroll();

    // --- Mobile Toggle ---
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

    // --- Active Link on Scroll ---
    function updateActiveLink() {
        var scrollPos = window.scrollY + window.innerHeight / 3;

        sections.forEach(function (section) {
            var top = section.offsetTop;
            var height = section.offsetHeight;
            var id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navItems.forEach(function (link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + id) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', updateActiveLink, { passive: true });
    updateActiveLink();

    // --- Scroll Reveal ---
    revealElements.forEach(function (el) {
        el.classList.add('reveal');
    });

    function checkReveal() {
        var windowHeight = window.innerHeight;
        var revealPoint = 120;

        revealElements.forEach(function (el) {
            var elementTop = el.getBoundingClientRect().top;
            if (elementTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            }
        });
    }

    window.addEventListener('scroll', checkReveal, { passive: true });
    checkReveal();

    // --- Contact Form ---
    var contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Terima kasih atas usulannya! Akan segera kami proses. 💌✨🍳');
            contactForm.reset();
        });
    }

})();

function openRecipe(type) {
    const modal = document.getElementById("recipeModal");
    const title = document.getElementById("recipeTitle");
    const content = document.getElementById("recipeContent");

    let data = {
        geprek: {
            title: "🍗 Ayam Geprek Pedas",
            content: `
                <p>🔥 <b>Bahan:</b></p>
                <ul>
                    <li>1 potong ayam</li>
                    <li>3 sdm tepung bumbu</li>
                    <li>3 siung bawang putih</li>
                    <li>Cabai rawit 🌶️</li>
                    <li>Garam & lada</li>
                </ul>

                <p>👩‍🍳 <b>Cara membuat:</b></p>
                <ol>
                    <li>Marinasi ayam</li>
                    <li>Balur tepung</li>
                    <li>Goreng crispy 🍗</li>
                    <li>Ulek cabai + bawang</li>
                    <li>Geprek ayam di atas sambal 🔥</li>
                </ol>

                <p>💡 Nasi hangat = wajib!</p>
            `
        },

        seblak: {
            title: "🍜 Seblak Pedas Bandung",
            content: `
                <p>🔥 <b>Bahan:</b></p>
                <ul>
                    <li>Kerupuk</li>
                    <li>2 telur 🥚</li>
                    <li>Kencur</li>
                    <li>Cabai 🌶️</li>
                </ul>

                <p>👩‍🍳 <b>Cara membuat:</b></p>
                <ol>
                    <li>Rendam kerupuk</li>
                    <li>Haluskan bumbu</li>
                    <li>Tumis sampai harum</li>
                    <li>Masukkan telur</li>
                    <li>Campur semua bahan</li>
                </ol>

                <p>💡 Kencur bikin khas!</p>
            `
        },

        nasi: {
            title: "🍛 Nasi Goreng Rumahan",
            content: `
                <p>🔥 <b>Bahan:</b></p>
                <ul>
                    <li>Nasi putih</li>
                    <li>Telur 🥚</li>
                    <li>Kecap manis</li>
                    <li>Ayam / sosis</li>
                </ul>

                <p>👩‍🍳 <b>Cara membuat:</b></p>
                <ol>
                    <li>Tumis bawang</li>
                    <li>Masukkan telur</li>
                    <li>Masukkan ayam</li>
                    <li>Masukkan nasi</li>
                    <li>Tambahkan kecap 🍳</li>
                </ol>

                <p>💡 Pakai nasi dingin!</p>
            `
        },

        tiramisu: {
            title: "🍰 Tiramisu Dessert",
            content: `
                <p>🔥 <b>Bahan:</b></p>
                <ul>
                    <li>Biskuit</li>
                    <li>Kopi ☕</li>
                    <li>Whipped cream</li>
                    <li>Keju</li>
                </ul>

                <p>👩‍🍳 <b>Cara membuat:</b></p>
                <ol>
                    <li>Celup biskuit di kopi</li>
                    <li>Susun layer</li>
                    <li>Tambah cream & keju</li>
                    <li>Ulangi</li>
                    <li>Tabur bubuk kopi</li>
                </ol>

                <p>💡 Dinginkan dulu!</p>
            `
        },

        pancake: {
            title: "🥞 Pancake Lembut",
            content: `
                <p>🔥 <b>Bahan:</b></p>
                <ul>
                    <li>Tepung</li>
                    <li>Telur 🥚</li>
                    <li>Susu 🥛</li>
                </ul>

                <p>👩‍🍳 <b>Cara membuat:</b></p>
                <ol>
                    <li>Campur adonan</li>
                    <li>Masak di teflon</li>
                    <li>Balik sampai matang</li>
                    <li>Tambahkan topping 🍯</li>
                </ol>

                <p>💡 Api kecil ya!</p>
            `
        },

        dalgona: {
            title: "☕ Dalgona Coffee",
            content: `
                <p>🔥 <b>Bahan:</b></p>
                <ul>
                    <li>Kopi instan</li>
                    <li>Gula</li>
                    <li>Air panas</li>
                    <li>Susu 🥛</li>
                </ul>

                <p>👩‍🍳 <b>Cara membuat:</b></p>
                <ol>
                    <li>Kocok kopi, gula, & air panas</li>
                    <li>Sampai foam</li>
                    <li>Tuang susu</li>
                    <li>Taruh foam ☕</li>
                </ol>

                <p>💡 Semakin lama dikocok makin fluffy!</p>
            `
        }
    };

    title.innerHTML = data[type].title;
    content.innerHTML = data[type].content;

    modal.style.display = "flex";
}

function closeRecipe() {
    document.getElementById("recipeModal").style.display = "none";
}

// klik luar modal untuk nutup
window.addEventListener("click", function (e) {
    const modal = document.getElementById("recipeModal");
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
