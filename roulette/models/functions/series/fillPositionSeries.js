import { rltPos } from "../../consts/rltPos.js";
import { rouletteSeries } from "../../consts/rouletteSeries.js";

// заполняем ячейки позиций серий
function fillPositionSeries(series, plays) {

    switch (series) {
        case "tier":
            rouletteSeries.tier.split.forEach(element => {
                console.log(`сплит: ${element}`);
                let selSpl = "split_" + element;

                rltPos.spl[selSpl].push(plays);
                console.log(rltPos.spl[selSpl]);
            })
            break;
        case "orphelins":
            rouletteSeries.orphelins.numb.forEach(element => {
                console.log(`номер: ${element}`);
                let selNumb = "number_" + element;

                rltPos.num[selNumb].push(plays);
                console.log(rltPos.num[selNumb]);
            })
            rouletteSeries.orphelins.split.forEach(element => {
                console.log(`сплит: ${element}`);
                let selSpl = "split_" + element;

                rltPos.spl[selSpl].push(plays);
                console.log(rltPos.spl[selSpl]);
            })
            break;
        case "voisins":
            rouletteSeries.voisins.split.forEach(element => {
                console.log(`сплит: ${element}`);
                let selSpl = "split_" + element;

                rltPos.spl[selSpl].push(plays);
                console.log(rltPos.spl[selSpl]);
            })
            rouletteSeries.voisins.street.forEach(element => {
                console.log(`стрит: ${element}`);
                let selStr = "street_" + element;

                rltPos.str[selStr].push(plays * 2);
                console.log(rltPos.str[selStr]);
            })
            rouletteSeries.voisins.corner.forEach(element => {
                console.log(`карэ: ${element}`);
                let selCor = "corner_" + element;

                rltPos.cor[selCor].push(plays * 2);
                console.log(rltPos.cor[selCor]);
            })
            break;
        case "spiel":
            rouletteSeries.spiel.numb.forEach(element => {
                console.log(`номер: ${element}`);
                let selNumb = "number_" + element;

                rltPos.num[selNumb].push(plays);
                console.log(rltPos.num[selNumb]);
            })
            rouletteSeries.spiel.split.forEach(element => {
                console.log(`сплит: ${element}`);
                let selSpl = "split_" + element;

                rltPos.spl[selSpl].push(plays);
                console.log(rltPos.spl[selSpl]);
            })
            break;
    }
};
export { fillPositionSeries };