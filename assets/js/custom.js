// Set dark mode based on system theme
// Provide a toggle for user to override

(function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
    }
})();

function themeToggle() {
    document.documentElement.classList.toggle('dark-mode');
}
