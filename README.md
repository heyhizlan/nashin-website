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

`dist/` is the deployable static site. `base: './'` makes assets work at `/nashin-website/` on GitHub Pages. Google Fonts are loaded from Google's servers, with local sans-serif fallbacks. JavaScript dependencies bundle locally.

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

## GitHub Pages deploy

1. Create and push the repository using the commands above.
2. Open **Settings → Pages → Build and deployment → Source → GitHub Actions**.
3. Open **Actions → Deploy to GitHub Pages → Run workflow**, choose `main`, and run. Subsequent pushes to `main` deploy automatically.
4. Open the URL produced by the deploy job, normally `https://YOUR_USERNAME.github.io/nashin-website/`.

The workflow installs exact locked dependencies, builds, uploads `dist`, and deploys with GitHub's official Pages actions. No deployment tokens need to be stored in this repository.

## Content and assets

- `src/data.js` contains all performance and reach numbers, plus the demonstration vehicle dataset. **Every supplied statistic must be verified with Nashin before launch.** The page labels those numbers as illustrative.
- The finder supports Honda, Toyota, BMW and Proton with dependent model/year selections. It deliberately reports no verified product matches. Connect a reviewed fitment database before using this for sales.
- Original transparent component placeholders live in `public/images/*.svg`. Replace the matching SVG file without changing code. `rotor-ring.svg` is the friction-only version for the exploded diagram; `rotor.svg` includes the centre for standalone illustrations. All product illustrations are schematic, not CAD or exact product representations.
- `kit.jpg` is a filler product photograph fetched from Nashin's public site: https://static.wixstatic.com/media/6a5387_22f2d64ace2640f387443b5fcf20ffc0~mv2.jpg . Confirm rights and approved product photography before launch.
- `create-assets.py` reproduces the original SVG placeholders and downloads that filler photograph. It is not required to build or run.
- Dealer CTAs route to the official Nashin site. No dealer directory or verified location list was available; wire in the approved dealer destination before launch.
- No mockup attachment was visible in this session. The design follows the written brief.

## Motion and accessibility

The hero has one coordinated masked-text/product entrance. ScrollTrigger pins the system and controls four component movements and sequential explanations; reverse scroll reassembles it. Three product panels use rotation, clipping and lateral movement. Heat tint and airflow respond to scroll, the generated dotted globe rotates with a geographically projected Kuala Lumpur pin, and the car moves into the finder. All scene code is original.

Lenis and GSAP share one animation ticker. `prefers-reduced-motion` disables smooth scrolling, pinning and animation; all four explanations become regular readable content. Changing the preference while the page is open tears down and rebuilds the motion context. Keyboard focus, skip link, labelled native selects, Escape-dismissable mobile navigation and live fitment results are included.

## Tests

```sh
npx playwright install chromium
npm test
```

Nine browser tests cover 375, 414, 768, 1024 and 1440px widths, reduced-motion reading, loaded image errors, dependent selection resets, result copy, keyboard menu/focus and reversible pinned callouts on phone and desktop. `review/` contains visual captures and the scripts used to inspect the page; screenshots are evidence, not production assets.

## Design review

See `DESIGN.md` for the original design plan, reference observations and the three post-build weaknesses repaired. Production integration still needs verified stats, real fitment data, approved photography and dealer URLs.
