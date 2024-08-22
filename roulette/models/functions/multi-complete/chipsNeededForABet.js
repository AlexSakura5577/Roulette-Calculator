import { payoutRatios } from "../../consts/payoutRatios.js";
import { rouletteNumber } from "../../consts/rouletteNumber.js";

// функция подсчёта нескольких комплитов в поле:
function chipsNeededForABet(arr) {
    let result;
    let quantitySum;
    let arrChips = [];
    let totalSum;
    arr.forEach(element => {
        // повторяющийся код:
        let quantityNumb = payoutRatios.numb.position * rouletteNumber[element].numb;
        let quantitySplit = payoutRatios.split.position * rouletteNumber[element].split;
        let quantityCorner = payoutRatios.corner.position * rouletteNumber[element].corner;
        let quantityStreet = payoutRatios.street.position * rouletteNumber[element].street;
        let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[element].six_line;
        // 
        quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
        arrChips.push(quantitySum);
        totalSum = arrChips.reduce((acc, number) => acc + number);
    });
    result = totalSum;
    console.log(arrChips);
    return result;
};
export { chipsNeededForABet };