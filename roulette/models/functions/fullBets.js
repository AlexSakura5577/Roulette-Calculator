import { payoutRatios } from '../consts/payoutRatios.js';
import { rouletteNumber } from '../consts/rouletteNumber.js';

// для тестов:
// let completeBet = document.getElementById('complete').value;
// let completeBet = 100;

// функция загрузки номера:
export function fullBets(strUp) {
    // ставка в номер
    let strup = rouletteNumber[strUp].positions.numb.length * payoutRatios.numb.position * completeBet;
    console.log("ставка в номер " + strUp + ": " + strup);
    // ставка на сплиты
    for (let i = 0; i < rouletteNumber[strUp].positions.split.length; i++) {
        let position = rouletteNumber[strUp].positions.split[i];
        let bet = 1 * payoutRatios.split.position * completeBet;
        console.log("ставка на сплит " + position + ": " + bet);
    };
    // ставка на карэ
    for (let i = 0; i < rouletteNumber[strUp].positions.corner.length; i++) {
        let position = rouletteNumber[strUp].positions.corner[i];
        let bet = 1 * payoutRatios.corner.position * completeBet;
        console.log("ставка на карэ " + position + ": " + bet);
    };
    // ставка на стриты
    for (let i = 0; i < rouletteNumber[strUp].positions.street.length; i++) {
        let position = rouletteNumber[strUp].positions.street[i];
        let bet = 1 * payoutRatios.street.position * completeBet;
        console.log("ставка на стрит " + position + ": " + bet);
    };
    // ставка на six_line
    for (let i = 0; i < rouletteNumber[strUp].positions.six_line.length; i++) {
        let position = rouletteNumber[strUp].positions.six_line[i];
        let bet = 1 * payoutRatios.six_line.position * completeBet;
        console.log("ставка на six_line " + position + ": " + bet);
    };
}
// console.log(fullBets(5));