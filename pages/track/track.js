// импорты:
// import "../main/app.js";
// import { rouletteSeries } from "../main/app.js";
import { rltPos } from "../main/app.js";

export const track = {
    "neighbor_0": [15, 32, 0, 26, 3],
    "neighbor_1": [16, 33, 1, 20, 14],
    "neighbor_2": [17, 25, 2, 21, 4],
    "neighbor_3": [12, 35, 3, 26, 0],
    "neighbor_4": [2, 21, 4, 19, 15],
    "neighbor_5": [23, 10, 5, 24, 16],
    "neighbor_6": [13, 27, 6, 34, 17],
    "neighbor_7": [18, 29, 7, 28, 12],
    "neighbor_8": [10, 23, 8, 30, 11],
    "neighbor_9": [14, 31, 9, 22, 18],
    "neighbor_10": [8, 23, 10, 5, 24],
    "neighbor_11": [8, 30, 11, 36, 13],
    "neighbor_12": [7, 28, 12, 35, 3],
    "neighbor_13": [11, 36, 13, 27, 6],
    "neighbor_14": [1, 20, 14, 31, 9],
    "neighbor_15": [4, 19, 15, 32, 0],
    "neighbor_16": [5, 24, 16, 33, 1],
    "neighbor_17": [6, 34, 17, 25, 2],
    "neighbor_18": [9, 22, 18, 29, 7],
    "neighbor_19": [21, 4, 19, 15, 32],
    "neighbor_20": [33, 1, 20, 14, 31],
    "neighbor_21": [25, 2, 21, 4, 19],
    "neighbor_22": [31, 9, 22, 18, 29],
    "neighbor_23": [30, 8, 23, 10, 5],
    "neighbor_24": [10, 5, 24, 16, 33],
    "neighbor_25": [34, 17, 25, 2, 21],
    "neighbor_26": [35, 3, 26, 0, 32],
    "neighbor_27": [36, 13, 27, 6, 34],
    "neighbor_28": [29, 7, 28, 12, 35],
    "neighbor_29": [22, 18, 29, 7, 28],
    "neighbor_30": [23, 8, 30, 11, 36],
    "neighbor_31": [20, 14, 31, 9, 22],
    "neighbor_32": [19, 15, 32, 0, 26],
    "neighbor_33": [24, 16, 33, 1, 20],
    "neighbor_34": [27, 6, 34, 17, 25],
    "neighbor_35": [28, 12, 35, 3, 26],
    "neighbor_36": [30, 11, 36, 13, 27]
};

// поворот экрана:
document.body.style.transform = 'rotate(90deg)';

// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
// console.log(nodeList);
// Для каждого элемента добавляем обработчик события "click"
nodeList.forEach(element => {
    element.addEventListener('click', () => {
        let text = element.textContent;
        let id = element.id;
        let neighbors = track[id];
        // Выводим текст элемента в консоль и всплывашку:
        console.log(text);
        console.log(neighbors);
        alert(`${text} \nвыбранные номера: ${neighbors}`);
    });
});


