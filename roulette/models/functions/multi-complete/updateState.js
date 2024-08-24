function updateState(nodeList) {
    // Создаем массив для хранения выбранных номеров
    let selectedNumbers = [];

    // Проходим по всем элементам в nodeList
    nodeList.forEach(item => {
        // Если элемент является чекбоксом, идентифицированным по id
        if (item.id.includes("num") && item.checked) {
            // Извлекаем число из id и добавляем в массив
            selectedNumbers.push(+item.id.substring(4)); // Преобразуем в число и добавляем в массив
        }
    });

    // Здесь можно обновить глобальную переменную или состояние приложения
    // Например, если у тебя есть переменная, которая хранит выбранные номера:
    window.currentSelectedNumbers = selectedNumbers; // Сохраняем выбранные номера в глобальной переменной
};
export { updateState };