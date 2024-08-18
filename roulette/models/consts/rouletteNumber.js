import { deepFreeze } from "../functions/deepFreeze.js";

// номера рулетки:
export const rouletteNumber = Object.freeze({
    0: {
        numb: 1,
        split: 3,
        corner: 1,
        street: 2,
        six_line: 0,
        positions: {
            numb: ["0"],
            split: ["0-1", "0-2", "0-3"],
            corner: ["first-four"],
            street: ["0-1-2", "0-2-3"],
            six_line: []
        },
        color: 'green',
        parity: 'zero',
        magnitude: 'zero',
        dozen: 'zero',
        column: 'zero',
        chipsComplete: 17,
        chipsPayoutComplete: 235
    },
    1: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 2,
        six_line: 1,
        positions: {
            numb: ["1"],
            split: ["0-1", "1-2", "1-4"],
            corner: ["first-four", "1-5"],
            street: ["0-1-2", "1-2-3"],
            six_line: ["1-6"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st",
        chipsComplete: 27,
        chipsPayoutComplete: 297
    },
    2: {
        numb: 1,
        split: 4,
        corner: 3,
        street: 3,
        six_line: 1,
        positions: {
            numb: ["2"],
            split: ["0-2", "1-2", "2-3", "2-5"],
            corner: ["first-four", "1-5", "2-6"],
            street: ["0-1-2", "0-2-3", "1-2-3"],
            six_line: ["1-6"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd",
        chipsComplete: 36,
        chipsPayoutComplete: 396
    },
    3: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 2,
        six_line: 1,
        positions: {
            numb: ["3"],
            split: ["0-3", "2-3", "3-6"],
            corner: ["first-four", "2-6"],
            street: ["0-2-3", "1-2-3"],
            six_line: ["1-6"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd",
        chipsComplete: 27,
        chipsPayoutComplete: 297
    },
    4: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["4"],
            split: ["1-4", "4-5", "4-7"],
            corner: ["1-5", "4-8"],
            street: ["4-5-6"],
            six_line: ["1-6", "4-9"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    5: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["5"],
            split: ["2-5", "4-5", "5-6", "5-8"],
            corner: ["1-5", "2-6", "4-8", "5-9"],
            street: ["4-5-6"],
            six_line: ["1-6", "4-9"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    6: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["6"],
            split: ["3-6", "5-6", "6-9"],
            corner: ["2-6", "5-9"],
            street: ["4-5-6"],
            six_line: ["1-6", "4-9"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    7: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["7"],
            split: ["4-7", "7-8", "7-10"],
            corner: ["4-8", "7-11"],
            street: ["7-8-9"],
            six_line: ["4-9", "7-12"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    8: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["8"],
            split: ["5-8", "7-8", "8-9", "8-11"],
            corner: ["4-8", "5-9", "7-11", "8-12"],
            street: ["7-8-9"],
            six_line: ["4-9", "7-12"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    9: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["9"],
            split: ["6-9", "8-9", "9-12"],
            corner: ["5-9", "8-12"],
            street: ["7-8-9"],
            six_line: ["4-9", "7-12"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    10: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["10"],
            split: ["7-10", "10-11", "10-13"],
            corner: ["7-11", "10-14"],
            street: ["10-11-12"],
            six_line: ["7-12", "10-15"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    11: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["11"],
            split: ["8-11", "10-11", "11-12", "11-14"],
            corner: ["7-11", "8-12", "10-14", "11-15"],
            street: ["10-11-12"],
            six_line: ["7-12", "10-15"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    12: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["12"],
            split: ["9-12", "11-12", "12-15"],
            corner: ["8-12", "11-15"],
            street: ["10-11-12"],
            six_line: ["7-12", "10-15"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "1st",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    13: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["13"],
            split: ["10-13", "13-14", "13-16"],
            corner: ["10-14", "13-17"],
            street: ["13-14-15"],
            six_line: ["10-15", "13-18"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    14: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["14"],
            split: ["11-14", "13-14", "14-15", "14-17"],
            corner: ["10-14", "11-15", "13-17", "14-18"],
            street: ["13-14-15"],
            six_line: ["10-15", "13-18"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    15: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["15"],
            split: ["12-15", "14-15", "15-18"],
            corner: ["11-15", "14-18"],
            street: ["13-14-15"],
            six_line: ["10-15", "13-18"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    16: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["16"],
            split: ["13-16", "16-17", "16-19"],
            corner: ["13-17", "16-20"],
            street: ["16-17-18"],
            six_line: ["13-18", "16-21"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    17: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["17"],
            split: ["14-17", "16-17", "17-18", "17-20"],
            corner: ["13-17", "14-18", "16-20", "17-21"],
            street: ["16-17-18"],
            six_line: ["13-18", "16-21"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    18: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["18"],
            split: ["15-18", "17-18", "18-21"],
            corner: ["14-18", "17-21"],
            street: ["16-17-18"],
            six_line: ["13-18", "16-21"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'small numbers',
        dozen: "2nd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    19: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["19"],
            split: ["16-19", "19-20", "19-22"],
            corner: ["16-20", "19-23"],
            street: ["19-20-21"],
            six_line: ["16-21", "19-24"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    20: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["20"],
            split: ["17-20", "19-20", "20-21", "20-23"],
            corner: ["16-20", "17-21", "19-23", "20-24"],
            street: ["19-20-21"],
            six_line: ["16-21", "19-24"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    21: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["21"],
            split: ["18-21", "20-21", "21-24"],
            corner: ["17-21", "20-24"],
            street: ["19-20-21"],
            six_line: ["16-21", "19-24"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    22: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["22"],
            split: ["19-22", "22-23", "22-25"],
            corner: ["19-23", "22-26"],
            street: ["22-23-24"],
            six_line: ["19-24", "22-27"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    23: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["23"],
            split: ["20-23", "22-23", "23-24", "23-26"],
            corner: ["19-23", "20-24", "22-26", "23-27"],
            street: ["22-23-24"],
            six_line: ["19-24", "22-27"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    24: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["24"],
            split: ["21-24", "23-24", "24-27"],
            corner: ["20-24", "23-27"],
            street: ["22-23-24"],
            six_line: ["19-24", "22-27"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "2nd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    25: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["25"],
            split: ["22-25", "25-26", "25-28"],
            corner: ["22-26", "25-29"],
            street: ["25-26-27"],
            six_line: ["22-27", "25-30"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    26: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["26"],
            split: ["23-26", "25-26", "26-27", "26-29"],
            corner: ["22-26", "23-27", "25-29", "26-30"],
            street: ["25-26-27"],
            six_line: ["22-27", "25-30"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    27: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["27"],
            split: ["24-27", "26-27", "27-30"],
            corner: ["23-27", "26-30"],
            street: ["25-26-27"],
            six_line: ["22-27", "25-30"]
        },
        color: 'red',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    28: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["28"],
            split: ["25-28", "28-29", "28-31"],
            corner: ["25-29", "28-32"],
            street: ["28-29-30"],
            six_line: ["25-30", "28-33"]
        },
        color: 'black',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    29: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["29"],
            split: ["26-29", "28-29", "29-30", "29-32"],
            corner: ["25-29", "26-30", "28-32", "29-33"],
            street: ["28-29-30"],
            six_line: ["25-30", "28-33"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    30: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["30"],
            split: ["27-30", "29-30", "30-33"],
            corner: ["26-30", "29-33"],
            street: ["28-29-30"],
            six_line: ["25-30", "28-33"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    31: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["31"],
            split: ["28-31", "31-32", "31-34"],
            corner: ["28-32", "31-35"],
            street: ["31-32-33"],
            six_line: ["28-33", "31-36"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    32: {
        numb: 1,
        split: 4,
        corner: 4,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["32"],
            split: ["29-32", "31-32", "32-33", "32-35"],
            corner: ["28-32", "29-33", "31-35", "32-36"],
            street: ["31-32-33"],
            six_line: ["28-33", "31-36"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd",
        chipsComplete: 40,
        chipsPayoutComplete: 392
    },
    33: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 2,
        positions: {
            numb: ["33"],
            split: ["30-33", "32-33", "33-36"],
            corner: ["29-33", "32-36"],
            street: ["31-32-33"],
            six_line: ["28-33", "31-36"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd",
        chipsComplete: 30,
        chipsPayoutComplete: 294
    },
    34: {
        numb: 1,
        split: 2,
        corner: 1,
        street: 1,
        six_line: 1,
        positions: {
            numb: ["34"],
            split: ["31-34", "34-35"],
            corner: ["31-35"],
            street: ["34-35-36"],
            six_line: ["31-36"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "1st",
        chipsComplete: 18,
        chipsPayoutComplete: 198
    },
    35: {
        numb: 1,
        split: 3,
        corner: 2,
        street: 1,
        six_line: 1,
        positions: {
            numb: ["35"],
            split: ["32-35", "34-35", "35-36"],
            corner: ["31-35", "32-36"],
            street: ["34-35-36"],
            six_line: ["31-36"]
        },
        color: 'black',
        parity: 'odd',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "2nd",
        chipsComplete: 24,
        chipsPayoutComplete: 264
    },
    36: {
        numb: 1,
        split: 2,
        corner: 1,
        street: 1,
        six_line: 1,
        positions: {
            numb: ["36"],
            split: ["33-36", "35-36"],
            corner: ["32-36"],
            street: ["34-35-36"],
            six_line: ["31-36"]
        },
        color: 'red',
        parity: 'even',
        magnitude: 'large numbers',
        dozen: "3rd",
        column: "3rd",
        chipsComplete: 18,
        chipsPayoutComplete: 198
    }
});
// глубокая заморозка объекта (только для чтения):
deepFreeze(rouletteNumber);