import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
// import { payoutRatios } from "./consts/payoutRatios.js";
// import { rouletteSeries } from "./consts/rouletteSeries.js";
import { seriesCalc } from "./functions/series/seriesCalc.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// функция подсчёта серии:
// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // выбор серии:
    let series = document.getElementById('series').value;
    // сумма ставки на серию:
    let bet = +document.getElementById('bet').value;

    // вычисления:
    // seriesCalc(minMax.maxBet, series, bet);
    let objVarSeriesCalc = seriesCalc(minMax.maxBet, series, bet);

    if (series == "tier") {
        objVarSeriesCalc.betWithoutChange = bet - objVarSeriesCalc.change;
        objVarSeriesCalc.breakingStep = "в tier не ломается";
        document.getElementById('info_2').innerHTML =
            `шаг: ${objVarSeriesCalc.breakingStep}<br\/> чистая ставка: ${objVarSeriesCalc.betWithoutChange}<br\/> играет по:  ${objVarSeriesCalc.plays}<br\/> сдача: ${objVarSeriesCalc.change}<br\/>`;
    } else if (series != "tier") {
        objVarSeriesCalc.betWithoutChange = bet - objVarSeriesCalc.change;
        document.getElementById('info_2').innerHTML =
            `шаг ломается от: ${objVarSeriesCalc.breakingStep}<br\/> чистая ставка: ${objVarSeriesCalc.betWithoutChange}<br\/> играет по:  ${objVarSeriesCalc.plays}<br\/> сдача: ${objVarSeriesCalc.change}<br\/>`;
    };

    // значения переменных для справки в консоли:
    console.log(objVarSeriesCalc);
    console.log(`серия: ${series}`);
    console.log(`ставка: ${bet}`);
    console.log(`шаг ломается от: ${objVarSeriesCalc.breakingStep}`);
    console.log(`чистая ставка: ${objVarSeriesCalc.betWithoutChange}`);
    console.log(`играет по:  ${objVarSeriesCalc.plays}`);
    console.log(`сдача: ${objVarSeriesCalc.change}`);

    return;
};