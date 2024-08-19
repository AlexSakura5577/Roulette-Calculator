import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal, multiplicity) {
    console.log('completeCalc функция');

    let chipsNeeded = rouletteNumber[strUp].chipsComplete; // Кол-во фишек для ставки
    console.log(`chipsNeeded: ${chipsNeeded} (${typeof chipsNeeded})`);

    if (completeBet === "") {
        return;
    };
    completeBet = +completeBet;

    let residue = completeBet % 5; // Остаток от деления на 5
    console.log(`residue: ${residue} (${typeof residue})`);
    if (residue) completeBet -= residue; // Корректируем ставку на кратность 5
    console.log(`completeBet: $${completeBet} (${typeof completeBet})`);

    // если номинал не выбран:
    if (nominal === "max") {
        nominal = +max

        // количество "этажей":
        let numberOfFloors = Math.floor((completeBet / multiplicity) / chipsNeeded);
        console.log(`numberOfFloors: ${numberOfFloors} (${typeof numberOfFloors})`);

        nominal = multiplicity * numberOfFloors; // по чём играет комплит
        console.log(`nominal: ${nominal} (${typeof nominal})`);

        // чистая ставка:
        let sum = chipsNeeded * numberOfFloors * multiplicity;
        console.log(`sum: ${sum} (${typeof sum})`);

        // общая сдача:
        let change = (completeBet - sum) + residue; //
        console.log(`change: ${change} (${typeof change})`);

        // выплата фишек:
        let completePay = rouletteNumber[strUp].chipsPayoutComplete
        console.log(`completePay: ${completePay} (${typeof completePay})`);

        // общая выплата:
        let totalPay = nominal * completePay;
        console.log(`totalPay: ${totalPay} (${typeof totalPay})`);

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

        // выбран некорректный номинал (превышение):
        let betNeeded = nominal * chipsNeeded // необходимая ставка 2125
        console.log(`betNeeded: ${betNeeded} (${typeof betNeeded})`);

        let betChips = chipsNeeded * multiplicity // кол-во фишек на ставку 425
        console.log(`betChips: ${betChips} (${typeof betChips})`);

        // 4.705 (4) - максимально возможное кол-во этажей
        let maxFloor = Math.floor(((completeBet / multiplicity) / chipsNeeded));
        console.log(`maxFloor: ${maxFloor} (${typeof maxFloor})`);

        // количество "этажей":
        let numberOfFloors = Math.floor((nominal / multiplicity));
        console.log(`numberOfFloors: ${numberOfFloors} (${typeof numberOfFloors})`);

        // если ставка маловата:
        if ((completeBet / numberOfFloors) < betChips) {
            numberOfFloors = maxFloor;
            nominal = multiplicity * maxFloor;
            document.getElementById('nominal').value = nominal;
        };
        console.log(`nominal: ${nominal} (${typeof nominal})`);

        // выплата фишек:
        let completePay = rouletteNumber[strUp].chipsPayoutComplete
        console.log(`completePay: ${completePay} (${typeof completePay})`);

        // чистая ставка:
        let sum = chipsNeeded * nominal;
        console.log(`sum: ${sum} (${typeof sum})`);

        // общая выплата:
        let totalPay = nominal * completePay;
        console.log(`totalPay: ${totalPay} (${typeof totalPay})`);

        // общая сдача:
        let change = (completeBet - sum) + residue;
        console.log(`change: ${change} (${typeof change})`);

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