// Set dark mode based on system theme
// Provide a toggle for user to override and store their preference in a cookie
var palette = null;

var darkPalette = {
    accent: "#ffffff",
    accentText: "#000000",
    footerHeader: "#1b1818",
    footerHeaderText: "#cac7c7",
    box: "#232121",
    boxText: "#ffffff",
    boxLightText: "#aaaaaa",
    backgroundText: "#ffffff"
};

var lightPalette = {
    accent: "#000000",
    accentText: "#ffffff",
    footerHeader: "#fafafa",
    footerHeaderText: "#484848",
    box: "#ffffff",
    boxText: "#111111",
    boxLightText: "#aaaaaa",
    backgroundText: "#111111"
};

(function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') == null) {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        palette = darkPalette;
    }

    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        window.hyvor_talk.setPalette(darkPalette);
    } else {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        window.hyvor_talk.setPalette(lightPalette);
    }
})();

var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains('light--hidden')) {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        window.hyvor_talk.setPalette(lightPalette);
    } else {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        window.hyvor_talk.setPalette(darkPalette);
    }
};

var toggleColorButtons = document.querySelectorAll('.color-mode-btn');

toggleColorButtons.forEach(function (btn) {
    btn.addEventListener('click', toggleColorMode);
});
