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
        palette = darkPalette;
    } else {
        palette = lightPalette;
    }
})();
