# casper-pn

This repository comprises the theme files for [my blog](https://blog.pratyushnalam.com) powered by [Ghost](https://ghost.org).

It is currently based on the default theme, [Casper](https://github.com/TryGhost/Casper).

## Changes from the original Casper theme 4.7.2

Listed below are the changes from the original Casper theme. Changes are made in [assets/css/custom](assets/css/custom), [assets/js/custom](assets/js/custom), and the `.hbs` files under root. All font files are available in [assets/fonts](assets/fonts).

1. Changed default sans serif font to [Dubai](https://dubaifont.com/).
2. Changed default serif font to [Andada](https://www.fontsquirrel.com/fonts/andada).
3. Default monospaced font set to [Cascadia Code](https://github.com/microsoft/cascadia-code). Using v2106.17.
4. Post content is justified. Excerpt/subtitle size is increased. Post body uses sans serif font.
5. A [custom home page](home.hbs) layout with a short welcome blurb and three most recent posts from selected tags.
6. Custom routes added [here](extras/routes.yaml). These can be modified as per requirements and needs to be manually uploaded to Ghost. All posts are at `/posts/`.
7. Posts in the all posts, author, and tag pages are paginated with a [custom template](partials/pagination.hbs).
8. Adding post's published time in client's time zone.
9. Automatic dark mode. Additional toggle for user to override and store user preference in a cookie.
10. Added dark mode friendly styling for article tags in post contents and post cards (used on home page, author pages, and tag pages), 404 page, and horizontal lines (`<hr>` tags).
11. Top header is sticky everywhere except home page.
12. All tags are shown in post contents and post cards instead of just the primary tag.
13. Blockquotes use monospaced font to be more artistically bold.
14. New class defined for blockquotes when you want to use a smaller blockquote. Small blockquotes use serif font to stand out in emphasis. To use it in posts on Ghost, use an HTML snippet with `<blockquote class="small">Your text here</blockquote>`.
15. Added a progress bar on posts to illustrate how much has been read.
16. Using [Hyvor Talk](https://talk.hyvor.com/) for privacy-focused comments.
17. Using [Fathom Analytics](https://usefathom.com/) for privacy-focused website analytics.
18. Added a cookie consent pop up.
19. jQuery dependency is kept locally instead of loading remotely for faster load time.

## How to use this theme in your Ghost-powered website

1. Install [Node.js](https://nodejs.org/) and [Gulp](https://gulpjs.com/). Open a terminal window in the repository's root directory and run `gulp`.
2. The analytics call is at line 17 in [default.hbs](default.hbs). If you are going to use Fathom, replace it with your site's URL. Else, delete it.
3. The comments plugin is at line 80 in [post.hbs](post.hbs). Replace the `<section>` tab group with your site's code given by Hyvor or delete if you are using something else or nothing at all.
4. You now have 2 ways to use this theme in your website
    * Zip the entire directory and upload it in the Ghost control panel under theme.
    * Set up a GitHub action to automatically deploy the theme to your blog in a seamless CI/CD manner. More information can be found [here](https://github.com/marketplace/actions/deploy-ghost-theme).
5. If you want to make use of the custom routes, make sure to modify [this file](extras/routes.yaml) and upload it to Ghost under `Settings -> Labs` in your admin console.

## Gratitude

Click [here](THANKS.md) for a list of references.

## Questions?

Create an issue and I will get back to you.
