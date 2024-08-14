import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { chipCount } from "./functions/strUp/chipCount.js";
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

// переменные:
const positions = document.getElementById('positions');
const bet = document.getElementById('bet');
const color = document.getElementById('color');
const cash = document.getElementById('cash');

// массив значений:
let fillArr = [];

// клик по кнопке Ставка ОК (подсчёт кол-ва фишек):
add_bet.onclick = function () {
    fillArr = chipCount(); // Вызываем chipCount и сохраняем результат в fillArr
};

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    let infoObj = strUpCalculations(fillArr); // Вызываем strUpCalculations и сохраняем результат в infoObj
    console.log(infoObj);

    // вывод информации пользователю:
    document.getElementById('info_3').innerHTML = ` Выплата<br\/> сумма фишек: ${infoObj.pay}<br\/> сумма выплаты: ${infoObj.summPay}<br\/> выплата цветом: ${infoObj.payChips}<br\/> через: ${infoObj.summCash}<br\/>`;
};