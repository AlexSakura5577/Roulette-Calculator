import { track } from "../../consts/track.js";
import { nodeList } from "../../trackModel.js";

function bettingOnNeighbor(id, num, numbers, series, neighbors, bet) {
    // console.log(nodeList);
    const validSeries = ["tier", "orphelins", "voisins", "spiel"];
    nodeList.forEach(element => {
        element.addEventListener('click', () => {
            console.log(element.id);
            id = element.id;
            if (validSeries.some(elem => id.includes(elem))) {
                series = id;
                console.log(`серия: ${series}`);
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
                // console.log(id);
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
    return {
        id: id,
        num: num,
        numbers: numbers,
        series: series,
        bet: bet
    };
};
export { bettingOnNeighbor };