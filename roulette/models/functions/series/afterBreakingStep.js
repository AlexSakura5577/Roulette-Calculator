import { rouletteSeries } from "../../consts/rouletteSeries.js";

// рассчёт после ломаного шага:
function afterBreakingStep(minMax, series, breakingStep, seriesBet, residue) {
    console.log("функция afterBreakingStep");

    const coefficient = rouletteSeries[series].coefficient; // Используем const для константы
    seriesBet -= breakingStep; // Упрощаем запись
    const diff_1 = seriesBet / coefficient;
    const plays_1 = diff_1 - (seriesBet / coefficient % 5); // Объединяем расчёт diff_2
    const cleanBet = plays_1 * coefficient;
    const change = (seriesBet - cleanBet) + residue; // Объединяем расчёт change
    const plays = (series === "voisins") // Упрощаем условное присвоение plays
        ? (minMax.maxBet * 1.5) + plays_1
        : +minMax.maxBet + plays_1;

    return { cleanBet, plays, change };
};
export { afterBreakingStep };