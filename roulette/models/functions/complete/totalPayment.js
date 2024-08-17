function totalPayment(completeBet, completePay) {
    let result = completeBet * completePay;
    console.log(`totalPayment: $${result}`);
    return result;
};
export { totalPayment };