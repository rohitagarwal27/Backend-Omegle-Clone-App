document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;
    const header = document.querySelector('header');

    // Check for saved user preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.classList.toggle('dark-mode', savedTheme === 'dark');
        header.classList.toggle('dark-mode', savedTheme === 'dark');
        toggleButton.textContent = savedTheme === 'dark' ? '🌙' : '🔆';
    }

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        const isDarkMode = body.classList.toggle('dark-mode');
        header.classList.toggle('dark-mode', isDarkMode);
        toggleButton.textContent = isDarkMode ? '🌙' : '🔆';
        // Save user preference
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
 