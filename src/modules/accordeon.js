" use strict";
const accordeon = () => {
  const accordeon = document.querySelector(".accordeon");
  const tab = document.querySelectorAll(".element");
  const answer = document.querySelectorAll(".element-content");
  console.log(answer);
  accordeon.addEventListener("click", (e) => {
    const target = e.target.closest(".element");
    if (target) {
      tab.forEach((item, i) => {
        if (item === target) {
          tab[i].classList.add("active");
          // answer[i].classList.add("accordeon-active");
        } else {
          tab[i].classList.remove("active");
          // answer[i].classList.remove("accordeon-active");
        }
      });
    }
  });
};

export default accordeon;
