import { rltPos } from "../../consts/rltPos.js";
import { infoNeighbor } from "./infoNeighbor.js";
import { modalWindow } from "./modalWindow.js";

let numbers = modalWindow().numbers;
console.log(numbers);

function incorrectBetCheckNeighbor(info, bet, num, numbers, min) {
    bet = bet === '' ? 0 : bet; // Присвоение значения

    if (bet < min) {
        console.log(`минимум на соседа ${min}`);
        info.innerHTML = `минимум на соседа ${min}`;
        return;
    };

    if (bet < 25) {
        console.log("не корректная ставка");
        info.innerHTML = `не корректная ставка`;
        return;
    };

    // очистить объект для пересчёта:
    for (let i = 0; i < 37; i++) {
        let sel = "number_" + i;
        rltPos.num[sel] = [];
    };

    console.log(numbers);

    // вывод информации юзеру:
    infoNeighbor(info, num, bet, numbers);
};
export { incorrectBetCheckNeighbor };