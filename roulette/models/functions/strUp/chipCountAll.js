import { payoutRatios } from "../../consts/payoutRatios.js";
import { fillObj } from "../../consts/strUp/fillObj.js";

// функция подсчета кол-ва фишек:
function chipCountAll(positions, bet) {
    // проверка и приведение к объекту:
    if (typeof positions !== 'object' || typeof bet !== 'object') {
        positions = { value: positions }
        bet = { value: bet }
    };
    
    // Проверка на нулевую ставку:
    bet.value = Math.max(0, bet.value);

    const positionsMap = {
        "numbers": { payout: payoutRatios.numb.payout },
        "splits": { payout: payoutRatios.split.payout },
        "streets": { payout: payoutRatios.street.payout },
        "corners": { payout: payoutRatios.corner.payout },
        "six_lines": { payout: payoutRatios.six_line.payout },
    };
    // Получаем нужную позицию
    const position = positionsMap[positions.value];
    // Считаем фишки:
    if (position) {
        fillObj[positions.value] = +bet.value * position.payout;
    }
    return Object.values(fillObj);
};
export { chipCountAll };