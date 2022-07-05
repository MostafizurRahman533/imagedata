var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
var swiper = new Swiper(".clientSwiper", {
slidesPerView: 1,
spaceBetween: 10,
navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints: {
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
},
});
var swiper = new Swiper(".testimonialSwiper", {
slidesPerView: 1,
spaceBetween: 10,
pagination: {
  el: ".swiper-pagination",
  clickable: true,
},
breakpoints: {
  640: {
    slidesPerView: 1,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 2,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 50,
  },
},
});