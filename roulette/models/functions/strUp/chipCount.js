import { fillObj } from "../../consts/strUp/fillObj.js";
import { positionsMap } from "../../consts/strUp/positionsMap.js";

// функция подсчета кол-ва фишек:
function chipCount(positions, bet) {
    // проверка и приведение к объекту:
    if (typeof positions !== 'object' || typeof bet !== 'object') {
        positions = { value: positions }
        bet = { value: bet }
    }

    // Проверка на нулевую ставку:
    bet.value = Math.max(0, bet.value);

    let position = positionsMap();

    // Считаем фишки:
    if (position) {
        fillObj[positions.value] = +bet.value * position.payout;
        document.getElementById(position.infoId).innerHTML = `${position.label}: ${bet.value}`;
    } else {
        console.log("выберите позицию");
    }
    console.log(fillObj); // Объект заполнения выигрышных позиций
    bet.value = null;
    return Object.values(fillObj); // возвращаем Массив
};
export { chipCount };