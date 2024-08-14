// функция расчета ставок в разделе Номер:
function strUpCalculations(fillArr) {
    let pay = 0;
    let summPay = 0;
    let summCash = 0;
    let residue = 0;
    let payChips = 0;

    // выплата (кол-во фишек):
    pay = fillArr.reduce((acc, number) => acc + number, 0);
    // console.log(`кол-во фишек: ${pay}`);

    // цвет по:
    console.log(`цвет по: ${color.value}`);

    // сумма выплаты:
    summPay = +color.value * pay;
    console.log(`выплата: ${summPay}`);

    // через сколько (кэш):
    summCash = +cash.value;

    // проверка кратности:
    let colorCash = summCash / +color.value;
    if ((colorCash ^ 0) !== colorCash) {
        summCash = `${summCash} не получится`;
        console.log("не получится");
    } else {
        console.log("ok");
    };
    // console.log(`через (кэш): ${summCash}`);

    // остаток:
    residue = summPay - +cash.value;
    // console.log(`остаток: ${residue}`);

    // выплата цветом:
    payChips = residue / +color.value;
    // console.log(`выплата цветом: ${payChips}`);

    return {
        pay: pay,
        summPay: summPay,
        summCash: summCash,
        residue: residue,
        payChips: payChips
    };
};
// Экспортируем функцию chipCount с вычисленными значениями:
export { strUpCalculations };