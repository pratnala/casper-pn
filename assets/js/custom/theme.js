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
