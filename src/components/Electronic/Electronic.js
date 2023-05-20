import { watchCatalog } from "../../utils/WatchCatalog.JS";
import { URL_ELECTRONIC_API } from "../../constants/constants";
import { ROOT_ELECTRONIC } from "../../constants/constants";
import { addDateSite } from "../App/App";

import "./Electronic.css"

class Electronic {
  async render() {
    let htmlContent = '';
    const data = await watchCatalog.getCatalog(URL_ELECTRONIC_API);
    
    data.forEach(({ img, addData, label }) => {
      let date = addDateSite(addData);

      htmlContent += `
        <li class="electronic__element">
          <h3 class="electronic__label">${label}</h3>
          <img src="${img}" class="electronic__img" alt="Изображение"><br>
          <p class="electronic__date">${date}</p><br>
          <button class="electronic__btn">Купить</button>
        </li>
      `;
    });

    let htmlWrapper = `
      <h2 class="electronic__title">Наручные электронные часы</h2>

      <ul class="electronic__content">
        ${htmlContent}
      </ul>
    `;

    ROOT_ELECTRONIC.innerHTML = htmlWrapper
  }
}

export default new Electronic()