import { payoutRatios } from "../../consts/payoutRatios.js";
import { rouletteNumber } from "../../consts/rouletteNumber.js";

// функция подсчёта нескольких комплитов в поле:
function chipsNeededForABet(arr) {
    // Определяем типы ставок и их коэффициенты
    const betTypes = [
        { type: 'numb', ratio: payoutRatios.numb.position },
        { type: 'split', ratio: payoutRatios.split.position },
        { type: 'corner', ratio: payoutRatios.corner.position },
        { type: 'street', ratio: payoutRatios.street.position },
        { type: 'six_line', ratio: payoutRatios.six_line.position }
    ];

    // Вычисляем сумму фишек для каждого элемента массива
    const totalSum = arr.reduce((acc, element) => {
        const elementQuantities = betTypes.reduce((sum, betType) => {
            return sum + betType.ratio * rouletteNumber[element][betType.type];
        }, 0);

        return acc + elementQuantities;
    }, 0);
    console.log(`=> totalSum: ${totalSum} общая сумма`);
    return totalSum;
};
export { chipsNeededForABet };