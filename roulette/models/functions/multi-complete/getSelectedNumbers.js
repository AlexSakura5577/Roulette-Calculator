function getSelectedNumbers(nodeList) {
    return [...new Set(Array.from(nodeList)
        .filter(item => item.id.includes("num") && item.checked) // Фильтруем
        .map(item => +item.id.substring(4)) // Преобразуем в числа
    )];
};
export { getSelectedNumbers };