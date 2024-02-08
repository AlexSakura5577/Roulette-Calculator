// import "../main/app.js";
// import { minBet } from "../main/app.js";
// import { maxBet } from "../main/app.js";
// import { payoutRatios } from "../main/app.js";
// import { rouletteNumber } from "../main/app.js";
import { chipsNeededForABet } from "../main/app.js";
import { countPositions } from "../main/app.js";

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
console.log(nodeList);
// console.log(nodeList.item[1]);
// console.log(nodeList[5].checked);

// radioBtn.onclick = function () {
//     if (nodeList[2].checked === true) {
//         nodeList[13].checked = true
//     };
// };

calculate.onclick = function () {
    nodeList.forEach((item, index) => {

        if (nodeList[2].checked === true) {
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
        };
        if (nodeList[17].checked === true) {
            nodeList[18].checked = true
            nodeList[19].checked = true
            nodeList[20].checked = true
            nodeList[21].checked = true
            nodeList[22].checked = true
            nodeList[23].checked = true
            nodeList[25].checked = true
            nodeList[26].checked = true
            nodeList[27].checked = true
            nodeList[28].checked = true
            nodeList[29].checked = true
            nodeList[30].checked = true
        };

        let element_id = item.id;
        // console.log(element_id);
        // console.log(element_id.length);
        let isChecked = item.checked;
        if (element_id.includes("num") === true && isChecked === true) {
            let num = element_id.substring(4, element_id.length)
            selectedNumbers.push(+num);
        };
    });
    console.log(selectedNumbers);
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
    selectedNumbers = [];
    return // showMessage();
};























// console.log(import.meta.url);
