import { neighborMinMax } from "../models/functions/track/neighborMinMax.js"
import { propagatesNeighbor } from "../models/functions/track/propagatesNeighbor.js"
// import { modalWindow } from "../models/trackModel.js"
import { modalWindow } from "../models/functions/track/modalWindow.js"

// updateMinMax
export function updateMinMax(value, minMax) {
    // выбираем элемент select minmax
    switch (value) {
        case "1-50":
            minMax.minBet = 1;
            minMax.maxBet = 50;
            break;
        case "1-100":
            minMax.minBet = 1;
            minMax.maxBet = 100;
            break;
        case "5-200":
            minMax.minBet = 5;
            minMax.maxBet = 200;
            break;
        case "5-300":
            minMax.minBet = 5;
            minMax.maxBet = 300;
            break;
        case "25-500":
            minMax.minBet = 25;
            minMax.maxBet = 500;
            break;
        case "100-5000":
            minMax.minBet = 100;
            minMax.maxBet = 5000;
            break;
        default:
            console.warn("Некорректное значение для minmax");
            return; // Возвращаемся, если значение неверное
    };
    // Обновляем localStorage
    localStorage.setItem('minBet', minMax.minBet);
    localStorage.setItem('maxBet', minMax.maxBet);
    neighborMinMax(minMax.minBet, minMax.maxBet);
    propagatesNeighbor(modalWindow);
};