import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { seriesCalc } from "./functions/series/seriesCalc.js";
import { seriesInfo } from "./functions/series/seriesInfo.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // выбор минимума максимума рулетки:
    let max = minMax.maxBet;
    // выбор серии:
    let series = document.getElementById('series').value;
    // выбор суммы ставки:
    let bet = +document.getElementById('bet').value;
    // выполнение вычислений:

    // вывод информации пользователю:
    seriesInfo(max, series, bet);
};