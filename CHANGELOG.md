# Changelog

All notable changes to this template are documented here. Format based on Keep a Changelog; versions follow Semantic Versioning.

## [1.3.0] - 2026-10-21
### Added
- Complete Arabic (RTL) version in `ar/` (8 pages) with Moroccan-flavored content, Arabic Islamic and Moroccan names, prices in dirhams, and a language switch in the header
- `assets/css/rtl.css` (mirrors layout, drawer menu, timeline, marquee and animations; no letter-spacing or italics for Arabic), `assets/js/i18n-ar.js` and an `arrow-left` icon
- `hreflang` alternate links on every page; Arabic URLs in `sitemap.xml`

### Changed
- `main.js` reads its messages (menu labels, newsletter, map status) from `window.SAVORA_I18N` when present; English remains the default

## [1.2.1] - 2026-10-21
### Added
- Contact page map: an icon placeholder with a status message and an "Open in Google Maps" link is shown while the map loads, on slow connections and when offline; the map fades in once loaded and reloads automatically when the connection returns

### Fixed
- `.map-container` had no styles (the map had no rounded frame or fixed height)

## [1.2.0] - 2026-10-20
### Added
- Moroccan character: zellige-style star pattern (`--zellige`), tea and beverage bar, "100% Halal" marquee item, "Is the food halal?" FAQ and a halal note on the menu page
- `cup` and `shield` icons usage; documentation section "Placeholder content you must replace before launch"
- Author details in `LICENSE.txt` and `README.md`

### Changed
- Halal demo content: removed alcohol (cocktail, wine, sommelier, red wine sauce); drinks are now Moroccan mint tea, Moroccan tea service, lemonade and espresso
- Team and testimonial names are now Moroccan examples
- Prices in dirhams (DH), phone in `+212` format, generic address ("123 Your Street, Your City"), generic map (Morocco)
- Replaced the delivery photo (no brand names or logos)
- Photos: wine glasses removed from `hero-1.jpg` (retouched) and `dish-1.jpg` (re-cropped); the cocktail-style photos `gallery-7.jpg` and `menu-13.jpg` replaced with a Moroccan tagine table and a mint-tea tray
- Booking occasions are now Family dinner, Iftar (Ramadan), Engagement or wedding celebration and Business meeting
- Sample emails use `yourdomain.com` instead of a real-looking domain; sample testimonial no longer mentions an anniversary
- `IMAGES.md` now lists only file names, sizes and shapes (no prompts)
- `LICENSE.txt` and `THIRD-PARTY-LICENSES.md` state that the included photos are AI-generated demo images

### Removed
- `wine` icon

## [1.1.2] - 2026-10-20
### Fixed
- Social share image: `og-cover.jpg.png` renamed/converted to a real `og-cover.jpg` (1200x630)
- Images optimized from 16.9 MB to about 3 MB (menu thumbnails, team photos, delivery photo)
- Hero images no longer lazy-loaded (faster first paint)
- Descriptive alt text on all content images
- Newsletter form now confirms the subscription; booking date cannot be in the past
- Gold text on light sections now passes contrast (5.4:1); footer links have larger touch targets

## [1.1.1] - 2026-10-18
### Fixed
- Menu page category tabs (All / Starters / Mains / Desserts / Drinks) now wrap into a neat grid on small phones instead of being cut off

## [1.1.0] - 2026-10-18
### Added
- SVG logo (header and footer) and SVG favicon
- Privacy Policy, Terms of Service and 404 pages
- Back-to-top button, skip-to-content link, mobile menu backdrop
- `site.webmanifest`, `robots.txt`, `sitemap.xml`, `.htaccess`
- Documentation: README, QUICK-START, CUSTOMIZATION, IMAGES, CHANGELOG, LICENSE, THIRD-PARTY-LICENSES
- Open Graph and Twitter card meta tags

### Changed
- CSS split into 7 files: variables, reset, components, style, animations, responsive, refinements
- Mobile navigation now starts at 1024px (tablets included)

### Fixed
- Horizontal scrolling on phones and tablets
- Reservation and contact layouts overflowing small screens
- Mobile menu layering with the blurred header
- Form labels now linked to their inputs
- Hover effects limited to devices that support hover

## [1.0.0] - 2026-10-18
### Added
- Initial release: 5 pages, 10-section home page, animations, menu filter, FAQ, testimonial slider, forms
