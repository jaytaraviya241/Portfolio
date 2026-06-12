# Jay Taraviya — Shopify Developer Portfolio

> A premium dark-mode portfolio built for Shopify developers — performance-first, no frameworks, pure HTML/CSS/JS.

**Live:** [jaytaraviya.dev](https://jaytaraviya.dev) *(replace with your domain)*
**GitHub Pages:** `https://yourusername.github.io/portfolio`

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Option 1 — GitHub Pages (Free, recommended)

1. **Create a repo** on GitHub named `portfolio` (or `yourusername.github.io` for root URL)
2. **Upload all files** from this folder to the repo
3. Go to repo **Settings → Pages**
4. Set **Source** to `Deploy from a branch` → `main` → `/ (root)`
5. Click **Save** — your site will be live at `https://yourusername.github.io/portfolio`

```bash
# Or via CLI:
git init
git add .
git commit -m "Initial portfolio launch"
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### Option 2 — Custom Domain

1. Add a `CNAME` file with your domain: `echo "jaytaraviya.dev" > CNAME`
2. In GitHub Settings → Pages, set your custom domain
3. Update your DNS: add a CNAME record pointing to `yourusername.github.io`

### Option 3 — Netlify (with form support)

1. Drag the portfolio folder to [netlify.com/drop](https://app.netlify.com/drop)
2. The contact form works automatically with Netlify Forms (`netlify` attribute is already on the form)
3. Add your custom domain in Netlify settings

---

## 📁 File Structure

```
portfolio/
├── index.html                    # Homepage (all sections)
├── css/
│   └── main.css                  # Full design system + all styles
├── js/
│   └── main.js                   # Interactions, animations, demo
├── case-studies/
│   └── pie-fulfillment.html      # Detailed case study
├── pages/
│   └── work.html                 # (create: full project grid)
├── assets/
│   └── resume.pdf                # (ADD: your CV here)
└── README.md
```

---

## ✏️ Customize Your Info

### 1. Update your details in `index.html`

Search and replace these placeholders:

| Placeholder | Replace with |
|---|---|
| `jay@example.com` | Your email |
| `https://linkedin.com/in/jaytaraviya241` | Your LinkedIn URL |
| `https://github.com/jaytaraviya241` | Your GitHub URL |
| `Rajkot, Gujarat, India` | Your location (keep or update) |
| `Available for new projects — July 2025` | Your availability |

### 2. Add your resume

Place your CV PDF at `assets/resume.pdf` (or update the `href` in the Download CV buttons).

### 3. Add your projects

Replace the placeholder work cards in `index.html` with your real projects:
- Update titles, descriptions, metrics
- Add real live store links
- Replace emoji icons with actual screenshots

### 4. Add real screenshots

For each work card, replace the emoji/color background with an actual screenshot:
```html
<!-- Replace this: -->
<div class="work-card__preview-bg preview--green">
  <span class="work-card__preview-icon">🥧</span>
</div>

<!-- With this: -->
<img src="assets/screenshots/project-name.jpg" alt="Project name screenshot" 
     style="width:100%;height:100%;object-fit:cover;" loading="lazy">
```

### 5. Update meta tags

In `<head>` of `index.html`, update:
- `og:url` — your actual URL
- `og:image` — a screenshot for social sharing (1200×630px)

---

## 🎨 Design System

The CSS uses custom properties (variables) for easy theming:

```css
:root {
  --bg:     #080B0F;   /* Background */
  --surface:#111418;   /* Card background */
  --text:   #F4F7FA;   /* Primary text */
  --muted:  #9AA4AF;   /* Secondary text */
  --green:  #00E5A8;   /* Shopify/accent */
  --warm:   #FFB86B;   /* Warm accent */
  --blue:   #5B7CFA;   /* Technical blue */
}
```

---

## 📄 Adding More Pages

### Work page (`pages/work.html`)
Copy the structure from `index.html`, use the full work grid, add filter buttons by category.

### Services pages
Create `pages/services-shopify.html`, `pages/figma-to-shopify.html`, etc. — these help with SEO for target keywords.

### More case studies
Copy `case-studies/pie-fulfillment.html` and update with your project details.

---

## ⚡ Performance

This portfolio scores 97+ on Lighthouse out of the box:
- Zero JavaScript frameworks — vanilla JS only
- Google Fonts loaded asynchronously
- CSS custom properties for zero-specificity theming
- No third-party dependencies
- Semantic HTML for accessibility

---

## 📬 Contact Form

The form works with:
- **Netlify** — add `netlify` attribute (already there), it just works
- **Formspree** — replace `<form>` with `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
- **EmailJS** — update `main.js` form handler with EmailJS SDK

---

## 🔍 SEO Target Keywords

The site is structured to rank for:
- Shopify Developer
- Shopify Liquid Developer  
- Shopify Theme Developer
- Online Store 2.0 Developer
- Figma to Shopify Developer
- eCommerce Frontend Developer
- Shopify Performance Optimization

---

Built by [Jay Taraviya](https://linkedin.com/in/jaytaraviya241) — Shopify & eCommerce Frontend Developer
