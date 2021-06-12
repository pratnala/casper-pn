// Set dark mode based on system theme
// Coming soon - Toggle + cookie

(function() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark-mode');
    }
})
