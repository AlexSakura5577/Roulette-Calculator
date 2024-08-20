import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { completeController } from './functions/complete/completeController.js';

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// клик по кнопке "Рассчитать":
calculate.onclick = function () {
    // выбор минимума максимума рулетки:
    let max = minMax.maxBet;
    // выбор номера:
    let strUp = document.getElementById('str_up').value;
    // ввод суммы ставки:
    let completeBet = document.getElementById('completeBet').value;
    // выбор номинала:
    let nominal = document.getElementById('nominal').value;
    // выполнение вычислений:
    completeController(max, strUp, completeBet, nominal);
};