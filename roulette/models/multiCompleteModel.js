import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { multiCompleteCalc } from "./functions/multi-complete/multiCompleteCalc.js";

// для теста:
import { chipsNeededForABet } from "./functions/multi-complete/chipsNeededForABet.js";
import { countPositions } from "./functions/multi-complete/countPositions.js";
import { resultBet } from "./functions/multi-complete/resultBet.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

const nodeList = document.querySelectorAll(".radioBtn");

calculate.onclick = function () {
    multiCompleteCalc(nodeList);

    // для теста:
    let arr = [0, 1, 2];
    let totalSum = chipsNeededForABet(arr);
    let totalChips = countPositions(arr);
    let result = resultBet(arr, totalSum, totalChips)
    console.log(result);
};