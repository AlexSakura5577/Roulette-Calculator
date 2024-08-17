import { payoutRatios } from './consts/payoutRatios.js';
import { rouletteNumber } from './consts/rouletteNumber.js';
import { chipsNeededForABet } from './functions/complete/chipsNeededForABet.js';
// import { rltPos } from './consts/rltPos.js';

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    let strUp = document.getElementById('str_up').value;
    let completeBet = document.getElementById('complete').value;

    // блок вызовов функций:
    let chipsNeeded = chipsNeededForABet(strUp);

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
    };
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

        let result = ` 
        color: ${color} <br\/>
        parity: ${parity} <br\/>
        magnitude: ${magnitude} <br\/>
        dozen: ${dozen} <br\/>
        column: ${column}
        `;

        return result;
    };

    // блок вызовов console.log:
    console.log('strUp ' + strUp + ': ' + chipsNeededForABet(strUp) + ' positions of ' + completeBet);
    console.log('sumBet: $' + sumBet(strUp));
    console.log('payment: ' + completePayment(strUp) + ' chips');
    console.log('totalPayment: $' + totalPayment(strUp));
    // console.log(info(strUp));

    // вывод информации:
    document.getElementById('info_1').innerHTML = `
    strUp  ${strUp}: ${chipsNeededForABet(strUp)} positions of ${completeBet}<br\/>
    sumBet: $${sumBet(strUp)}<br\/>
    payment: ${completePayment(strUp)} chips<br\/>
    totalPayment: $${totalPayment(strUp)}<br\/>
    ${info(strUp)}
    `;
};
