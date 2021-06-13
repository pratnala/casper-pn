// Set dark mode based on system theme
// Provide a toggle for user to override and store their preference in a cookie

(function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') == null) {
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');
    }

    let userPreference = localStorage.getItem('theme') || '';
    if (userPreference) {
        document.documentElement.classList.add(userPreference);
    }
})();

function themeToggle() {
    document.documentElement.classList.toggle('dark-mode');

    let userPreference = localStorage.getItem('theme');
    if (userPreference && userPreference === 'dark-mode') {
        localStorage.setItem('theme', '');
    } else {
        localStorage.setItem('theme', 'dark-mode');
    }
}
