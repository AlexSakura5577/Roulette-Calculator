import { minBet } from './consts/min_max.js';
import { maxBet } from './consts/min_max.js';
import { payoutRatios } from './consts/payoutRatios.js';
import { rouletteNumber } from './consts/rouletteNumber.js';

// пересекается ли трек с полем:
export const trackOverField = true;





// все позиции рулетки (157 шт) и ставка:
export const rltPos = {
    num: {
        "number_0": [],
        "number_1": [],
        "number_2": [],
        "number_3": [],
        "number_4": [],
        "number_5": [],
        "number_6": [],
        "number_7": [],
        "number_8": [],
        "number_9": [],
        "number_10": [],
        "number_11": [],
        "number_12": [],
        "number_13": [],
        "number_14": [],
        "number_15": [],
        "number_16": [],
        "number_17": [],
        "number_18": [],
        "number_19": [],
        "number_20": [],
        "number_21": [],
        "number_22": [],
        "number_23": [],
        "number_24": [],
        "number_25": [],
        "number_26": [],
        "number_27": [],
        "number_28": [],
        "number_29": [],
        "number_30": [],
        "number_31": [],
        "number_32": [],
        "number_33": [],
        "number_34": [],
        "number_35": [],
        "number_36": []
    },
    spl: {
        "split_0-1": [],
        "split_0-2": [],
        "split_0-3": [],
        "split_1-2": [],
        "split_2-3": [],
        "split_1-4": [],
        "split_2-5": [],
        "split_3-6": [],
        "split_4-5": [],
        "split_5-6": [],
        "split_4-7": [],
        "split_5-8": [],
        "split_6-9": [],
        "split_7-8": [],
        "split_8-9": [],
        "split_7-10": [],
        "split_8-11": [],
        "split_9-12": [],
        "split_10-11": [],
        "split_11-12": [],
        "split_10-13": [],
        "split_11-14": [],
        "split_12-15": [],
        "split_13-14": [],
        "split_14-15": [],
        "split_13-16": [],
        "split_14-17": [],
        "split_15-18": [],
        "split_16-17": [],
        "split_17-18": [],
        "split_16-19": [],
        "split_17-20": [],
        "split_18-21": [],
        "split_19-20": [],
        "split_20-21": [],
        "split_19-22": [],
        "split_20-23": [],
        "split_21-24": [],
        "split_22-23": [],
        "split_23-24": [],
        "split_22-25": [],
        "split_23-26": [],
        "split_24-27": [],
        "split_25-26": [],
        "split_26-27": [],
        "split_25-28": [],
        "split_26-29": [],
        "split_27-30": [],
        "split_28-29": [],
        "split_29-30": [],
        "split_28-31": [],
        "split_29-32": [],
        "split_30-33": [],
        "split_31-32": [],
        "split_32-33": [],
        "split_31-34": [],
        "split_32-35": [],
        "split_33-36": [],
        "split_34-35": [],
        "split_35-36": []
    },
    cor: {
        "corner_first-four": [],
        "corner_1-5": [],
        "corner_2-6": [],
        "corner_4-8": [],
        "corner_5-9": [],
        "corner_7-11": [],
        "corner_8-12": [],
        "corner_10-14": [],
        "corner_11-15": [],
        "corner_13-17": [],
        "corner_14-18": [],
        "corner_16-20": [],
        "corner_17-21": [],
        "corner_19-23": [],
        "corner_20-24": [],
        "corner_22-26": [],
        "corner_23-27": [],
        "corner_25-29": [],
        "corner_26-30": [],
        "corner_28-32": [],
        "corner_29-33": [],
        "corner_31-35": [],
        "corner_32-36": []
    },
    str: {
        "street_0-1-2": [],
        "street_0-2-3": [],
        "street_1-2-3": [],
        "street_4-5-6": [],
        "street_7-8-9": [],
        "street_10-11-12": [],
        "street_13-14-15": [],
        "street_16-17-18": [],
        "street_19-20-21": [],
        "street_22-23-24": [],
        "street_25-26-27": [],
        "street_28-29-30": [],
        "street_31-32-33": [],
        "street_34-35-36": []
    },
    six: {
        "six_line_1-6": [],
        "six_line_4-9": [],
        "six_line_7-12": [],
        "six_line_10-15": [],
        "six_line_13-18": [],
        "six_line_16-21": [],
        "six_line_19-24": [],
        "six_line_22-27": [],
        "six_line_25-30": [],
        "six_line_28-33": [],
        "six_line_31-36": []
    },
    dozen: {
        "dozen_1st": 0,
        "dozen_2nd": 0,
        "dozen_3rd": 0
    },
    column: {
        "column_1st": 0,
        "column_2nd": 0,
        "column_3rd": 0
    },
    small: {
        "small_1-18": 0,
        numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
    },
    big: {
        "big_19-36": 0,
        numbers: [19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36]
    },
    even: {
        "even": 0,
        numbers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36]
    },
    odd: {
        "odd": 0,
        numbers: [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35]
    },
    red: {
        "red": 0,
        numbers: [1, 3, 5, 7, 9, 12, 14, 16, 18, 19, 21, 23, 25, 27, 30, 32, 34, 36]
    },
    black: {
        "black": 0,
        numbers: [2, 4, 6, 8, 10, 11, 13, 15, 17, 20, 22, 24, 26, 28, 29, 31, 33, 35]
    }
};
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



























