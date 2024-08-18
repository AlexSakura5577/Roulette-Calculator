import { minMax } from "../../../controllers/localStorageRead.js";

function sumBet(chipsNeeded, nominal) {
    if (nominal === "max") {
        nominal = minMax.maxBet;
    };

    let result = chipsNeeded * +nominal;
    console.log(`sumBet: $${result}`);
    return result;
};
export { sumBet };