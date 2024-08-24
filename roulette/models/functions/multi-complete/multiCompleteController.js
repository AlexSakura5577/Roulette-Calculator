import { multiCompleteCalc } from "./multiCompleteCalc.js";
import { chipsNeededForABet } from "./chipsNeededForABet.js";
import { countPositions } from "./countPositions.js";
import { resultBet } from "./resultBet.js";

function multiCompleteController(arr) {
    // Проверяем тип входящего аргумента
    if (!(arr instanceof NodeList) && !Array.isArray(arr)) {
        console.error("Передан неверный тип аргумента. Ожидался NodeList или массив.");
        return;
    }
    if (arr instanceof NodeList) {
        multiCompleteCalc(arr); // Вызов функции для обработки NodeList
    } else {
        // Проверяем, что массив содержит только числовые значения
        if (!arr.every(item => typeof item === 'number')) {
            console.error("Массив должен содержать только числовые значения.");
            return;
        }
        // Обработка обычного массива
        let totalSum = chipsNeededForABet(arr);
        let totalChips = countPositions(arr);
        let result = resultBet(arr, totalSum, totalChips)
        console.log(result); //
    }
};
export { multiCompleteController };