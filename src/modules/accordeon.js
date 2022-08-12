" use strict";
const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const elements = accordeon.querySelectorAll(".element");
  const answer = document.querySelectorAll(".element-content");

  accordeon.addEventListener("click", (e) => {
    const target = e.target.closest(".element");
    if (target) {
      elements.forEach((item, i) => {
        if (item === target) {
          elements[i].classList.add("active");
          answer[i].classList.add("accordeon-active");
        } else {
          elements[i].classList.remove("active");
          answer[i].classList.remove("accordeon-active");
        }
      });
    }
  });
};

export default accordeon;
