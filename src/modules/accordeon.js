" use strict";
const accordeon = () => {
  // const accordeon = document.querySelector(".accordeon");
  // const elements = accordeon.querySelectorAll(".element");
  // const answer = document.querySelectorAll(".element-content");

  // accordeon.addEventListener("click", (e) => {
  //   const target = e.target.closest(".element");
  //   if (target) {
  //     elements.forEach((item, i) => {
  //       if (item === target) {
  //         elements[i].classList.add("active");
  //         answer[i].classList.add("accordeon-active");
  //       } else {
  //         elements[i].classList.remove("active");
  //         answer[i].classList.remove("accordeon-active");
  //       }
  //     });
  //   }
  // });
  const accordeon = document.querySelector(".accordeon");
  const contents = accordeon.querySelectorAll(".element");

  contents.forEach((elem) => {
    const question = elem.querySelector(".title");

    question.addEventListener("click", () => {
      contents.forEach((elems) => {
        const answer = elems.querySelector(".element-content");

        if (elem == elems) {
          answer.classList.toggle("accordeon-active");
          elems.classList.toggle("active");
        } else {
          answer.classList.remove("accordeon-active");
          elems.classList.remove("active");
        }
      });
    });
  });
};

export default accordeon;
