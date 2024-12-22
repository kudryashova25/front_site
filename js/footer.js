// Загружаем подвал и подсвечиваем активную вкладку
function loadFooter() {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-container').innerHTML = data;

            // Подсветка активной вкладки
            const currentPath = window.location.pathname.split('/').pop();
            document.querySelectorAll('.footer-link').forEach(link => {
                if (link.href.includes(currentPath)) {
                    link.classList.add('active');
                }
            });
        });
}

// Вызываем функцию загрузки подвала
loadFooter();
