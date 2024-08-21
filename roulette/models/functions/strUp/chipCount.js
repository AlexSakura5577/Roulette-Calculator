import { fillObj } from "../../consts/strUp/fillObj.js";
import { positionsMap } from "../../consts/strUp/positionsMap.js";

// функция подсчета кол-ва фишек:
function chipCount(positions, bet) {
    // проверка и приведение к объекту:
    if (typeof positions && typeof bet !== 'object') {
        positions = { value: positions }
        bet = { value: bet }
    };
    // Проверка на нулевую ставку:
    if (bet.value <= 0) {
        bet.value = 0;
    };
    let position = positionsMap();
    // Считаем фишки:
    if (position) {
        fillObj[positions.value] = +bet.value * position.payout;
        document.getElementById(position.infoId).innerHTML = `${position.label}: ${bet.value}`;
    } else {
        console.log("выберите позицию");
    };
    console.log(fillObj); // Объект заполнения выигрышных позиций
    bet.value = '';
    // Возвращаем массив с подсчитанными выигрышными позициями:
    return Object.values(fillObj);
};
export { chipCount };