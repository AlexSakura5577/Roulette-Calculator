import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { completeCalc } from './functions/complete/completeCalc.js';
import { chipsNeededForABet } from './functions/complete/chipsNeededForABet.js';
import { sumBet } from './functions/complete/sumBet.js';
import { completePayment } from './functions/complete/completePayment.js';
import { totalPayment } from './functions/complete/totalPayment.js';
import { strUpDescript } from './functions/complete/strUpDescript.js';
import { completeInfo } from './functions/complete/completeInfo.js';

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    // переменные:
    // выбор минимума максимума рулетки:
    let max = minMax.maxBet;
    console.log(`-----------------------------------------------------\n`); // 100

    // выбор номера:
    let strUp = document.getElementById('str_up').value;

    // ввод суммы ставки:
    let completeBet = document.getElementById('completeBet').value;

    // выбор номинала:
    let nominal = document.getElementById('nominal').value; // 25 либо max

    // кратность (этажи)
    const multiplicity = 25;

    // вызовы функций:

    // если введена ставка:
    if (completeBet !== "") {
        let calc = completeCalc(max, strUp, completeBet, nominal, multiplicity);

        // вывод информации пользователю:
        let info = completeInfo(calc.chipsNeeded, calc.nominal, calc.sum, calc.completePay, calc.change, calc.totalPay);
    } else {
        let change;
        if (change === undefined || "") {
            change = 0;
        };

        // кол-во фишек для ставки:
        let chipsNeeded = chipsNeededForABet(strUp, nominal); // 17

        // сумма ставки:
        let sum = sumBet(chipsNeeded, nominal); // 425

        // кол-во фишек на выплату:
        let completePay = completePayment(strUp); // 235

        // сумма выплаты:
        let totalPay = totalPayment(nominal, completePay); // 5875

        // дополнительная информация:
        // let addInfo = strUpDescript(strUp);

        // вывод информации пользователю:
        let info = completeInfo(chipsNeeded, nominal, sum, completePay, change, totalPay);
    };
};