// импорты:
// import "../main/app.js";
import { rouletteSeries } from "../main/app.js";
import { payoutRatios } from "../main/app.js";

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

    document.getElementById('info_3').innerHTML =
        `выплата: ${let_1}<br\/> цветом: ${let_2}<br\/> let_3:  ${let_3}<br\/> let_4: ${let_4}<br\/>`;

    return;
};



