// roulette-calculator

const minBet = 1;
const maxBet = 100;

// let strUp = 0;
// let completeBet = 25;

// выбранные пользователем номера:
let selectedNumbers = [0, 1];

// коэффициенты выплат
const payoutRatios = {
    numb: {
        payout: 35,
        position: 1,
        maxbet: (maxBet * 1)
    },
    split: {
        payout: 17,
        position: 2,
        maxbet: (maxBet * 2)
    },
    corner: {
        payout: 8,
        position: 4,
        maxbet: (maxBet * 4)
    },
    street: {
        payout: 11,
        position: 3,
        maxbet: (maxBet * 3)
    },
    six_line: {
        payout: 5,
        position: 6,
        maxbet: (maxBet * 6)
    }
};
// номера рулетки:
const rouletteNumber = {
    0: {
        numb: 1,
        split: 3,
        corner: 1,
        street: 2,
        six_line: 0,
        positions: {
            numb: ["0"],
            split: ["0-1", "0-2", "0-3"],
            corner: ["first four"],
            street: ["0-1-2", "0-2-3"],
            six_line: []
        },
        color: 'green',
        parity: 'zero',
        magnitude: 'zero',
        dozen: 'zero',
        column: 'zero'
    },
    1: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 2,
        six_line: 1,
        positions: {
            numb: ["1"],
            split: ["0-1", "1-2", "1-4"],
            corner: ["first four", "1-5"],
            street: ["0-1-2", "1-2-3"],
            six_line: ["1-6"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st"
    },
    2: {
        numb: 1,
        split: 4,
        corner: 3,
        street: 3,
        six_line: 1,
        positions: {
            numb: ["2"],
            split: ["0-2", "1-2", "2-3", "2-5"],
            corner: ["first four", "1-5", "2-6"],
            street: ["0-1-2", "0-2-3", "1-2-3"],
            six_line: ["1-6"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd"
    },
    3: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 2,
        six_line: 1,
        positions: {
            numb: ["3"],
            split: ["0-3", "2-3", "3-6"],
            corner: ["first four", "2-6"],
            street: ["0-2-3", "1-2-3"],
            six_line: ["1-6"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd"
    },
    4: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["4"],
            split: ["1-4", "4-5", "4-7"],
            corner: ["1-5", "4-8"],
            street: ["4-5-6"],
            six_line: ["1-6", "4-9"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st"
    },
    5: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["5"],
            split: ["2-5", "4-5", "5-6", "5-8"],
            corner: ["1-5", "2-6", "4-8", "5-9"],
            street: ["4-5-6"],
            six_line: ["1-6", "4-9"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd"
    },
    6: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["6"],
            split: ["3-6", "5-6", "6-9"],
            corner: ["2-6", "5-9"],
            street: ["4-5-6"],
            six_line: ["1-6", "4-9"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd"
    },
    7: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["7"],
            split: ["4-7", "7-8", "7-10"],
            corner: ["4-8", "7-11"],
            street: ["7-8-9"],
            six_line: ["4-9", "7-12"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st"
    },
    8: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["8"],
            split: ["5-8", "7-8", "8-9", "8-11"],
            corner: ["4-8", "5-9", "7-11", "8-12"],
            street: ["7-8-9"],
            six_line: ["4-9", "7-12"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd"
    },
    9: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["9"],
            split: ["6-9", "8-9", "9-12"],
            corner: ["5-9", "8-12"],
            street: ["7-8-9"],
            six_line: ["4-9", "7-12"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd"
    },
    10: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["10"],
            split: ["7-10", "10-11", "10-13"],
            corner: ["7-11", "10-14"],
            street: ["10-11-12"],
            six_line: ["7-12", "10-15"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st"
    },
    11: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["11"],
            split: ["8-11", "10-11", "11-12", "11-14"],
            corner: ["7-11", "8-12", "10-14", "11-15"],
            street: ["10-11-12"],
            six_line: ["7-12", "10-15"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd"
    },
    12: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["12"],
            split: ["9-12", "11-12", "12-15"],
            corner: ["8-12", "11-15"],
            street: ["10-11-12"],
            six_line: ["7-12", "10-15"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd"
    },
    13: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["13"],
            split: ["10-13", "13-14", "13-16"],
            corner: ["10-14", "13-17"],
            street: ["13-14-15"],
            six_line: ["10-15", "13-18"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "1st"
    },
    14: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["14"],
            split: ["11-14", "13-14", "14-15", "14-17"],
            corner: ["10-14", "11-15", "13-17", "14-18"],
            street: ["13-14-15"],
            six_line: ["10-15", "13-18"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "2nd"
    },
    15: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["15"],
            split: ["12-15", "14-15", "15-18"],
            corner: ["11-15", "14-18"],
            street: ["13-14-15"],
            six_line: ["10-15", "13-18"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "3rd"
    },
    16: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["16"],
            split: ["13-16", "16-17", "16-19"],
            corner: ["13-17", "16-20"],
            street: ["16-17-18"],
            six_line: ["13-18", "16-21"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "1st"
    },
    17: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["17"],
            split: ["14-17", "16-17", "17-18", "17-20"],
            corner: ["13-17", "14-18", "16-20", "17-21"],
            street: ["16-17-18"],
            six_line: ["13-18", "16-21"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "2nd"
    },
    18: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["18"],
            split: ["15-18", "17-18", "18-21"],
            corner: ["14-18", "17-21"],
            street: ["16-17-18"],
            six_line: ["13-18", "16-21"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "3rd"
    },
    19: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["19"],
            split: ["16-19", "19-20", "19-22"],
            corner: ["16-20", "19-23"],
            street: ["19-20-21"],
            six_line: ["16-21", "19-24"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "1st"
    },
    20: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["20"],
            split: ["17-20", "19-20", "20-21", "20-23"],
            corner: ["16-20", "17-21", "19-23", "20-24"],
            street: ["19-20-21"],
            six_line: ["16-21", "19-24"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "2nd"
    },
    21: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["21"],
            split: ["18-21", "20-21", "21-24"],
            corner: ["17-21", "20-24"],
            street: ["19-20-21"],
            six_line: ["16-21", "19-24"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "3rd"
    },
    22: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["22"],
            split: ["19-22", "22-23", "22-25"],
            corner: ["19-23", "22-26"],
            street: ["22-23-24"],
            six_line: ["19-24", "22-27"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "1st"
    },
    23: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["23"],
            split: ["20-23", "22-23", "23-24", "23-26"],
            corner: ["19-23", "20-24", "22-26", "23-27"],
            street: ["22-23-24"],
            six_line: ["19-24", "22-27"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "2nd"
    },
    24: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["24"],
            split: ["21-24", "23-24", "24-27"],
            corner: ["20-24", "23-27"],
            street: ["22-23-24"],
            six_line: ["19-24", "22-27"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "3rd"
    },
    25: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["25"],
            split: ["22-25", "25-26", "25-28"],
            corner: ["22-26", "25-29"],
            street: ["25-26-27"],
            six_line: ["22-27", "25-30"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st"
    },
    26: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["26"],
            split: ["23-26", "25-26", "26-27", "26-29"],
            corner: ["22-26", "23-27", "25-29", "26-30"],
            street: ["25-26-27"],
            six_line: ["22-27", "25-30"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd"
    },
    27: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["27"],
            split: ["24-27", "26-27", "27-30"],
            corner: ["23-27", "26-30"],
            street: ["25-26-27"],
            six_line: ["22-27", "25-30"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd"
    },
    28: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["28"],
            split: ["25-28", "28-29", "28-31"],
            corner: ["25-29", "28-32"],
            street: ["28-29-30"],
            six_line: ["25-30", "28-33"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st"
    },
    29: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["29"],
            split: ["26-29", "28-29", "29-30", "29-32"],
            corner: ["25-29", "26-30", "28-32", "29-33"],
            street: ["28-29-30"],
            six_line: ["25-30", "28-33"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd"
    },
    30: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["30"],
            split: ["27-30", "29-30", "30-33"],
            corner: ["26-30", "29-33"],
            street: ["28-29-30"],
            six_line: ["25-30", "28-33"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd"
    },
    31: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["31"],
            split: ["28-31", "31-32", "31-34"],
            corner: ["28-32", "31-35"],
            street: ["31-32-33"],
            six_line: ["28-33", "31-36"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st"
    },
    32: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["32"],
            split: ["29-32", "31-32", "32-33", "32-35"],
            corner: ["28-32", "29-33", "31-35", "32-36"],
            street: ["31-32-33"],
            six_line: ["28-33", "31-36"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd"
    },
    33: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["33"],
            split: ["30-33", "32-33", "33-36"],
            corner: ["29-33", "32-36"],
            street: ["31-32-33"],
            six_line: ["28-33", "31-36"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd"
    },
    34: {
        numb: 1,
        split: 2,
        corner: 1,
        street: 1,
        six_line: 1,
        positions: {
            numb: ["34"],
            split: ["31-34", "34-35"],
            corner: ["31-35"],
            street: ["34-35-36"],
            six_line: ["31-36"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st"
    },
    35: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 1,
        positions: {
            numb: ["35"],
            split: ["32-35", "34-35", "35-36"],
            corner: ["31-35", "32-36"],
            street: ["34-35-36"],
            six_line: ["31-36"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd"
    },
    36: {
        numb: 1,
        split: 2,
        corner: 1,
        street: 1,
        six_line: 1,
        positions: {
            numb: ["36"],
            split: ["33-36", "35-36"],
            corner: ["32-36"],
            street: ["34-35-36"],
            six_line: ["31-36"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd"
    },
};
// серии рулетки:
const rouletteSeries = {
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
        sumStrUps: 17
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
// функция загрузки номера:
function fullBets(strUp) {
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
};
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
function chipsNeededForABet(arr) {
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
};
// общее число позиций без учёта пересечений:
// console.log(chipsNeededForABet(selectedNumbers));
// функция подсчёта совпадений (сдача):
function countPositions(arr) {
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
    return totalChips;
};
// console.log(countPositions(selectedNumbers));
// общая ставка с вычетом сдачи:
let resultBet = () => {
    let positions = chipsNeededForABet(selectedNumbers);
    let coincidences = countPositions(selectedNumbers);
    console.log(positions);
    let result = positions - coincidences;
    return result;
};
console.log(resultBet());


/*
function countPositions(arr) {
    let numb;
    arr.forEach(element => {
        numb = arr[element];
        console.log(numb);
        // console.log(rouletteNumber[element]);

        let position = rouletteNumber[numb].positions;
        for (let key in position) {
            let pos = position[key];
            console.log(pos);

            let total = [];
            let coincidences = 0;
            // подсчёт 1-й позиции
            function onePositionCount(arr) {
                arr.forEach(element => {

                    let concat = `${numb.positions}.${pos}`

                    total.push(+concat);
                });
                let flatArr = total.flat(Infinity);
                console.log(flatArr);
                let unique = [...new Set(flatArr)];
                console.log(unique);
                coincidences = flatArr.length - unique.length;
                console.log("кол-во совпадений: " + coincidences);
            }
            onePositionCount(arr);
        };
    })


    // let chips = coincidences * payoutRatios.split.position;

    return;
};
console.log(countPositions(selectedNumbers));
*/
























