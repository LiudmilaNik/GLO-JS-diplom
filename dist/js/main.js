(()=>{"use strict";(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".services-elements"),o=document.querySelector(".button-services"),l=document.querySelector(".modal-callback"),c=document.querySelector(".modal-overlay"),n=e=>{e.preventDefault(),l.style.display="block",c.style.display="block"};e.forEach((e=>{e.addEventListener("click",(e=>n(e)))})),t.addEventListener("click",(e=>{e.target.closest(".absolute")&&n(e)})),o.addEventListener("click",(e=>n(e))),c.addEventListener("click",(e=>{e.preventDefault(),!e.target.closest(".modal-close")&&e.target.closest(".modal-callback ")||(c.style.display="none")}))})(),console.log("my accordeon"),console.log("my arrow"),((e=[])=>{const t=document.getElementById("form"),o=document.createElement("div");console.log(t);t.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".button")&&(()=>{const e=t.querySelectorAll("input"),l=new FormData(t),c={};var n;o.textContent="Идет отправка...",o.classList.add("titleBlock"),t.append(o),l.forEach(((e,t)=>{c[t]=e})),(e=>{let t=!0;return e.forEach((e=>{""==e.value&&(t=!1)})),t})(e)?(n=c,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((t=>{o.textContent="Отправлено",e.forEach((e=>{document.querySelectorAll(".form-control").value=""}))})).catch((e=>{o.textContent="Ошибка..."})):o.textContent="Заполните пустые поля!"})()}))})(),console.log("my servises"),console.log("my slider"),(()=>{const e=document.querySelector('[placeholder="Ваше имя"]'),t=document.querySelector('[placeholder="Телефон*"]');console.log(e),console.log(t),e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s]/gi,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+\d\-]/gi,"")}))})()})();