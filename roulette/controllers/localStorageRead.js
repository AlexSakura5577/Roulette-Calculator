// localStorage
let minBet, maxBet;
const minMax = { minBet, maxBet }; // Объект для хранения значений
export function localStorageRead() {
    minMax.minBet = localStorage.getItem("minBet");
    minMax.maxBet = localStorage.getItem("maxBet");
    document.getElementById('minmax').value = `${minMax.minBet}-${minMax.maxBet}`;
}
// Вызываем функцию, чтобы инициализировать переменные
localStorageRead();
export { minMax }; // Экспортируем объект