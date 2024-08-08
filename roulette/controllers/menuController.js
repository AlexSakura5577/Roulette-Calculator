export function initMenu() {
    const appDiv = document.getElementById('app'); // Находим контейнер
    appDiv.innerHTML = ''; // Очищаем контейнер на случай, если там что-то есть

    fetch('./views/menu/menuView.html')
        .then(response => response.text())
        .then(htmlContent => {
            appDiv.innerHTML = htmlContent; // Загружаем HTML контент
        });

    fetch('./views/menu/menuStyles.css')
        .then(response => response.text())
        .then(cssContent => {
            const styleElement = document.createElement('style');
            styleElement.textContent = cssContent;
            document.head.appendChild(styleElement);
        });
};