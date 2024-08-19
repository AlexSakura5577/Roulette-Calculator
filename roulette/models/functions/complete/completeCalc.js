// import { minMax } from "../../../controllers/localStorageRead.js";
import { payoutRatios } from '../../consts/payoutRatios.js';
import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal, multiplicity) {
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
        console.log(`nominal: ${nominal} (${typeof nominal})`);

        // количество "этажей":
        let numberOfFloors = nominal / multiplicity;
        console.log(`numberOfFloors: ${numberOfFloors} (${typeof numberOfFloors})`);

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
    }






    // return { chipsNeeded,  nominal, sum, completePay, change, totalPay};
};
export { completeCalc };