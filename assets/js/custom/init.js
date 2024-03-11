// Set dark mode based on system theme
// Provide a toggle for user to override and store their preference in a cookie
(function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') == null) {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        setTimeout(function () {
            var tweets = document.querySelectorAll('[data-tweet-id]');
            tweets.forEach(function (tweet) {
                var src = tweet.getAttribute('src');
                tweet.setAttribute('src', src.replace('theme=light', 'theme=dark'));
            });
        }, 1000);
    }
})();
