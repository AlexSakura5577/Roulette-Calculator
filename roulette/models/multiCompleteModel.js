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

        // блок выборов:
        if (nodeList[2].checked === true) {
            multipleChoice(nodeChanColumDoz.dozen_1, nodeList);
        };
        if (nodeList[17].checked === true) {
            multipleChoice(nodeChanColumDoz.dozen_2, nodeList);
        };
        if (nodeList[32].checked === true) {
            multipleChoice(nodeChanColumDoz.dozen_3, nodeList);
        };
        if (nodeList[1].checked === true) {
            multipleChoice(nodeChanColumDoz.small, nodeList);
        };
        if (nodeList[39].checked === true) {
            multipleChoice(nodeChanColumDoz.big, nodeList);
        };
        if (nodeList[9].checked === true) {
            multipleChoice(nodeChanColumDoz.even, nodeList);
        };
        if (nodeList[31].checked === true) {
            multipleChoice(nodeChanColumDoz.odd, nodeList);
        };
        if (nodeList[16].checked === true) {
            multipleChoice(nodeChanColumDoz.red, nodeList);
        };
        if (nodeList[24].checked === true) {
            multipleChoice(nodeChanColumDoz.black, nodeList);
        };
        if (nodeList[46].checked === true) {
            multipleChoice(nodeChanColumDoz.column_1, nodeList);
        };
        if (nodeList[47].checked === true) {
            multipleChoice(nodeChanColumDoz.column_2, nodeList);
        };
        if (nodeList[48].checked === true) {
            multipleChoice(nodeChanColumDoz.column_3, nodeList);
        };

        // добавление элементов в массив:
        if (element_id.includes("num") === true && isChecked === true) {
            uniqueNumbers.push(+num);
        };
    });

    // общая ставка с вычетом сдачи:
    let result = resultBet(uniqueNumbers, positions, coincidences);

    console.log(uniqueNumbers);

    return result;
};