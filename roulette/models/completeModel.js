import { chipsNeededForABet } from './functions/complete/chipsNeededForABet.js';
import { sumBet } from './functions/complete/sumBet.js';
import { completePayment } from './functions/complete/completePayment.js';
import { totalPayment } from './functions/complete/totalPayment.js';
import { strUpDescript } from './functions/complete/strUpDescript.js';
import { completeInfo } from './functions/complete/completeInfo.js';

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    let strUp = document.getElementById('str_up').value;
    // let completeBet = document.getElementById('str_up').value;
    let completeBet = document.getElementById('complete').value;

    // кол-во фишек для ставки:
    let chipsNeeded = chipsNeededForABet(strUp, completeBet); // 17
    // сумма ставки:
    let sum = sumBet(chipsNeeded, completeBet); // 425
    // кол-во фишек на выплату:
    let completePay = completePayment(strUp); // 235
    // сумма выплаты:
    let totalPay = totalPayment(completeBet, completePay); // 5875
    // информация:
    let addInfo = strUpDescript(strUp, completeBet, chipsNeeded, sum, completePay, totalPay);
    // вывод информации:
    let info = completeInfo(chipsNeeded, completeBet, sum, completePay, totalPay, addInfo);
};