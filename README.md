# NASHIN — Braking, made clear.

Single-page concept redesign for a Malaysian performance brake brand. Vite + vanilla HTML/CSS/JavaScript, GSAP/ScrollTrigger and Lenis. No framework or UI kit.

## Run and build

Node.js 22.12+ or 24 LTS is recommended.

```sh
npm ci
npm run dev
# http://localhost:5173
npm run build
npm run preview
# http://localhost:4173
```

`dist/` is the deployable static site. The next preview is intended for the owner's Vercel account. Google Fonts are loaded from Google's servers, with local sans-serif fallbacks. JavaScript dependencies bundle locally.

## GitHub repository and push

The session's GitHub token was invalid, so no remote repository was created or pushed. Run the following from this project directory with your own authenticated GitHub CLI. If a stale GH_TOKEN is set in your terminal, remove that stale setting before logging in.

```sh
gh auth login --hostname github.com --git-protocol https --web
git init -b main
git add .
git commit -m "Build Nashin brake system landing page"
gh repo create nashin-website --public --source=. --remote=origin --push
```

If using the supplied checkout that already has a local commit, the `git init`, `add` and `commit` lines can be skipped; run the `gh repo create` line from the checkout. The archive contains source without Git metadata, so all five lines apply after extracting it.

## Vercel preview

Import the repository into the owner's Vercel account. Use `npm run build` as the build command and `dist` as the output directory. Deployment is separate from the local commit.

## Content and assets

- `src/data.js` holds the fitment list supplied by Nashin, grouped by series and rotor size (N1 286/302mm, N3/GN3 330/345mm, N3/GN3/GR3 355mm, N5/GN5/GR5 355mm, GN5/GR5 380mm, GN8 355mm), then brand and model, plus rim sizes 15–20".
- The finder runs Series → Brand → Model → Rim size. Submitting opens WhatsApp (wa.me/60162953252) with a prefilled enquiry, and shows the message with a fallback link if the pop-up is blocked.
- Original transparent component placeholders live in `public/images/*.svg`. Replace the matching SVG file without changing code. `rotor-ring.svg` is the friction-only version for the exploded diagram; `rotor.svg` includes the centre for standalone illustrations. All product illustrations are schematic, not CAD or exact product representations.
- Product cutouts live in `public/images/products/*.webp`. The N1M (lime green), N1 (red), GN8 and GR5 card images are transparent WebP cutouts derived from the supplied model photos; GN8 and GR5 represent their respective series. Keep replacement cutouts trimmed with a small transparent border.
- `kit.webp` is a filler product photograph fetched from Nashin's public site: https://static.wixstatic.com/media/6a5387_22f2d64ace2640f387443b5fcf20ffc0~mv2.jpg . Confirm rights and approved product photography before launch.
- `create-assets.py` reproduces the original SVG placeholders and downloads that filler photograph. It is not required to build or run.
- Dealer CTAs route to the official Nashin site. No dealer directory or verified location list was available; wire in the approved dealer destination before launch.
- No mockup attachment was visible in this session. The design follows the written brief.

## Motion and accessibility

The hero has one coordinated masked-text/product entrance. ScrollTrigger pins the system and controls three component movements and sequential explanations; reverse scroll reassembles it. Three product panels use rotation, clipping and lateral movement. Heat tint and airflow respond to scroll. All scene code is original.

Lenis and GSAP share one animation ticker. `prefers-reduced-motion` disables smooth scrolling, pinning and animation; all four explanations become regular readable content. Changing the preference while the page is open tears down and rebuilds the motion context. Keyboard focus, skip link, labelled native selects, Escape-dismissable mobile navigation and live fitment results are included.

## Tests

```sh
npx playwright install chromium
npm test
```

Nine browser tests cover 375, 414, 768, 1024 and 1440px widths, reduced-motion reading, loaded image errors, dependent selection resets, result copy, keyboard menu/focus and reversible pinned callouts on phone and desktop. `review/` contains visual captures and the scripts used to inspect the page; screenshots are evidence, not production assets.

## Design review

See `DESIGN.md` for the original design plan and reference observations. The current copy follows the client booklet, and the range now shows N1M, N1, GN and GR. Production integration still needs approved dealer URLs.
