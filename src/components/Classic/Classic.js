import { watchCatalog } from "../../utils/WatchCatalog.JS";
import { URL_CLASSIC_API, ROOT_CLASSIC } from "../../constants/constants";
import { addDateSite } from "../App/App";

import "./Classic.css";

class Classic {
  async render() {
    let htmlContent = "";
    const data = await watchCatalog.getCatalog(URL_CLASSIC_API);

    data.forEach(({ img, addData, label }) => {
      let date = addDateSite(addData);

      htmlContent += `
        <li class="classic__element">
          <h3 class="classic__label">${label}</h3>
          <img src="${img}" class="classic__img" alt="Изображение"><br>
          <p class="classic__date">${date}</p><br>
          <button class="classic__btn">Купить</button>
        </li>
      `;
    });

    let htmlWrapper = `
      <h2 class="classic__title">Наручные классические часы</h2>

      <ul class="classic__content">
        ${htmlContent}
      </ul>
    `;

    ROOT_CLASSIC.innerHTML = htmlWrapper;
  }
}

export default new Classic();
