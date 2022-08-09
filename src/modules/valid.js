" use strict";

const valid = () => {
  const yourName = document.querySelector('[placeholder="Ваше имя"]');
  const typeTel = document.querySelector('[placeholder="Телефон*"]');

  yourName.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^а-яА-Я\s]/gi, "");
  });

  typeTel.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^+\d\-]/gi, "");
  });
};

export default valid;
