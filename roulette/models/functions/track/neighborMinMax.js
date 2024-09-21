
function neighborMinMax(minBet, maxBet) {
    let min = 0;
    let max = 0;

    if (minBet == 25 || minBet == 100) {
        min = minBet * 5;
        max = maxBet * 5;
    } else if (minBet == 1 || minBet == 5) {
        min = 25;
        max = maxBet * 5;
    };

    console.log(`minBet: ${minBet}`);
    console.log(`maxBet: ${maxBet}`);
    console.log(`min: ${min}`);
    console.log(`max: ${max}`);

    return {
        min: min,
        max, max
    };
};
export { neighborMinMax };