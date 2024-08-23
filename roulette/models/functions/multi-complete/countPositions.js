import { payoutRatios } from "../../consts/payoutRatios.js";
import { rouletteNumber } from "../../consts/rouletteNumber.js";

// функция подсчёта совпадающих позиций:
function countPositions(arr) {
    let total = [];
    let totalChips;
    function splits(arr) {
        let totalSplits = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalSplits.push(rouletteNumber[element].positions.split);
        });
        let flatArr = totalSplits.flat(Infinity);
        let unique = [...new Set(flatArr)];
        coincidences = flatArr.length - unique.length;
        console.log(`кол-во совпадений сплитов: ${coincidences}`);
        let chips = coincidences * payoutRatios.split.position;
        console.log(chips);
        return chips;
    };
    let splitChips = splits(arr);
    function corners(arr) {
        let totalCorners = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalCorners.push(rouletteNumber[element].positions.corner);
        });
        let flatArr = totalCorners.flat(Infinity);
        let unique = [...new Set(flatArr)];
        coincidences = flatArr.length - unique.length;
        console.log(`кол-во совпадений карэ: ${coincidences}`);
        let chips = coincidences * payoutRatios.corner.position;
        console.log(chips);
        return chips;
    };
    let cornerChips = corners(arr);
    function streets(arr) {
        let totalStreets = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalStreets.push(rouletteNumber[element].positions.street);
        });
        let flatArr = totalStreets.flat(Infinity);
        let unique = [...new Set(flatArr)];
        coincidences = flatArr.length - unique.length;
        console.log(`кол-во совпадений стритов: ${coincidences}`);
        let chips = coincidences * payoutRatios.street.position;
        console.log(chips);
        return chips;
    };
    let streetChips = streets(arr);
    function sixLines(arr) {
        let totalSixLines = [];
        let coincidences = 0;
        arr.forEach(element => {
            totalSixLines.push(rouletteNumber[element].positions.six_line);
        });
        let flatArr = totalSixLines.flat(Infinity);
        let unique = [...new Set(flatArr)];
        coincidences = flatArr.length - unique.length;
        console.log(`кол-во совпадений сикслайнов: ${coincidences}`);
        let chips = coincidences * payoutRatios.six_line.position;
        console.log(chips);
        return chips;
    };
    let sixLineChips = sixLines(arr);
    total.push(splitChips);
    total.push(cornerChips);
    total.push(streetChips);
    total.push(sixLineChips);
    console.log(total);
    totalChips = total.reduce(function (sum, elem) {
        return sum + elem;
    }, 0);
    console.log(`всего лишних фишек: ${totalChips}`);
    return totalChips;
};
export { countPositions };