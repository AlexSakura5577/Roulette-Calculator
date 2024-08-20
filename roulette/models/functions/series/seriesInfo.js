
// вывод информации пользователю:
function seriesInfo(series, bet, objVarSeriesCalc) {
    const breakingStepText = series === "tier" ? "шаг в tier не ломается" : `шаг ломается от: ${objVarSeriesCalc.breakingStep}`;

    document.getElementById('info_2').innerHTML = `
        максимум на серию: ${objVarSeriesCalc.maxSeries}<br/>
        ${breakingStepText}<br/>
        чистая ставка: ${objVarSeriesCalc.betWithoutChange}<br/>
        играет по: ${objVarSeriesCalc.plays}<br/>
        сдача: ${objVarSeriesCalc.change}<br/>
    `;

    // значения переменных для справки в консоли:
    console.log(objVarSeriesCalc);
    console.log(`серия: ${series}`);
    console.log(`ставка: ${bet}`);
    console.log(`шаг ломается от: ${objVarSeriesCalc.breakingStep}`);
    console.log(`чистая ставка: ${objVarSeriesCalc.betWithoutChange}`);
    console.log(`играет по:  ${objVarSeriesCalc.plays}`);
    console.log(`сдача: ${objVarSeriesCalc.change}`);
};
export { seriesInfo };