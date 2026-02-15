# TT Scorer Website

Landing page for TT Scorer - Professional Table Tennis Scoring & Analytics app.

🔗 **Live Site:** [ttscorer.com](https://ttscorer.com)  
📱 **App Store:** [Download on iOS](https://apps.apple.com/app/id6752398902)

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
```

The site will be available at `http://localhost:3000`

## Deployment to GitHub Pages

### Option 1: Deploy to a New Repository (Recommended for Custom Domain)

1. **Create a new public repository** named `tt-scorer-website` on GitHub

2. **Push this code to the new repository:**
   ```bash
   cd tt-scorer-website
   git init
   git add .
   git commit -m "Initial commit: TT Scorer landing page"
   git branch -M main
   git remote add origin https://github.com/sudarsan406/tt-scorer-website.git
   git push -u origin main
   ```

3. **Install and deploy:**
   ```bash
   npm install
   npm run deploy
   ```

4. **Configure GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`
   - Save

### Option 2: Deploy to Existing tt-scorer Repository

If you want to host from your existing private `tt-scorer` repo:

1. Update `package.json` homepage:
   ```json
   "homepage": "https://sudarsan406.github.io/tt-scorer"
   ```

2. Copy the website files to your existing repo
3. Run `npm run deploy`

## Connecting Your Custom Domain (ttscorer.com)

### Step 1: Add CNAME file

Create a file named `CNAME` (no extension) in the `public` folder with:
```
ttscorer.com
```

### Step 2: Configure Squarespace DNS

In Squarespace Domains → ttscorer.com → DNS Settings, add:

**For apex domain (ttscorer.com):**
| Type | Host | Data |
|------|------|------|
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

**For www subdomain:**
| Type | Host | Data |
|------|------|------|
| CNAME | www | sudarsan406.github.io |

### Step 3: Enable HTTPS in GitHub

1. Go to repository Settings → Pages
2. Under "Custom domain", enter `ttscorer.com`
3. Check "Enforce HTTPS" (may take a few minutes to become available)

DNS propagation can take up to 48 hours, but usually completes within a few hours.

## Project Structure

```
tt-scorer-website/
├── public/
│   ├── index.html      # HTML template with meta tags
│   ├── CNAME           # Custom domain config (add this)
│   └── favicon.ico     # App icon (add this)
├── src/
│   ├── App.js          # Main landing page component
│   ├── App.css         # All styles
│   ├── Privacy.js      # Privacy Policy page
│   ├── Terms.js        # Terms of Service page
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## Adding Assets

### Favicon & App Icons
Add these files to the `public` folder:
- `favicon.ico` - Browser tab icon
- `apple-touch-icon.png` - iOS home screen icon (180x180)
- `og-image.png` - Social sharing preview image (1200x630)

You can use your app icon or create variations for web.

## Customization

### Colors
Edit CSS variables in `src/App.css`:
```css
:root {
  --color-accent: #ff6b35;      /* Primary orange */
  --color-bg: #0a0a0a;          /* Background */
  --color-text: #ffffff;         /* Text */
}
```

### Content
Edit `src/App.js` to update:
- Hero section text
- Feature descriptions
- Statistics
- Footer links

## Tech Stack

- React 18
- CSS (no external UI libraries)
- Bebas Neue + DM Sans fonts
- GitHub Pages hosting

## License

© 2024 TT Scorer. All rights reserved.
