"dark"===localStorage.getItem("theme")?(document.documentElement.setAttribute("color-mode","dark"),document.documentElement.classList.add("dark-mode"),window.hyvor_talk&&window.hyvor_talk.setPalette(darkPalette)):(document.documentElement.setAttribute("color-mode","light"),document.documentElement.classList.remove("dark-mode"),window.hyvor_talk&&window.hyvor_talk.setPalette(lightPalette));var toggleColorMode=function(e){e.currentTarget.classList.contains("light--hidden")?(document.documentElement.setAttribute("color-mode","light"),document.documentElement.classList.remove("dark-mode"),localStorage.setItem("theme","light"),window.hyvor_talk&&window.hyvor_talk.setPalette(lightPalette)):(document.documentElement.setAttribute("color-mode","dark"),document.documentElement.classList.add("dark-mode"),localStorage.setItem("theme","dark"),window.hyvor_talk&&window.hyvor_talk.setPalette(darkPalette))},toggleColorButtons=document.querySelectorAll(".color-mode-btn");toggleColorButtons.forEach(function(e){e.addEventListener("click",toggleColorMode)});const readingProgress=(e,t)=>{const o=document.querySelector(e),n=document.querySelector(t),l=()=>{var e=o.getBoundingClientRect(),t=window.innerHeight/2;e.top>t&&(n.value=0),e.top<t&&(n.value=n.max),e.top<=t&&e.bottom>=t&&(n.value=n.max*Math.abs(e.top-t)/e.height),window.requestAnimationFrame(l)};window.requestAnimationFrame(l)};readingProgress(".post-full-content",".reading-progress-bar");
//# sourceMappingURL=theme.js.map