import { seriesCalc } from "./seriesCalc.js";
import { seriesInfo } from "./seriesInfo.js";
import { fillPositionSeries } from "./fillPositionSeries.js";

function seriesController(max, series, seriesBet) {
    // вызов функции подсчета серии:
    let objVarSeriesCalc = seriesCalc(max, series, seriesBet);

    // вызов функции заполнения позиции серии:
    fillPositionSeries(series, objVarSeriesCalc.plays);

    // вызов функции вывода информации пользователю:
    seriesInfo(series, seriesBet, objVarSeriesCalc);
    return;
};
export { seriesController };