# Cedar West Apartments — Landing Page

A single-page, lead-gen-optimized landing site for Cedar West Apartments (Cedar Falls, IA), built as static HTML/CSS/JS for Netlify, with lead capture wired to Formspree.

## What's included
- `index.html` — the full landing page (hero + lead form, amenities, gallery band, location/map, second lead form, footer)
- `styles.css` — all styling (navy/gold theme, fully responsive, sticky mobile call-to-action bar)
- `script.js` — mobile nav toggle + AJAX form submission (keeps users on-page with an inline success message instead of redirecting to Formspree)
- `images/logo-mark.png` — cropped icon-only version of the real logo (C+W mark, no wordmark), used in the header/footer
- `images/logo-full.png` — the full real logo lockup (mark + "Cedar West Apartments" wordmark), trimmed, available for other placements
- `images/logo-source.png` — your original uploaded logo file, untouched
- `images/favicon-32.png` / `favicon-192.png` — favicons generated from the real mark
- `images/hero-drone.jpg` — your real drone photo, used as the hero background, photo-band section, and Open Graph social-share image
- `netlify.toml` — Netlify headers/caching config
- `robots.txt`, `sitemap.xml` — basic SEO

## Image assets
Your real logo and drone photo are in place — no placeholders left. If you ever want to swap either:
- Logo: replace `images/logo-source.png`, then re-crop `logo-mark.png` (icon only, used in header/footer) and regenerate favicons the same way.
- Hero photo: just overwrite `images/hero-drone.jpg` with a new image at the same filename — it's referenced in the hero background, the photo band, and the Open Graph tag.

## Formspree
Both forms POST to `https://formspree.io/f/mojznann` with AJAX (no page reload). Fields sent: First/Last Name, Email, Phone, Bedrooms Interested, Desired Move-In Date, Message. A hidden honeypot field (`_gotcha`) blocks basic spam bots.

In your Formspree dashboard, set the notification email to wherever leads should land, and consider enabling reCAPTCHA/Akismet if spam becomes an issue.

## Before you go live
- [ ] Update `og:url` / `canonical` in `index.html` and `sitemap.xml` once you know the final Netlify/custom domain
- [x] Floor plan pricing — a "Floor Plans & Pricing" section (Studio&ndash;2 BR, 1&ndash;2 baths, $1,245&ndash;$1,825/mo) is live between the feature strip and amenities. Update `#floor-plans` in `index.html` if pricing changes.
- [ ] Double check the embedded Google Map pin looks right for 4530 Cedar Heights Drive
- [ ] If you want call tracking, swap `tel:+13195053056` for a tracking number

## Deploying to Netlify
1. Push this repo to GitHub (already connected).
2. In Netlify: **Add new site → Import an existing project**, pick this repo.
3. Build command: none needed. Publish directory: `.` (already set in `netlify.toml`).
4. Deploy — done. Connect your custom domain under **Site settings → Domain management**.
