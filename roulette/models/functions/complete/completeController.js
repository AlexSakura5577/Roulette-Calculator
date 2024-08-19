import { completeCalc } from './completeCalc.js';
import { chipsNeededForABet } from './chipsNeededForABet.js';
import { sumBet } from './sumBet.js';
import { completePayment } from './completePayment.js';
import { totalPayment } from './totalPayment.js';
import { completeInfo } from './completeInfo.js';

function completeController(max, strUp, completeBet, nominal) {
    const multiplicity = 25;

    // Функция для расчета и вывода информации
    const calculateAndDisplay = (calc) => {
        let info = completeInfo(calc.chipsNeeded, calc.nominal, calc.sum, calc.completePay, calc.change, calc.totalPay);
    };

    if (completeBet !== "") {
        // Если ставка введена, выполняем расчеты
        let calc = completeCalc(max, strUp, completeBet, nominal, multiplicity);
        calculateAndDisplay(calc);
    } else {
        // Если ставка не введена, делаем расчеты без учета ставки
        let chipsNeeded = chipsNeededForABet(strUp, nominal);
        let sum = sumBet(chipsNeeded, nominal);
        let completePay = completePayment(strUp);
        let totalPay = totalPayment(nominal, completePay);
        let change = 0; // Устанавливаем значение по умолчанию

        // Выводим информацию
        let info = completeInfo(chipsNeeded, nominal, sum, completePay, change, totalPay);
    }
};
export { completeController };