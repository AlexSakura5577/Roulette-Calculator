// функция расчета ставок в разделе Номер:
function strUpCalculations(fillArr) {
    // Выплата (кол-во фишек):
    const pay = fillArr.reduce((acc, number) => acc + number, 0);
    console.log(`кол-во фишек: ${pay}`);

    // Цвет по:
    const colorValue = +color.value;
    console.log(`цвет по: ${color.value}`);

    // Сумма выплаты:
    const summPay = colorValue * pay;
    console.log(`выплата: ${summPay}`);

    // Кэш:
    const summCash = +cash.value;

    // Проверка кратности:
    if (summCash % colorValue !== 0) {
        console.log(`${summCash} не получится`);
        console.log("не получится");
    } else {
        console.log("проверка кратности: ok");
    }
    console.log(`через (кэш): ${summCash}`);

    // Остаток и выплата цветом:
    const residue = summPay - summCash;
    console.log(`остаток: ${residue}`);

    const payChips = residue / colorValue;
    console.log(`выплата цветом: ${payChips}`);

    return {
        pay,
        summPay,
        summCash,
        residue,
        payChips
    };
};
// Экспортируем функцию chipCount с вычисленными значениями:
export { strUpCalculations };