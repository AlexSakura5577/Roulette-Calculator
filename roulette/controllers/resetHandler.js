// resetHandler.js
export function resetValues() {
    // Установка значений по умолчанию
    localStorage.setItem('minBet', 1);
    localStorage.setItem('maxBet', 100);
    // Обновление страницы, чтобы изменения вступили в силу
    location.reload();
};