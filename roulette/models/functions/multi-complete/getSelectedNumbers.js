function getSelectedNumbers(nodeArray) {
    return [...new Set(nodeArray
        .filter(item => item.id.includes("num") && item.checked) // Фильтруем массив
        .map(item => +item.id.substring(4)) // Преобразуем в числа
    )];
};
export { getSelectedNumbers };