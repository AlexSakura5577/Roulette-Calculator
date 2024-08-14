import { deepFreeze } from "../functions/deepFreeze.js";

// минимум и максимум:
import { minBet } from './min_max.js';
import { maxBet } from './min_max.js';

// коэффициенты выплат
export const payoutRatios = Object.freeze({
    numb: {
        payout: 35,
        position: 1,
        maxbet: (maxBet * 1)
    },
    split: {
        payout: 17,
        position: 2,
        maxbet: (maxBet * 2)
    },
    corner: {
        payout: 8,
        position: 4,
        maxbet: (maxBet * 4)
    },
    street: {
        payout: 11,
        position: 3,
        maxbet: (maxBet * 3)
    },
    six_line: {
        payout: 5,
        position: 6,
        maxbet: (maxBet * 6)
    }
});
// глубокая заморозка объекта:
deepFreeze(payoutRatios);