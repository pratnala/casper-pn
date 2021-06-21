// Set dark mode based on system theme
// Provide a toggle for user to override and store their preference in a cookie
var palette = null;

(function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') == null) {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        palette = {
            accent: "#ffffff",
            accentText: "#000000",
            footerHeader: "#1b1818",
            footerHeaderText: "#cac7c7",
            box: "#232121",
            boxText: "#ffffff",
            boxLightText: "#aaaaaa",
            backgroundText: "#ffffff"
        };
    }

    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        palette = {
            accent: "#ffffff",
            accentText: "#000000",
            footerHeader: "#1b1818",
            footerHeaderText: "#cac7c7",
            box: "#232121",
            boxText: "#ffffff",
            boxLightText: "#aaaaaa",
            backgroundText: "#ffffff"
        };
    } else {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        palette = null;
    }
})();

var toggleColorMode = function toggleColorMode(e) {
    if (e.currentTarget.classList.contains('light--hidden')) {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        palette = null;
    } else {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        palette = {
            accent: "#ffffff",
            accentText: "#000000",
            footerHeader: "#1b1818",
            footerHeaderText: "#cac7c7",
            box: "#232121",
            boxText: "#ffffff",
            boxLightText: "#aaaaaa",
            backgroundText: "#ffffff"
        };
    }
};

var toggleColorButtons = document.querySelectorAll('.color-mode-btn');

toggleColorButtons.forEach(function (btn) {
    btn.addEventListener('click', toggleColorMode);
});
