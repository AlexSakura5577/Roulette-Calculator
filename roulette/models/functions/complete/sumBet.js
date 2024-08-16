
function sumBet(strUp) {
    let sumChips = chipsNeededForABet(strUp);
    let result = sumChips * completeBet;
    return result;
};