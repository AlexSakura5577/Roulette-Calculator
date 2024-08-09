
export function loadFieldAndTrackContent() {
    const appDiv = document.getElementById('app');
    appDiv.innerHTML = ''; // Очищаем контейнер перед загрузкой нового контента

    fetch('./views/field-and-track/fieldAndTrackView.html')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to load fieldAndTrackView.html');
            }
            return response.text();
        })
        .then(htmlContent => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(htmlContent, 'text/html');
            const bodyContent = doc.body.innerHTML;
            appDiv.innerHTML = bodyContent; // Загружаем HTML контент
            const scriptTags = Array.from(doc.querySelectorAll('script[src]'));

            const promises = scriptTags.map(script => {
                const src = script.getAttribute('src');
                return import(src);
            });
            return Promise.all(promises);
        })
        .catch(error => {
            console.error('Error loading fieldAndTrackView.html:', error);
        });

    // Загрузка CSS стилей (если необходимо)
    const linkElement = document.createElement('link');
    linkElement.rel = 'stylesheet';
    linkElement.href = './views/field-and-track/fieldAndTrackStyles.css';
    document.head.appendChild(linkElement);
};
