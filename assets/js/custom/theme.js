(function () {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        palette = darkPalette;
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(darkPalette);
        }
    } else {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        palette = lightPalette;
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(lightPalette);
        }
    }
})();

var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains('light--hidden')) {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(lightPalette);
        }
    } else {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(darkPalette);
        }
    }
};

var toggleColorButtons = document.querySelectorAll('.color-mode-btn');

toggleColorButtons.forEach(function (btn) {
    btn.addEventListener('click', toggleColorMode);
});
