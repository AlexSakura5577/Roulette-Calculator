function completeInfo(chipsNeeded, nominal, sum, completePay, change, totalPay, addInfo) {
    if (nominal === "max") {
        nominal = "максимуму";
    };
    document.getElementById('complete_info').innerHTML = `
        ${chipsNeeded} позиций по ${nominal}<br\/>
        сумма ставки: ${sum}<br\/>
        кол-во фишек: ${completePay}<br\/>
        сдача: ${change}<br\/>
        выплата: ${totalPay}<br\/>
        `;
};
export { completeInfo };