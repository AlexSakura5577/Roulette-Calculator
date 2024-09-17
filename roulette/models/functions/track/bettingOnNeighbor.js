import { track } from "../../consts/track.js";

// ! не используется

function bettingOnNeighbor(nodeList, id, neighbors, numbers, bet, series, seriesBet, num) {
    const validSeries = ["tier", "orphelins", "voisins", "spiel"];
    nodeList.forEach(element => {
        element.addEventListener('click', () => {
            console.log(`клик на элемент: ${element.id}`);
            id = element.id;

            if (validSeries.some(elem => id.includes(elem))) {
                series = id;
                console.log(`серия: ${series}`);
                seriesBet = bet;
            };

            // сосед номера:
            neighbors = track[id];
            try {
                // выбранные номера:
                numbers = track[id].numbers;
                // номер:
                num = numbers[2];
                // ставка на соседа:
                neighbors.bet = bet;
            } catch (err) {
                // console.error(err);
            };
            // подсветка ставок
            const inlineStyles = element.style;
            if (bet >= 25) {
                element.setAttribute('style', 'background-color: rgb(242, 247, 96); opacity: 90%; ');
            } else {
                element.setAttribute('style', 'background-color: none; opacity: 0%; ');
            };
        });
    });
    console.log(`id: ${id}`);
    console.log(`num: ${num}`);
    console.log(`numbers: ${numbers}`);
    console.log(`series: ${series}`);
    console.log(`bet: ${bet}`);
    console.log(`seriesBet: ${seriesBet}`);
    return {
        id: id,
        num: num,
        numbers: numbers,
        series: series,
        bet: bet,
        seriesBet: seriesBet
    };
};
export { bettingOnNeighbor };