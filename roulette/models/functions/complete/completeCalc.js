import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal, multiplicity) {
    if (completeBet === "") {
        return;
    };
    let chipsNeeded = rouletteNumber[strUp].chipsComplete; // Кол-во фишек для ставки
    let completePay = rouletteNumber[strUp].chipsPayoutComplete // выплата фишек
    completeBet = +completeBet; // Преобразуем ставку в число
    let residue = completeBet % 5; // Остаток от деления на 5
    if (residue) completeBet -= residue; // Корректируем ставку на кратность 5
    nominal = nominal === "max" ? +max : +nominal; // Присваиваем номинал
    let betChips = chipsNeeded * multiplicity // сумма ставки на 1 этаж

    // если номинал не выбран:
    if (nominal === "max") {
        let numberOfFloors = Math.floor((completeBet / multiplicity) / chipsNeeded);
        nominal = multiplicity * numberOfFloors; // по чём играет
        let sum = chipsNeeded * numberOfFloors * multiplicity; // сумма ставки
        let change = (completeBet - sum) + residue; //! общая сдача (не трогать)
        let totalPay = nominal * completePay; //! общая выплата (не трогать)
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
        let numberOfFloors = Math.floor((nominal / multiplicity)); // сколько этажей
        let maxFloor = Math.floor(((completeBet / multiplicity) / chipsNeeded));
        // выбран некорректный номинал (превышение):
        if ((completeBet / numberOfFloors) < betChips) {
            numberOfFloors = maxFloor;
            nominal = multiplicity * maxFloor;
            document.getElementById('nominal').value = nominal;
        };
        let sum = chipsNeeded * nominal; // чистая ставка
        let change = (completeBet - sum) + residue; //! общая сдача (не трогать)
        let totalPay = nominal * completePay; //! общая выплата (не трогать)
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