import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
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

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // Выбор серии и суммы ставки:
    let series = document.getElementById('series').value;
    let bet = +document.getElementById('bet').value;

    // Выполнение вычислений:
    let objVarSeriesCalc = seriesCalc(minMax.maxBet, series, bet);

    // Установка значения betWithoutChange
    objVarSeriesCalc.betWithoutChange = bet - objVarSeriesCalc.change;
    
    // вывод информации пользователю:
    const breakingStepText = series === "tier" ? "шаг в tier не ломается" : `шаг ломается от: ${objVarSeriesCalc.breakingStep}`;

    document.getElementById('info_2').innerHTML = `
        максимум на серию: ${objVarSeriesCalc.maxSeries}<br/>
        ${breakingStepText}<br/>
        чистая ставка: ${objVarSeriesCalc.betWithoutChange}<br/>
        играет по: ${objVarSeriesCalc.plays}<br/>
        сдача: ${objVarSeriesCalc.change}<br/>
    `;

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