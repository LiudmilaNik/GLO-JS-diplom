" use strict";
const sendForm = (someElem = []) => {
  const form = document.getElementById("form");
  const statusBlock = document.createElement("div");
  const loadText = "Идет отправка...";
  const successText = "Отправлено";
  const errorText = "Ошибка...";
  const emptyText = "Заполните пустые поля!";

  // const telSelector = form.querySelector('input[type="tel"]');
  // const inputMask = new Inputmask("+7 (999) 999-99-99");
  // inputMask.mask(telSelector);

  // const validation = new JustValidate("form");

  // validation
  //   .addField("#name", [
  //     {
  //       rule: "minLength",
  //       value: 2,
  //       errorMessage: "Количество символов меньше 2!",
  //     },
  //     {
  //       rule: "maxLength",
  //       value: 30,
  //       errorMessage: "Количество символов больше 30!",
  //     },
  //     {
  //       rule: "required",
  //       value: true,
  //       errorMessage: "Введите имя!",
  //     },
  //   ])
  //   .addField("#telephone", [
  //     {
  //       rule: "required",
  //       value: true,
  //       errorMessage: "Введите номер телефона!",
  //     },
  //     {
  //       rule: "function",
  //       validator: function () {
  //         const phone = telSelector.inputmask.unmaskedvalue();
  //         return phone.length === 10;
  //       },
  //       errorMessage: "Введите корректный номер телефона!",
  //     },
  //   ]);

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

  form.addEventListener("click", (e) => {
    e.preventDefault();

    if (e.target.matches(".button")) {
      submitForm();
    }
  });
};

export default sendForm;
