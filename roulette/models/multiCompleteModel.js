import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";
import { rouletteNumber } from "./consts/rouletteNumber.js";
import { chipsNeededForABet } from "./functions/multi-complete/chipsNeededForABet.js";
import { countPositions } from "./functions/multi-complete/countPositions.js";
import { nodeChanColumDoz } from "./consts/multi-complete/nodeChanColumDoz.js";
import { showMessage } from "./functions/multi-complete/showMessage.js";
import { multipleChoice } from "./functions/multi-complete/multipleChoice.js";
import { resultBet } from "./functions/multi-complete/resultBet.js";
import { multiCompleteCalc } from "./functions/multi-complete/multiCompleteCalc.js";
import { processChoices } from "./functions/multi-complete/processChoices.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// переменные:
const nodeList = document.querySelectorAll(".radioBtn");

let selectedNumbers = [];
let positions;
let coincidences;

// функция подсчёта нескольких комплитов в поле:
// let totalSum = chipsNeededForABet(selectedNumbers);
// функция подсчёта совпадений (сдача):
// let totalChips = countPositions(selectedNumbers);

calculate.onclick = function () {
    let uniqueNumbers = [...new Set(selectedNumbers)]; // удаляем дубликаты
    nodeList.forEach((item, index) => {
        let element_id = item.id;
        let isChecked = item.checked;
        let num = element_id.substring(4, element_id.length);

        // функция множественного выбора:
        multipleChoice(selectedNumbers, nodeList);

        // Вызов функции с nodeList
        processChoices(nodeList);

        // добавление элементов в массив:
        if (element_id.includes("num") === true && isChecked === true) {
            uniqueNumbers.push(+num);
        };
    });

    // общая ставка с вычетом сдачи:
    let result = resultBet(uniqueNumbers, positions, coincidences);

    console.log(uniqueNumbers);

    showMessage(uniqueNumbers, result);

    return result;
};
