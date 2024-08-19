import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal, multiplicity) {
    let chipsNeeded = rouletteNumber[strUp].chipsComplete; // Кол-во фишек для ставки
    if (completeBet === "") {
        return;
    };
    completeBet = +completeBet;
    let residue = completeBet % 5; // Остаток от деления на 5
    if (residue) completeBet -= residue; // Корректируем ставку на кратность 5
    // если номинал не выбран:
    if (nominal === "max") {
        nominal = +max;
        // количество "этажей":
        let numberOfFloors = Math.floor((completeBet / multiplicity) / chipsNeeded);
        nominal = multiplicity * numberOfFloors; // по чём играет комплит
        // чистая ставка:
        let sum = chipsNeeded * numberOfFloors * multiplicity;
        // общая сдача:
        let change = (completeBet - sum) + residue; //
        // выплата фишек:
        let completePay = rouletteNumber[strUp].chipsPayoutComplete
        // общая выплата:
        let totalPay = nominal * completePay;
        return {
            chipsNeeded,
            nominal,
            sum,
            completePay,
            change,
            totalPay
        };
    };
    // если известен номинал:
    if (nominal !== "max") {
        nominal = +nominal;
        let betChips = chipsNeeded * multiplicity // кол-во фишек на ставку 425
        // максимально возможное кол-во этажей
        let maxFloor = Math.floor(((completeBet / multiplicity) / chipsNeeded));
        // количество "этажей":
        let numberOfFloors = Math.floor((nominal / multiplicity));
        // если ставка маловата:
        // выбран некорректный номинал (превышение):
        if ((completeBet / numberOfFloors) < betChips) {
            numberOfFloors = maxFloor;
            nominal = multiplicity * maxFloor;
            document.getElementById('nominal').value = nominal;
        };
        // выплата фишек:
        let completePay = rouletteNumber[strUp].chipsPayoutComplete
        // чистая ставка:
        let sum = chipsNeeded * nominal;
        // общая выплата:
        let totalPay = nominal * completePay;
        // общая сдача:
        let change = (completeBet - sum) + residue;
        return {
            chipsNeeded,
            nominal,
            sum,
            completePay,
            change,
            totalPay
        };
    };
};
export { completeCalc };