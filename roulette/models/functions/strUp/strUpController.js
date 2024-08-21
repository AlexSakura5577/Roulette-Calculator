import { chipCount } from "./chipCount.js";
import { strUpCalculations } from "./strUpCalculations.js";
import { strUpInfo } from "./strUpInfo.js";

function strUpController() {
    let fillArr = [];

    // клик по кнопке Добавить (подсчёт кол-ва фишек):
    add_bet.onclick = function () {
        fillArr = chipCount(positions, bet);
    };

    // клик по кнопке Рассчитать (суммирует массив):
    calculate.onclick = function () {
        let infoObj = strUpCalculations(fillArr);
        strUpInfo(infoObj);
    };
};
export { strUpController };