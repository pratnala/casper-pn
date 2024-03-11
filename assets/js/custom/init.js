// Set dark mode based on system theme
// Provide a toggle for user to override and store their preference in a cookie
(function () {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && localStorage.getItem('theme') == null) {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (document.querySelector('hyvor-talk-comments')) {
            document.querySelector('hyvor-talk-comments').setAttribute('colors', 'dark');
        }
        setTimeout(function () {
            var tweets = document.querySelectorAll('[data-tweet-id]');
            tweets.forEach(function (tweet) {
                var src = tweet.getAttribute('src');
                tweet.setAttribute('src', src.replace('theme=light', 'theme=dark'));
            });
        }, 2000);
    }

    var theme = localStorage.getItem('theme');
    if (theme === 'light') {
        if (document.querySelector('hyvor-talk-comments')) {
            document.querySelector('hyvor-talk-comments').setAttribute('colors', 'light');
        }
        setTimeout(function () {
            var tweets = document.querySelectorAll('[data-tweet-id]');
            tweets.forEach(function (tweet) {
                var src = tweet.getAttribute('src');
                tweet.setAttribute('src', src.replace('theme=dark', 'theme=light'));
            });
        }, 2000);
    } else if (theme === 'dark') {
        if (document.querySelector('hyvor-talk-comments')) {
            document.querySelector('hyvor-talk-comments').setAttribute('colors', 'dark');
        } setTimeout(function () {
            var tweets = document.querySelectorAll('[data-tweet-id]');
            tweets.forEach(function (tweet) {
                var src = tweet.getAttribute('src');
                tweet.setAttribute('src', src.replace('theme=light', 'theme=dark'));
            });
        }, 2000);
    }
})();
