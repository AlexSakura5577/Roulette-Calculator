// import "./menuModel.js";
import { rouletteSeries } from "./menuModel.js";
import { payoutRatios } from "./menuModel.js";
import { fullBets } from "./menuModel.js";

// localStorage
localStorage.setItem('minBet', 1);
localStorage.setItem('maxBet', 100);
// кнопка Сброс:
reset.onclick = function () {
    location.reload();
    localStorage.setItem('minBet', 1);
    localStorage.setItem('maxBet', 100);
    return;
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

// клик по кнопке Через ОК:
// add_cash.onclick = function () {
//     console.log("Через ОК");
//     // color = color.value;
//     // switch (color.value) {
//     //     case "1":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     case "2":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     case "5":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     case "10":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     case "25":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     case "50":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     case "100":
//     //         summPay = +color.value * pay;
//     //         console.log(summPay);
//     //         break;
//     //     default:
//     //         console.log(`цвет по: 1`);
//     // };
//     return;
// };

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // выбор минимума-максимума рулетки:
    let minmax = document.getElementById('minmax').value; // выбираем элемент select minmax
    let minBet = localStorage.getItem('minBet');
    let maxBet = localStorage.getItem('maxBet');
    switch (minmax) {
        case "1-100":
            minBet = 1;
            maxBet = 100;
            localStorage.setItem('minBet', 1);
            localStorage.setItem('maxBet', 100);
            break;
        case "5-200":
            minBet = 5;
            maxBet = 200;
            localStorage.setItem('minBet', 5);
            localStorage.setItem('maxBet', 200);
            break;
        case "5-300":
            minBet = 5;
            maxBet = 300;
            localStorage.setItem('minBet', 5);
            localStorage.setItem('maxBet', 300);
            break;
        case "25-500":
            minBet = 25;
            maxBet = 500;
            localStorage.setItem('minBet', 25);
            localStorage.setItem('maxBet', 500);
            break;
        default:
            minBet = 1;
            maxBet = 100;
            localStorage.setItem('minBet', 1);
            localStorage.setItem('maxBet', 100);
    };

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



