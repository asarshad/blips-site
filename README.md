# Blips Site

A fast, accessible static website for Blips (suitable for Apple App Review).

## What’s in here

- `index.html` — landing page
- `privacy.html` — Privacy Policy
- `terms.html` — Terms of Service
- `support.html` — Support/contact page
- `styles.css` — shared styling
- `robots.txt`, `sitemap.xml` — basic SEO files

## Customize (important)

Before you point your domain here:

1. Replace `https://example.com` with your real domain in:
   - `index.html` (JSON-LD script block)
   - `robots.txt`
   - `sitemap.xml`
2. Confirm the support email address (currently `support@blips.news`) in:
   - `index.html`, `privacy.html`, `terms.html`, `support.html`

This repo currently uses:

- Domain: `https://husniconsulting.ca`
- Support email: `info@husniconsulting.ca`
- Owner: Husni Consulting Inc.

## App screenshot

The homepage includes an illustrated app preview at `assets/app-mock.svg`.
If you provide real screenshots, we can replace it with a PNG/WebP and update the `<img>` tag.

## Run locally

From this repo root:

- Python: `python3 -m http.server 8080`
- Then open: `http://localhost:8080`

## Deploy

Any static host works. Common options:

### Cloudflare Pages

- Create a new Pages project from this repo.
- Build settings:
  - Framework preset: **None**
  - Build command: *(empty)*
  - Output directory: `/` (repo root)
- Add your custom domain in Cloudflare Pages → Custom Domains.

### Netlify

- New site from Git.
- Build command: *(empty)*
- Publish directory: `.`
- Add custom domain in Site settings → Domain management.

### GitHub Pages

- Settings → Pages
- Source: Deploy from a branch
- Branch: `main` / `/ (root)`

## Apple review notes

These URLs are typically what Apple asks for:

- Privacy Policy: `/privacy.html`
- Support: `/support.html`
- Terms (optional but recommended): `/terms.html`
