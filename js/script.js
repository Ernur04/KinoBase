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

    // --- Логика для календаря ---
    const calendarToggleBtn = document.getElementById('calendar-toggle');
    const calendarModal = document.getElementById('calendar-modal');
    const calendarCloseBtn = document.getElementById('calendar-close');

    // Открыть календарь
    calendarToggleBtn.addEventListener('click', () => {
        calendarModal.classList.add('show');
    });

    // Закрыть календарь по клику на крестик
    calendarCloseBtn.addEventListener('click', () => {
        calendarModal.classList.remove('show');
    });

    // Закрыть календарь по клику вне контента (на затемненный фон)
    calendarModal.addEventListener('click', (e) => {
        if (e.target === calendarModal) {
            calendarModal.classList.remove('show');
        }
    });
});
