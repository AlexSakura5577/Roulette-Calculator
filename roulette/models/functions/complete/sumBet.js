function sumBet(chipsNeeded, nominal) {
    let result = chipsNeeded * +nominal;
    console.log(`sumBet: $${result}`);
    return result;
};
export { sumBet };