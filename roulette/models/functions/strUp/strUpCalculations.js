// функция расчета ставок в разделе Номер:
function strUpCalculations(fillArr) {
    // Выплата (кол-во фишек):
    const pay = fillArr.reduce((acc, number) => acc + number, 0);
    console.log(`кол-во фишек: ${pay}`);

    // Цвет по:
    const colorValue = +color.value;
    console.log(`цвет по: ${colorValue}`);

    // Сумма выплаты:
    const summPay = colorValue * pay;
    console.log(`выплата: ${summPay}`);

    // Кэш:
    let summCash = +cash.value;

    // Проверка кратности:
    if (summCash % colorValue !== 0) {
        console.log(`через ${summCash} не получится`);
    } else {
        console.log("проверка кратности: ok");
    }
    console.log(`через (кэш): ${summCash}`);

    // Проверка если сумма кэш фишек больше суммы выплаты:
    if (summCash > summPay) {
        summCash = summPay; // Устанавливаем summCash равным summPay
    }

    // Остаток:
    const residue = summPay - summCash;
    console.log(`остаток: ${residue}`);

    // Проверка делимости остатка на цвет
    let payChips;
    if (residue % colorValue !== 0) {
        payChips = pay; // Устанавливаем payChips равным pay
        summCash = 0;   // Устанавливаем summCash в 0
        console.log("остаток не делится на цвет");
    } else {
        payChips = residue < 0 ? 0 : residue / colorValue; // Проверка для payChips
    }
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