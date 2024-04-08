// импорты:
// import "../main/app.js";
import { minBet } from "../main/app.js";
import { maxBet } from "../main/app.js";
import { rouletteSeries } from "../main/app.js";
import { rltPos } from "../main/app.js";

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
// текст в модальном окне
let text = ""; // ! переменная нужна
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
// функция модальное окно JS:
function modalWindow(neighbor_id, openBtn, closeBtn, modal, num, bet_id) {
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
                        <input name="bet" class="input track_bet" type="number" minlength="2" maxlength="8" size="8" min="25" id=${bet_id}>
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
        // console.log(e.target);
        e.preventDefault();
        if (e.target === modal) modal.close();
    });
    closeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        // текст номера в модальном окне:
        text = document.getElementsByTagName('b');
        // записать значение в переменную bet:
        bet = document.getElementById(bet_id).value;
        if (bet == '') {
            bet = 0;
        } else if (bet < 25) {
            console.log("не корректная ставка");
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
// ставка на соседа:
function bettingOnNeighbor() {
    // получить список элементов по классу
    const nodeList = document.querySelectorAll(".pos");
    nodeList.forEach(element => {
        element.addEventListener('click', () => {
            id = element.id;
            // серии:
            // if (id === "tier" || "orphelins" || "voisins" || "spiel") {
            //     console.log(id);
            //     return;
            // };
            // сосед номера:
            neighbors = track[id];
            // выбранные номера:
            numbers = track[id].numbers;
            // номер:
            num = numbers[2];
            // ставка на соседа:
            neighbors.bet = bet;
            // console.log((`выбранные номера: ${numbers}`));
            // console.log((`ставка: ${track[id].bet}`));
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

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
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
    // массив общей сдачи:
    let residue_ArrAll = [];
    // общая сдача (сумма)
    let allResidue = 0;
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
                    console.log(`сосед номера: ${i} играет по: ${posBet}`);
                } else {
                    // есть сдача 1
                    residue_1 = trackBet % 25;
                    trackBet = trackBet - residue_1;
                    posBet = trackBet / 5;
                    residue_Arr_1.push(residue_1);
                    console.log(`сосед номера: ${i} играет по: ${posBet}`);
                    console.log(`есть сдача: ${residue_1}`);
                };
                // заполняем ячейки позиций
                trackNumb.forEach((element) => {
                    // селектор для объекта rltPos
                    let betOfNum = "number_" + element;
                    rltPos.num[betOfNum].push(posBet);
                    // console.log(`rltPos_${betOfNum}: ${rltPos.num[betOfNum]}`);
                });
                // // проверочный список трека:
                // for (let i = 0; i < 37; i++) {
                //     let select = "neighbor_" + i;
                //     console.log(`${select}: ${track[select].bet}`);
                // };
                // // проверочный список поля:
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
            console.log(`${select}: ${fillStr_Up}`);
            // превышение с номера:
            if (fillStr_Up > maxBet) {
                residue_2 = fillStr_Up - maxBet;
                residue_Arr_2.push(residue_2);
                console.log(`превышение с номера ${i}: ${residue_2}`);
                // сколько номеров играет до максимума:
                count_2 += 1;
            };

            // console.log(`${select}:  ${rltPos.num[select]}`);
        };
        console.log(`всего номеров играет: ${count_1}`);
        console.log(`номеров играет до максимума: ${count_2}`);
        // общая сдача 1:
        let sum1 = residue_Arr_1.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log(`общая сдача 1: ${sum1}`);

        let sum2 = residue_Arr_2.reduce(function (a, b) {
            return a + b;
        }, 0);
        console.log(`общая сдача 2: ${sum2}`);

        return;
    };
    trackBets();

    // console.log(posBet);
    // console.log(values.numbers);
    // console.log(track.neighbor_20);
    // console.log(track.neighbor_14);
    // console.log(track.neighbor_31);
    console.log(values);
};


