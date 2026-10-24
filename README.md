# Savora - Restaurant & Food Website Template

Version 1.3.0 | HTML5 + CSS3 + Vanilla JavaScript | No frameworks, no build step

Savora is an elegant, fully responsive website template for restaurants, cafes, fine dining and food delivery services. Open `index.html` and it works. Everything is plain HTML, CSS and JavaScript, so it is easy to edit and to host anywhere.

## Features

- 5 main pages + Privacy Policy, Terms of Service and a custom 404 page
- Home page with 10 sections: Hero, Marquee, Features, About, Signature Dishes, Process, Stats, Gallery, Testimonials, FAQ (plus a booking call-to-action)
- Fully responsive: tested from 320px phones to 1920px desktops
- Smooth animations: scroll reveal, animated counters, floating hero, marquee, testimonial slider
- Filterable menu, accordion FAQ, reservation and contact forms
- **Full Arabic (RTL) version** in the `ar/` folder with a language switch (English / العربية) in the header; both versions share the same `assets/`
- Moroccan character: halal-friendly demo content (no alcohol), prices in dirhams (DH), +212 phone format, Moroccan mint tea, zellige-style pattern accents
- Image-ready: drop photos in `assets/img/` and they appear (elegant placeholders until then). The included photos are AI-generated demo images
- SVG logo, favicon and built-in SVG icon set (no icon fonts, no emojis)
- Easy re-branding: colors, fonts and spacing live in one file (`variables.css`)
- Accessible: skip link, keyboard navigation, focus states, ARIA labels, reduced-motion support
- SEO ready: meta tags, Open Graph, `sitemap.xml`, `robots.txt`, web manifest
- Clean, organized, commented code

## Pages

| File | Purpose |
|---|---|
| `index.html` | Home |
| `menu.html` | Menu with category filter |
| `about.html` | Story, values, team, timeline |
| `reservations.html` | Table booking form |
| `contact.html` | Contact details, form, map area |
| `privacy-policy.html` | Privacy policy (sample text) |
| `terms.html` | Terms of service (sample text) |
| `404.html` | Not-found page |

## File structure

```
savora/
├── index.html, menu.html, about.html, reservations.html, contact.html
├── privacy-policy.html, terms.html, 404.html
├── assets/
│   ├── css/
│   │   ├── variables.css     01  colors, fonts, spacing, tokens
│   │   ├── reset.css         02  reset + base + accessibility helpers
│   │   ├── components.css    03  buttons, cards, forms, tabs, FAQ...
│   │   ├── style.css         04  layout and page sections
│   │   ├── animations.css    05  keyframes, reveal, hover effects
│   │   ├── responsive.css    06  breakpoints
│   │   └── refinements.css   07  polish, a11y, print
│   ├── js/
│   │   ├── icons.js          inline SVG icon set
│   │   └── main.js           menu, reveal, counters, tabs, FAQ, slider, forms
│   └── img/                  logo, favicon and your photos
├── site.webmanifest, robots.txt, sitemap.xml, .htaccess
└── README, QUICK-START, CUSTOMIZATION, IMAGES, CHANGELOG, LICENSE, THIRD-PARTY-LICENSES
```

The CSS files must stay in the order above (each page already links them in that order).

### Arabic version (`ar/`)

`ar/index.html`, `ar/menu.html`, `ar/about.html`, `ar/reservations.html`, `ar/contact.html`, `ar/privacy-policy.html`, `ar/terms.html` and `ar/404.html` mirror the English pages. They use `lang="ar" dir="rtl"`, the extra stylesheet `assets/css/rtl.css`, Arabic fonts (Cairo and Tajawal from Google Fonts) and `assets/js/i18n-ar.js` for the script messages. Delete the `ar/` folder, `rtl.css`, `i18n-ar.js` and the `.lang-switch` links if you only need English.

## Browser support

Latest versions of Chrome, Edge, Firefox, Safari (macOS and iOS) and Android browsers.

## Documentation

- [QUICK-START.md](QUICK-START.md) - go live in 10 minutes
- [CUSTOMIZATION.md](CUSTOMIZATION.md) - colors, fonts, content, forms, maps, SEO
- [IMAGES.md](IMAGES.md) - every image slot with its file name, size and shape
- [CHANGELOG.md](CHANGELOG.md) - version history
- [LICENSE.txt](LICENSE.txt) and [THIRD-PARTY-LICENSES.md](THIRD-PARTY-LICENSES.md)

## Support

Author: Draze Housain - drazehoussain8@gmail.com

Contact: drazehoussain8@gmail.com. Please include your order number and the page/browser where the issue occurs.

## Before you launch

The template ships with sample content (names, address, prices, awards, reviews, statistics, AI-generated photos). See **"Placeholder content you must replace before launch"** in [CUSTOMIZATION.md](CUSTOMIZATION.md) for the complete list.
