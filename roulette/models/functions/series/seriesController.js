import { seriesCalc } from "./seriesCalc.js";
import { seriesInfo } from "./seriesInfo.js";

function seriesController(max, series, bet) {
    // вызов функции подсчета серии:
    let objVarSeriesCalc = seriesCalc(max, series, bet);

    // вызов функции вывода информации пользователю:
    seriesInfo(series, bet, objVarSeriesCalc);
};
export { seriesController };