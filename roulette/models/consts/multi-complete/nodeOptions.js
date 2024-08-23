import { deepFreeze } from "./../../functions/deepFreeze.js";
import { nodeChanColumDoz } from "../../consts/multi-complete/nodeChanColumDoz.js";

// Объект, сопоставляющий индексы с соответствующими значениями
export const nodeOptions = Object.freeze({
    2: nodeChanColumDoz.dozen_1,
    17: nodeChanColumDoz.dozen_2,
    32: nodeChanColumDoz.dozen_3,
    1: nodeChanColumDoz.small,
    39: nodeChanColumDoz.big,
    9: nodeChanColumDoz.even,
    31: nodeChanColumDoz.odd,
    16: nodeChanColumDoz.red,
    24: nodeChanColumDoz.black,
    46: nodeChanColumDoz.column_1,
    47: nodeChanColumDoz.column_2,
    48: nodeChanColumDoz.column_3,
});
// глубокая заморозка объекта (только для чтения):
deepFreeze(nodeOptions);