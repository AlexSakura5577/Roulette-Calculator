// import "../main/app.js";
import { minBet } from "../main/app.js";
import { maxBet } from "../main/app.js";
import { payoutRatios } from "../main/app.js";
import { rouletteNumber } from "../main/app.js";
// import { rouletteSeries } from "../main/app.js";
import { chipsNeededForABet } from "../main/app.js";
import { countPositions } from "../main/app.js";
// import { resultBet } from "../main/app.js";

// выбранные пользователем номера:
let selectedNumbers = [0, 1, 2];

// let selectedNumbers = function selectedNumbers (arguments) {
//     // body
// }

calculate.onclick = function () {
    let checkbox_1 = document.getElementById("num_1");
    let isChecked = checkbox_1.checked;
    console.log(isChecked);
    // alert(isChecked);
    return undefined;
};

// общая ставка с вычетом сдачи:
export let resultBet = () => {
    let positions = chipsNeededForABet(selectedNumbers);
    let coincidences = countPositions(selectedNumbers);
    console.log('кол-во позиций: ' + positions);
    let result = positions - coincidences;
    return result;
};
// console.log('итоговая ставка: ' + resultBet());














// console.log(import.meta.url);
