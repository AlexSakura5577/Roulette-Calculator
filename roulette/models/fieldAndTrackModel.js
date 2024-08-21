import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";
import { rouletteSeries } from './consts/rouletteSeries.js';
// import { oddDozColum } from "./consts/oddDozColum.js";
// import { rouletteNumber } from "./consts/rouletteNumber.js";
// import { fullBets } from "./functions/fullBets.js";
// import { rltPos } from "./consts/rltPos.js";
import { chipCountAll } from "./functions/strUp/chipCountAll.js";
import { strUpCalculations } from "./functions/strUp/strUpCalculations.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// функция подсчета ставок (пример):
let fillArr = [];
fillArr = chipCountAll("numbers", 5);
fillArr = chipCountAll("splits", 5);
fillArr = chipCountAll("streets", 5);
fillArr = chipCountAll("corners", 5);
fillArr = chipCountAll("six_lines", 5);
console.log(fillArr);
const pay = fillArr.reduce((acc, number) => acc + number, 0);
console.log(`выплата: ${pay}`);

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
























