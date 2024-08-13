import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";
import { rouletteSeries } from './consts/rouletteSeries.js';
// import { oddDozColum } from "./consts/oddDozColum.js";
// import { rouletteNumber } from "./consts/rouletteNumber.js";
// import { fullBets } from "./functions/fullBets.js";
// import { rltPos } from "./consts/rltPos.js";

// выбор минимума максимума рулетки:
minmax.onclick = function () {
    // выбираем элемент select minmax
    let minmaxValue = document.getElementById('minmax').value;
    updateMinMax(minmaxValue, minMax);
};

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// пересекается ли трек с полем:
export const trackOverField = true;

// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
// Для каждого элемента добавляем обработчик события "click"
nodeList.forEach(element => {
    element.addEventListener('click', () => {
        let text = element.textContent;
        // Выводим текст элемента в консоль и всплывашку:
        console.log(text);
        // alert(text);
    });
});
























