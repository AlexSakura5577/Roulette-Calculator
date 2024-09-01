import { rltPos } from "../consts/rltPos.js";

const prefixes = {
    num: "number_",
    spl: "split_",
    str: "street_",
    cor: "corner_",
    six: "six_line_"
};

function positionsCount(position) {
    const count = Object.keys(rltPos[position]).filter(key => key.startsWith(prefixes[position])).length;
    return count;
};
export { positionsCount };

// console.log(`номеров: ${positionsCount("num")}`); // 37
// console.log(`сплитов: ${positionsCount("spl")}`); // 60
// console.log(`стритов: ${positionsCount("str")}`); // 14
// console.log(`карэх: ${positionsCount("cor")}`); // 23
// console.log(`сикс-лайнов: ${positionsCount("six")}`); // 11