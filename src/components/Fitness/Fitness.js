import { watchCatalog } from "../../utils/WatchCatalog.JS";
import { URL_FITNESS_API } from "../../constants/constants";
import { addDateSite } from "../App/App";
import { ROOT_FITNESS } from "../../constants/constants";
import './Fitness.css'

class Fitness {
  async render() {
    let htmlContent = '';
    const data = await watchCatalog.getCatalog(URL_FITNESS_API);
    
    data.forEach(({ img, addData, label }) => {
      let date = addDateSite(addData);

      htmlContent += `
        <li class="fitness__element">
          <h3 class="fitness__label">${label}</h3>
          <img src="${img}" class="fitness__img" alt="изображение"><br>
          <p class="fitness__date">${date}</p><br>
          <button class="fitness__btn">Купить</button>
        </li>
      `;
    });

    let htmlWrapper = `
      <h2 class="fitness__title">Наручные спортивные часы</h2>

      <ul class="fitness__content">
        ${htmlContent}
      </ul>
    `;

    ROOT_FITNESS.innerHTML = htmlWrapper
  }
}

export default new Fitness()