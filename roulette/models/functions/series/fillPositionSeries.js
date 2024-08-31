import { rltPos } from "../../consts/rltPos.js";
import { rouletteSeries } from "../../consts/rouletteSeries.js";

// Заполняем ячейки позиций серий
function fillPositionSeries(series, plays) {
    const fillPositions = (positions, prefix_1, prefix_2, multiplier = 1) => {
        positions.forEach(element => {
            const selector = `${prefix_2}${element}`;
            console.log(selector);
            rltPos[prefix_1][selector].push(plays * multiplier);
            console.log(rltPos[prefix_1][selector]);
        });
    };

    switch (series) {
        case "tier":
            fillPositions(rouletteSeries.tier.split, 'spl', 'split_');
            break;
        case "orphelins":
            fillPositions(rouletteSeries.orphelins.numb, 'num', 'number_');
            fillPositions(rouletteSeries.orphelins.split, 'spl', 'split_');
            break;
        case "voisins":
            fillPositions(rouletteSeries.voisins.split, 'spl', 'split_');
            fillPositions(rouletteSeries.voisins.street, 'str', 'street_', 2);
            fillPositions(rouletteSeries.voisins.corner, 'cor', 'corner_', 2);
            break;
        case "spiel":
            fillPositions(rouletteSeries.spiel.numb, 'num', 'number_');
            fillPositions(rouletteSeries.spiel.split, 'spl', 'split_');
            break;
        default:
            console.warn(`Неизвестная серия: ${series}`);
    }
}
export { fillPositionSeries };