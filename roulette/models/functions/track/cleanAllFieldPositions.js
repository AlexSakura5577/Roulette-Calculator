import { rltPos } from "../../consts/rltPos.js";

// обнуление всех позиций поля:
function cleanAllFieldPositions() {
    for (let i = 0; i < 37; i++) {
        rltPos["num"][Object.keys(rltPos["num"])[i]] = [];
    };
    for (let i = 0; i < 60; i++) {
        rltPos["spl"][Object.keys(rltPos["spl"])[i]] = [];
    }
    for (let i = 0; i < 14; i++) {
        rltPos["str"][Object.keys(rltPos["str"])[i]] = [];
    }
    for (let i = 0; i < 23; i++) {
        rltPos["cor"][Object.keys(rltPos["cor"])[i]] = [];
    }
    for (let i = 0; i < 11; i++) {
        rltPos["six"][Object.keys(rltPos["six"])[i]] = [];
    }
};
export { cleanAllFieldPositions };