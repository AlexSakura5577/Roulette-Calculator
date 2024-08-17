function totalPayment(nominal, completePay) {
    let result = nominal * completePay;
    console.log(`totalPayment: $${result}`);
    return result;
};
export { totalPayment };