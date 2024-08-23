import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";
import { rouletteNumber } from "./consts/rouletteNumber.js";
import { chipsNeededForABet } from "./functions/multi-complete/chipsNeededForABet.js";
import { countPositions } from "./functions/multi-complete/countPositions.js";
import { nodeChanColumDoz } from "./consts/multi-complete/nodeChanColumDoz.js";

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
let selectedNumbers = [];
let positions;
let result;
let coincidences;

// функция подсчёта нескольких комплитов в поле:
chipsNeededForABet(selectedNumbers);

// функция подсчёта совпадений (сдача):
countPositions(selectedNumbers);

// вывод сообщения алерт:
function showMessage() {
    console.log((`выбранные номера: ${selectedNumbers} \nкол-во позиций: ${positions} \nлишних позиций: ${coincidences} \nитоговая ставка: ${result}`));
    // location.reload();
    return;
};

// функция подсчёта пересечений комплитов:
const nodeList = document.querySelectorAll(".radioBtn");

calculate.onclick = function () {
    nodeList.forEach((item, index) => {
        let element_id = item.id;
        let isChecked = item.checked;
        let num = element_id.substring(4, element_id.length);

        // функция множественного выбора:
        function multipleChoice(array, nodeList) {
            array.forEach((element) => {
                nodeList[element].checked = true;
            });
        };

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
            selectedNumbers.push(+num);
        };
    });

    // общая ставка с вычетом сдачи:
    let resultBet = () => {
        positions = chipsNeededForABet(selectedNumbers);
        coincidences = countPositions(selectedNumbers);
        console.log('кол-во позиций: ' + positions);
        result = positions - coincidences;
        return result;
    };
    console.log('итоговая ставка: ' + resultBet());
    console.log(selectedNumbers);
    // selectedNumbers = [];
    return showMessage();
};