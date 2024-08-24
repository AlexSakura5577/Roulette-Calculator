import { showMessage } from "./showMessage.js";
import { multipleChoice } from "./multipleChoice.js";
import { resultBet } from "./resultBet.js";
import { processChoices } from "./processChoices.js";
import { getSelectedNumbers } from "./getSelectedNumbers.js";

// переменные:
let selectedNumbers = [];
let positions;
let coincidences;

function multiCompleteCalc(nodeList) {
    const nodeArray = Array.from(nodeList); // Конвертируем NodeList в массив
    processChoices(nodeArray); // процесс выбора
    const uniqueNumbers = getSelectedNumbers(nodeArray); // уникальные числа
    multipleChoice(selectedNumbers, nodeArray); // выбираем номера
    const result = resultBet(uniqueNumbers, positions, coincidences); // общая ставка
    console.log(`=> uniqueNumbers: [${uniqueNumbers.join(' ')}] выбранные номера`);

    // вывод сообщения пользователю:
    showMessage(uniqueNumbers, result);
    return result;
};
export { multiCompleteCalc };