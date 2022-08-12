" use strict";
const servises = () => {
  const swiper = new Swiper(".services-elements", {
    slidesPerView: 3,
    loop: true,

    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
  });
};

export default servises;
