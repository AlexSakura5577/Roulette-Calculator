import { rltPos } from "../consts/rltPos.js";

function positionsCount(position) {
    let prefix;
    if (position === "num") {
        prefix = "number_";
    } else if (position === "spl") {
        prefix = "split_";
    } else if (position === "str") {
        prefix = "street_";
    } else if (position === "cor") {
        prefix = "corner_";
    } else if (position === "six") {
        prefix = "six_line_";
    }
    const numberKeys = Object.keys(rltPos[position]);
    const filteredNumberKeys = numberKeys.filter(key => key.startsWith(prefix));
    const count = filteredNumberKeys.length;
    return count;
};
export { positionsCount };