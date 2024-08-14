import { rouletteSeries } from "../../consts/rouletteSeries.js";

// расчёт до ломаного шага:
function beforeBreakingStep(series, bet, residue) {
    console.log("функция beforeBreakingStep");
    let position = rouletteSeries[series].position;
    let diff_1 = bet / position;
    let diff_2 = bet / position % 5;
    let plays = diff_1 - diff_2;
    let cleanBet = plays * position;
    let diff_3 = bet - cleanBet;
    let change = diff_3 + residue;

    return { cleanBet, plays, change };
};
export { beforeBreakingStep };