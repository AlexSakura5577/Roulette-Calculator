// roulette-calculator

const minBet = 1;
const maxBet = 100;
const payoutRatios = {
    numb: {
        payout: 35,
        position: 1
    },
    split: {
        payout: 17,
        position: 2
    },
    corner: {
        payout: 8,
        position: 4
    },
    street: {
        payout: 11,
        position: 3
    },
    six_line: {
        payout: 5,
        position: 6
    }
};
console.log(payoutRatios.split.payout); // 17


































