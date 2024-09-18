import {minSeriesBets} from "../../consts/track/minSeriesBets.js";

function incorrectBetCheck(info, bet, nameSeries) {
    // Приводим значение ставки к числу
    bet = bet === '' ? 0 : parseFloat(bet);

    if (bet < 0) {
        console.log("Ставка не может быть отрицательной");
        info.innerHTML = "Ставка не может быть отрицательной";
        return;
    }
    if (nameSeries in minSeriesBets && bet < minSeriesBets[nameSeries]) {
        console.log("Некорректная ставка");
        info.innerHTML = "Некорректная ставка";
        return;
    } else {
        console.log(`Корректная ставка`);
        console.log(`серия: ${nameSeries}; ставка: ${bet}`);
        info.innerHTML = `серия: ${nameSeries}<br>ставка: ${bet}<br>`;
        return;
    }
};
export { incorrectBetCheck };

// старый вариант проверки ставки:
// if (bet == '') {
//     bet = 0;
// } else if (nameSeries == "spiel" && bet < 20) {
//     console.log("не корректная ставка");
//     info.innerHTML = `не корректная ставка`;
//     return;
// } else if (nameSeries == "orphelins" && bet < 25) {
//     console.log("не корректная ставка");
//     info.innerHTML = `не корректная ставка`;
//     return;
// }
// else if (nameSeries == "tier" && bet < 30) {
//     console.log("не корректная ставка");
//     info.innerHTML = `не корректная ставка`;
//     return;
// }
// else if (nameSeries == "voisins" && bet < 45) {
//     console.log("не корректная ставка");
//     info.innerHTML = `не корректная ставка`;
//     return;
// };