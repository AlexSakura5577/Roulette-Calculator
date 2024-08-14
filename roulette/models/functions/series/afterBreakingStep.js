import { minMax } from "../../../controllers/localStorageRead.js";

// рассчёт после ломаного шага:
function afterBreakingStep(coefficient, minMax, breakingStep, bet, residue) {
    bet = bet - breakingStep;
    let diff_1 = bet / 4;
    let diff_2 = bet / 4 % 5;
    let plays_1 = diff_1 - diff_2;
    let cleanBet = plays_1 * 4;
    let diff_3 = bet - cleanBet;
    plays = +minMax.maxBet + plays_1;
    change = diff_3 + residue;

    return { cleanBet, plays, change };
};
export { afterBreakingStep };