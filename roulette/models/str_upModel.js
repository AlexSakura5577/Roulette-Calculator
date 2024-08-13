import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
// import { payoutRatios } from "./consts/payoutRatios.js";
import { chipCount } from "./functions/strUp/chipCount.js";

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
const positions = document.getElementById('positions');
const bet = document.getElementById('bet');
const color = document.getElementById('color');
const cash = document.getElementById('cash');
let payChips = 0;
let summPay = 0;
let summCash = 0;
let residue = 0;
let pay = 0;

// массив значений:
let fillArr = [];

// клик по кнопке Ставка ОК (подсчёт кол-ва фишек):
add_bet.onclick = function () {
    fillArr = chipCount(); // Вызываем chipCount и сохраняем результат в fillArr
};

// клик по кнопке Рассчитать:
calculate.onclick = function () {
    // выплата (кол-во фишек):
    pay = fillArr.reduce((acc, number) => acc + number, 0);
    // console.log(`кол-во фишек: ${pay}`);

    // цвет по:
    console.log(`цвет по: ${color.value}`);

    // сумма выплаты:
    summPay = +color.value * pay;
    console.log(`выплата: ${summPay}`);

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

    document.getElementById('info_3').innerHTML = ` сумма фишек: ${pay}<br\/> сумма выплаты: ${summPay}<br\/> выплата цветом: ${payChips}<br\/> через: ${summCash}<br\/>`;
    return;
};
