import { seriesCalc } from "./seriesCalc.js";
import { seriesInfo } from "./seriesInfo.js";

function seriesController(max, series, seriesBet) {
    // вызов функции подсчета серии:
    let objVarSeriesCalc = seriesCalc(max, series, seriesBet);
    // вызов функции вывода информации пользователю:
    seriesInfo(series, seriesBet, objVarSeriesCalc);
    return objVarSeriesCalc.plays;
};
export { seriesController };