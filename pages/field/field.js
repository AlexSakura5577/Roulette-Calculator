// import "../main/app.js";
// import { minBet } from "../main/app.js";
// import { maxBet } from "../main/app.js";
// import { payoutRatios } from "../main/app.js";
import { rouletteNumber } from "../main/app.js";
// import { chipsNeededForABet } from "../main/app.js";
// import { countPositions } from "../main/app.js";
// import { oddDozColum } from "../main/app.js";
import { fullBets } from "../main/app.js";

// let split_0_1 = rouletteNumber[0].positions.split[0];
// let firstfour = rouletteNumber[0].positions.corner[0];
let posClick = document.getElementById("firstfour");
// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
console.log(nodeList);

function test() {
    let id = firstfour.id;
    let content = firstfour.textContent;
    alert(`${id}\n${content}`);
    return;
};
posClick.addEventListener("click", test);


// получить текст из тега элемента
// let split_01 = document.getElementById("split01");
// let content = split_01.textContent;
// console.log(content);
// function test2() {
//     alert(`${content}`)
// };
// split_01.addEventListener("click", test2);



















