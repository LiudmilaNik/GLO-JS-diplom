" use strict";
const servises = () => {
  const swiper = new Swiper(".services-elements", {
    slidesPerView: 3,
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 3,
        spaceBetween: 5,
      },
    },
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
  });
};

export default servises;
