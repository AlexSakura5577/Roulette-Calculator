import { deepFreeze } from "../functions/deepFreeze.js";

// серии рулетки:
export const rouletteSeries = Object.freeze({
    // малая серия (tier):
    tier: {
        position: 6,
        split: ["5-8", "10-11", "13-16", "23-24", "27-30", "33-36"],
        strUps: [5, 8, 10, 11, 13, 16, 23, 24, 27, 30, 33, 36],
        sumStrUps: 12,
        chips: 6,
        step: 12, // проверка на maxBet
        coefficient: 6
    },
    // орфолайнс (orphelins):
    orphelins: {
        position: 5,
        numb: ["1"],
        split: ["6-9", "14-17", "17-20", "31-34"],
        strUps: [1, 6, 9, 14, 17, 20, 31, 34],
        sumStrUps: 8,
        chips: 5,
        step: 9, // проверка на maxBet
        coefficient: 4
        // при выпадении 17 x 2 positions
    },
    // большая серия (voisins du zéro):
    voisins: {
        position: 9,
        split: ["4-7", "12-15", "18-21", "19-22", "32-35"],
        corner: ["25-29"],
        street: ["0-2-3"],
        strUps: [0, 2, 3, 4, 7, 12, 15, 18, 21, 19, 22, 25, 26, 28, 29, 32, 35],
        sumStrUps: 17,
        chips: 9,
        step: 17, // проверка на maxBet
        coefficient: 7
        // street & corner x 2 positions
    },
    // шпиль (0-spiel):
    spiel: {
        position: 4,
        numb: ["26"],
        split: ["0-3", "12-15", "32-35"],
        strUps: [0, 3, 12, 15, 26, 32, 35],
        sumStrUps: 7,
        chips: 4,
        step: 7, // проверка на maxBet
        coefficient: 3
    }
});
// глубокая заморозка объекта (только для чтения):
deepFreeze(rouletteSeries);