import { payoutRatios } from "../../consts/payoutRatios.js";
import { rouletteNumber } from "../../consts/rouletteNumber.js";

// Функция для расчета количества фишек для каждой позиции
const calculateChips = (positions, payoutRatio) => {
    const flatPositions = positions.flat(Infinity); // в одномерный массив
    const uniquePositions = [...new Set(flatPositions)];
    const coincidences = flatPositions.length - uniquePositions.length;
    return coincidences * payoutRatio;
};

// Функция подсчёта лишних позиций:
function countPositions(arr) {
    const uniqueNumbers = [...new Set(arr)]; // удаляем дубликаты
    const { split, corner, street, six_line } = payoutRatios;

    // Получение позиций для каждого типа
    const getPositions = (type) => uniqueNumbers.map(element => rouletteNumber[element].positions[type]);

    // Вычисление количества фишек для каждого типа
    const splitChips = calculateChips(getPositions('split'), split.position);
    const cornerChips = calculateChips(getPositions('corner'), corner.position);
    const streetChips = calculateChips(getPositions('street'), street.position);
    const sixLineChips = calculateChips(getPositions('six_line'), six_line.position);

    // Суммирование всех фишек
    const totalChips = splitChips + cornerChips + streetChips + sixLineChips;
    console.log(`Всего лишних фишек: ${totalChips}`);
    return totalChips;
};
export { countPositions };