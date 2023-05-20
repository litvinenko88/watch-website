import Classic from "../Classic";
import Fitness from "../Fitness";
import Electronic from "../Electronic";
import Head from "../Head";
import Footer from "../Footer/Footer";
import Modul from "../Modul";

import "./App.css";
//ТЗ // 1/2/3/4/5/8/9/10/11/
class App {
  async render() {
    Modul.render()
    Head.render();
    Classic.render();
    Electronic.render();
    Fitness.render();
    Footer.render();
  }
}

export default new App();

export const addDateSite = function (date) {
  let newDate = new Date(date);

  let year = newDate.getFullYear();
  let monthString = newDate.toLocaleDateString("ru-RU", { month: "long" });
  let dayString = newDate.toLocaleDateString("ru-RU", { weekday: "long" });
  let dates = newDate.getDate();
  let days = newDate.getDay();
  let weekNumber = Math.ceil((dates - days) / 7) + 1;

  let addDate = `${
    dayString.charAt(0).toUpperCase() + dayString.slice(1)
  }, ${weekNumber} неделя ${
    monthString.charAt(0).toUpperCase() + monthString.slice(1)
  } ${year} года`;

  return addDate;
};
