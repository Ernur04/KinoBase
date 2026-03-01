document.addEventListener('DOMContentLoaded', () => {
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = themeToggleBtn.querySelector('i');

    // Проверяем сохраненную тему в localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
    }

    themeToggleBtn.addEventListener('click', () => {
        // Переключаем класс на body
        document.body.classList.toggle('light-theme');

        // Изменяем иконку и сохраняем выбор
        if (document.body.classList.contains('light-theme')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
            localStorage.setItem('theme', 'light');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
            localStorage.setItem('theme', 'dark');
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', (event) => {
        // Останавливаем стандартную перезагрузку страницы
        event.preventDefault(); 

        const query = searchInput.value.trim();

        if (query) {
            performSearch(query);
        } else {
            console.warn('Поле поиска пустое!');
        }
    });

    function performSearch(query) {
        // Здесь ваша логика (например, запрос к API)
        console.log(`Ищем: ${query}`);
        
        // Или перенаправление, если нужно:
        // window.location.href = `/search?q=${encodeURIComponent(query)}`;
    }
});