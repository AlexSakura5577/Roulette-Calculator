// import { payoutRatios } from './consts/payoutRatios.js';
import { rouletteNumber } from './consts/rouletteNumber.js';
import { chipsNeededForABet } from './functions/complete/chipsNeededForABet.js';
import { sumBet } from './functions/complete/sumBet.js';
import { completePayment } from './functions/complete/completePayment.js';
import { totalPayment } from './functions/complete/totalPayment.js';

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    let strUp = document.getElementById('str_up').value;
    let completeBet = document.getElementById('complete').value;

    // блок вызовов функций:
    let chipsNeeded = chipsNeededForABet(strUp, completeBet); // 17

    let sum = sumBet(chipsNeeded, completeBet); // 425

    let completePay = completePayment(strUp); // 235

    let totalPay = totalPayment(completeBet, completePay); // 5875


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

    // вывод информации:
    document.getElementById('info_1').innerHTML = `
    strUp  ${strUp}: ${chipsNeeded} positions of ${completeBet}<br\/>
    sumBet: $${sum}<br\/>
    payment: ${completePay} chips<br\/>
    totalPayment: $${totalPay}<br\/>
    ${info(strUp)}
    // `;
};
