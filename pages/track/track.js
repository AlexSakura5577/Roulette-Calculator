// импорты:
// import "../main/app.js";
// import { minBet } from "../main/app.js";
// import { maxBet } from "../main/app.js";
import { rouletteSeries } from "../main/app.js";
import { rltPos } from "../main/app.js";
import { payoutRatios } from "../main/app.js";
// import { seriesCalc } from "../series/series.js";
// import { calculateBTN } from "../series/series.js";

// localStorage
let minBet = localStorage.getItem('minBet');
let maxBet = localStorage.getItem('maxBet');
minmax.value = `${minBet}-${maxBet}`;
// выбор минимума максимума рулетки:
minmax.onclick = function () {
    // выбор минимума-максимума рулетки:
    let minmax = document.getElementById('minmax').value; // выбираем элемент select minmax
    minBet = localStorage.getItem('minBet');
    maxBet = localStorage.getItem('maxBet');
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
    };
};

// кнопка Сброс:
reset.onclick = function () {
    location.reload();
    localStorage.setItem('minBet', 1);
    localStorage.setItem('maxBet', 100);
    return;
};

export const track = {
    "neighbor_0": {
        numbers: [15, 32, 0, 26, 3],
        bet: 0
    },
    "neighbor_1": {
        numbers: [16, 33, 1, 20, 14],
        bet: 0
    },
    "neighbor_2": {
        numbers: [17, 25, 2, 21, 4],
        bet: 0
    },
    "neighbor_3": {
        numbers: [12, 35, 3, 26, 0],
        bet: 0
    },
    "neighbor_4": {
        numbers: [2, 21, 4, 19, 15],
        bet: 0
    },
    "neighbor_5": {
        numbers: [23, 10, 5, 24, 16],
        bet: 0
    },
    "neighbor_6": {
        numbers: [13, 27, 6, 34, 17],
        bet: 0
    },
    "neighbor_7": {
        numbers: [18, 29, 7, 28, 12],
        bet: 0
    },
    "neighbor_8": {
        numbers: [10, 23, 8, 30, 11],
        bet: 0
    },
    "neighbor_9": {
        numbers: [14, 31, 9, 22, 18],
        bet: 0
    },
    "neighbor_10": {
        numbers: [8, 23, 10, 5, 24],
        bet: 0
    },
    "neighbor_11": {
        numbers: [8, 30, 11, 36, 13],
        bet: 0
    },
    "neighbor_12": {
        numbers: [7, 28, 12, 35, 3],
        bet: 0
    },
    "neighbor_13": {
        numbers: [11, 36, 13, 27, 6],
        bet: 0
    },
    "neighbor_14": {
        numbers: [1, 20, 14, 31, 9],
        bet: 0
    },
    "neighbor_15": {
        numbers: [4, 19, 15, 32, 0],
        bet: 0
    },
    "neighbor_16": {
        numbers: [5, 24, 16, 33, 1],
        bet: 0
    },
    "neighbor_17": {
        numbers: [6, 34, 17, 25, 2],
        bet: 0
    },
    "neighbor_18": {
        numbers: [9, 22, 18, 29, 7],
        bet: 0
    },
    "neighbor_19": {
        numbers: [21, 4, 19, 15, 32],
        bet: 0
    },
    "neighbor_20": {
        numbers: [33, 1, 20, 14, 31],
        bet: 0
    },
    "neighbor_21": {
        numbers: [25, 2, 21, 4, 19],
        bet: 0
    },
    "neighbor_22": {
        numbers: [31, 9, 22, 18, 29],
        bet: 0
    },
    "neighbor_23": {
        numbers: [30, 8, 23, 10, 5],
        bet: 0
    },
    "neighbor_24": {
        numbers: [10, 5, 24, 16, 33],
        bet: 0
    },
    "neighbor_25": {
        numbers: [34, 17, 25, 2, 21],
        bet: 0
    },
    "neighbor_26": {
        numbers: [35, 3, 26, 0, 32],
        bet: 0
    },
    "neighbor_27": {
        numbers: [36, 13, 27, 6, 34],
        bet: 0
    },
    "neighbor_28": {
        numbers: [29, 7, 28, 12, 35],
        bet: 0
    },
    "neighbor_29": {
        numbers: [22, 18, 29, 7, 28],
        bet: 0
    },
    "neighbor_30": {
        numbers: [23, 8, 30, 11, 36],
        bet: 0
    },
    "neighbor_31": {
        numbers: [20, 14, 31, 9, 22],
        bet: 0
    },
    "neighbor_32": {
        numbers: [19, 15, 32, 0, 26],
        bet: 0
    },
    "neighbor_33": {
        numbers: [24, 16, 33, 1, 20],
        bet: 0
    },
    "neighbor_34": {
        numbers: [27, 6, 34, 17, 25],
        bet: 0
    },
    "neighbor_35": {
        numbers: [28, 12, 35, 3, 26],
        bet: 0
    },
    "neighbor_36": {
        numbers: [30, 11, 36, 13, 27],
        bet: 0
    }
};

// поворот экрана:
// document.body.style.transform = 'rotate(90deg)';

// переменные:
// user info:
const info = document.getElementById('user_info');
// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
// текст в модальном окне
// let text = ""; 
// id соседа из nodelist
let id = "";
// сосед (строка)
let neighbors = "";
// номера входящие в соседа
let numbers = [];
// ставка на соседа
let bet = 0;
// сосед (число)
let num = "";
// массив информации:
let infoArr = [];

// ломается шаг:
let breakingStep = 0;
// ставка без сдачи:
let betWithoutChange = 0;
// по чём играет:
let plays = 0;
// остаток от деления (кратность):
let residue = 0;
// сдача:
let change = 0;

// функция модальное окно JS соседи:
function modalWindow(neighbor_id, openBtn, closeBtn, modal, num, bet_id) {
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
    neighbor_id.innerHTML = `<button class="openBtn" id=${openBtn}>
    </button>
    <dialog class="modal" id=${modal}>
        <span><h3>Сосед номера:</h3></span><b>${num}</b>
        <div class="modal_inner">
            <h3>Введите ставку</h3>
            <br>
            <div>
                <p>
                    <label>
                        <input name="bet" class="input track_bet" type="number" minlength="2" maxlength="8" size="8" min="${min}" max="${max}" id=${bet_id}>
                    </label>
                </p>
            </div>
            <br>
            <button class="closeBtn" id=${closeBtn}>
                <h3>ОК</h3>
            </button>
        </div>
    </dialog>`

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
        info.innerHTML = `сосед: ${num}<br>выбранные номера: ${numbers}<br>ставка: ${bet}<br>`;

        modal.close();
    });
    return bet;
};
// цикл размножает модальные окна
for (let i = 0; i < 37; i++) {
    let neighbor = "neighbor_" + i;
    let openBtn = "openBtn_" + i;
    let closeBtn = "closeBtn_" + i;
    let modal = "modal_" + i;
    let bet = "bet_" + i;
    modalWindow(neighbor, openBtn, closeBtn, modal, i, bet);
};
// функция модальное окно JS серия:
function modalWindow_2(series, openBtn, closeBtn, modal, bet_id) {
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
    series.innerHTML = `<button class=${classOpenBtn} id=${openBtn}>
    </button>
    <dialog class="modal" id=${modal}>
        <span><h3>Серия:</h3></span><b>${nameSeries}</b>
        <div class="modal_inner">
            <h3>Введите ставку</h3>
            <br>
            <div>
                <p>
                    <label>
                        <input name="bet" class="input track_bet" type="number" minlength="2" maxlength="8" size="8" min="${min}" id=${bet_id}>
                    </label>
                </p>
            </div>
            <br>
            <button class="closeBtn" id=${closeBtn}>
                <h3>ОК</h3>
            </button>
        </div>
    </dialog>`

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
        }

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
let series = "";
for (let i = 37; i < 41; i++) {
    switch (i) {
        case 37:
            series = "tier";
            break;
        case 38:
            series = "orphelins";
            break;
        case 39:
            series = "voisins";
            break;
        case 40:
            series = "spiel";
            break;
    }
    let openBtn = "openBtn_" + i;
    let closeBtn = "closeBtn_" + i;
    let modal = "modal_" + i;
    let bet = "bet_" + i;
    modalWindow_2(series, openBtn, closeBtn, modal, bet);
};

// ставка:
function bettingOnNeighbor() {
    nodeList.forEach(element => {
        element.addEventListener('click', () => {
            id = element.id;
            if (id === "tier" || "orphelins" || "voisins" || "spiel") {
                series = id;
                // console.log(`серия: ${series}`);
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
                // console.log(id);
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
    return {
        id: id,
        num: num,
        numbers: numbers,
        bet: bet
    };
};
bettingOnNeighbor();

// функция подсчёта серии:
function seriesCalc(maxBet, series, bet) {
    // проверка на кратность:
    let multiplicity = bet % 5 == 0;
    if (multiplicity == false) {
        // сдача 1:
        residue = bet % 5;
        bet = bet - residue;
    } else {
        bet = bet;
    };
    breakingStep = 0;
    // рассчёты:
    switch (series) {
        case "tier":
            //  проверка на максимум:
            let maxTier = maxBet * rouletteSeries.tier.chips;
            if (bet >= maxTier) {
                change = bet - maxTier;
                plays = maxBet * payoutRatios.split.position;
                console.log(`максимум на tier: ${maxTier}`);
                return;
            } else if (bet < maxTier) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.tier.position;
                let diff_2 = bet / rouletteSeries.tier.position % 5;
                plays = diff_1 - diff_2;
                let cleanBet = plays * rouletteSeries.tier.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
            };
            break;
        case "orphelins":
            //  проверка на максимум:
            let maxOrphelins = maxBet * rouletteSeries.orphelins.chips;
            // ломается шаг:
            breakingStep = payoutRatios.numb.position * rouletteSeries.orphelins.position * maxBet;
            if (bet >= maxOrphelins) {
                change = bet - maxOrphelins;
                plays = maxBet * payoutRatios.split.position;
                console.log(`максимум на orphelins: ${maxOrphelins}`);
                return;
            } else if (bet >= breakingStep) {
                // рассчёты:
                bet = bet - breakingStep;
                let diff_1 = bet / 4;
                let diff_2 = bet / 4 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 4;
                let diff_3 = bet - cleanBet;
                plays = maxBet + plays_1;
                change = diff_3 + residue;
            } else if (bet < maxOrphelins) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.orphelins.position;
                let diff_2 = bet / rouletteSeries.orphelins.position % 5;
                plays = diff_1 - diff_2;
                let cleanBet = plays * rouletteSeries.orphelins.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
                // консоль-логи вычислений:
                // console.log(diff_1);
                // console.log(diff_2);
                // console.log(cleanBet);
                // console.log(diff_3);
            };
            break;
        case "voisins":
            //  проверка на максимум:
            let maxVoisins = maxBet * rouletteSeries.voisins.sumStrUps;
            // ломается шаг:
            breakingStep = 1.5 * rouletteSeries.voisins.position * maxBet;
            if (bet >= maxVoisins) {
                change = bet - maxVoisins;
                plays = maxBet * payoutRatios.split.position;
                console.log(`максимум на voisins: ${maxVoisins}`);
                return;
            } else if (bet >= breakingStep) {
                // рассчёты:
                bet = bet - breakingStep;
                let diff_1 = bet / 7;
                let diff_2 = bet / 7 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 7;
                let diff_3 = bet - cleanBet;
                plays = (maxBet * 1.5) + plays_1;
                change = diff_3 + residue;
            } else if (bet < maxVoisins) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.voisins.position;
                let diff_2 = bet / rouletteSeries.voisins.position % 5;
                plays = diff_1 - diff_2;
                let cleanBet = plays * rouletteSeries.voisins.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
                // консоль-логи вычислений:
                // console.log(diff_1);
                // console.log(diff_2);
                // console.log(cleanBet);
                // console.log(diff_3);
            };
            break;
        case "spiel":
            //  проверка на максимум:
            let maxSpiel = maxBet * rouletteSeries.spiel.sumStrUps;
            // ломается шаг:
            breakingStep = payoutRatios.numb.position * rouletteSeries.spiel.position * maxBet;
            if (bet >= maxSpiel) {
                change = bet - maxSpiel;
                plays = maxBet * payoutRatios.split.position;
                console.log(`максимум на spiel: ${maxSpiel}`);
                return;
            } else if (bet >= breakingStep) {
                // рассчёты:
                bet = bet - breakingStep;
                let diff_1 = bet / 3;
                let diff_2 = bet / 3 % 5;
                let plays_1 = diff_1 - diff_2;
                let cleanBet = plays_1 * 3;
                let diff_3 = bet - cleanBet;
                plays = maxBet + plays_1;
                change = diff_3 + residue;
            } else if (bet < maxSpiel) {
                // рассчёты:
                let diff_1 = bet / rouletteSeries.spiel.position;
                let diff_2 = bet / rouletteSeries.spiel.position % 5;
                plays = diff_1 - diff_2;
                let cleanBet = plays * rouletteSeries.spiel.position;
                let diff_3 = bet - cleanBet;
                change = diff_3 + residue;
            };
            break;
        default:
            console.log("выберите серию");
    };
    return;
};

// функция "Рассчитать":
const calculateBTN = function calculateBTN() {
    // вычисления:
    seriesCalc(maxBet, series, bet);
    return;
};

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    let minmax = document.getElementById('minmax').value; // выбираем элемент select minmax
    minBet = localStorage.getItem('minBet');
    maxBet = localStorage.getItem('maxBet');
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
    };
    // обнуление позиций поля:
    for (let i = 0; i < 37; i++) {
        let select = "number_" + i;
        rltPos.num[select] = [];
    };
    // крайняя ставка
    const values = bettingOnNeighbor();
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
                // for (let i = 0; i < 37; i++) {
                //     let select = "number_" + i;
                //     console.log(`${select}: ${rltPos.num[select]}`);
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
                console.log(`превышение с номера ${i}: ${residue_2}`);
                // сколько номеров играет до максимума:
                count_2 += 1;
                excess.push(`,превышение с номера ${i}: ${residue_2}<br>`);
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
    calculateBTN();

    // информация с соседей:
    infoArr.push(`<br>общая сдача с трека: ${valuesDone.allResidue}<br>всего номеров играет: ${valuesDone.count_1}<br>номеров играет до максимума: ${valuesDone.count_2}<br><br>${excess}<br>`);

    // информация с серий:
    if (series == "tier") {
        betWithoutChange = bet - change;
        breakingStep = "в tier не ломается";
        infoArr.push(`<br>серия: ${series}<br\/>ставка: ${bet} <br\/> шаг: ${breakingStep}<br\/> чистая ставка: ${betWithoutChange}<br\/> играет по:  ${plays}<br\/> сдача: ${change}<br\/>`);
    } else if (series != "tier") {
        betWithoutChange = bet - change;
        infoArr.push(`<br>серия: ${series}<br\/>ставка: ${bet} <br\/> шаг ломается от: ${breakingStep}<br\/> чистая ставка: ${betWithoutChange}<br\/> играет по:  ${plays}<br\/> сдача: ${change}<br\/>`);
    };

    // общий вывод информации
    info.innerHTML = infoArr;

    // проверка сколько номеров играет (соседей):
    // if (valuesDone.count_1 == 0) {
    //     info.innerHTML = "";
    // } else {
    //     info.innerHTML = infoArr;
    // };

    // консоль-логи переменных для трека:
    console.log(`серия: ${series}`);
    console.log(`ставка: ${bet}`);
    console.log(`шаг ломается от: ${breakingStep}`);
    console.log(`чистая ставка: ${betWithoutChange}`);
    console.log(`играет по:  ${plays}`);
    console.log(`сдача: ${change}`);

};


