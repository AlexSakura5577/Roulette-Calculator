import { payoutRatios } from '../../consts/payoutRatios.js';
import { rouletteNumber } from '../../consts/rouletteNumber.js';

function completePayment(strUp) {
    let quantityNumb = payoutRatios.numb.position * rouletteNumber[strUp].numb * payoutRatios.numb.payout;
    let quantitySplit = payoutRatios.split.position * rouletteNumber[strUp].split * payoutRatios.split.payout;
    let quantityCorner = payoutRatios.corner.position * rouletteNumber[strUp].corner * payoutRatios.corner.payout;
    let quantityStreet = payoutRatios.street.position * rouletteNumber[strUp].street * payoutRatios.street.payout;
    let quantitySix_line = payoutRatios.six_line.position * rouletteNumber[strUp].six_line * payoutRatios.six_line.payout;
    let quantitySum = quantityNumb + quantitySplit + quantityCorner + quantityStreet + quantitySix_line;
    let result = quantitySum;
    console.log(`payment: ${result} chips`);
    return result;
};
export { completePayment };