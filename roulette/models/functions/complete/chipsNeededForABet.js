import { minMax } from "../../../controllers/localStorageRead.js";
import { payoutRatios } from '../../consts/payoutRatios.js';
import { rouletteNumber } from '../../consts/rouletteNumber.js';

function chipsNeededForABet(strUp, nominal) {
    if (nominal === "max") {
        nominal = minMax.maxBet;
    };
    
    let quantityNumb = payoutRatios.numb.position * rouletteNumber[strUp].numb;
    let quantitySplit = payoutRatios.split.position * rouletteNumber[strUp].split;
    let quantityCorner = payoutRatios.corner.position * rouletteNumber[strUp].corner;
    let quantityStreet = payoutRatios.street.position * rouletteNumber[strUp].street;
    let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[strUp].six_line;
    let quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
    let result = quantitySum;
    console.log(`${result} positions of ${nominal}`);
    return result;
};
export { chipsNeededForABet };