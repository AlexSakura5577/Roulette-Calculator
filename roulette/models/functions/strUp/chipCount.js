import { payoutRatios } from "../../consts/payoutRatios.js";
import { fillObj } from "../../consts/strUp/fillObj.js";

// функция подсчета кол-ва фишек:
function chipCount() {
    // массив значений:
    let fillArr = [];
    // проверка на нулевую ставку:
    if (bet.value <= 0) {
        bet.value = 0;
    };
    document.getElementById('info_3').innerHTML = ``;
    switch (positions.value) {
        case "numbers":
            fillObj.numbers = +bet.value * payoutRatios.numb.payout;
            console.log(`numbers: ${+bet.value}`);
            document.getElementById('info_num').innerHTML = `номеров: ${+bet.value}`;
            break;
        case "splits":
            fillObj.splits = +bet.value * payoutRatios.split.payout;
            console.log(`splits: ${+bet.value}`);
            document.getElementById('info_spl').innerHTML = `сплитов: ${+bet.value}`;
            break;
        case "streets":
            fillObj.streets = +bet.value * payoutRatios.street.payout;
            console.log(`streets: ${+bet.value}`);
            document.getElementById('info_str').innerHTML = `стритов: ${+bet.value}`;
            break;
        case "corners":
            fillObj.corners = +bet.value * payoutRatios.corner.payout;
            console.log(`corners: ${+bet.value}`);
            document.getElementById('info_cor').innerHTML = `карэ: ${+bet.value}`;
            break;
        case "six-lines":
            fillObj.six_lines = +bet.value * payoutRatios.six_line.payout;
            console.log(`six-lines: ${+bet.value}`);
            document.getElementById('info_six').innerHTML = `сикс-лайнов: ${+bet.value}`;
            break;
        default:
            console.log("выберите позицию");
    };
    console.log(fillObj); // объект заполнения выигрышных позиций
    fillArr = Object.values(fillObj);
    bet.value = '';
    console.log(fillArr);  // Используем результат
    // возвращаем массив с подсчитанными выигрышными позициями:
    return fillArr;
};
// Экспортируем функцию chipCount с вычисленными значениями:
export { chipCount };