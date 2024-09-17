// вывод информации юзеру:
function infoNeighbor(info, num, bet, numbers) {
    // info.innerHTML = ``;
    info.innerHTML = `
    сосед: ${num}<br>
    ставка: ${bet}<br>
    выбранные номера: ${numbers}<br>
    `;
};
export { infoNeighbor };