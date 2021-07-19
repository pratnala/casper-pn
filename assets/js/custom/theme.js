// Dark mode toggle

(function () {
    var theme = localStorage.getItem('theme');
    if (theme === 'dark') {
        document.documentElement.setAttribute('color-mode', 'dark');
        document.documentElement.classList.add('dark-mode');
        if (window.hyvor_talk) {
            window.hyvor_talk.setPalette(darkPalette);
        }
    } else {
        document.documentElement.setAttribute('color-mode', 'light');
        document.documentElement.classList.remove('dark-mode');
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

// Post time

$(document).ready(function () {
    $('.byline-meta-date').each(function (i, date) {
        var $date = $(date);
        var $time = $(time);

        $date.html(moment($date.attr('datetime')).format('MMMM D, YYYY [at] h:mm a'));
        $time.html(moment($time.attr('datetime')).format('MMMM D, YYYY [at] h:mm a'));
    });
});
