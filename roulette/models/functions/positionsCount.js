import { rltPos } from "../consts/rltPos.js";

const prefixes = {
    num: "number_",
    spl: "split_",
    str: "street_",
    cor: "corner_",
    six: "six_line_"
};

function positionsCount(position) {
    const prefix = prefixes[position]; // Находим префикс по позиции
    const numberKeys = Object.keys(rltPos[position]);
    const filteredNumberKeys = numberKeys.filter(key => key.startsWith(prefix));
    const count = filteredNumberKeys.length;
    return count;
};
export { positionsCount };