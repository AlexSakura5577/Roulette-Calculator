

// клик по кнопке "Рассчитать":
// calculate.onclick = function () {
//     let strUp = document.getElementById('str_up').value;
//     let completeBet = document.getElementById('complete').value;

//     // блок функций:
//     function chipsNeededForABet(strUp) {
//         let quantityNumb = payoutRatios.numb.position * rouletteNumber[strUp].numb;
//         let quantitySplit = payoutRatios.split.position * rouletteNumber[strUp].split;
//         let quantityCorner = payoutRatios.corner.position * rouletteNumber[strUp].corner;
//         let quantityStreet = payoutRatios.street.position * rouletteNumber[strUp].street;
//         let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[strUp].six_line;
//         let quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
//         let result = quantitySum;
//         return result;
//     }
//     function sumBet(strUp) {
//         let sumChips = chipsNeededForABet(strUp);
//         let result = sumChips * completeBet;
//         return result;
//     };
//     function completePayment(strUp) {
//         let quantityNumb = payoutRatios.numb.position * rouletteNumber[strUp].numb * payoutRatios.numb.payout;
//         let quantitySplit = payoutRatios.split.position * rouletteNumber[strUp].split * payoutRatios.split.payout;
//         let quantityCorner = payoutRatios.corner.position * rouletteNumber[strUp].corner * payoutRatios.corner.payout;
//         let quantityStreet = payoutRatios.street.position * rouletteNumber[strUp].street * payoutRatios.street.payout;
//         let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[strUp].six_line * payoutRatios.six_line.payout;
//         let quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
//         let result = quantitySum;
//         return result;
//     }
//     function totalPayment(strUp) {
//         let chips = completePayment(strUp);
//         let result = completeBet * chips;
//         return result;
//     };
//     function info(strUp) {
//         let color = rouletteNumber[strUp].color;
//         let parity = rouletteNumber[strUp].parity;
//         let magnitude = rouletteNumber[strUp].magnitude;
//         let dozen = rouletteNumber[strUp].dozen;
//         let column = rouletteNumber[strUp].column;
//         let result = `color: ${color} <br\/> \nparity: ${parity} <br\/> \nmagnitude: ${magnitude} <br\/> \ndozen: ${dozen} <br\/> \ncolumn: ${column}`;
//         return result;
//     };

//     // // блок вызовов console.log:
//     // console.log('strUp ' + strUp + ': ' + chipsNeededForABet(strUp) + ' positions of ' + completeBet);
//     // console.log('sumBet: $' + sumBet(strUp));
//     // console.log('payment: ' + completePayment(strUp) + ' chips');
//     // console.log('totalPayment: $' + totalPayment(strUp));
//     // console.log(info(strUp));

//     // вывод информации:
//     document.getElementById('info_1').innerHTML = `strUp  ${strUp}: ${chipsNeededForABet(strUp)} positions of ${completeBet}<br\/> sumBet: $${sumBet(strUp)}<br\/> payment: ${completePayment(strUp)} chips<br\/> totalPayment: $${totalPayment(strUp)}<br\/> ${info(strUp)}`;
// };

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
