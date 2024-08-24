import { nodeOptions } from "../../consts/multi-complete/nodeOptions.js";
import { multipleChoice } from "./multipleChoice.js";

function processChoices(nodeList) {
    for (const index in nodeOptions) {
        if (nodeList[index].checked) {
            multipleChoice(nodeOptions[index], nodeList);
        }
    }
};
export { processChoices };