
// поворот экрана:
document.body.style.transform = 'rotate(90deg)'; 

// получить список элементов по классу
const nodeList = document.querySelectorAll(".pos");
console.log(nodeList);
// Для каждого элемента добавляем обработчик события "click"
nodeList.forEach(element => {
    element.addEventListener('click', () => {
        let text = element.textContent;
        // Выводим текст элемента в консоль и всплывашку:
        console.log(text);
        alert(text);
    });
});


