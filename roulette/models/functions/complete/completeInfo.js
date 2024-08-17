function completeInfo(chipsNeeded, completeBet, sum, completePay, totalPay, addInfo) {
    document.getElementById('complete_info').innerHTML = `
        ${chipsNeeded} позиций по ${completeBet}<br\/>
        сумма ставки: $${sum}<br\/>
        кол-во фишек: ${completePay}<br\/>
        выплата: $${totalPay}<br\/>
        ${addInfo}
        `;
};
export { completeInfo };