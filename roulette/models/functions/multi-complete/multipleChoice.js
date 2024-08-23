// функция множественного выбора:
function multipleChoice(arr, nodeList) {
    arr.forEach((element) => {
        nodeList[element].checked = true;
    });
};
export { multipleChoice };