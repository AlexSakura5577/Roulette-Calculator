import { rouletteSeries } from "../../consts/rouletteSeries.js";

// расчёт до ломаного шага:
function beforeBreakingStep(bet, residue) {
    let diff_1 = bet / rouletteSeries.tier.position;
    let diff_2 = bet / rouletteSeries.tier.position % 5;
    let plays = diff_1 - diff_2;
    let cleanBet = plays * rouletteSeries.tier.position;
    let diff_3 = bet - cleanBet;
    let change = diff_3 + residue;

    return { cleanBet, plays, change };
};
export { beforeBreakingStep };