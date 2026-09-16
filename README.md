# Cedar West Apartments — Landing Page

A single-page, lead-gen-optimized landing site for Cedar West Apartments (Cedar Falls, IA), built as static HTML/CSS/JS for Netlify, with lead capture wired to Formspree.

## What's included
- `index.html` — the full landing page (hero + lead form, amenities, gallery band, location/map, second lead form, footer)
- `styles.css` — all styling (navy/gold theme, fully responsive, sticky mobile call-to-action bar)
- `script.js` — mobile nav toggle + AJAX form submission (keeps users on-page with an inline success message instead of redirecting to Formspree)
- `images/logo.svg` — a **recreated** version of the Cedar West "CW" mark (see note below)
- `netlify.toml` — Netlify headers/caching config
- `robots.txt`, `sitemap.xml` — basic SEO

## ⚠️ Action needed: real image files
I could not extract the actual image files you pasted into chat (Claude Code can't pull binary image data out of inline chat content). Two things to drop in before launch:

1. **`images/logo.svg`** — I recreated your logo mark as an SVG using the geometry from your screenshot (interlocking C + W, "CEDAR WEST / APARTMENTS" wordmark). It looks close but is **not pixel-identical** to your original file. Replace it with your real logo (ideally `.svg` for crispness, or a transparent `.png`) at `images/logo.svg` — or send me the file and I'll swap it in.
2. **`images/hero-drone.jpg`** — the hero background, photo band section, and Open Graph social-share image all reference this path but the file doesn't exist yet. Right now the hero falls back to a navy gradient so the page still looks good, but add your drone shot here for the full effect. Recommended: 1920×1080 or larger, optimized (~300–500KB) JPG/WebP.

Once both files are in place, everything else (favicon, social previews, hero background) will pick them up automatically — no code changes needed.

## Formspree
Both forms POST to `https://formspree.io/f/mojznann` with AJAX (no page reload). Fields sent: First/Last Name, Email, Phone, Bedrooms Interested, Desired Move-In Date, Message. A hidden honeypot field (`_gotcha`) blocks basic spam bots.

In your Formspree dashboard, set the notification email to wherever leads should land, and consider enabling reCAPTCHA/Akismet if spam becomes an issue.

## Before you go live
- [ ] Add real `images/hero-drone.jpg` and swap in the real logo
- [ ] Update `og:url` / `canonical` in `index.html` and `sitemap.xml` once you know the final Netlify/custom domain
- [ ] Confirm floor plan pricing — currently the form lets users pick "Studio/1BR/2BR/3BR/Not Sure" without listing prices, since none were provided. Add a floor-plans section with pricing whenever you have it.
- [ ] Double check the embedded Google Map pin looks right for 4530 Cedar Heights Drive
- [ ] If you want call tracking, swap `tel:+13195053056` for a tracking number

## Deploying to Netlify
1. Push this repo to GitHub (already connected).
2. In Netlify: **Add new site → Import an existing project**, pick this repo.
3. Build command: none needed. Publish directory: `.` (already set in `netlify.toml`).
4. Deploy — done. Connect your custom domain under **Site settings → Domain management**.
