// updateMinMax
export function updateMinMax(value, minMax) {
    // выбираем элемент select minmax
    switch (value) {
        case "1-100":
            minMax.minBet = 1;
            minMax.maxBet = 100;
            break;
        case "5-200":
            minMax.minBet = 5;
            minMax.maxBet = 200;
            break;
        case "5-300":
            minMax.minBet = 5;
            minMax.maxBet = 300;
            break;
        case "25-500":
            minMax.minBet = 25;
            minMax.maxBet = 500;
            break;
        default:
            console.warn("Некорректное значение для minmax");
            return; // Возвращаемся, если значение неверное
    };
    // Обновляем localStorage
    localStorage.setItem('minBet', minMax.minBet);
    localStorage.setItem('maxBet', minMax.maxBet);
};