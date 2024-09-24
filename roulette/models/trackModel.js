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
import { modalWindow } from "./functions/track/modalWindow.js";
import { positionsCount } from "./functions/positionsCount.js";
import { cleanAllFieldPositions } from "./functions/track/cleanAllFieldPositions.js";
import { infoNeighbor } from "./functions/track/infoNeighbor.js";
import { incorrectBetCheckSeries } from "./functions/track/incorrectBetCheckSeries.js";
import { incorrectBetCheckNeighbor } from "./functions/track/incorrectBetCheckNeighbor.js";
import { openWindowsControl } from "./functions/track/openWindowsControl.js";
// import { closeWindowsControl } from "./functions/track/closeWindowsControl.js";
import { neighborMinMax } from "./functions/track/neighborMinMax.js";
import { allFieldPositions } from "./consts/track/allFieldPositions.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// поворот экрана:
try {
    const wrapper = document.querySelector('.wrapper');
    wrapper.style.transform = 'rotate(90deg)';
} catch (error) {
    // console.log(error);
}

// user info:
export const info = document.getElementById('user_info');

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
// function modalWindow(neighbor_id, openBtn, closeBtn, modal, num, bet_id) {
//     let maxBet = minMax.maxBet;
//     let minBet = minMax.minBet;
//     let min = neighborMinMax(minBet, maxBet).min;
//     let max = neighborMinMax(minBet, maxBet).max;

//     neighbor_id = document.getElementById(neighbor_id);

//     let modalWin = modalWin_1(openBtn, modal, closeBtn, num, bet_id, min, max);
//     try {
//         neighbor_id.innerHTML = modalWin;
//     } catch (error) {
//         // console.log(error);
//     }

//     openBtn = document.getElementById(openBtn);
//     modal = document.getElementById(modal);
//     closeBtn = document.getElementById(closeBtn);

//     openWindowsControl(openBtn, modal);

//     try {
//         closeBtn.addEventListener('click', (e) => {
//             e.preventDefault();
//             bet = document.getElementById(bet_id).value;
//             incorrectBetCheckNeighbor(info, bet, num, numbers, min);
//             modal.close();
//         });
//     } catch (error) {
//         // console.log(error);
//     }

//     return bet;
// };
// export { modalWindow };

// цикл размножает модальные окна соседей
propagatesNeighbor(modalWindow);

// функция модальное окно JS серия:
function modalWindow_2(series, openBtn, closeBtn, modal, bet_id) {
    // console.log(modalWindow_2.name);
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

    try {
        series.innerHTML = modalWin;
    } catch (error) {
        // console.log(error);
    }

    openBtn = document.getElementById(openBtn);
    modal = document.getElementById(modal);
    closeBtn = document.getElementById(closeBtn);

    openWindowsControl(openBtn, modal);

    try {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            bet = document.getElementById(bet_id).value;
            incorrectBetCheckSeries(info, bet, nameSeries);
            modal.close();
        });
    } catch (error) {
        // console.log(error);
    }

    return bet;
};

// цикл размножает модальные окна серий
let series = propagatesSeries(modalWindow_2);

// ставка:
function bettingOnNeighbor() {
    const validSeries = ["tier", "orphelins", "voisins", "spiel"];
    nodeList.forEach(element => {
        element.addEventListener('click', () => {
            // console.log(`клик на элемент: ${element.id}`);
            id = element.id;

            if (validSeries.some(elem => id.includes(elem))) {
                series = id;
                // console.log(`серия: ${series}`);
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
            } catch (error) {
                // console.log(error);
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
    // console.log(`id: ${id}`);
    // console.log(`num: ${num}`);
    // console.log(`numbers: ${numbers}`);
    // console.log(`series: ${series}`);
    // console.log(`bet: ${bet}`);
    // console.log(`seriesBet: ${seriesBet}`);
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
// bettingOnNeighbor(nodeList, id, neighbors, numbers, bet, series, seriesBet, num);
// bettingOnNeighbor(nodeList, info, bet, series);

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    let maxBet = minMax.maxBet;
    let minBet = minMax.minBet;
    let min = neighborMinMax(minBet, maxBet).min;
    let max = neighborMinMax(minBet, maxBet).max;

    //! очищение позиций поля:
    cleanAllFieldPositions();

    // все позиции поля:
    allFieldPositions();

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

    if (series !== "") {
        // считаем ставку на серию и добавляем позиции серий в массив rltPos:
        seriesController(minMax.maxBet, series, seriesBet);
    }

    // функция подсчёта ставок на трек:
    function trackBets() {
        // цикл прохода по треку:
        for (let i = 0; i < 37; i++) {
            let select = "neighbor_" + i;
            let trackBet = track[select].bet;
            let trackNumb = track[select].numbers;

            // если есть ставка:
            if (trackBet > 0) {
                console.log(`trackBet: ${trackBet}`);
                console.log(`min: ${min}`);
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

                // если ставка меньше минимума:
                // if (trackBet < min) {
                //     console.log("ставка меньше минимума");
                //     // allResidue = trackBet;
                //     // return { allResidue };
                //     return;
                // }

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
        // общая сдача 2:
        let sum2 = residue_Arr_2.reduce(function (a, b) {
            return a + b;
        }, 0);

        // общая сдача:
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
    // console.log(valuesDone);

    // информация с соседей:
    // infoArr.join(''); // убрать запятые вначале
    infoArr.push(`
        <br>
        общая сдача с трека: ${valuesDone.allResidue}<br>
        всего номеров играет: ${valuesDone.count_1}<br>
        номеров играет до максимума: ${valuesDone.count_2}<br>
        <br>${excess}<br>
        `);

    // общий вывод информации
    info.innerHTML = infoArr.join('');
};