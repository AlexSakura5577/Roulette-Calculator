import { completeCalc } from './completeCalc.js';
import { chipsNeededForABet } from './chipsNeededForABet.js';
import { sumBet } from './sumBet.js';
import { completePayment } from './completePayment.js';
import { totalPayment } from './totalPayment.js';
import { completeInfo } from './completeInfo.js';

function completeController(max, strUp, completeBet, nominal) {
    // кратность (этажи)
    const multiplicity = 25;
    // если введена ставка:
    if (completeBet !== "") {
        // рассчет ставки:
        let calc = completeCalc(max, strUp, completeBet, nominal, multiplicity);
        // вывод информации пользователю:
        let info = completeInfo(calc.chipsNeeded, calc.nominal, calc.sum, calc.completePay, calc.change, calc.totalPay);
    } else {
        let change;
        if (change === undefined || "") {
            change = 0;
        };
        // кол-во фишек для ставки:
        let chipsNeeded = chipsNeededForABet(strUp, nominal);
        // сумма ставки:
        let sum = sumBet(chipsNeeded, nominal);
        // кол-во фишек на выплату:
        let completePay = completePayment(strUp);
        // сумма выплаты:
        let totalPay = totalPayment(nominal, completePay);
        // вывод информации пользователю:
        let info = completeInfo(chipsNeeded, nominal, sum, completePay, change, totalPay);
    };
};
export { completeController };