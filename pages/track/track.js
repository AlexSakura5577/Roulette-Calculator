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
// ставка расставленная по номерам
let betOfNumbers = "";
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
        // записать значение в переменную bet
        text = document.getElementsByTagName('b');
        // console.log(`Сосед номера: ${num}`);
        bet = document.getElementById(bet_id).value;
        if (bet == '') {
            bet = 0;
        } else if (bet < 25) {
            console.log("не корректная ставка");
            return;
        };
        // console.log(`ставка: ${bet}`);
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
            console.log((`выбранные номера: ${numbers}`));
            console.log((`ставка: ${track[id].bet}`));
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

    for (let i = 0; i < 37; i++) {
        let select = "neighbor_" + i;
        let trackBet = track[select].bet;
        // если есть ставка:
        if (trackBet > 0) {
            function trackBets() {
                // проверка кратности 25
                if (bet % 25 == 0) {
                    let posBet = bet / 5;
                    // console.log(`posBet: ${posBet}`);
                    console.log(`сосед номера: ${i} играет по: ${posBet}`);
                } else {
                    // сдача 1
                    let residue_1 = bet % 25;
                    bet = bet - residue_1;
                    let posBet = bet / 5;
                    console.log(`есть сдача: ${residue_1}`);
                    console.log(`сосед номера: ${i} играет по: ${posBet}`);
                };
                return;
            }
            trackBets();
        };
    };

    // console.log(track.neighbor_20);
    // console.log(track.neighbor_14);
    // console.log(track.neighbor_31);
    console.log(values);
};


