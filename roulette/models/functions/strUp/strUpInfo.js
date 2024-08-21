// вывод информации пользователю:
function strUpInfo(infoObj) {
    document.getElementById('info_3').innerHTML = `
        Выплата<br\/>
        сумма фишек: ${infoObj.pay}<br\/>
        сумма выплаты: ${infoObj.summPay}<br\/>
        выплата цветом: ${infoObj.payChips}<br\/>
        через: ${infoObj.summCash}<br\/>
    `;
};
export { strUpInfo };