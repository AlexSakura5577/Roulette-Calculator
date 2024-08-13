import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";
import { rouletteSeries } from "./consts/rouletteSeries.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// переменные:
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
// функция подсчёта серии:
export function seriesCalc(maxBet, series, bet) {
    // maxBet = minMax.maxBet;
    // проверка на кратность:
    let multiplicity = bet % 5 == 0;
    console.log(`ставка кратна пяти: ${multiplicity}`);
    if (multiplicity == false) {
        // сдача 1:
        residue = bet % 5;
        bet = bet - residue;
    } else {
        bet = bet;
    };
    breakingStep = 0;
    // рассчёты:
    switch (series) {
        case "tier":
            //  проверка на максимум:
            let maxTier = minMax.maxBet * rouletteSeries.tier.chips;
            if (bet >= maxTier) {
                change = bet - maxTier;
                plays = minMax.maxBet * payoutRatios.split.position;
                console.log(`максимум на tier: ${maxTier}`);
                return;
            } else if (bet < maxTier) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.tier.position;
                let diff_2 = bet / rouletteSeries.tier.position % 5;
                plays = diff_1 - diff_2;
                let cleanBet = plays * rouletteSeries.tier.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
            };
            break;
        case "orphelins":
            //  проверка на максимум:
            let maxOrphelins = minMax.maxBet * rouletteSeries.orphelins.chips;
            // ломается шаг:
            breakingStep = payoutRatios.numb.position * rouletteSeries.orphelins.position * minMax.maxBet;
            if (bet >= maxOrphelins) {
                change = bet - maxOrphelins;
                plays = minMax.maxBet * payoutRatios.split.position;
                console.log(`максимум на orphelins: ${maxOrphelins}`);
                return;
            } else if (bet >= breakingStep) {
                // рассчёты:
                bet = bet - breakingStep;
                let diff_1 = bet / 4;
                let diff_2 = bet / 4 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 4;
                let diff_3 = bet - cleanBet;
                plays = +minMax.maxBet + plays_1; //+minMax.maxBet;
                change = diff_3 + residue;
            } else if (bet < maxOrphelins) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.orphelins.position;
                let diff_2 = bet / rouletteSeries.orphelins.position % 5;
                plays = diff_1 - diff_2; //number
                let cleanBet = plays * rouletteSeries.orphelins.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
            };
            break;
        case "voisins":
            //  проверка на максимум:
            let maxVoisins = minMax.maxBet * rouletteSeries.voisins.sumStrUps;
            // ломается шаг:
            breakingStep = 1.5 * rouletteSeries.voisins.position * minMax.maxBet;
            if (bet >= maxVoisins) {
                change = bet - maxVoisins;
                plays = minMax.maxBet * payoutRatios.split.position; //number
                console.log(`максимум на voisins: ${maxVoisins}`);
                return;
            } else if (bet >= breakingStep) {
                // рассчёты:
                bet = bet - breakingStep;
                let diff_1 = bet / 7;
                let diff_2 = bet / 7 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 7;
                let diff_3 = bet - cleanBet;
                plays = (minMax.maxBet * 1.5) + plays_1; //number
                change = diff_3 + residue;
            } else if (bet < maxVoisins) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.voisins.position;
                let diff_2 = bet / rouletteSeries.voisins.position % 5;
                plays = diff_1 - diff_2; //number
                let cleanBet = plays * rouletteSeries.voisins.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
            };
            break;
        case "spiel":
            //  проверка на максимум:
            let maxSpiel = minMax.maxBet * rouletteSeries.spiel.sumStrUps;
            // ломается шаг:
            breakingStep = payoutRatios.numb.position * rouletteSeries.spiel.position * minMax.maxBet;
            if (bet >= maxSpiel) {
                change = bet - maxSpiel;
                plays = minMax.maxBet * payoutRatios.split.position; //number
                console.log(`максимум на spiel: ${maxSpiel}`);
                return;
            } else if (bet >= breakingStep) {
                // рассчёты:
                bet = bet - breakingStep;
                let diff_1 = bet / 3;
                let diff_2 = bet / 3 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 3;
                let diff_3 = bet - cleanBet;
                plays = +minMax.maxBet + plays_1; //+minMax.maxBet
                change = diff_3 + residue;
            } else if (bet < maxSpiel) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.spiel.position;
                let diff_2 = bet / rouletteSeries.spiel.position % 5;
                plays = diff_1 - diff_2; //number
                let cleanBet = plays * rouletteSeries.spiel.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
            };
            break;
        default:
            console.log("выберите серию");
    };
    return;
};
// функция "Рассчитать":
const calculateBTN = function calculateBTN() {

    // выбор серии:
    let series = document.getElementById('series').value;
    // сумма ставки на серию:
    let bet = +document.getElementById('bet').value;

    // вычисления:
    seriesCalc(minMax.maxBet, series, bet);

    if (series == "tier") {
        betWithoutChange = bet - change;
        breakingStep = "в tier не ломается";
        document.getElementById('info_2').innerHTML =
            `шаг: ${breakingStep}<br\/> чистая ставка: ${betWithoutChange}<br\/> играет по:  ${plays}<br\/> сдача: ${change}<br\/>`;
    } else if (series != "tier") {
        betWithoutChange = bet - change;
        document.getElementById('info_2').innerHTML =
            `шаг ломается от: ${breakingStep}<br\/> чистая ставка: ${betWithoutChange}<br\/> играет по:  ${plays}<br\/> сдача: ${change}<br\/>`;
    };

    // консоль-логи переменных для трека:
    console.log(`серия: ${series}`);
    console.log(`ставка: ${bet}`);
    console.log(`шаг ломается от: ${breakingStep}`);
    console.log(`чистая ставка: ${betWithoutChange}`);
    console.log(`играет по:  ${plays}`);
    console.log(`сдача: ${change}`);

    return;
};
// клик по кнопке Рассчитать:
calculate.onclick = function () {
    calculateBTN();
    return;
};
