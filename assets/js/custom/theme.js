// Dark mode toggle

(function () {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(darkPalette);
        }
        setTimeout (function() {
            var tweets = document.querySelectorAll('[data-tweet-id]');
            tweets.forEach(function(tweet) {
                var src = tweet.getAttribute('src');
                tweet.setAttribute('src', src.replace('theme=light', 'theme=dark'));
            });
        }, 1000);
    } else {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(lightPalette);
        }
        var tweets = document.querySelectorAll('[data-tweet-id]');
        tweets.forEach(function (tweet) {
            var src = tweet.getAttribute('src');
            tweet.setAttribute('src', src.replace('theme=dark', 'theme=light'));
        });
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
        var tweets = document.querySelectorAll('[data-tweet-id]');
        tweets.forEach(function (tweet) {
            var src = tweet.getAttribute('src');
            tweet.setAttribute('src', src.replace('theme=dark', 'theme=light'));
        });
    } else {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(darkPalette);
        }
        var tweets = document.querySelectorAll('[data-tweet-id]');
        tweets.forEach(function (tweet) {
            var src = tweet.getAttribute('src');
            tweet.setAttribute('src', src.replace('theme=light', 'theme=dark'));
        });
    }
};

var toggleColorButtons = document.querySelectorAll('.color-mode-btn');

toggleColorButtons.forEach(function (btn) {
    btn.addEventListener('click', toggleColorMode);
});

// Progress bar

const readingProgress = (contentArea, progressBar) => {
    const content = document.querySelector(contentArea);
    const progress = document.querySelector(progressBar);

    const frameListening = () => {
        const contentBox = content.getBoundingClientRect();
        const midPoint = window.innerHeight / 2;

        if (contentBox.top > midPoint) {
            progress.value = 0;
        }

        if (contentBox.top < midPoint) {
            progress.value = progress.max;
        }

        if (contentBox.top <= midPoint && contentBox.bottom >= midPoint) {
            progress.value =
                (progress.max * Math.abs(contentBox.top - midPoint)) /
                contentBox.height;
        }

        window.requestAnimationFrame(frameListening);
    };

    window.requestAnimationFrame(frameListening);
};

readingProgress(".gh-content", ".reading-progress-bar");

/*
 * Published time for a post is formatted to a custom format in two places
 * 1. Byline on a post page
 * 2. Byline on the post preview card on the home page, author page, tag page, etc.
*/

$(document).ready(function () {
    $('.byline-meta-date').each(function (i, date) {
        var $date = $(date);

        $date.html(moment.unix($date.attr('datetime')).format('MMMM D, YYYY [at] h:mm a'));
    });
});

$(document).ready(function () {
    $('.post-card-meta-date').each(function (i, time) {
        var $time = $(time);

        $time.html(moment.unix($time.attr('datetime')).format('MMM D, YYYY [@] h:mm a'));
    });
});
