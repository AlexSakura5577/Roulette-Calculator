import { chipsNeededForABet } from "./chipsNeededForABet.js";
import { countPositions } from "./countPositions.js";

// общая ставка с вычетом сдачи:
function resultBet(arr, positions, coincidences) {
    positions = chipsNeededForABet(arr);
    coincidences = countPositions(arr);
    let result = positions - coincidences;
    console.log(`=> result: ${result} итоговая ставка`);
    return result;
};
export { resultBet };