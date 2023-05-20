import { ROOT_HEAD } from "../../constants/constants";

import "./Head.css";

class Head {
  async render() {
    let htmlContent = `
    <div class="head__element">
    <li class="head__li"><a class="head__a" href="#classic">Классические часы</a></li>
    <li class="head__li"><a class="head__a" href="#electronic">Электронные часы</a></li>
    <li class="head__li"><a class="head__a" href="#fitness">Фитнес часы</a></li>
    <button id="topic">Смена темы</button>
    </div>
      `;

    let htmlHead = `
      <ul class="head__container">
         ${htmlContent}
      </ul>
   `;

    ROOT_HEAD.innerHTML = htmlHead;
  }
}

export default new Head();

document.addEventListener("DOMContentLoaded", function () {
  let topic = true;

  document.getElementById("topic").addEventListener("click", function () {
    document.querySelector("body").classList.toggle("topic1-fon");
    document.querySelector(".head__container").classList.toggle("topic2-fon");
    document
      .querySelectorAll(".head__a")
      .forEach((el) => el.classList.toggle("topic-text-1"));

    document
      .querySelectorAll("h2")
      .forEach((el) => el.classList.toggle("topic-text-2"));

    document
      .querySelectorAll(".classic__element")
      .forEach((el) => (el.style.background = "#fff"));

    document
      .querySelectorAll(".electronic__element")
      .forEach((el) => (el.style.background = "#fff"));

    document
      .querySelectorAll(".fitness__element")
      .forEach((el) => (el.style.background = "#fff"));

    document
      .querySelectorAll(".footer__a")
      .forEach((el) => el.classList.toggle("topic-text-2"));
  });
});
