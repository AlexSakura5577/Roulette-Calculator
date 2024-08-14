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
                console.log(`максимум на tier: ${maxTier}`);
                return { plays, change, breakingStep, maxSeries };
            } else if (bet < maxTier) {
                // рассчёты beforeBreakingStep:
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
                console.log(`максимум на orphelins: ${maxOrphelins}`);
                return { plays, change, breakingStep, maxSeries };
            } else if (bet >= breakingStep) {
                // рассчёты afterBreakingStep:
                bet = bet - breakingStep;
                let diff_1 = bet / 4;
                let diff_2 = bet / 4 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 4;
                let diff_3 = bet - cleanBet;
                plays = +minMax.maxBet + plays_1;
                change = diff_3 + residue;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet < maxOrphelins) {
                // рассчёты beforeBreakingStep:
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
                console.log(`максимум на voisins: ${maxVoisins}`);
                return { plays, change, breakingStep, maxSeries };
            } else if (bet >= breakingStep) {
                // рассчёты afterBreakingStep:
                bet = bet - breakingStep;
                let diff_1 = bet / 7;
                let diff_2 = bet / 7 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 7;
                let diff_3 = bet - cleanBet;
                plays = (minMax.maxBet * 1.5) + plays_1;
                change = diff_3 + residue;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet < maxVoisins) {
                // рассчёты beforeBreakingStep:
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
                console.log(`максимум на spiel: ${maxSpiel}`);
                return { plays, change, breakingStep, maxSeries };
            } else if (bet >= breakingStep) {
                // рассчёты afterBreakingStep:
                bet = bet - breakingStep;
                let diff_1 = bet / 3;
                let diff_2 = bet / 3 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 3;
                let diff_3 = bet - cleanBet;
                plays = +minMax.maxBet + plays_1;
                change = diff_3 + residue;
                return { plays, change, breakingStep, maxSeries };
            } else if (bet < maxSpiel) {
                // рассчёты beforeBreakingStep:
                seriesResult = beforeBreakingStep(series, bet, residue);
            };
            break;
        default:
            console.log("выберите серию");
            return { plays: 0, change: bet }; // если не выбрана серия возвращаем ставку как сдачу
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