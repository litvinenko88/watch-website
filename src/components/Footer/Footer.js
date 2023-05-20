import { ROOT_FOOTER } from "../../constants/constants";
import "./Footer.css";

class Footer {
  async render() {
    let htmlContent = `
    <li class="footer__li"><a class="footer__a" href="#classic">Классические часы</a></li>
    <li class="footer__li"><a class="footer__a" href="#electronic">Электронные часы</a></li>
    <li class="footer__li"><a class="footer__a" href="#fitness">Фитнес часы</a></li>
    <div class="go-top">▲</div>
      `;

    let htmlFooter = `
      <ul class="footer__container">
         ${htmlContent}
      </ul>
   `;

    ROOT_FOOTER.innerHTML = htmlFooter;
  }
}

export default new Footer();

document.addEventListener("DOMContentLoaded", function () {
  const goTopBtn = document.querySelector(".go-top");

  window.addEventListener("scroll", trackScroll);
  goTopBtn.addEventListener("click", goTop);

  function trackScroll() {
    const scrolled = window.pageYOffset;
    const coords = 150;

    if (scrolled > coords) {
      goTopBtn.classList.add("go-top--show");
    } else {
      goTopBtn.classList.remove("go-top--show");
    }
  }

  function goTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -75);
      setTimeout(goTop, 0);
    }
  }
});
