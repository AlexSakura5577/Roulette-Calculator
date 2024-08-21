import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { strUpController } from "./functions/strUp/strUpController.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

// переменные:
const positions = document.getElementById('positions');
const bet = document.getElementById('bet');
const color = document.getElementById('color');
const cash = document.getElementById('cash');
const info = document.getElementById('info_3');

// выполнение вычислений:
strUpController();