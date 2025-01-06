document.querySelectorAll('.smooth').forEach(item => {
    item.addEventListener('click', event => {
        event.preventDefault();
        const targetSelector = item.getAttribute('data-target');
        const target = document.querySelector(targetSelector);
        if (target) { // Проверяем, что блок существует
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
