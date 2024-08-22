import { minMax } from "../../../controllers/localStorageRead.js";
import { payoutRatios } from "../../consts/payoutRatios.js";
import { rouletteSeries } from "../../consts/rouletteSeries.js";
import { beforeBreakingStep } from "./beforeBreakingStep.js";
import { afterBreakingStep } from "./afterBreakingStep.js";

// функция подсчёта серии:
function seriesCalc(maxBet, series, seriesBet) {
    let residue = seriesBet % 5;
    if (residue) seriesBet -= residue; // Корректируем ставку на кратность 5
    const getMaxSeries = (step) => minMax.maxBet * step;
    const getBreakingStep = (series, position) => {
        if (series === "voisins") {
            return 1.5 * position * minMax.maxBet;
        }
        return payoutRatios.numb.position * position * minMax.maxBet;
    };
    let maxSeries = 0;
    let breakingStep = 0;
    let betWithoutChange = seriesBet + residue; // Учтём остаток от первоначальной ставки
    let seriesResult = { cleanBet: 0, plays: 0, change: 0 };
    // Общая логика для обработки серий
    const calculateSeries = (step, position) => {
        maxSeries = getMaxSeries(step);
        breakingStep = getBreakingStep(series, position);
        if (seriesBet >= maxSeries) {
            const change = seriesBet - maxSeries + residue;
            const plays = minMax.maxBet * payoutRatios.split.position;
            return { plays, change, breakingStep };
        }
        if (seriesBet >= breakingStep) {
            return afterBreakingStep(minMax, series, breakingStep, seriesBet, residue);
        }
        return beforeBreakingStep(series, seriesBet, residue);
    };

    switch (series) {
        case "tier":
            seriesResult = calculateSeries(rouletteSeries.tier.step, rouletteSeries.tier.position);
            break;
        case "orphelins":
            seriesResult = calculateSeries(rouletteSeries.orphelins.step, rouletteSeries.orphelins.position);
            break;
        case "voisins":
            seriesResult = calculateSeries(rouletteSeries.voisins.step, rouletteSeries.voisins.position);
            break;
        case "spiel":
            seriesResult = calculateSeries(rouletteSeries.spiel.step, rouletteSeries.spiel.position);
            break;
        default:
            console.log("выберите серию"); // Если не выбрана серия
            return { plays: 0, change: seriesBet }; // Возвращаем ставку как сдачу
    };

    betWithoutChange = seriesBet - seriesResult.change + residue; // чистая ставка

    return {
        breakingStep,
        betWithoutChange,
        cleanBet: seriesResult.cleanBet,
        plays: seriesResult.plays,
        change: seriesResult.change,
        residue,
        series,
        seriesBet,
        maxSeries
    };
};
export { seriesCalc };