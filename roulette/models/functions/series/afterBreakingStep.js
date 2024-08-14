import { rouletteSeries } from "../../consts/rouletteSeries.js";

// рассчёт после ломаного шага:
function afterBreakingStep(minMax, series, breakingStep, bet, residue) {
    console.log("функция afterBreakingStep");
    let coefficient = rouletteSeries[series].coefficient;
    bet = bet - breakingStep;
    let diff_1 = bet / coefficient;
    let diff_2 = bet / coefficient % 5;
    let plays_1 = diff_1 - diff_2;
    let cleanBet = plays_1 * coefficient;
    let diff_3 = bet - cleanBet;
    let plays; // Объявляем переменную plays
    if (series == "voisins") {
        plays = (minMax.maxBet * 1.5) + plays_1;
    } else {
        plays = +minMax.maxBet + plays_1;
    }
    console.log(plays);
    let change = diff_3 + residue;
    return { cleanBet, plays, change };
};
export { afterBreakingStep };