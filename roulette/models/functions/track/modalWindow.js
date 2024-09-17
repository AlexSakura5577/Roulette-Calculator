import { minMax } from "../../../controllers/localStorageRead.js";
import { modalWin_1 } from "../../consts/track/modalWin_1.js";
import { rltPos } from "../../consts/rltPos.js";

// ! не используется

// user info:
const info = document.getElementById('user_info');
// номера входящие в соседа
let numbers = [];
// ставка на соседа
let bet = 0;

// функция модальное окно JS соседи:
function modalWindow(neighbor_id, openBtn, closeBtn, modal, num, bet_id) {
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
        info.innerHTML = `
          сосед: ${num}<br>
          ставка: ${bet}<br>
          выбранные номера: ${numbers}<br>
          `;

        modal.close();
    });
    return bet;
};
export { modalWindow };