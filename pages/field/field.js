// import "../main/app.js";
// import { minBet } from "../main/app.js";
// import { maxBet } from "../main/app.js";
// import { payoutRatios } from "../main/app.js";
import { rouletteNumber } from "../main/app.js";
// import { chipsNeededForABet } from "../main/app.js";
// import { countPositions } from "../main/app.js";
// import { oddDozColum } from "../main/app.js";
import { fullBets } from "../main/app.js";
import { rltPos } from "../main/app.js";

//поворот экрана:
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
























