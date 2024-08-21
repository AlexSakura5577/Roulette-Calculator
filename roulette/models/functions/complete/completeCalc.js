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
    let numberOfFloors;

    if (nominal === "max") {
        numberOfFloors = Math.floor((completeBet / multiplicity) / chipsNeeded);
        nominal = multiplicity * numberOfFloors; // по чём играет
    } else {
        numberOfFloors = Math.floor((nominal / multiplicity)); // сколько этажей
        let maxFloor = Math.floor(((completeBet / multiplicity) / chipsNeeded));

        //! проверка на корретный ввод номанала:
        if ((completeBet / numberOfFloors) < betChips) {
            numberOfFloors = maxFloor;
            nominal = multiplicity * maxFloor;
            document.getElementById('nominal').value = nominal;
        };
    };

    let sum = (nominal === "max")
        ? chipsNeeded * numberOfFloors * multiplicity // Для максимального номинала
        : chipsNeeded * nominal; // Для известного номинала

    let change = (completeBet - sum) + residue; //! общая сдача
    let totalPay = nominal * completePay; //! общая выплата

    console.log(`${chipsNeeded} positions of ${nominal}`);
    console.log(`sumBet: $${sum}`);
    console.log(`payment: ${completePay} chips`);
    console.log(`totalPayment: $${totalPay}`);

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