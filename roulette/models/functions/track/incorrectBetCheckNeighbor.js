import { rltPos } from "../../consts/rltPos.js";
import { infoNeighbor } from "./infoNeighbor.js";

function incorrectBetCheckNeighbor(info, bet, num, numbers) {
    bet = bet === '' ? 0 : bet; // Присвоение значения

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

    // вывод информации юзеру:
    infoNeighbor(info, num, bet, numbers);
};
export { incorrectBetCheckNeighbor };