// import "../main/app.js";
// import { minBet } from "../main/app.js";
// import { maxBet } from "../main/app.js";
// import { payoutRatios } from "../main/app.js";
// import { rouletteNumber } from "../main/app.js";
import { chipsNeededForABet } from "../main/app.js";
import { countPositions } from "../main/app.js";
import { oddDozColum } from "../main/app.js";

// переменные:
let selectedNumbers = [];
let positions;
let result;
let coincidences;
// вывод сообщения алерт:
function showMessage() {
    alert(`выбранные номера: ${selectedNumbers} \nкол-во позиций: ${positions} \nлишних позиций: ${coincidences} \nитоговая ставка: ${result}`);
    // location.reload();
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
        let dozen_3 = [];
        if (nodeList[32].checked === true) {
            nodeList[33].checked = true
            nodeList[34].checked = true
            nodeList[35].checked = true
            nodeList[36].checked = true
            nodeList[37].checked = true
            nodeList[38].checked = true
            nodeList[40].checked = true
            nodeList[41].checked = true
            nodeList[42].checked = true
            nodeList[43].checked = true
            nodeList[44].checked = true
            nodeList[45].checked = true
        };
        // малые номера:
        let small = [];
        if (nodeList[1].checked === true) {
            nodeList[3].checked = true
            nodeList[4].checked = true
            nodeList[5].checked = true
            nodeList[6].checked = true
            nodeList[7].checked = true
            nodeList[8].checked = true
            nodeList[10].checked = true
            nodeList[11].checked = true
            nodeList[12].checked = true
            nodeList[13].checked = true
            nodeList[14].checked = true
            nodeList[15].checked = true
            nodeList[18].checked = true
            nodeList[19].checked = true
            nodeList[20].checked = true
            nodeList[21].checked = true
            nodeList[22].checked = true
            nodeList[23].checked = true
        };
        // большие номера:
        let big = [];
        if (nodeList[39].checked === true) {
            nodeList[25].checked = true
            nodeList[26].checked = true
            nodeList[27].checked = true
            nodeList[28].checked = true
            nodeList[29].checked = true
            nodeList[30].checked = true
            nodeList[33].checked = true
            nodeList[34].checked = true
            nodeList[35].checked = true
            nodeList[36].checked = true
            nodeList[37].checked = true
            nodeList[38].checked = true
            nodeList[40].checked = true
            nodeList[41].checked = true
            nodeList[42].checked = true
            nodeList[43].checked = true
            nodeList[44].checked = true
            nodeList[45].checked = true
        };
        // чёт:
        let even = [];
        if (nodeList[9].checked === true) {
            nodeList[4].checked = true
            nodeList[6].checked = true
            nodeList[8].checked = true
            nodeList[11].checked = true
            nodeList[13].checked = true
            nodeList[15].checked = true
            nodeList[19].checked = true
            nodeList[21].checked = true
            nodeList[23].checked = true
            nodeList[26].checked = true
            nodeList[28].checked = true
            nodeList[30].checked = true
            nodeList[34].checked = true
            nodeList[36].checked = true
            nodeList[38].checked = true
            nodeList[41].checked = true
            nodeList[43].checked = true
            nodeList[45].checked = true
        };
        // нечет:
        let odd = [];
        if (nodeList[31].checked === true) {
            nodeList[3].checked = true
            nodeList[5].checked = true
            nodeList[7].checked = true
            nodeList[10].checked = true
            nodeList[12].checked = true
            nodeList[14].checked = true
            nodeList[18].checked = true
            nodeList[20].checked = true
            nodeList[22].checked = true
            nodeList[25].checked = true
            nodeList[27].checked = true
            nodeList[29].checked = true
            nodeList[33].checked = true
            nodeList[35].checked = true
            nodeList[37].checked = true
            nodeList[40].checked = true
            nodeList[42].checked = true
            nodeList[44].checked = true
        };
        // красное:
        let red = [];
        if (nodeList[16].checked === true) {
            nodeList[3].checked = true
            nodeList[5].checked = true
            nodeList[7].checked = true
            nodeList[10].checked = true
            nodeList[12].checked = true
            nodeList[15].checked = true
            nodeList[19].checked = true
            nodeList[21].checked = true
            nodeList[23].checked = true
            nodeList[25].checked = true
            nodeList[27].checked = true
            nodeList[29].checked = true
            nodeList[33].checked = true
            nodeList[35].checked = true
            nodeList[38].checked = true
            nodeList[41].checked = true
            nodeList[43].checked = true
            nodeList[45].checked = true
        };
        // чёрное:
        let black = [];
        if (nodeList[24].checked === true) {
            nodeList[4].checked = true
            nodeList[6].checked = true
            nodeList[8].checked = true
            nodeList[11].checked = true
            nodeList[13].checked = true
            nodeList[14].checked = true
            nodeList[18].checked = true
            nodeList[20].checked = true
            nodeList[22].checked = true
            nodeList[26].checked = true
            nodeList[28].checked = true
            nodeList[30].checked = true
            nodeList[34].checked = true
            nodeList[36].checked = true
            nodeList[37].checked = true
            nodeList[40].checked = true
            nodeList[42].checked = true
            nodeList[44].checked = true
        };
        // 1-я колонка:
        let column_1 = [];
        if (nodeList[46].checked === true) {
            nodeList[3].checked = true
            nodeList[6].checked = true
            nodeList[10].checked = true
            nodeList[13].checked = true
            nodeList[18].checked = true
            nodeList[21].checked = true
            nodeList[25].checked = true
            nodeList[28].checked = true
            nodeList[33].checked = true
            nodeList[36].checked = true
            nodeList[40].checked = true
            nodeList[43].checked = true
        };
        // 2-я колонка:
        let column_2 = [];
        if (nodeList[47].checked === true) {
            nodeList[4].checked = true
            nodeList[7].checked = true
            nodeList[11].checked = true
            nodeList[14].checked = true
            nodeList[19].checked = true
            nodeList[22].checked = true
            nodeList[26].checked = true
            nodeList[29].checked = true
            nodeList[34].checked = true
            nodeList[37].checked = true
            nodeList[41].checked = true
            nodeList[44].checked = true
        };
        // 3-я колонка:
        let column_3 = [];
        if (nodeList[48].checked === true) {
            nodeList[5].checked = true
            nodeList[8].checked = true
            nodeList[12].checked = true
            nodeList[15].checked = true
            nodeList[20].checked = true
            nodeList[23].checked = true
            nodeList[27].checked = true
            nodeList[30].checked = true
            nodeList[35].checked = true
            nodeList[38].checked = true
            nodeList[42].checked = true
            nodeList[45].checked = true
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

// console.log(import.meta.url);