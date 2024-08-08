// import "./menuModel.js";
// import { minBet } from "./menuModel.js";
// import { maxBet } from "./menuModel.js";
// import { payoutRatios } from "./menuModel.js";
// import { rouletteNumber } from "./menuModel.js";
import { chipsNeededForABet } from "./menuModel.js";
import { countPositions } from "./menuModel.js";
import { oddDozColum } from "./menuModel.js";

// переменные:
let selectedNumbers = [];
let positions;
let result;
let coincidences;
// вывод сообщения алерт:
function showMessage() {
    alert(`выбранные номера: ${selectedNumbers} \nкол-во позиций: ${positions} \nлишних позиций: ${coincidences} \nитоговая ставка: ${result}`);
    location.reload();
    return;
};
// функция подсчёта пересечений комплитов:
const nodeList = document.querySelectorAll(".radioBtn");
// console.log(nodeList);

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
        // 1-я дюжина:
        let dozen_1 = [3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
        if (nodeList[2].checked === true) {
            multipleChoice(dozen_1, nodeList);
        };
        // 2-я дюжина:
        let dozen_2 = [18, 19, 20, 21, 22, 23, 25, 26, 27, 28, 29, 30];
        if (nodeList[17].checked === true) {
            multipleChoice(dozen_2, nodeList);
        };
        // 3-я дюжина:
        let dozen_3 = [33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45];
        if (nodeList[32].checked === true) {
            multipleChoice(dozen_3, nodeList);
        };
        // малые номера:
        let small = [3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 18, 19, 20, 21, 22, 23];
        if (nodeList[1].checked === true) {
            multipleChoice(small, nodeList);
        };
        // большие номера:
        let big = [25, 26, 27, 28, 29, 30, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43, 44, 45];
        if (nodeList[39].checked === true) {
            multipleChoice(big, nodeList);
        };
        // чёт:
        let even = [4, 6, 8, 11, 13, 15, 19, 21, 23, 26, 28, 30, 34, 36, 38, 41, 43, 45];
        if (nodeList[9].checked === true) {
            multipleChoice(even, nodeList);
        };
        // нечет:
        let odd = [3, 5, 7, 10, 12, 14, 18, 20, 22, 25, 27, 29, 33, 35, 37, 40, 42, 44];
        if (nodeList[31].checked === true) {
            multipleChoice(odd, nodeList);
        };
        // красное:
        let red = [3, 5, 7, 10, 12, 15, 19, 21, 23, 25, 27, 29, 33, 35, 38, 41, 43, 45];
        if (nodeList[16].checked === true) {
            multipleChoice(red, nodeList);
        };
        // чёрное:
        let black = [4, 6, 8, 11, 13, 14, 18, 20, 22, 26, 28, 30, 34, 36, 37, 40, 42, 44];
        if (nodeList[24].checked === true) {
            multipleChoice(black, nodeList);
        };
        // 1-я колонка:
        let column_1 = [3, 6, 10, 13, 18, 21, 25, 28, 33, 36, 40, 43];
        if (nodeList[46].checked === true) {
            multipleChoice(column_1, nodeList);
        };
        // 2-я колонка:
        let column_2 = [4, 7, 11, 14, 19, 22, 26, 29, 34, 37, 41, 44];
        if (nodeList[47].checked === true) {
            multipleChoice(column_2, nodeList);
        };
        // 3-я колонка:
        let column_3 = [5, 8, 12, 15, 20, 23, 27, 30, 35, 38, 42, 45];
        if (nodeList[48].checked === true) {
            multipleChoice(column_3, nodeList);
        };
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
