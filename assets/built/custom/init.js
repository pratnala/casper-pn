var palette=null,darkPalette={accent:"#ffffff",accentText:"#000000",footerHeader:"#1b1818",footerHeaderText:"#cac7c7",box:"#232121",boxText:"#ffffff",boxLightText:"#aaaaaa",backgroundText:"#ffffff"},lightPalette={accent:"#000000",accentText:"#ffffff",footerHeader:"#fafafa",footerHeaderText:"#484848",box:"#ffffff",boxText:"#111111",boxLightText:"#aaaaaa",backgroundText:"#111111"};!function(){window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches&&null==localStorage.getItem("theme")&&(document.documentElement.setAttribute("color-mode","dark"),document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark"),palette=darkPalette,setTimeout(function(){document.querySelectorAll("[data-tweet-id]").forEach(function(e){var t=e.getAttribute("src");e.setAttribute("src",t.replace("theme=light","theme=dark"))})},1e3));var e=localStorage.getItem("theme");palette="dark"===e?darkPalette:lightPalette}();
//# sourceMappingURL=init.js.map