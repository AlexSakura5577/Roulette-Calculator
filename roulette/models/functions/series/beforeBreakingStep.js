import { rouletteSeries } from "../../consts/rouletteSeries.js";

// расчёт до ломаного шага:
function beforeBreakingStep(series, bet, residue) {
    console.log("функция beforeBreakingStep");

    const position = rouletteSeries[series].position; // Используем const для константы
    const diff_1 = bet / position;
    const plays = diff_1 - (bet / position % 5); // Объединяем расчёт и определение
    const cleanBet = plays * position;
    const change = (bet - cleanBet) + residue; // Объединение расчёта change

    return { cleanBet, plays, change };
};
export { beforeBreakingStep };