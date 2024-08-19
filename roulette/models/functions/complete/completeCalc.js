// import { minMax } from "../../../controllers/localStorageRead.js";
import { payoutRatios } from '../../consts/payoutRatios.js';
import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal, multiplicity) {
    // console.log(`max: ${max} (${typeof max})`);
    // console.log(`strUp: ${strUp} (${typeof strUp})`);

    let chipsNeeded = rouletteNumber[strUp].chipsComplete; // Кол-во фишек для ставки
    console.log(`chipsNeeded: ${chipsNeeded} (${typeof chipsNeeded})`);

    if (completeBet === "") {
        return;
    };
    if (nominal === "max") {
        nominal = +max
    };
    completeBet = +completeBet;

    nominal = +nominal;
    console.log(`nominal: ${nominal} (${typeof nominal})`);

    let residue = completeBet % 5; // Остаток от деления на 5
    console.log(`residue: ${residue} (${typeof residue})`);
    if (residue) completeBet -= residue; // Корректируем ставку на кратность 5
    console.log(`completeBet: $${completeBet} (${typeof completeBet})`);

    // количество "этажей":
    let numberOfFloors = Math.floor((completeBet / multiplicity) / chipsNeeded);
    console.log(`numberOfFloors: ${numberOfFloors} (${typeof numberOfFloors})`);

    if (nominal === "max") {
        nominal = multiplicity * numberOfFloors; // по чём играет комплит
        console.log(`nominal: ${nominal} (${typeof nominal})`);
    };
    
    // чистая ставка:
    let cleanBet = chipsNeeded * numberOfFloors * multiplicity;
    console.log(`cleanBet: $${cleanBet} (${typeof cleanBet})`);
    let sum = cleanBet;

    // общая сдача:
    let change = (completeBet - cleanBet) + residue; //
    console.log(`change: $${change} (${typeof change})`);




    // return { chipsNeeded,  nominal, sum, completePay, change, totalPay};
};
export { completeCalc };