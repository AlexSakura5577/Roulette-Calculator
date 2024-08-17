function completeInfo(chipsNeeded, nominal, sum, completePay, totalPay, addInfo) {
    document.getElementById('complete_info').innerHTML = `
        ${chipsNeeded} позиций по ${nominal}<br\/>
        сумма ставки: $${sum}<br\/>
        кол-во фишек: ${completePay}<br\/>
        выплата: $${totalPay}<br\/>
        ${addInfo}
        `;
};
export { completeInfo };