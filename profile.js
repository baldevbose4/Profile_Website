// ==========================
// Mobile Navigation
// ==========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu after clicking a link (mobile)

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});

// ==========================
// Active Navigation
// ==========================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        if (window.scrollY >= top) {
            current = section.getAttribute("id");
        }

    });

    navItems.forEach(item => {

        item.classList.remove("active-link");

        if (item.getAttribute("href") === "#" + current) {

            item.classList.add("active-link");

        }

    });

});

// ==========================
// Navbar Shadow
// ==========================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,0.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// ==========================
// Reveal Animation
// ==========================

const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.15
});

cards.forEach(card => {

    card.classList.add("hidden");

    observer.observe(card);

});