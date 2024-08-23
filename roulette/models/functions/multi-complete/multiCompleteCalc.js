import { showMessage } from "./showMessage.js";
import { multipleChoice } from "./multipleChoice.js";
import { resultBet } from "./resultBet.js";
import { processChoices } from "./processChoices.js";

// переменные:
let selectedNumbers = [];
let positions;
let coincidences;

function multiCompleteCalc(nodeList) {
    const nodeArray = Array.from(nodeList); // Конвертируем NodeList в массив
    
    const uniqueNumbers = [...new Set(nodeArray
        .filter(item => item.id.includes("num") && item.checked) // Фильтруем массив
        .map(item => +item.id.substring(4)) // Преобразуем в числа
    )];
    console.log(uniqueNumbers);

    multipleChoice(selectedNumbers, nodeArray); // выбираем номера
    processChoices(nodeArray); // процесс выбора
    const result = resultBet(uniqueNumbers, positions, coincidences); // общая ставка
    console.log(`=> uniqueNumbers: [${uniqueNumbers.join(' ')}] выбранные номера`);

    // вывод сообщения пользователю:
    showMessage(uniqueNumbers, result);
    return result;
};
export { multiCompleteCalc };