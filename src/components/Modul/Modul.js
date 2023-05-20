import "./Modul.css";
import { ROOT_MODUL } from "../../constants/constants";

class Modul {
  render() {
    let htmlModul = `
         <form class="modul-forma">
            <button class="modul-forma__btn-close">&times</button>
            <h2 class="modul-forma__heading">Оформить заказ</h2>

            <div class="modul-forma__input-number-com">
               <input type="number" class="modul-forma__input-number">
            </div>

            <div class="modul-forma__radio-conteiner">
               <div class="modul-forma__radio">
                  <input id="radio-1" type="radio" name="radio" value="Красный">
                  <label for="radio-1">Красный</label>
               </div>

               <div class="modul-forma__radio">
                  <input id="radio-2" type="radio" name="radio" value="Синий">
                  <label for="radio-2">Синий</label>
               </div>

               <div class="modul-forma__radio">
                  <input id="radio-3" type="radio" name="radio" value="Желтый">
                  <label for="radio-3">Желтый</label>
               </div>
            </div>
            
            <div class="modul-forma__input-com-con">
               <input type="text" maxlength="1000" class="modul-forma__input-com">
            </div>

            <button class="modul-forma__btn-shop">Купить</button>
         </form>
      `;

    ROOT_MODUL.innerHTML = htmlModul;
  }
}

export default new Modul();



