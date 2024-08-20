// import { minMax } from "../../../controllers/localStorageRead.js";
import { seriesCalc } from "./seriesCalc.js";
import { seriesInfo } from "./seriesInfo.js";

function seriesController(max, series, bet) {
    // let max = minMax.maxBet;

    // вызов функции подсчета серии:
    let objVarSeriesCalc = seriesCalc(max, series, bet);

    // Установка значения betWithoutChange
    objVarSeriesCalc.betWithoutChange = bet - objVarSeriesCalc.change;

    // вызов функции вывода информации пользователю:
    seriesInfo(series, bet, objVarSeriesCalc);
};
export { seriesController };