const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu
    document.body.classList.toggle("show-mobile-menu");
});

// close menu when close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// close menu when nav link is clicked
navLinks.forEach(link => {
    link.addEventListener("click", () => menuOpenButton.click());
});

// ---------------Testimonial Section------------
document.addEventListener("DOMContentLoaded", function () {

    const swiper = new Swiper('.swiper', {
        loop: true,
        grabCursor: true,
        spaceBetween: 25,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            dynamicBullets: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            768: {
                slidesPerView: 2
            },
            1024: {
                slidesPerView: 3
            }
        }
    });
});
