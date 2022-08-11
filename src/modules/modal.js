" use strict";

const modal = () => {
  const callbackBtn = document.querySelectorAll(".callback-btn");
  const servicesElements = document.querySelector(".services-elements");
  const buttonServises = document.querySelector(".button-services");
  const modal = document.querySelector(".modal-callback");
  const modalOverlay = document.querySelector(".modal-overlay");

  const openModal = (e) => {
    e.preventDefault();
    modal.style.display = "block";
    modalOverlay.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  callbackBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => openModal(e));
  });

  servicesElements.addEventListener("click", (e) => {
    if (e.target.closest(".absolute")) {
      openModal(e);
    }
  });

  buttonServises.addEventListener("click", (e) => openModal(e));

  modalOverlay.addEventListener("click", (e) => {
    e.preventDefault();

    if (
      e.target.closest(".modal-close") ||
      !e.target.closest(".modal-callback ")
    ) {
      modalOverlay.style.display = "none";
      document.body.style.overflow = "";
    }
  });
};

export default modal;
