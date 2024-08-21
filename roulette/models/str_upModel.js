import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { chipCount } from "./functions/strUp/chipCount.js";
import { strUpCalculations } from "./functions/strUp/strUpCalculations.js";
import { strUpInfo } from "./functions/strUp/strUpInfo.js";
import { strUpController } from "./functions/strUp/strUpController.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// переменные:
const positions = document.getElementById('positions');
const bet = document.getElementById('bet');
const color = document.getElementById('color');
const cash = document.getElementById('cash');
const info = document.getElementById('info_3');

let fillArr = [];

// клик по кнопке Ставка ОК (подсчёт кол-ва фишек):
add_bet.onclick = function () {
    fillArr = chipCount(positions, bet); // сохраняем результат в fillArr
    console.log(fillArr);
};

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // Вызываем strUpCalculations и сохраняем результат в infoObj
    let infoObj = strUpCalculations(fillArr);
    console.log(infoObj);

    strUpInfo(infoObj);

    // выполнение вычислений:
    // strUpController();
};