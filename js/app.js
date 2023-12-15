// roulette-calculator

const minBet = 1;
const maxBet = 100;

// let strUp = 0;
// let completeBet = 25;

const payoutRatios = {
    numb: {
        payout: 35,
        position: 1
    },
    split: {
        payout: 17,
        position: 2
    },
    corner: {
        payout: 8,
        position: 4
    },
    street: {
        payout: 11,
        position: 3
    },
    six_line: {
        payout: 5,
        position: 6
    }
};

const rouletteNumber = {
    0: {
        numb: 1,
        split: 3,
        corner: 1,
        street: 2,
        six_line: 0,
        color: 'green',
        parity: 'zero',
        magnitude: 'zero'
    },
    1: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 2,
        six_line: 1,
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    2: {
        numb: 1,
        split: 4,
        corner: 3,
        street: 3,
        six_line: 1,
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers'
    },
    3: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 2,
        six_line: 1,
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    4: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers'
    },
    5: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    6: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers'
    },
    7: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    8: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers'
    },
    9: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    10: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers'
    },
    11: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    12: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers'
    },
    13: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    14: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers'
    },
    15: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    16: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers'
    },
    17: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers'
    },
    18: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers'
    },
    19: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    20: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers'
    },
    21: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    22: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers'
    },
    23: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    24: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers'
    },
    25: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    26: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers'
    },
    27: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    28: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers'
    },
    29: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    30: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers'
    },
    31: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    32: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers'
    },
    33: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    34: {
        numb: 1,
        split: 2,
        corner: 1,
        street: 1,
        six_line: 1,
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers'
    },
    35: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 1,
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers'
    },
    36: {
        numb: 1,
        split: 2,
        corner: 1,
        street: 1,
        six_line: 1,
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers'
    },
};

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
        let result = `color: ${color} <br\/> \nparity: ${parity} <br\/> \nmagnitude: ${magnitude}`;
        return result;
    };

    // блок вызовов:
    console.log('strUp ' + strUp + ': ' + chipsNeededForABet(strUp) + ' positions of ' + completeBet);
    console.log('sumBet: $' + sumBet(strUp));
    console.log('payment: ' + completePayment(strUp) + ' chips');
    console.log('totalPayment: $' + totalPayment(strUp));
    console.log(info(strUp));

    // вывод информации:
    document.getElementById('info_1').innerHTML = `strUp  ${strUp}: ${chipsNeededForABet(strUp)} positions of ${completeBet}<br\/> sumBet: $${sumBet(strUp)}<br\/> payment: ${completePayment(strUp)} chips<br\/> totalPayment: $${totalPayment(strUp)}<br\/> ${info(strUp)}`;
};

const positionsOnTheRouletteTable = {
    
};

























