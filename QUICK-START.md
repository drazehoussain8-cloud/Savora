# Quick Start

You need only a text editor (VS Code is great) and a browser.

## 1. Preview
Unzip the package and double-click `index.html`. The site opens in your browser. Fonts load from Google Fonts, so stay online for the best look.

## 2. Brand it (2 minutes)
1. Replace `assets/img/logo.svg` with your logo (keep the name, or update the `<img>` in each page header and footer).
2. Replace `assets/img/favicon.svg` with your icon.
3. Open `assets/css/variables.css` and change `--gold`, `--bg`, `--cream` to your brand colors.

## 3. Add your photos
Put your images in `assets/img/` using the file names listed in `IMAGES.md`. They appear automatically. The photos included in the package are AI-generated demo images, so replace them. Aim for under 300 KB per image (JPG or WebP).

## 4. Edit your text
Search for `Savora`, `123 Your Street, Your City`, `+212 5 00 00 00 00` and `hello@yourdomain.com` across all `.html` files and replace them with your details. Update the dishes, prices, opening hours and testimonials the same way.

## 5. Connect the forms
The forms show a success message but do not send emails by default. See "Forms" in `CUSTOMIZATION.md` (Formspree or Netlify Forms take about 5 minutes).

## 6. Publish
Upload the whole folder to any host:
- **Netlify / Vercel / Cloudflare Pages:** drag and drop the folder.
- **GitHub Pages:** push the folder to a repository and enable Pages.
- **cPanel / shared hosting:** upload the files to `public_html`.

Then edit `sitemap.xml` and `robots.txt` and replace `https://www.example.com` with your real domain.

## Checklist before launch
- [ ] Logo, favicon and colors updated
- [ ] All photos replaced
- [ ] Text, address, phone, email and hours updated
- [ ] Forms connected and tested
- [ ] Google Maps embedded in `contact.html`
- [ ] Privacy Policy and Terms edited for your business and country
- [ ] Page titles and descriptions updated for SEO
- [ ] `sitemap.xml` and `robots.txt` use your domain
- [ ] Prices and currency (`DH`) updated, halal wording checked
- [ ] Sample awards, statistics, team and testimonials replaced with real ones
- [ ] Social media links set (footer icons use `href="#"`)
- [ ] Tested on phone, tablet and desktop

The full list of sample content is in `CUSTOMIZATION.md` under "Placeholder content you must replace before launch".

## Arabic version
Open `ar/index.html` (or click "العربية" in the header). Edit the Arabic text in the `ar/` folder; images and styles are shared with the English version.
