// import { minMax } from "../../../controllers/localStorageRead.js";
import { payoutRatios } from '../../consts/payoutRatios.js';
import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completeCalc(max, strUp, completeBet, nominal) {
    console.log(`max: ${max} (${typeof max})`);
    console.log(`strUp: ${strUp} (${typeof strUp})`);

    if (completeBet === "") {
        return;
    };
    if (nominal === "max") {
        nominal = +max
    };
    completeBet = +completeBet;

    nominal = +nominal;
    console.log(`nominal: ${nominal} (${typeof nominal})`);

    let residue = completeBet % 5;
    console.log(`residue: ${residue} (${typeof residue})`);
    if (residue) completeBet -= residue; // Корректируем ставку на кратность 5
    console.log(`completeBet: $${completeBet} (${typeof completeBet})`);


    // return { sum, residue };
};
export { completeCalc };