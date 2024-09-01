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