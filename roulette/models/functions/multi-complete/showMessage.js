
// вывод сообщения алерт:
function showMessage(arr, result) {
    console.log((`
        \nвывод информации пользователю:
        \nвыбранные номера: ${arr.join(' ')}
        \nитоговая ставка: ${result}
        `));
    // location.reload();
    return;
};
export { showMessage };