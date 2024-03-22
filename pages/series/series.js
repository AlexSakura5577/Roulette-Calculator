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
    // console.log(`мин-макс: ${minmax}`);
    // console.log(minBet);
    // console.log(maxBet);

    // выбор серии:
    let series = document.getElementById('series').value;
    // console.log(`серия: ${series}`);

    // введённая сумма ставки на серию:
    let bet = +document.getElementById('bet').value;
    // console.log(`ставка: ${bet}`);
    // по чём играет:
    let plays = 0;
    // остаток от деления (кратность):
    let residue = 0;
    // сдача:
    let change = 0;
    // вычисления:
    function seriesCalc(maxbet, series, bet) {
        // проверка на кратность:
        let multiplicity = bet % 5 == 0;
        console.log(`ставка кратна пяти: ${multiplicity}`);
        if (multiplicity == false) {
            // сдача 1:
            residue = bet % 5;
            bet = bet - residue;
        } else {
            bet = bet;
        };
        // рассчёты:
        switch (series) {
            case "tier":
                //  проверка на максимум:
                let maxTier = maxBet * rouletteSeries.tier.chips;
                if (bet >= maxTier) {
                    change = bet - maxTier;
                    plays = maxBet * payoutRatios.split.position;
                    console.log(`максимум на tier: ${maxTier}`);
                    return;
                } else if (bet < maxTier) {
                    // рассчёты:
                    let diff_1 = bet / rouletteSeries.tier.position;
                    let diff_2 = bet / rouletteSeries.tier.position % 5;
                    plays = diff_1 - diff_2;
                    let cleanBet = plays * rouletteSeries.tier.position;
                    let diff_3 = bet - cleanBet;
                    change = diff_3 + residue;
                    console.log(diff_1);
                    console.log(diff_2);
                    console.log(cleanBet);
                    console.log(diff_3);
                };
                break;
            case "orphelins":
                //  проверка на максимум:
                let maxOrphelins = maxBet * rouletteSeries.orphelins.chips;
                if (bet >= maxOrphelins) {
                    change = bet - maxOrphelins;
                    plays = maxBet * payoutRatios.split.position;
                    console.log(`максимум на orphelins: ${maxOrphelins}`);
                    return;
                } else if (bet < maxOrphelins) {
                    // рассчёты:
                    let diff_1 = bet / rouletteSeries.orphelins.position;
                    let diff_2 = bet / rouletteSeries.orphelins.position % 5;
                    plays = diff_1 - diff_2;
                    let cleanBet = plays * rouletteSeries.orphelins.position;
                    let diff_3 = bet - cleanBet;
                    change = diff_3 + residue;
                    console.log(diff_1);
                    console.log(diff_2);
                    console.log(cleanBet);
                    console.log(diff_3);
                };
                break;
            case "voisins":
                console.log(series);
                break;
            case "spiel":
                console.log(series);
                break;
            default:
                console.log("выберите серию");
        };
        console.log(`играет по: ${plays}`);
        console.log(`остаток от деления: ${residue}`);
        console.log(`сдача: ${change}`);
        return;
    };
    seriesCalc(maxBet, series, bet);

    document.getElementById('info_2').innerHTML = `играет по: ${plays}<br\/> сдача: ${change}<br\/>`;

    return;
};
