import { showMessage } from "./showMessage.js";
import { multipleChoice } from "./multipleChoice.js";
import { resultBet } from "./resultBet.js";
import { processChoices } from "./processChoices.js";

// переменные:
let selectedNumbers = [];
let positions;
let coincidences;
function multiCompleteCalc(nodeList) {
    let uniqueNumbers = [...new Set(selectedNumbers)]; // удаляем дубликаты
    nodeList.forEach((item, index) => {
        let element_id = item.id;
        let isChecked = item.checked;
        let num = element_id.substring(4, element_id.length);

        // функция множественного выбора:
        multipleChoice(selectedNumbers, nodeList);

        // процесс выбора:
        processChoices(nodeList);

        // добавление элементов в массив:
        if (element_id.includes("num") === true && isChecked === true) {
            uniqueNumbers.push(+num);
        };
    });

    // общая ставка с вычетом сдачи:
    let result = resultBet(uniqueNumbers, positions, coincidences);

    console.log(`=> uniqueNumbers: [${uniqueNumbers.join(' ')}] выбранные номера`);

    // вывод сообщения пользователю:
    showMessage(uniqueNumbers, result);

    return result;
};
export { multiCompleteCalc };