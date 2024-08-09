import { loadFieldAndTrackContent } from './fieldAndTrackController.js';

export function initMenu() {
    // Слушаем событие DOMContentLoaded для запуска кода после загрузки DOM
    // document.addEventListener('DOMContentLoaded', function () {

    const appDiv = document.getElementById('app'); // Находим контейнер
    appDiv.innerHTML = ''; // Очищаем контейнер на случай, если там что-то есть

    const parser = new DOMParser();

    fetch('./views/menu/menuView.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load menuView.html');
            }
            return response.text();
        })
        .then(htmlContent => {
            // парсинг HTML-файла
            const doc = parser.parseFromString(htmlContent, 'text/html');
            // извлечение содержимого тега <body>
            const bodyContent = doc.body.innerHTML;
            // использование содержимого тега <body>
            appDiv.innerHTML = bodyContent; // Загружаем HTML контент
            // console.log(bodyContent);

            // Теперь можно добавлять обработчик события, когда элемент доступен в DOM
            const fieldAndTrackLink = document.getElementById('fieldAndTrackLink');
            if (fieldAndTrackLink) {
                fieldAndTrackLink.addEventListener('click', function (event) {
                    event.preventDefault(); // Предотвращаем переход по ссылке
                    loadFieldAndTrackContent(); // Вызываем функцию загрузки контента
                });
            } else {
                console.error('Element with id "fieldAndTrackLink" not found');
            }
        })
        .catch(error => {
            console.error('Error loading menuView.html:', error);
        });

    // Загружаем CSS стили напрямую и добавляем их в <head>
    const styleElement = document.createElement('link');
    styleElement.rel = 'stylesheet';
    styleElement.href = './views/menu/menuStyles.css';
    document.head.appendChild(styleElement);
    // });
};