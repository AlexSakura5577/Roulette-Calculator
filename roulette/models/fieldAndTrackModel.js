// import { minBet } from "./menuModel.js";
// import { maxBet } from "./menuModel.js";
// import { payoutRatios } from "./consts/payoutRatios.js";
// import { oddDozColum } from "./consts/oddDozColum.js";
// import { rouletteSeries } from './consts/rouletteSeries.js';
// import { rouletteNumber } from "./consts/rouletteNumber.js";
// import { fullBets } from "./functions/fullBets.js";
// import { rltPos } from "./consts/rltPos.js";

// пересекается ли трек с полем:
export const trackOverField = true;

// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
// Для каждого элемента добавляем обработчик события "click"
nodeList.forEach(element => {
    element.addEventListener('click', () => {
        let text = element.textContent;
        // Выводим текст элемента в консоль и всплывашку:
        console.log(text);
        // alert(text);
    });
});
























