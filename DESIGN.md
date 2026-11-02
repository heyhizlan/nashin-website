# Design plan and review

## Direction

A performance workshop manual brought to life: open mechanical stages, large editorial typography, thin technical rules, and red reserved for calipers, heat and action. No gradient wash or repeated floating cards.

Palette: asphalt #090A0B, panel #111315, metal #B9BEC3, muted #92999F, racing red #F12B32. The initial muted #858B91 was lightened during implementation for legibility.

Type roles: Saira 800 italic for large display, Inter 400–600 for reading and UI, Space Grotesk for numbers and technical labels. Scale: 60–144px hero, 42–80px section headings, 22–53px product headings, 16px primary body, smaller technical annotations. Reading text stays below 65ch. Mobile display scales down; controls retain touch targets.

Layout sketch:

```
FIXED LOGO | section navigation | dealer action
HERO: left headline + action | right oversized rotor/caliper
      performance figures | scroll cue
SYSTEM: heading | short instruction
        pinned separated parts | changing explanation
PRODUCTS: wide rotor stage | narrow pad stage
          complete kit horizontal stage
HEAT: principles | rotor + airflow + thermal tint
      count-up specification strip
PHILOSOPHY: rotating dotted globe | statement + reach figures
FINDER: heading | car silhouette
        dependent brand / model / year / action
FOOTER: logo | statement | official-site dealer action
```

## Pre-build review

The likely default-dark-tech failure was a row of interchangeable outlined cards. Revised to a workshop-manual composition: one oversized open hero, one instructional mechanical stage, asymmetric rotor/pad panels and a horizontal kit stage. Numbering is reserved for the actual four-part sequence. No unnecessary numerical section markers.

## Motion reference study

Opened mecha-xyz.webflow.io and bmwf3.com, captured their initial and scrolled browser states, and reviewed their page structure. Mecha transitions from a large visual stage into editorial statements; fixed navigation and substantial scene spacing support that progression. BMW initially gates its experience behind a central Start Engine interaction; the initial scroll capture remains on that stage. This limited observation does not establish every detail of its later motion.

Techniques interpreted from the brief and reference direction: sustained scene ownership with pinning, scrubbed object transforms, masked headline entrances and paced text handoffs. Nashin uses original SVG illustrations and independently written GSAP timelines. No reference code or assets were copied.

## Per-section motion

- Hero: line-masked headline, rotating assembly, 55-second linear orbit; grid and assembly parallax at different depths.
- System: one pinned reversible timeline, sequential caliper/pad/hat/ring separation and changing callouts. Different viewport layouts preserve the explanation on phone and desktop.
- Products: rotor turns with scroll, pads uncover via clip, kit moves laterally. Each movement is tied to a distinct product surface.
- Technology: moving airflow dashes, rotor rotation, increasing thermal tint, transient feature rules and count-up values.
- Philosophy: a generated globe rotates with scroll, with a projected Kuala Lumpur pin; continent masks are schematic.
- Finder: car silhouette travels into the stage; native dependent selects work without a backend.
- Footer: the closing row settles into view as the page ends. Links and buttons use short wipes, underlines or arrow movement.

## Three weakest parts after the first build — repaired

1. **Pinned mobile reading area.** The original natural-height section could put its callout below a phone viewport. Replaced with a viewport-height flex stage, constrained component images and a dedicated callout area. Browser tests verify callout bounds at 375px and 1440px.
2. **Anatomical clarity.** The initial rotor image included its hub underneath a separate hat. Created a transparent friction-ring variant for the exploded stage, so the hat can leave a visible opening. Standalone images retain their complete appearance.
3. **Inconsistent arrow glyphs.** Some platforms rendered the diagonal arrow as a coloured emoji. Replaced action arrows with CSS-drawn strokes and added text presentation selectors to remaining direction glyphs for a consistent monochrome technical UI.

## Validation and remaining limits

Production Vite build and nine Playwright tests pass. Responsive checks cover five widths. Reduced-motion users get the full static explanation, and keyboard focus/menu behavior is tested. GitHub Pages relative asset paths are generated correctly. No external repository or Pages deployment was completed because the available GitHub token is invalid.

Illustrations are replaceable placeholders, performance figures are unverified, finder data is a demo and the dealer action leads to the official brand homepage. The mockup attachment was not present in the accessible session.
