import './scss/style.scss';
import { experienceData, portfolioData } from './data';
import imagesLoaded from 'imagesloaded';
import Typed from 'typed.js';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS (replacement for WOW.js)
AOS.init({
    offset: 0,
    duration: 1500,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Declare google global (only one remaining)
declare const google: any;

// Render Experience Section
const renderExperience = () => {
    const container = document.querySelector('.experience .timeline');
    if (!container || typeof experienceData === 'undefined') return;

    const html = experienceData.map(item => `
        <div class="timeline-item ${item.position}" data-aos="fade-${item.position}" data-aos-delay="100">
            <div class="timeline-text">
                <div class="timeline-date">${item.period}</div>
                <h2>${item.role}</h2>
                <h4>${item.company}</h4>
                <p>${item.description}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
};

import 'fslightbox';
declare function refreshFsLightbox(): void;

// Render Portfolio Section
const renderPortfolio = () => {
    const container = document.querySelector('.portfolio-container');
    if (!container || typeof portfolioData === 'undefined') return;

    const html = portfolioData.map((item, index) => `
        <div class="col-lg-4 col-md-6 col-sm-12 portfolio-item ${item.filter}" data-aos="fade-up" data-aos-delay="${index * 200}">
            <div class="portfolio-wrap">
                <div class="portfolio-img">
                    <p><a href="${item.link}">
                        <img src="${item.img}" alt="Image">
                    </a></p>
                </div>
                <div class="portfolio-text">
                    <h3>${item.title}</h3>
                    <a class="btn" data-fslightbox="portfolio" href="${item.img}">+</a>
                </div>
            </div>
        </div>
    `).join('');

    container.innerHTML = html;
    refreshFsLightbox();
};

// Initial Rendering
renderExperience();
renderPortfolio();

// loader
const loader = function () {
    setTimeout(function () {
        const loaderElement = document.getElementById('loader');
        if (loaderElement) {
            loaderElement.classList.remove('show');
        }
    }, 1);
};
loader();


// Initiate the wowjs
// Initiate the wowjs (Replaced by AOS above)


// Back to top button
const backToTop = document.querySelector('.back-to-top') as HTMLElement | null;

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        if (backToTop) {
            backToTop.style.display = 'block';
            setTimeout(() => backToTop.style.opacity = '1', 10);
        }
    } else {
        if (backToTop) {
            backToTop.style.opacity = '0';
            setTimeout(() => backToTop.style.display = 'none', 600); // Wait for transition
        }
    }
});

backToTop?.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// Sticky Navbar
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar?.classList.add('nav-sticky');
    } else {
        navbar?.classList.remove('nav-sticky');
    }
});


// Smooth scrolling on the navbar links
const navLinks = document.querySelectorAll(".navbar-nav a");
navLinks.forEach(link => {
    link.addEventListener('click', (e: Event) => {
        const anchor = link as HTMLAnchorElement;
        if (anchor.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(anchor.hash);
            if (target) {
                const headerOffset = 45;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });

                // Update active state
                const navbarNav = anchor.closest('.navbar-nav');
                if (navbarNav) {
                    navbarNav.querySelectorAll('.active').forEach(active => active.classList.remove('active'));
                    anchor.closest('a')?.classList.add('active');
                }
            }
        }
    });
});


// Navbar Toggler
const navbarToggler = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('#navbarCollapse');

if (navbarToggler && navbarCollapse) {
    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
        const isExpanded = navbarCollapse.classList.contains('show');
        navbarToggler.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
    });
}


// Typed Initiate
const heroTextH2 = document.querySelector('.hero .hero-text h2');
if (heroTextH2) {
    const typed_strings = document.querySelector('.hero .hero-text .typed-text')?.textContent;
    if (typed_strings) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        new Typed('.hero .hero-text h2', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }
}


// Skills
const progressBars = document.querySelectorAll('.progress .progress-bar');
const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target as HTMLElement;
            const valueNow = progressBar.getAttribute('aria-valuenow');
            if (valueNow) {
                progressBar.style.width = valueNow + '%';
            }
            skillsObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.8 });

progressBars.forEach(bar => {
    skillsObserver.observe(bar);
});


// Portfolio filter
// Initialize Isotope AFTER rendering items
const portfolioContainer = document.querySelector('.portfolio-container');
let portfolioIsotope: any;

if (portfolioContainer) {
    portfolioIsotope = new Isotope(portfolioContainer as HTMLElement, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    const filterItems = document.querySelectorAll('#portfolio-filter li');
    filterItems.forEach(item => {
        item.addEventListener('click', () => {
            filterItems.forEach(i => i.classList.remove('filter-active'));
            item.classList.add('filter-active');
            const filterValue = item.getAttribute('data-filter');
            portfolioIsotope.arrange({ filter: filterValue });
        });

        item.addEventListener('keydown', (e: any) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                (item as HTMLElement).click();
            }
        });
    });
}


// Fix: Trigger layout again after images are loaded to prevent overlap
// Fix: Trigger layout again after images are loaded to prevent overlap
// Fix: Trigger layout after images are loaded to prevent overlap
if (portfolioContainer && portfolioIsotope) {
    imagesLoaded(portfolioContainer).on('progress', () => {
        portfolioIsotope.layout();
    });
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbw3FUQQD1o_bpIL8ckGBY6Y6EDFvSQWPNhDxjUZP2N7xk32oL2_Htt_kMgZXgH5pQ5e/exec';
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const form = document.forms.namedItem('google-sheet') as HTMLFormElement | null;

if (form) {
    form.addEventListener('submit', (e: Event) => {
        e.preventDefault();
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(() => notify())
            .catch(error => console.error('Error!', error.message));
    });
}

function notify() {
    const element = document.getElementById("alertnotify");
    if (!element) return;

    element.classList.add("show");
    element.classList.remove("hide");
    element.classList.add("showAlert");
    setTimeout(function () {
        element.classList.add("hide");
        element.classList.remove("show");
    }, 5000);
}

const closeAlert = document.getElementById("closealert");
if (closeAlert) {
    closeAlert.addEventListener("click", function () {
        const element = document.getElementById("alertnotify");
        if (element) {
            element.classList.add("hide");
            element.classList.remove("show");
        }
    });
}
