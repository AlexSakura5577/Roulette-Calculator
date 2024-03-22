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
    console.log(`мин-макс: ${minmax}`);
    // console.log(minBet);
    // console.log(maxBet);

    // выбор серии:
    let series = document.getElementById('series').value;
    console.log(`серия: ${series}`);

    // введённая сумма ставки на серию:
    let bet = +document.getElementById('bet').value;
    console.log(`ставка: ${bet}`);

    // вычисления:


    // по чём играет:
    let plays = 0;
    console.log(`играет по: ${plays}`);

    // сдача:
    let residue = 0;
    console.log(`сдача: ${residue}`);
    
    // document.getElementById('info_2').innerHTML = `strUp  ${strUp}: ${chipsNeededForABet(strUp)} positions of ${completeBet}<br\/> sumBet: $${sumBet(strUp)}<br\/> payment: ${completePayment(strUp)} chips<br\/> totalPayment: $${totalPayment(strUp)}<br\/> ${info(strUp)}`;

    return;
};
