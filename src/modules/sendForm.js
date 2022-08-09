" use strict";
const sendForm = (someElem = []) => {
  const form = document.getElementById("form");
  const statusBlock = document.createElement("div");
  const loadText = "Идет отправка...";
  const successText = "Отправлено";
  const errorText = "Ошибка...";
  const emptyText = "Заполните пустые поля!";
  console.log(form);

  const validate = (list) => {
    let success = true;

    list.forEach((input) => {
      if (input.value == "") {
        success = false;
      }
    });

    return success;
  };

  const sendData = (data) => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const submitForm = () => {
    const formElements = form.querySelectorAll("input");
    const formData = new FormData(form);
    const formBody = {};

    statusBlock.textContent = loadText;
    statusBlock.classList.add("titleBlock");
    form.append(statusBlock);

    formData.forEach((val, key) => {
      formBody[key] = val;
    });

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;

          formElements.forEach((input) => {
            const inputs = document.querySelectorAll(".form-control");
            inputs.value = "";
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
        });
    } else {
      statusBlock.textContent = emptyText;
    }
  };

  form.addEventListener("click", (event) => {
    event.preventDefault();
    if (event.target.matches(".button")) {
      submitForm();
    }
  });

 };

export default sendForm;
