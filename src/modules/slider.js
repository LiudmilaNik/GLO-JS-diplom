" use strict";
const slider = () => {
  const sliderBlock = document.querySelector(".top-slider");
  const slides = document.querySelectorAll(".item");
  const tables = document.querySelectorAll(".table");

  const timeInterval = 3000;
  let currentSlide = 0;
  let interval;
  let dot;

  const addDots = () => {
    let dotBox = document.createElement("ul");
    dotBox.classList.add("slick-dots");
    sliderBlock.append(dotBox);

    for (let i = 0; i < slides.length; i++) {
      dot = document.createElement("li");
      dot.classList.add("dot");
      dotBox.append(dot);
      dot.classList = i === 0 ? "dot slick-active" : "dot";
    }
  };

  addDots();

  const dots = document.querySelectorAll(".dot");

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };

  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "active");
    prevSlide(dots, currentSlide, "slick-active");
    prevSlide(tables, currentSlide, "active");
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    nextSlide(slides, currentSlide, "active");
    nextSlide(dots, currentSlide, "slick-active");
    nextSlide(tables, currentSlide, "active");
  };

  const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer);
  };

  const stopSlide = () => {
    clearInterval(interval);
  };

  sliderBlock.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.matches(".dot")) {
      stopSlide();
    } else startSlide(timeInterval);

    if (!e.target.matches(".dot")) {
      return;
    }

    prevSlide(slides, currentSlide, "active");
    prevSlide(dots, currentSlide, "slick-active");
    prevSlide(tables, currentSlide, "active");

    if (e.target.classList.contains("dot")) {
      dots.forEach((dot, index) => {
        if (e.target === dot) {
          currentSlide = index;
        }
      });
    }

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }

    if (currentSlide < 0) {
      currentSlide = slides.length - 1;
    }

    nextSlide(slides, currentSlide, "active");
    nextSlide(dots, currentSlide, "slick-active");
    nextSlide(tables, currentSlide, "active");
  });

  startSlide(timeInterval);
};

export default slider;
