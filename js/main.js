(()=>{"use strict";(()=>{const e=document.querySelectorAll(".callback-btn"),t=document.querySelector(".services-elements"),c=document.querySelector(".button-services"),l=document.querySelector(".modal-callback"),o=document.querySelector(".modal-overlay"),n=e=>{e.preventDefault(),l.style.display="block",o.style.display="block",document.body.style.overflow="hidden"};e.forEach((e=>{e.addEventListener("click",(e=>n(e)))})),t.addEventListener("click",(e=>{e.target.closest(".absolute")&&n(e)})),c.addEventListener("click",(e=>n(e))),o.addEventListener("click",(e=>{e.preventDefault(),!e.target.closest(".modal-close")&&e.target.closest(".modal-callback ")||(o.style.display="none",document.body.style.overflow="")}))})(),(()=>{const e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),c=document.querySelectorAll(".element-content");e.addEventListener("click",(e=>{const l=e.target.closest(".element");l&&t.forEach(((e,o)=>{e===l?(t[o].classList.add("active"),c[o].classList.add("accordeon-active")):(t[o].classList.remove("active"),c[o].classList.remove("accordeon-active"))}))}))})(),(()=>{const e=document.querySelector(".up");let t,c;window.onscroll=function(){document.body.scrollTop>30||document.documentElement.scrollTop>30?e.style.display="block":e.style.display="none"},e.addEventListener("click",(()=>{t=window.pageYOffset;const e=()=>{t>0?(window.scrollTo(0,t),t-=300,c=setTimeout(e,100)):(clearTimeout(c),window.scrollTo(0,0))};e()}))})(),((e=[])=>{const t=document.getElementById("form"),c=document.createElement("div"),l=document.getElementById("telephone");new Inputmask("+7 (999) 999-99-99").mask(l);const o=()=>c.textContent="";t.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".button")&&(()=>{const e=t.querySelectorAll("input"),l=new FormData(t),n={};var a;c.textContent="Идет отправка...",c.classList.add("titleBlock"),t.append(c),l.forEach(((e,t)=>{n[t]=e})),(e=>{let t=!0;return e.forEach((e=>{""==e.value&&(t=!1)})),t})(e)?(a=n,fetch("https://jsonplaceholder.typicode.com/posts",{method:"POST",body:JSON.stringify(a),headers:{"Content-Type":"application/json"}}).then((e=>e.json()))).then((l=>{c.textContent="Отправлено",e.forEach((e=>{document.querySelectorAll(".form-control").value=""})),t.querySelectorAll('input[type="text"]').forEach((e=>{e.value=""})),setTimeout(o,2e3)})).catch((e=>{c.textContent="Ошибка..."})):c.textContent="Заполните пустые поля!"})()}))})(),new Swiper(".services-elements",{slidesPerView:3,loop:!0,navigation:{nextEl:".arrow-right",prevEl:".arrow-left"}}),(()=>{const e=document.querySelector(".top-slider"),t=document.querySelectorAll(".item"),c=document.querySelectorAll(".table");let l,o,n=0;(()=>{let c=document.createElement("ul");c.classList.add("slick-dots"),e.append(c);for(let e=0;e<t.length;e++)o=document.createElement("li"),o.classList.add("dot"),c.append(o),o.classList=0===e?"dot slick-active":"dot"})();const a=document.querySelectorAll(".dot"),r=(e,t,c)=>{e[t].classList.remove(c)},s=(e,t,c)=>{e[t].classList.add(c)},d=()=>{r(t,n,"active"),r(a,n,"slick-active"),r(c,n,"active"),n++,n>=t.length&&(n=0),s(t,n,"active"),s(a,n,"slick-active"),s(c,n,"active")},i=(e=1500)=>{l=setInterval(d,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot")?clearInterval(l):i(3e3),e.target.matches(".dot")&&(r(t,n,"active"),r(a,n,"slick-active"),r(c,n,"active"),e.target.classList.contains("dot")&&a.forEach(((t,c)=>{e.target===t&&(n=c)})),n>=t.length&&(n=0),n<0&&(n=t.length-1),s(t,n,"active"),s(a,n,"slick-active"),s(c,n,"active"))})),i(3e3)})(),(()=>{const e=document.querySelector('[placeholder="Ваше имя"]'),t=document.querySelector('[placeholder="Телефон*"]');e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\s]/gi,"")})),t.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^+\d\-]/gi,"")}))})(),(()=>{const e=document.querySelectorAll('a[href*="#"]');for(let t of e)t.addEventListener("click",(function(e){e.preventDefault();const c=t.getAttribute("href").substr(1);document.getElementById(c).scrollIntoView({behavior:"smooth",block:"start"})}))})()})();