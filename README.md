# blog-theme

This repository comprises the theme files for [my blog](https://blog.pratyushnalam.com) powered by [Ghost](https://ghost.org).

It is currently based on the default theme, [Casper](https://github.com/TryGhost/Casper).

## Changes from the original Casper theme 4.0

Listed below are the changes from the original Casper theme. Changes are made in [custom.css](assets/css/custom.css) and [custom.js](assets/js/custom.js). All font files are available in [the fonts directory](assets/fonts).

1. Changed default sans serif font to [Dubai](https://dubaifont.com/).
2. Default monospaced font set to [Cascadia Code](https://github.com/microsoft/cascadia-code). Using v2105.24.
3. Post content is justified.
4. Automatic dark mode. Additional toggle for user to override and store user preference in a cookie.
5. Added dark mode friendly styling for article tags in post contents and post cards (used on home page, author pages, and tag pages), 404 page, and horizontal lines (`<hr>` tags).
6. All tags are shown in post contents and post cards instead of just the primary tag.
7. Blockquotes use monospaced font to be more artistically bold.
8. New class defined for blockquotes when you want to use a smaller blockquote.
9. Using [Commento](https://commento.io/) for comments.
10. Post body uses sans serif font.
11. Added a cookie consent pop up.

## How to use this theme in your Ghost-powered website

1. Install [Node.js](https://nodejs.org/) and [Gulp](https://gulpjs.com/). Open a terminal window in the repository's root directory and run `gulp`.
2. You now have 2 ways to use this theme in your website
    * Zip the entire directory and upload it in the Ghost control panel under theme.
    * Set up a GitHub action to automatically deploy the theme to your blog in a seamless CI/CD manner. More information can be found [here](https://github.com/marketplace/actions/deploy-ghost-theme).

## Gratitude

Click [here](THANKS.md) for a list of references.
