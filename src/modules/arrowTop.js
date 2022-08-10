" use strict";
const arrowTop = () => {
  const btnTop = document.querySelector(".up");
  let scrolled;
  let timer;

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      btnTop.style.display = "block";
    } else {
      btnTop.style.display = "none";
    }
  }

  btnTop.addEventListener("click", () => {
    scrolled = window.pageYOffset;

    const scrollToTop = () => {
      if (scrolled > 0) {
        window.scrollTo(0, scrolled);
        scrolled = scrolled - 300;
        timer = setTimeout(scrollToTop, 100);
      } else {
        clearTimeout(timer);
        window.scrollTo(0, 0);
      }
    };
    scrollToTop();
  });
};

export default arrowTop;
