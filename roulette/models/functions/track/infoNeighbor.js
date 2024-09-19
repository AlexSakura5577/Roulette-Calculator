// вывод информации юзеру:
function infoNeighbor(info, num, bet, numbers) {
    console.log(`сосед: ${num}`);
    console.log(`выбранные номера: ${numbers}`);
    console.log(`ставка: ${bet}`);
    // info.innerHTML = ``;
    info.innerHTML = `
    сосед: ${num}<br>
    ставка: ${bet}<br>
    выбранные номера: ${numbers}<br>
    `;
};
export { infoNeighbor };