// import { minMax } from "../../../controllers/localStorageRead.js";
import { seriesCalc } from "./seriesCalc.js";

// вывод информации пользователю:
function seriesInfo(max, series, bet) {
    // вызов функции подсчета серии:
    let objVarSeriesCalc = seriesCalc(max, series, bet);

    // Установка значения betWithoutChange
    objVarSeriesCalc.betWithoutChange = bet - objVarSeriesCalc.change;

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
};
export { seriesInfo };