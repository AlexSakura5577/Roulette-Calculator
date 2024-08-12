// localStorage

// export function localStorageRead() {
//     let minBet = localStorage.getItem('minBet');
//     let maxBet = localStorage.getItem('maxBet');
//     minmax.value = `${minBet}-${maxBet}`;
//     return [minBet, maxBet];
// };

let minBet, maxBet;

export function localStorageRead() {
    minBet = localStorage.getItem("minBet");
    maxBet = localStorage.getItem("maxBet");
    minmax.value = `${minBet}-${maxBet}`;
}
// Вызываем функцию, чтобы инициализировать переменные
localStorageRead();
export { minBet, maxBet }; // Экспортируем переменные для использования в других модулях