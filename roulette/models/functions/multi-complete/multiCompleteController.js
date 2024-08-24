import { multiCompleteCalc } from "./multiCompleteCalc.js";
import { chipsNeededForABet } from "./chipsNeededForABet.js";
import { countPositions } from "./countPositions.js";
import { resultBet } from "./resultBet.js";

function multiCompleteController(arr) {
    // Проверяем тип входящего аргумента
    if (arr instanceof NodeList) {
        multiCompleteCalc(arr);
    } else {
        let totalSum = chipsNeededForABet(arr);
        let totalChips = countPositions(arr);
        let result = resultBet(arr, totalSum, totalChips)
        console.log(result); //
    }
};
export { multiCompleteController };