import { minMax } from "../../../controllers/localStorageRead.js";

function totalPayment(nominal, completePay) {
    if (nominal === "max") {
        nominal = minMax.maxBet;
    };

    let result = nominal * completePay;
    console.log(`totalPayment: $${result}`);
    return result;
};
export { totalPayment };