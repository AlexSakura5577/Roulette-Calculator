// выбор минимума - максимума (и запись в localstorage)
let maxBet = document.getElementById('minmax')


// let minBet = 1;
// let maxBet = 100;
// localStorage.setItem('minBet', minBet);
// localStorage.setItem('maxBet', maxBet);

// кнопка Сброс (перезагружает вкладку)
reset.onclick = function () {
    location.reload();
    return;
}
// кнопка Рассчитать
calculate.onclick = function () {
    let bet = +document.getElementById('bet').value;
    console.log(bet);
    // let completeBet = document.getElementById('complete').value;

    // document.getElementById('info_2').innerHTML = `strUp  ${strUp}: ${chipsNeededForABet(strUp)} positions of ${completeBet}<br\/> sumBet: $${sumBet(strUp)}<br\/> payment: ${completePayment(strUp)} chips<br\/> totalPayment: $${totalPayment(strUp)}<br\/> ${info(strUp)}`;

    return;
};
