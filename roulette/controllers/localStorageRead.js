// localStorage

// export function localStorageRead() {
//     let minBet = localStorage.getItem('minBet');
//     let maxBet = localStorage.getItem('maxBet');
//     minmax.value = `${minBet}-${maxBet}`;
//     return [minBet, maxBet];
// };

let minBet, maxBet;
const minMax = { minBet, maxBet }; // Объект для хранения значений
export function localStorageRead() {
    minMax.minBet = localStorage.getItem("minBet");
    minMax.maxBet = localStorage.getItem("maxBet");
    document.getElementById('minmax').value = `${minMax.minBet}-${minMax.maxBet}`;
}
// Вызываем функцию, чтобы инициализировать переменные
localStorageRead();
// export { minBet, maxBet }; // Экспортируем переменные для использования в других модулях
export { minMax }; // Экспортируем объект