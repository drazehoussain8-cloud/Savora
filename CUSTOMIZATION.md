# Customization Guide

## Moroccan and halal content
The demo content is written for the Moroccan market and is easy to adapt:
- The menu is halal and no alcohol appears anywhere (drinks: Moroccan mint tea, Moroccan tea service, lemonade, espresso). The marquee on the home page, the "Is the food halal?" FAQ item and the note under the menu on `menu.html` state this. Edit or remove them if they do not apply to your restaurant.
- Prices are in Moroccan dirhams (`DH`) and the phone uses the `+212` format. To change the currency, search for `DH` in `index.html` and `menu.html`.
- Team and testimonial names are Moroccan examples (fictional).
- A subtle zellige-style star pattern decorates the page headers, the statistics band and the call-to-action. It is defined by `--zellige` in `variables.css` and used at the end of `refinements.css`; delete those rules to remove it.

## Placeholder content you must replace before launch
Everything below is sample content. None of it describes a real business.

| What | Where | Note |
|---|---|---|
| Brand name "Savora" | all pages, `logo.svg`, `favicon.svg`, `site.webmanifest`, page titles | search and replace |
| Address `123 Your Street, Your City` | footer of every page, `contact.html`, `reservations.html`, legal pages | |
| Phone `+212 5 00 00 00 00` | same places, plus form placeholders | |
| Emails `hello@yourdomain.com`, `events@yourdomain.com` | footer, contact page, legal pages | use an address on your own domain |
| Opening hours | footer, `reservations.html` | "Daily 12:00 - 23:30" is an example |
| Social media links | footer icons use `href="#"` | add your real profile URLs |
| Google Map | `contact.html` (`q=Morocco` in the iframe) | replace with your address, see "Google Maps" below |
| Menu, dishes and prices | `menu.html`, "Signature dishes" in `index.html` | all prices are examples |
| Halal claims | "100% Halal" marquee item, "Is the food halal?" FAQ answer, halal note on `menu.html`, "halal" in dish descriptions | keep them only if your restaurant is really halal; otherwise remove or reword |
| Awards, ratings and statistics | hero (12+ years, 4.9, 35k), "Chef's Table Award / Best Restaurant 2025" badge, statistics band, "since 2012", timeline in `about.html` | invented figures: use real facts or remove them |
| Delivery and event details | "30 min", "Free delivery over 300 DH", "private room seats up to 40", "farms within 80 km" | match your real service |
| Team members | `about.html` | fictional people and photos |
| Testimonials | `index.html` | fictional quotes: replace with real reviews (with permission) or remove; never publish invented reviews |
| Photographs | `assets/img/` | AI-generated demo images, see `IMAGES.md` |
| Legal pages | `privacy-policy.html`, `terms.html` | replace `[Business Name]`, `[Your Country]` and contact details, then have them reviewed |
| Domain | `sitemap.xml`, `robots.txt` (`https://www.example.com`), canonical and `og:image` URLs | use your real domain |
| Forms | reservation, contact and newsletter forms | demo only until connected, see "Forms" |
| Fonts | Google Fonts `<link>` | self-host the fonts if you need to avoid third-party requests |
| Analytics and cookies | not included | add your own and a consent banner if required |


## Colors, fonts and spacing
Everything is controlled from `assets/css/variables.css`.

```css
:root{
  --bg:#0e1311;      /* page background */
  --gold:#c9a66b;    /* accent color */
  --cream:#f4eee3;   /* light sections */
  --font-head:'Playfair Display',Georgia,serif;
  --font-body:'Inter',system-ui,sans-serif;
  --max:1200px;      /* content width */
}
```

Example - a warm red brand: set `--gold:#d1495b; --gold-2:#e8707f; --gold-ink:#fff;`.

### Changing fonts
1. Pick fonts on fonts.google.com.
2. Replace the Google Fonts `<link>` in the `<head>` of each page.
3. Update `--font-head` and `--font-body`.

## Logo and favicon
- Logo: `assets/img/logo.svg` (used in header and footer, sized by `.logo img` in `components.css`). A PNG with transparent background also works; update the file name in the `<img>` tags.
- Favicon: `assets/img/favicon.svg`. For older browsers also add a `favicon.ico` and a 180x180 `apple-touch-icon.png`.

## Images
See `IMAGES.md`. Each image slot is a `.ph` block that shows a placeholder until the real file exists. To change a file name, edit the `src` in the HTML.

## Text and sections
- Sections are marked with comments such as `<!-- 05 SIGNATURE DISHES -->` in `index.html`.
- To remove a section, delete everything between its comment and the next one.
- To reorder, cut and paste whole `<section>` blocks.
- Alternate section backgrounds with the classes `alt` (slightly lighter dark) and `light` (cream).

## Menu items
In `menu.html` each dish is one `.m-item` block. Set `data-cat` to `starters`, `mains`, `desserts` or `drinks`. To add a category, add a `<button class="tab" data-filter="newcat">` and use the same value in `data-cat`.

## Icons
Use `<i data-i="name"></i>`. Available names are listed in `assets/js/icons.js` (utensils, chef-hat, truck, leaf, flame, cup, shield, star, clock, phone, mail, map-pin and more). To add one, paste an SVG path from lucide.dev into the `P` object in `icons.js`.

## Forms
Forms use `data-demo` and only show a success message. To receive messages:

**Formspree:** create a form on formspree.io, then on the `<form>` tag remove `data-demo` and add `action="https://formspree.io/f/YOUR_ID" method="POST"`.

**Netlify Forms:** remove `data-demo` and add `name="reservation" method="POST" data-netlify="true"`.

Each input already has a `name` attribute.

## Google Maps
`contact.html` contains a Google Maps `<iframe>` centered on Morocco as a placeholder. Open it and replace `q=Morocco` in the `src` with your address (URL-encoded, for example `q=Rue%20Example%2C%20Casablanca`), or paste the embed URL from Google Maps > Share > Embed a map. Mention the map in your privacy policy, because it loads content from Google.

While the map loads, on a slow connection, or when the visitor is offline, the page shows a map icon with a message and an "Open in Google Maps" link (the `.map-fallback` block in `contact.html`, styled in `style.css`). The link is generated from the iframe `src`, so you only change the address in one place. Keep the `data-map` attribute and the `.map-fallback` block. Without JavaScript the iframe is simply shown as normal.

## Animations
- Scroll reveal: add class `rv` to an element (optional `l`, `r`, `z` for left, right, zoom) and a delay with `style="--d:.2s"`.
- Turn off all motion: delete `animations.css` from the `<head>`, or users with "reduce motion" enabled get it automatically.
- Marquee speed: change `32s` in `.marquee-track` (`animations.css`).

## Responsive breakpoints
Defined in `assets/css/responsive.css`: 1600, 1200, 1024 (mobile menu starts), 820, 620, 480, 380 pixels.

## SEO
- Edit `<title>` and `<meta name="description">` in every page.
- Add a `<link rel="canonical" href="https://yourdomain.com/page.html">` per page.
- Replace `assets/img/og-cover.jpg` (1200x630) for social sharing, and make the `og:image` URL absolute.
- Update `sitemap.xml` and `robots.txt`.
- For restaurants, add JSON-LD `Restaurant` structured data (name, address, opening hours, menu URL).

## Analytics and cookies
Paste your analytics snippet before `</head>`. If you use analytics or marketing cookies, add a consent banner where required by law and update the Privacy Policy.

## Arabic version and right-to-left languages
The package already includes a full Arabic version in `ar/`. To edit its text, open the file in `ar/` with the same name as the English page; the structure is identical. Things to know:
- Arabic pages load `../assets/css/rtl.css` last. Put layout fixes for Arabic there (use `html[dir="rtl"]` selectors).
- Arabic fonts are set in `rtl.css` (`--font-head`, `--font-body`: Cairo and Tajawal). Never add `letter-spacing` or italics to Arabic text, it breaks the joined letters.
- Phone numbers and e-mails are wrapped in `<bdi dir="ltr">` so they keep their order; do the same for new ones.
- Script messages are in `assets/js/i18n-ar.js`.
- Replace the sample address, phone, e-mails, names and testimonials in **both** languages (same list as in the English version).
- The logo image is the Latin wordmark "SAVORA" in both versions; swap `logo.svg` (or add `logo-ar.svg` and point the `ar/` pages to it) if you want an Arabic logo.
- For another RTL language (Hebrew, Persian, Urdu) copy `ar/`, translate it and change `lang`.

## Hosting tips
`.htaccess` enables compression, caching and basic security headers on Apache. On Netlify or Vercel it is simply ignored.
