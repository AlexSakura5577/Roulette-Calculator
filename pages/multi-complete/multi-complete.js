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
calculate.onclick = function () {
    nodeList.forEach((item, index) => {
        // let strUp = item.id;
        let isChecked = item.checked;
        if (isChecked === true) {
            selectedNumbers.push(index);
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
    return showMessage();
};

console.log(import.meta.url);
