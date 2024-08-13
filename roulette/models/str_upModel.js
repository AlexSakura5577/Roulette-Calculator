import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// переменные:
let positions = document.getElementById('positions');
let bet = document.getElementById('bet');
let color = document.getElementById('color');
let cash = document.getElementById('cash');
let payChips = 0;
let summPay = 0;
let summCash = 0;
let residue = 0;
let pay = 0;

// объект заполнения:
let fillObj = {
    numbers: 0,
    splits: 0,
    streets: 0,
    corners: 0,
    six_lines: 0,
};

// массив значений:
let fillArr = [];

// клик по кнопке Ставка ОК:
add_bet.onclick = function () {
    console.log("Ставка ОК");
    console.log(+bet.value);
    if (bet.value <= 0) {
        bet.value = 0;
    };
    document.getElementById('info_3').innerHTML = ``;
    switch (positions.value) {
        case "numbers":
            fillObj.numbers = +bet.value * payoutRatios.numb.payout;
            console.log("numbers");
            document.getElementById('info_num').innerHTML = `номеров: ${+bet.value}`;
            break;
        case "splits":
            fillObj.splits = +bet.value * payoutRatios.split.payout;
            console.log("splits");
            document.getElementById('info_spl').innerHTML = `сплитов: ${+bet.value}`;
            break;
        case "streets":
            fillObj.streets = +bet.value * payoutRatios.street.payout;
            console.log("streets");
            document.getElementById('info_str').innerHTML = `стритов: ${+bet.value}`;
            break;
        case "corners":
            fillObj.corners = +bet.value * payoutRatios.corner.payout;
            console.log("corners");
            document.getElementById('info_cor').innerHTML = `карэ: ${+bet.value}`;
            break;
        case "six-lines":
            fillObj.six_lines = +bet.value * payoutRatios.six_line.payout;
            console.log("six-lines");
            document.getElementById('info_six').innerHTML = `сикс-лайнов: ${+bet.value}`;
            break;
        default:
            console.log("выберите позицию");
    };
    console.log(fillObj);
    fillArr = Object.values(fillObj);
    console.log(fillArr);
    bet.value = '';
    return fillArr;
};

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // выплата:
    pay = fillArr.reduce((acc, number) => acc + number, 0);
    // console.log(`кол-во фишек: ${pay}`);
    // цвет по:
    // console.log(`цвет по: ${color.value}`);
    // сумма выплаты:
    summPay = +color.value * pay;
    // console.log(`выплата: ${summPay}`);
    // через сколько (кэш):
    summCash = +cash.value;
    // проверка кратности:
    let colorCash = summCash / +color.value;
    if ((colorCash ^ 0) !== colorCash) {
        summCash = `${summCash} не получится`;
        console.log("не получится");
    } else {
        console.log("ok");
    };
    // console.log(`через (кэш): ${summCash}`);
    // остаток:
    residue = summPay - +cash.value;
    // console.log(`остаток: ${residue}`);
    // выплата цветом:
    payChips = residue / +color.value;
    // console.log(`выплата цветом: ${payChips}`);

    // document.getElementById('info_num').innerHTML = ``;
    // document.getElementById('info_spl').innerHTML = ``;
    // document.getElementById('info_str').innerHTML = ``;
    // document.getElementById('info_cor').innerHTML = ``;
    // document.getElementById('info_six').innerHTML = ``;

    document.getElementById('info_3').innerHTML = ` сумма фишек: ${pay}<br\/> сумма выплаты: ${summPay}<br\/> выплата цветом: ${payChips}<br\/> через: ${summCash}<br\/>`;

    return;
};



