
// вывод сообщения алерт:
function showMessage(arr, result) {
    console.log((`
        \nвыбранные номера: ${arr.join(' ')}
        \nитоговая ставка: ${result}
        `));
    // location.reload();
    return;
};
export { showMessage };