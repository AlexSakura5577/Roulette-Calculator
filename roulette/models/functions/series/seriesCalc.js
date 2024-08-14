import { minMax } from "../../../controllers/localStorageRead.js";
import { payoutRatios } from "../../consts/payoutRatios.js";
import { rouletteSeries } from "../../consts/rouletteSeries.js";
import { beforeBreakingStep } from "./beforeBreakingStep.js";
import { afterBreakingStep } from "./afterBreakingStep.js";

// функция подсчёта серии:
function seriesCalc(maxBet, series, bet) {
    // ломается шаг:
    let breakingStep = 0;
    // ставка без сдачи:
    let betWithoutChange = 0;
    // по чём играет:
    let plays = 0;
    // остаток от деления (кратность):
    let residue = 0;
    // сдача:
    let change = 0;
    // максимум на серию:
    let maxSeries = 0;
    // объект результата:
    let seriesResult = {};

    // проверка на кратность:
    let multiplicity = bet % 5 === 0;
    if (!multiplicity) {
        residue = bet % 5;
        bet -= residue;
    };
    // breakingStep = 0; // вроде не нужно
    // выбор серии:
    switch (series) {

        case "tier":
            //  проверка на максимум:
            let maxTier = minMax.maxBet * rouletteSeries.tier.step;
            maxSeries = maxTier;
            // превышение максимума:
            if (bet >= maxTier) {
                change = bet - maxTier + residue;
                plays = minMax.maxBet * payoutRatios.split.position;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet < maxTier) {
                seriesResult = beforeBreakingStep(series, bet, residue);
            };
            break;

        case "orphelins":
            //  проверка на максимум:
            let maxOrphelins = minMax.maxBet * rouletteSeries.orphelins.step;
            maxSeries = maxOrphelins;
            // ломается шаг:
            breakingStep = payoutRatios.numb.position * rouletteSeries.orphelins.position * minMax.maxBet;
            // превышение максимума:
            if (bet >= maxOrphelins) {
                change = bet - maxOrphelins + residue;
                plays = minMax.maxBet * payoutRatios.split.position;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet >= breakingStep) {
                seriesResult = afterBreakingStep(minMax, series, breakingStep, bet, residue);
            } else if (bet < maxOrphelins) {
                seriesResult = beforeBreakingStep(series, bet, residue);
            };
            break;

        case "voisins":
            //  проверка на максимум:
            let maxVoisins = minMax.maxBet * rouletteSeries.voisins.step;
            maxSeries = maxVoisins;
            // ломается шаг:
            breakingStep = 1.5 * rouletteSeries.voisins.position * minMax.maxBet;
            // превышение максимума:
            if (bet >= maxVoisins) {
                change = bet - maxVoisins + residue;
                plays = minMax.maxBet * payoutRatios.split.position;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet >= breakingStep) {
                seriesResult = afterBreakingStep(minMax, series, breakingStep, bet, residue);
            } else if (bet < maxVoisins) {
                seriesResult = beforeBreakingStep(series, bet, residue);
            };
            break;

        case "spiel":
            //  проверка на максимум:
            let maxSpiel = minMax.maxBet * rouletteSeries.spiel.step;
            maxSeries = maxSpiel;
            // ломается шаг:
            breakingStep = payoutRatios.numb.position * rouletteSeries.spiel.position * minMax.maxBet;
            // превышение максимума:
            if (bet >= maxSpiel) {
                change = bet - maxSpiel + residue;
                plays = minMax.maxBet * payoutRatios.split.position;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet >= breakingStep) {
                seriesResult = afterBreakingStep(minMax, series, breakingStep, bet, residue);
            } else if (bet < maxSpiel) {
                seriesResult = beforeBreakingStep(series, bet, residue);
            };
            break;
            
        default:
            console.log("выберите серию"); // если не выбрана серия
            return { plays: 0, change: bet }; // то возвращаем ставку как сдачу
    };
    return {
        breakingStep: breakingStep,
        betWithoutChange: betWithoutChange,
        cleanBet: seriesResult.cleanBet,
        plays: seriesResult.plays,
        change: seriesResult.change,
        residue: residue,
        series: series,
        bet: bet,
        maxSeries: maxSeries
    };
};
export { seriesCalc };