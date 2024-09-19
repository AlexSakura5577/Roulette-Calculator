import { minSeriesBets } from "../../consts/track/minSeriesBets.js";

function incorrectBetCheckSeries(info, bet, nameSeries) {
    bet = bet === '' ? 0 : parseFloat(bet); // Приводим значение ставки к числу

    if (bet < 0) {
        console.log("Ставка не может быть отрицательной");
        info.innerHTML = "Ставка не может быть отрицательной";
        return;
    }
    if (nameSeries in minSeriesBets && bet < minSeriesBets[nameSeries]) {
        console.log("Некорректная ставка");
        info.innerHTML = "Некорректная ставка";
        return;
    } else {
        console.log(`Корректная ставка`);
        console.log(`серия: ${nameSeries}; ставка: ${bet}`);
        info.innerHTML = `серия: ${nameSeries}<br>ставка: ${bet}<br>`;
        return;
    }
};
export { incorrectBetCheckSeries };