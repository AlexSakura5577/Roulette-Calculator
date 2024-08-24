import { minMax } from "../controllers/localStorageRead.js";
import { updateMinMax } from "../controllers/updateMinMax.js";
import { resetValues } from "../controllers/resetHandler.js";
import { multiCompleteController } from "./functions/multi-complete/multiCompleteController.js";

// выбор минимума максимума рулетки:
document.getElementById('minmax').addEventListener('change', function () {
    let minmaxValue = this.value;
    updateMinMax(minmaxValue, minMax);
});

// кнопка Сброс:
reset.onclick = function () {
    resetValues();
};

const nodeList = document.querySelectorAll(".radioBtn");

calculate.onclick = function () {
    // выполнение вычислений:
    multiCompleteController(["массив"]);
};