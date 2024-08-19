import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal, multiplicity) {
    let chipsNeeded = rouletteNumber[strUp].chipsComplete; // Кол-во фишек для ставки
    if (!completeBet) return; // Проверка на пустое значение ставки

    completeBet = +completeBet;
    let residue = completeBet % 5; // Остаток от деления на 5
    completeBet -= residue; // Корректируем ставку на кратность 5

    nominal = nominal === "max" ? +max : +nominal;
    let numberOfFloors, sum, totalPay, change, completePay = rouletteNumber[strUp].chipsPayoutComplete;

    if (nominal === +max) {
        numberOfFloors = Math.floor((completeBet / multiplicity) / chipsNeeded);
        nominal = multiplicity * numberOfFloors;
        sum = chipsNeeded * numberOfFloors * multiplicity;
    } else {
        let betChips = chipsNeeded * multiplicity;
        let maxFloor = Math.floor((completeBet / multiplicity) / chipsNeeded);
        numberOfFloors = Math.floor(nominal / multiplicity);

        if ((completeBet / numberOfFloors) < betChips) {
            numberOfFloors = maxFloor;
            nominal = multiplicity * maxFloor;
            document.getElementById('nominal').value = nominal;
        }
        sum = chipsNeeded * nominal;
    }

    totalPay = nominal * completePay;
    change = (completeBet - sum) + residue;

    return {
        chipsNeeded,
        nominal,
        sum,
        completePay,
        change,
        totalPay
    };
};
export { completeCalc };