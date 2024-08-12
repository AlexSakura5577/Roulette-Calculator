import { minBet } from './consts/min_max.js';
import { maxBet } from './consts/min_max.js';
import { payoutRatios } from './consts/payoutRatios.js';
import { rouletteNumber } from './consts/rouletteNumber.js';
import { rltPos } from './consts/rltPos.js';

// пересекается ли трек с полем:
export const trackOverField = true;




// серии рулетки:
export const rouletteSeries = {
    // малая серия (tier):
    tier: {
        position: 6,
        split: ["5-8", "10-11", "13-16", "23-24", "27-30", "33-36"],
        strUps: [5, 8, 10, 11, 13, 16, 23, 24, 27, 30, 33, 36],
        sumStrUps: 12,
        chips: 12
    },
    // орфолайнс (orphelins):
    orphelins: {
        position: 5,
        numb: ["1"],
        split: ["6-9", "14-17", "17-20", "31-34"],
        strUps: [1, 6, 9, 14, 17, 20, 31, 34],
        sumStrUps: 8,
        chips: 9
        // при выпадении 17 x 2 positions
    },
    // большая серия (voisins du zéro):
    voisins: {
        position: 9,
        split: ["4-7", "12-15", "18-21", "19-22", "32-35"],
        corner: ["25-29"],
        street: ["0-2-3"],
        strUps: [0, 2, 3, 4, 7, 12, 15, 18, 21, 19, 22, 25, 26, 28, 29, 32, 35],
        sumStrUps: 17,
        chips: 11
        // street & corner x 2 positions
    },
    // шпиль (0-spiel):
    spiel: {
        position: 4,
        numb: ["26"],
        split: ["0-3", "12-15", "32-35"],
        strUps: [0, 3, 12, 15, 26, 32, 35],
        sumStrUps: 7
    }
};
// шансы, дюжины и колонки:
export const oddDozColum = {
    dozen_1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    dozen_2: [13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    dozen_3: [25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    column_1: [1, 4, 7, 10, 13, 16, 19, 22, 25, 28, 31, 34],
    column_2: [2, 5, 8, 11, 14, 17, 20, 23, 26, 29, 32, 35],
    column_3: [3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36],
    small: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18],
    big: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36],
    even: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36],
    odd: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35],
    red: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36],
    black: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
};
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
// console.log(fullBets(0));
// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    let strUp = document.getElementById('str_up').value;
    let completeBet = document.getElementById('complete').value;

    // блок функций:
    function chipsNeededForABet(strUp) {
        let quantityNumb = payoutRatios.numb.position * rouletteNumber[strUp].numb;
        let quantitySplit = payoutRatios.split.position * rouletteNumber[strUp].split;
        let quantityCorner = payoutRatios.corner.position * rouletteNumber[strUp].corner;
        let quantityStreet = payoutRatios.street.position * rouletteNumber[strUp].street;
        let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[strUp].six_line;
        let quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
        let result = quantitySum;
        return result;
    }
    function sumBet(strUp) {
        let sumChips = chipsNeededForABet(strUp);
        let result = sumChips * completeBet;
        return result;
    };
    function completePayment(strUp) {
        let quantityNumb = payoutRatios.numb.position * rouletteNumber[strUp].numb * payoutRatios.numb.payout;
        let quantitySplit = payoutRatios.split.position * rouletteNumber[strUp].split * payoutRatios.split.payout;
        let quantityCorner = payoutRatios.corner.position * rouletteNumber[strUp].corner * payoutRatios.corner.payout;
        let quantityStreet = payoutRatios.street.position * rouletteNumber[strUp].street * payoutRatios.street.payout;
        let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[strUp].six_line * payoutRatios.six_line.payout;
        let quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
        let result = quantitySum;
        return result;
    }
    function totalPayment(strUp) {
        let chips = completePayment(strUp);
        let result = completeBet * chips;
        return result;
    };
    function info(strUp) {
        let color = rouletteNumber[strUp].color;
        let parity = rouletteNumber[strUp].parity;
        let magnitude = rouletteNumber[strUp].magnitude;
        let dozen = rouletteNumber[strUp].dozen;
        let column = rouletteNumber[strUp].column;
        let result = `color: ${color} <br\/> \nparity: ${parity} <br\/> \nmagnitude: ${magnitude} <br\/> \ndozen: ${dozen} <br\/> \ncolumn: ${column}`;
        return result;
    };

    // // блок вызовов console.log:
    // console.log('strUp ' + strUp + ': ' + chipsNeededForABet(strUp) + ' positions of ' + completeBet);
    // console.log('sumBet: $' + sumBet(strUp));
    // console.log('payment: ' + completePayment(strUp) + ' chips');
    // console.log('totalPayment: $' + totalPayment(strUp));
    // console.log(info(strUp));

    // вывод информации:
    document.getElementById('info_1').innerHTML = `strUp  ${strUp}: ${chipsNeededForABet(strUp)} positions of ${completeBet}<br\/> sumBet: $${sumBet(strUp)}<br\/> payment: ${completePayment(strUp)} chips<br\/> totalPayment: $${totalPayment(strUp)}<br\/> ${info(strUp)}`;
};
// функция подсчёта нескольких комплитов в поле:
export function chipsNeededForABet(arr) {
    let result;
    let quantitySum;
    let arrChips = [];
    let totalSum;
    arr.forEach(element => {
        let quantityNumb = payoutRatios.numb.position * rouletteNumber[element].numb;
        let quantitySplit = payoutRatios.split.position * rouletteNumber[element].split;
        let quantityCorner = payoutRatios.corner.position * rouletteNumber[element].corner;
        let quantityStreet = payoutRatios.street.position * rouletteNumber[element].street;
        let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[element].six_line;
        quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
        arrChips.push(quantitySum);
        totalSum = arrChips.reduce((acc, number) => acc + number);
    });
    result = totalSum;
    console.log(arrChips);
    return result;
}
// общее число позиций без учёта пересечений:
// console.log(chipsNeededForABet(selectedNumbers));
// функция подсчёта совпадений (сдача):
export function countPositions(arr) {
    let total = [];
    let totalChips;
    // сплиты выбранных номеров:
    function splits(arr) {
        let totalSplits = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalSplits.push(rouletteNumber[element].positions.split);
        });
        let flatArr = totalSplits.flat(Infinity);
        // console.log(flatArr);
        let unique = [...new Set(flatArr)];
        // console.log(unique);
        coincidences = flatArr.length - unique.length;
        console.log("кол-во совпадений сплитов: " + coincidences);
        let chips = coincidences * payoutRatios.split.position;
        console.log(chips);
        return chips;
    };
    let splitChips = splits(arr);

    // карэ выбранных номеров:
    function corners(arr) {
        let totalCorners = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalCorners.push(rouletteNumber[element].positions.corner);
        });
        let flatArr = totalCorners.flat(Infinity);
        // console.log(flatArr);
        let unique = [...new Set(flatArr)];
        // console.log(unique);
        coincidences = flatArr.length - unique.length;
        console.log("кол-во совпадений карэ: " + coincidences);
        let chips = coincidences * payoutRatios.corner.position;
        console.log(chips);
        return chips;
    };
    let cornerChips = corners(arr);

    // стриты выбранных номеров:
    function streets(arr) {
        let totalStreets = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalStreets.push(rouletteNumber[element].positions.street);
        });
        let flatArr = totalStreets.flat(Infinity);
        // console.log(flatArr);
        let unique = [...new Set(flatArr)];
        // console.log(unique);
        coincidences = flatArr.length - unique.length;
        console.log("кол-во совпадений стритов: " + coincidences);
        let chips = coincidences * payoutRatios.street.position;
        console.log(chips);
        return chips;
    };
    let streetChips = streets(arr);

    // сикслайны выбранных номеров:
    function sixLines(arr) {
        let totalSixLines = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalSixLines.push(rouletteNumber[element].positions.six_line);
        });
        let flatArr = totalSixLines.flat(Infinity);
        // console.log(flatArr);
        let unique = [...new Set(flatArr)];
        // console.log(unique);
        coincidences = flatArr.length - unique.length;
        console.log("кол-во совпадений сикслайнов: " + coincidences);
        let chips = coincidences * payoutRatios.six_line.position;
        console.log(chips);
        return chips;
    };
    let sixLineChips = sixLines(arr);

    total.push(splitChips);
    total.push(cornerChips);
    total.push(streetChips);
    total.push(sixLineChips);
    console.log(total);
    totalChips = total.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
    console.log('всего лишних фишек: ' + totalChips);
    return totalChips;
};

// используется в multi-complete:
// общая ставка с вычетом сдачи:
// export let resultBet = () => {
//     let positions = chipsNeededForABet(selectedNumbers);
//     let coincidences = countPositions(selectedNumbers);
//     console.log('кол-во позиций: ' + positions);
//     let result = positions - coincidences;
//     return result;
// };
// console.log(resultBet());



























