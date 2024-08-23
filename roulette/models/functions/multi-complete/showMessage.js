
// вывод сообщения алерт:
function showMessage(resultBet) {
    console.log((`
        \nвыбранные номера: ${selectedNumbers} 
        \nкол-во позиций: ${totalSum} 
        \nлишних позиций: ${coincidences} 
        \nитоговая ставка: ${resultBet}
        `));
    // location.reload();
    return;
};
export { showMessage };