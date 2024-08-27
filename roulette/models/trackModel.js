import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { payoutRatios } from "./consts/payoutRatios.js";
import { rouletteSeries } from "./consts/rouletteSeries.js";
import { rltPos } from "./consts/rltPos.js";
import { track } from "./consts/track.js";
import { modalWin_1 } from "./consts/track/modalWin_1.js";
import { modalWin_2 } from "./consts/track/modalWin_2.js";
import { propagatesNeighbor } from "./functions/track/propagatesNeighbor.js";
import { propagatesSeries } from "./functions/track/propagatesSeries.js";
import { seriesController } from "./functions/series/seriesController.js";
// import { bettingOnNeighbor } from "./functions/track/bettingOnNeighbor.js";
import { trackFunctionCall } from "./functions/trackFunctionCall.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

const wrapper = document.querySelector('.wrapper');
wrapper.style.transform = 'rotate(90deg)';

// user info:
const info = document.getElementById('user_info');

// получить список элементов по классу
export const nodeList = document.querySelectorAll(".pos");

// id соседа из nodelist
let id = "";
// сосед (строка)
let neighbors = "";
// номера входящие в соседа
let numbers = [];
// ставка на соседа
let bet = 0;
// ставка на серию
let seriesBet = 0;
// сосед (число)
let num = "";
// массив информации:
let infoArr = [];

// функция модальное окно JS соседи:
function modalWindow(neighbor_id, openBtn, closeBtn, modal, num, bet_id) {
    // console.trace()
    let maxBet = minMax.maxBet;
    let minBet = minMax.minBet;
    let min = 0;
    let max = 0;
    if (minBet == 25) {
        min = minBet * 5;
        max = maxBet * 5;
    } else if (minBet == 1 || 5) {
        min = 25;
        max = maxBet * 5;
    };
    neighbor_id = document.getElementById(neighbor_id);

    let modalWin = modalWin_1(openBtn, modal, closeBtn, num, bet_id, min, max);
    neighbor_id.innerHTML = modalWin;

    openBtn = document.getElementById(openBtn);
    closeBtn = document.getElementById(closeBtn);
    modal = document.getElementById(modal);

    // 3 функции открытия и закрытия диалогового окна
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });
    modal.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === modal) modal.close();
    });
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // записать значение в переменную bet:
        bet = document.getElementById(bet_id).value;
        if (bet == '') {
            bet = 0;
        } else if (bet < 25) {
            console.log("не корректная ставка");
            info.innerHTML = `не корректная ставка`;
            return;
        };
        // очистить объект для пересчёта:
        for (let i = 0; i < 37; i++) {
            let sel = "number_" + i;
            rltPos.num[sel] = [];
        };
        console.log(`сосед: ${num}`);
        console.log(`выбранные номера: ${numbers}`);
        console.log(`ставка: ${bet}`);

        // вывод информации юзеру:
        // info.innerHTML = ``;
        info.innerHTML = `
        сосед: ${num}<br>
        ставка: ${bet}<br>
        выбранные номера: ${numbers}<br>
        `;

        modal.close();
    });
    return bet;
};

// цикл размножает модальные окна соседей
propagatesNeighbor(modalWindow);

// функция модальное окно JS серия:
function modalWindow_2(series, openBtn, closeBtn, modal, bet_id) {
    // console.trace()
    let maxBet = minMax.maxBet;
    let minBet = minMax.minBet;
    let classOpenBtn = "openBtn";
    let nameSeries = series;
    let min = 0;

    if (minBet == 25) {
        switch (nameSeries) {
            case "tier":
                classOpenBtn = "tier-series";
                min = 150;
                break;
            case "orphelins":
                classOpenBtn = "orphelins-series";
                min = 125;
                break;
            case "voisins":
                classOpenBtn = "voisins-series";
                min = 225;
                break;
            case "spiel":
                classOpenBtn = "spiel-series";
                min = 100;
                break;
        };
    } else if (minBet == 1 || 5) {
        switch (nameSeries) {
            case "tier":
                classOpenBtn = "tier-series";
                min = 30;
                break;
            case "orphelins":
                classOpenBtn = "orphelins-series";
                min = 25;
                break;
            case "voisins":
                classOpenBtn = "voisins-series";
                min = 45;
                break;
            case "spiel":
                classOpenBtn = "spiel-series";
                min = 20;
                break;
        };
    };

    series = document.getElementById(series);
    let modalWin = modalWin_2(classOpenBtn, openBtn, closeBtn, modal, nameSeries, bet_id, min);
    series.innerHTML = modalWin;

    openBtn = document.getElementById(openBtn);
    closeBtn = document.getElementById(closeBtn);
    modal = document.getElementById(modal);

    // 3 функции открытия и закрытия диалогового окна
    openBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.showModal();
    });
    modal.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target === modal) modal.close();
    });
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // записать значение в переменную bet:
        bet = document.getElementById(bet_id).value;

        if (bet == '') {
            bet = 0;
        } else if (nameSeries == "spiel" && bet < 20) {
            console.log("не корректная ставка");
            info.innerHTML = `не корректная ставка`;
            return;
        } else if (nameSeries == "orphelins" && bet < 25) {
            console.log("не корректная ставка");
            info.innerHTML = `не корректная ставка`;
            return;
        }
        else if (nameSeries == "tier" && bet < 30) {
            console.log("не корректная ставка");
            info.innerHTML = `не корректная ставка`;
            return;
        }
        else if (nameSeries == "voisins" && bet < 45) {
            console.log("не корректная ставка");
            info.innerHTML = `не корректная ставка`;
            return;
        };

        // очистить объект для пересчёта:
        // for (let i = 0; i < 37; i++) {
        //     let sel = "number_" + i;
        //     rltPos.num[sel] = [];
        // };
        // console.log(`серия: ${nameSeries}`);
        // console.log(`ставка: ${bet}`);
        // console.log(bet_id);

        // вывод информации юзеру:
        info.innerHTML = `серия: ${nameSeries}<br>ставка: ${bet}<br>`;
        modal.close();
    });
    return bet;
};

// цикл размножает модальные окна серий
let series = propagatesSeries(modalWindow_2);

// ставка:
function bettingOnNeighbor() {
    const validSeries = ["tier", "orphelins", "voisins", "spiel"];
    nodeList.forEach(element => {
        element.addEventListener('click', () => {
            console.log(`клик на элемент: ${element.id}`);
            id = element.id;

            if (validSeries.some(elem => id.includes(elem))) {
                series = id;
                console.log(`серия: ${series}`);
                seriesBet = bet;
            };

            // сосед номера:
            neighbors = track[id];
            try {
                // выбранные номера:
                numbers = track[id].numbers;
                // номер:
                num = numbers[2];
                // ставка на соседа:
                neighbors.bet = bet;
            } catch (err) {
                // console.error(err);
            };
            // подсветка ставок
            const inlineStyles = element.style;
            if (bet >= 25) {
                element.setAttribute('style', 'background-color: rgb(242, 247, 96); opacity: 90%; ');
            } else {
                element.setAttribute('style', 'background-color: none; opacity: 0%; ');
            };
        });
    });
    console.log(`id: ${id}`);
    console.log(`num: ${num}`);
    console.log(`numbers: ${numbers}`);
    console.log(`series: ${series}`);
    console.log(`bet: ${bet}`);
    console.log(`seriesBet: ${seriesBet}`);
    return {
        id: id,
        num: num,
        numbers: numbers,
        series: series,
        bet: bet,
        seriesBet: seriesBet
    };
};
bettingOnNeighbor();
// bettingOnNeighbor(id, num, numbers, series, neighbors, bet);
// bettingOnNeighbor(nodeList, info, bet, series);

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    console.trace()

    let maxBet = minMax.maxBet;
    let minBet = minMax.minBet;
    // обнуление позиций поля:
    for (let i = 0; i < 37; i++) {
        let select = "number_" + i;
        rltPos.num[select] = [];
    };

    // крайняя ставка
    // const values = bettingOnNeighbor();
    // const values = bettingOnNeighbor(id, num, numbers, series, neighbors, bet);
    // console.log(values);

    // по чём играет:
    let posBet = 0;
    // сдача 1
    let residue_1 = 0;
    // сдача 2
    let residue_2 = 0;
    // массив сдачи 1
    let residue_Arr_1 = [];
    // массив сдачи 2
    let residue_Arr_2 = [];
    // общая сдача (сумма)
    let allResidue = 0;
    // превышение:
    let excess = [];
    // функция подсчёта
    function trackBets() {
        // цикл прохода по треку:
        for (let i = 0; i < 37; i++) {
            // селектор для объекта track:
            let select = "neighbor_" + i;
            let trackBet = track[select].bet;
            let trackNumb = track[select].numbers;
            // если есть ставка:
            if (trackBet > 0) {
                // проверка кратности 25 (без сдачи)
                if (trackBet % 25 == 0) {
                    posBet = trackBet / 5;
                    if (posBet >= maxBet) {
                        console.log(`сосед номера: ${i} играет по: ${maxBet}`);
                        infoArr.push(`сосед: ${i} играет по: ${maxBet}<br>`);
                    } else {
                        console.log(`сосед номера: ${i} играет по: ${posBet}`);
                        infoArr.push(`сосед: ${i} играет по: ${posBet}<br>`);
                    }
                } else {
                    // есть сдача 1
                    residue_1 = trackBet % 25;
                    trackBet = trackBet - residue_1;
                    posBet = trackBet / 5;
                    residue_Arr_1.push(residue_1);
                    if (posBet >= maxBet) {
                        console.log(`сосед номера: ${i} играет по: ${maxBet}`);
                        infoArr.push(`сосед: ${i} играет по: ${maxBet}<br>`);
                    } else {
                        console.log(`сосед номера: ${i} играет по: ${posBet}`);
                        console.log(`есть сдача: ${residue_1}`);
                        infoArr.push(`сосед: ${i} играет по: ${posBet}<br>есть сдача: ${residue_1}<br>`);
                    }
                };
                // заполняем ячейки позиций
                trackNumb.forEach((element) => {
                    // селектор для объекта rltPos
                    let betOfNum = "number_" + element;
                    rltPos.num[betOfNum].push(posBet);
                });
                // ! проверочный список трека:
                // for (let i = 0; i < 37; i++) {
                //     let select = "neighbor_" + i;
                //     console.log(`${select}: ${track[select].bet}`);
                // };
                // ! проверочный список поля:
                for (let i = 0; i < 37; i++) {
                    let select = "number_" + i;
                    console.log(`${select}: ${rltPos.num[select]}`);
                };
            };
            trackBet = 0;
            continue;
        };
        // счётчики:
        let count_1 = 0;
        let count_2 = 0;
        // цикл прохода по треку:
        for (let i = 0; i < 37; i++) {
            let select = "number_" + i;
            let fillStr_Up = rltPos.num[select].reduce(function (a, b) {
                return a + b;
            }, 0);
            // сколько номеров играет
            if (fillStr_Up > 0) {
                count_1 += 1;
            };
            // ! ставка в каждый номер по отдельности:
            // console.log(`${select}: ${fillStr_Up}`);
            // превышение с номера:
            if (fillStr_Up > maxBet) {
                residue_2 = fillStr_Up - maxBet;
                residue_Arr_2.push(residue_2);
                // residue_Arr_2.join(' ');
                // residue_Arr_2.join(''); надо как-то убрать запятую вначале...
                console.log(`превышение с номера ${i}: ${residue_2}`);
                // сколько номеров играет до максимума:
                count_2 += 1;
                excess.push(`превышение с номера ${i}: ${residue_2}<br>`);
            };
        };
        // общая сдача 1:
        let sum1 = residue_Arr_1.reduce(function (a, b) {
            return a + b;
        }, 0);
        // console.log(`общая сдача 1: ${sum1}`);
        // общая сдача 2:
        let sum2 = residue_Arr_2.reduce(function (a, b) {
            return a + b;
        }, 0);
        // console.log(`общая сдача 2: ${sum2}`);
        allResidue = sum1 + sum2;
        console.log(`общая сдача с трека: ${allResidue}`);
        return {
            count_1: count_1,
            count_2: count_2,
            allResidue: allResidue,
            excess: excess
        };
    };
    const valuesDone = trackBets();

    // ставка на серию:
    if (series.includes("neighbor")) {
        return;
    };
    // вычисления:
    seriesController(minMax.maxBet, series, seriesBet);

    // информация с соседей:
    // infoArr.push(``);
    infoArr.push(`
        <br>
        общая сдача с трека: ${valuesDone.allResidue}<br>
        всего номеров играет: ${valuesDone.count_1}<br>
        номеров играет до максимума: ${valuesDone.count_2}<br>
        <br>${excess}<br>
        `);
    // infoArr.join('');

    // проверка ставка ли на серию?
    // if (series.includes("neighbor")) {
    //     infoArr.push('');
    // } else if (series == "tier") {
    //     betWithoutChange = bet - change;
    //     breakingStep = "в tier не ломается";
    //     infoArr.push(`<br>серия: ${series}<br\/>ставка: ${bet} <br\/> шаг: ${breakingStep}<br\/> чистая ставка: ${betWithoutChange}<br\/> играет по:  ${plays}<br\/> сдача: ${change}<br\/>`);
    // } else if (series != "tier") {
    //     betWithoutChange = bet - change;
    //     infoArr.push(`<br>серия: ${series}<br\/>ставка: ${bet} <br\/> шаг ломается от: ${breakingStep}<br\/> чистая ставка: ${betWithoutChange}<br\/> играет по:  ${plays}<br\/> сдача: ${change}<br\/>`);
    // };

    // общий вывод информации
    info.innerHTML = infoArr.join('');

    // проверка сколько номеров играет (соседей):
    // if (valuesDone.count_1 == 0) {
    //     info.innerHTML = "";
    // } else {
    //     info.innerHTML = infoArr;
    // };
};