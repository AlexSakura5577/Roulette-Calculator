// import "./menuModel.js";
// import { minBet } from "./menuModel.js";
// import { maxBet } from "./menuModel.js";
// import { payoutRatios } from "./consts/payoutRatios.js";
// import { chipsNeededForABet } from "./menuModel.js";
// import { countPositions } from "./menuModel.js";
// import { oddDozColum } from "./menuModel.js";

import { rouletteNumber } from "./consts/rouletteNumber.js";
import { fullBets } from "./menuModel.js";
import { rltPos } from "./menuModel.js";

// поворот экрана:
// document.body.style.transform = 'rotate(90deg)';

// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
// Для каждого элемента добавляем обработчик события "click"
nodeList.forEach(element => {
    element.addEventListener('click', () => {
        let text = element.textContent;
        // Выводим текст элемента в консоль и всплывашку:
        console.log(text);
        alert(text);
    });
});
























