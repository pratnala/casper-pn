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
