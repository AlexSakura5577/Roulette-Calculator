import { minMax } from "../../../controllers/localStorageRead.js";
import { modalWin_1 } from "../../consts/track/modalWin_1.js";
import { neighborMinMax } from "../../functions/track/neighborMinMax.js";
import { openWindowsControl } from "./openWindowsControl.js";
import { incorrectBetCheckNeighbor } from "./incorrectBetCheckNeighbor.js";

// ! не используется

// user info:
const info = document.getElementById('user_info');
// номера входящие в соседа
// let numbers = [];
// ставка на соседа
// let bet = 0;

// функция модальное окно JS соседи:
function modalWindow(neighbor_id, openBtn, closeBtn, modal, num, bet_id) {
    let maxBet = minMax.maxBet;
    let minBet = minMax.minBet;
    let min = neighborMinMax(minBet, maxBet).min;
    let max = neighborMinMax(minBet, maxBet).max;

    let bet = 0;
    let numbers = [];

    neighbor_id = document.getElementById(neighbor_id);

    let modalWin = modalWin_1(openBtn, modal, closeBtn, num, bet_id, min, max);
    try {
        neighbor_id.innerHTML = modalWin;
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
            incorrectBetCheckNeighbor(info, bet, num, numbers, min);
            console.log(numbers);
            modal.close();
        });
    } catch (error) {
        // console.log(error);
    }

    return {
        bet: bet,
        numbers: numbers
    }

};
export { modalWindow };