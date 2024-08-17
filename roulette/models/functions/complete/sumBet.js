function sumBet(chipsNeeded, completeBet) {
    let result = chipsNeeded * +completeBet;
    console.log(`sumBet: $${result}`);
    return result;
};
export { sumBet };