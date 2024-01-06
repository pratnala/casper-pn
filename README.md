# casper-pn-5

This repository is the testing ground for upgrading [casper-pn](https://github.com/pratnala/casper-pn) to v5 of Casper.

It is an extension of the default theme, [Casper](https://github.com/TryGhost/Casper).

## Changes from the original Casper theme 5.7.0

Listed below are the changes from the original Casper theme. Changes are made in [assets/css/custom](assets/css/custom), [assets/js/custom](assets/js/custom), and the `.hbs` files under root. All font files are available in [assets/fonts](assets/fonts).

1. Font updates:
   1. Default sans font -- [Dubai](https://dubaifont.com/).
   2. Default serif font -- [Andada](https://www.fontsquirrel.com/fonts/andada).
   3. Default monospaced font -- [Cascadia Code](https://github.com/microsoft/cascadia-code).
2. Custom [home page](home.hbs). Includes:
   1. Welcome blurb.
   2. Three most recent posts from selected tags.
3. [Custom routes](extras/routes.yaml) added to make use of custom home page.
4. [Post](post.hbs) updates:
   1. Bigger post subtitle.
   2. Publish time in client time zone added next to date.
   3. Progress bar to show reading progress.
   4. Justify post content.
   5. Show all tags instead of just primary tag.
   6. Replaced Ghost comments with [Hyvor Talk](https://talk.hyvor.com/). It is privacy-focused and allows anyone to comment instead of just members.
   7. Custom styling for blockquote.
   8. Added a new smaller blockquote style. Use it in an HTML snippet -- `<blockquote class="small">Your text here</blockquote>`.
   9. Added post navigation to navigate to previous and next post.
5. [Post card](partials/post-card.hbs) layout
   1. Add list of authors.
   2. Show all tags instead of just primary.
   3. Publish time in client time zone added next to date.
6. [Top navigation bar](default.hbs):
   1. Dark mode toggle added with default load in user's device preference.
   2. Added additional links:
      1. Social - Facebook, Instagram, X
      2. RSS feed
      3. Website
   3. Top header is sticky except on home page.
7. Author, tag, and all posts pages are paginated and infinite scroll has been disabled.
8. Location emoji on author page.
9. Added [Fathom Analytics](https://usefathom.com/) for privacy-focused analytics.
10. Bugs
    1. Removed extraneous scrollbar in tag/author description on tag/author page.
    2. Customizing the size of some elements across pages to look "better".

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
