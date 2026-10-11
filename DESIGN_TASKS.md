# Infraloom restyle: design tasks

Design-only pass. **No text, heading, label, link, image, alt text, route, data or behaviour changes.**
Only colors, backgrounds, radius, spacing, type weight/size and purely decorative elements.

Reference: ultramarine hero block with a loom-ring graphic, chartreuse marker highlight,
floating white nav pill, rounded white cards on a cool off-white page, stat blocks in three colorways,
periwinkle feature block, dark rounded footer.

## Stack notes

- Next.js 15 App Router, **plain CSS** (no Tailwind, no CSS modules).
- Global tokens and base classes live in `src/app/globals.css`.
- Components style themselves with co-located `<style>{`...`}</style>` blocks plus inline `style={{}}`
  that read tokens such as `--ink`, `--paper`, `--navy`, `--blue`, `--rule`.
- So most of the work is: **add the new tokens, remap the legacy tokens onto them**, then restyle the
  structural components (nav, heroes, cards, stats, footer) in their own `<style>` blocks.

## Palette

| Token | Value | Use |
|---|---|---|
| `--ultramarine` | `#07123F` | hero, dark blocks |
| `--primary` | `#1F5BFF` | logo blue, active cards, secondary buttons |
| `--primary-hover` | `#1546D9` | |
| `--signal` | `#7B9BFF` | graphics, links on dark |
| `--periwinkle` | `#C3D1FF` | feature sections |
| `--ice` | `#E8EDFF` | soft tints, icon chips, active nav |
| `--chartreuse` | `#D7FF3F` | main CTA, highlights, key stats (max 1–2 per screen) |
| `--lime-soft` | `#F3FFCC` | icon card background (replaced lilac) |
| `--text` / `--text-muted` | `#0B0F24` / `#5C6178` | |
| `--text-on-dark-muted` | `#C3D1FF` | |
| `--background` / `--surface` | `#F4F5FA` / `#FFFFFF` | page / cards |
| `--border-on-dark` | `#2D3E80` | |
| `--radius-card` / `--radius-block` / `--radius-pill` | `22px` / `24px` / `999px` | |

Contrast rule: on chartreuse, light lime, ice and periwinkle use ultramarine text.
Never white text on those.

---

## Step 1: Tokens and global base (`src/app/globals.css`)

- [x] Add all palette tokens to `:root`.
- [x] Remap legacy tokens onto them: `--navy → --ultramarine`, `--blue → --primary`,
      `--blue-deep → --primary-hover`, `--mist/--sky → --ice`, `--cream → --ice`,
      `--paper → --background`, `--paper-2 → --surface`, `--paper-3 → --ice`,
      `--ink → --text`, `--ink-3 → --text-muted`, softer cool `--rule`.
- [x] Remap the dark theme onto an ultramarine-based palette so the existing toggle keeps working.
- [x] Body: `--background` bg, `--text` color. Leave room at the top for the floating nav.
- [x] Headings: weight 500–600, line-height ~1.1–1.15; scale down the extreme display sizes.
- [x] `.card`: white, no border, no shadow, 22px radius.
- [x] `.btn`: pill shape. `.btn-primary` = chartreuse + ultramarine, `.btn-secondary` = primary + white
      (hover `--primary-hover`), new `.btn-dark` = `--text` + white, `.btn-ghost-dark` = outline on dark.
- [x] `.chip` and `.eyebrow`: pills (`--ice` bg + `--primary` text; on dark `--primary` + white).
- [x] `.input`: rounded fields on the cool bg.
- [x] New helpers: `.block` (12px inset, 24px radius), `.block-dark`, `.block-periwinkle`, `.block-ice`,
      `.marker` (chartreuse highlight), `.icon-chip`, `.stat-tile` colorways.
- [x] Section header (`.section-head`): drop the heavy top rule.
- [x] Tech ribbon cell: white pill.

## Step 2: Navbar (`src/components/layout/Navbar.tsx`)

- [x] Floating white pill, inset 12px from top and sides.
- [x] Links `--text-muted`; active link = `--ice` bg + `--primary` text pill.
- [x] "Book a call" CTA: `--text` bg + `--chartreuse` text, pill.
- [x] Mobile menu: same tokens, rounded links.

## Step 3: Home hero (`src/features/home/components/Hero.tsx`)

- [x] Wrap the headline and lede in an `--ultramarine` block (a wrapper div only, same order).
      Only the **dark hero background** is wider than the 1320px container, never full width: its
      edge sits halfway between the container edge and the screen edge (min 12px). The text stays in
      the container. It starts at the very top of the page, **behind the floating nav** (the nav keeps a
      20px gap from the top, `--nav-top`). **Square top corners, rounded bottom corners.** The capability cards sit 20px
      below it and share its exact width (`--hero-side`). The nav pill keeps its normal width
      (12px inset, max 1480px).
- [x] Heading white; existing accent span "software systems" becomes the chartreuse marker.
- [x] Lede `--text-on-dark-muted`; "Core capabilities" label as a primary pill on dark.
- [x] Replace the warp-thread field with the decorative, `aria-hidden` **loom ring** SVG
      (thick primary outer ring, thinner signal inner ring, chartreuse centre dot, dashed primary
      crosshair), partly clipped by the block edge.
- [x] Capability cards: white, ice icon chip with primary icon; hover = primary bg, white title,
      ice body, chartreuse chip with ultramarine icon (200ms). (Superseded by Step 9b: light lime cards.)

## Step 4: Shared loom ring (`src/components/shared/LoomRing.tsx`)

- [x] Extract the ring as a decorative component so inner-page heroes can reuse it.

## Step 5: Inner-page hero (`src/components/layout/PageHero.tsx`)

- [x] Rounded ultramarine block, white title, `--text-on-dark-muted` body, eyebrow pill on dark.
- [x] Loom ring on the right; existing action buttons sit on dark (primary button stays chartreuse).

## Step 6: Home sections

- [x] `TrustedTechnologies.tsx`: ribbon of white pills, no hairlines.
- [x] `WhyChooseUs.tsx`: periwinkle block; items become white cards in a grid with ice icon chips,
      primary hover state.
- [x] `CaseStudiesPreview.tsx`: each case is a white card, rounded media, primary hover title.

## Step 7: Services, process, products, portfolio

- [x] `app/services/page.tsx`: each service is a white card with ice icon chip; hover = primary card.
- [x] `SDLCInteractive.tsx` + `SDLCFlow.tsx`: ice block, pill stage tabs, rounded arrows.
- [x] `ProcessTimeline.tsx`: stages as white cards.
- [x] `WorkflowVisuals.tsx`: 2×2 white cards; visuals recoloured to the blue scale.
- [x] `LiveMetrics.tsx`: metric cells as ice tiles.
- [x] `ProjectsGrid.tsx`: product cards, stats as colorway tiles (chartreuse / ice / ultramarine).
- [x] `PortfolioGrid.tsx`: case cards, stats as colorway tiles.
- [x] `CaseStudyDetail.tsx`: hero becomes an ultramarine block with stat tiles; lists and
      microservices as white cards; architecture plate rounded.
- [x] `CaseVisuals.tsx`, `CasePlate.tsx`, `PixelStreamingDiagram.tsx`: cream → ice/signal, rounded.
- [x] `HRMDetail.tsx`: hero block, remove leftover glows/violet, stat tiles, white cards.

## Step 8: About and contact

- [x] `MissionCard.tsx`: **light ice block** (no longer a second dark block straight under the dark hero).
      Two-column statement: eyebrow + big dark blue statement on the left (7 cols), loom mark and the
      explanation in a narrow right column (4 cols), bottom-aligned. Stacks on mobile.
- [x] `OurStory.tsx`: "The people behind the work" is a **white rounded block**. The two founder cards
      sit side by side, **top-aligned and the same size** (no stagger). Editorial split: heading + intro
      on the left (4 cols), founder cards on the right (7 cols); stacks on tablet/mobile. Cards use the off-white page tone with
      a rounded photo (grayscale, colour on hover), dark blue name, and the role as a dark blue pill
      with lime text on its own line.
- [x] `ContactForm.tsx`, `ChipPicker.tsx`, `ContactSidebar.tsx`, `FAQAccordion.tsx`: remove
      gradients/glows, ice icon chips, pill option chips, rounded white cards.

## Step 9: Footer (`src/components/layout/Footer.tsx`)

- [x] Rounded `--text` block inset 12px from the page edges.
- [x] Links `--signal`; one highlighted link (Company → Contact) in `--chartreuse`.
- [x] Contact icons and social links as pills; cream → ice.
- [x] Smaller overall (less padding, smaller statement and link text, tighter lists). The big
      "Infraloom" wordmark is smaller and **fades out toward the bottom** (CSS mask), sinking into the
      bottom bar.

## Step 9b: Lime cards, no purple (requested after review)

- [x] **Purple/lilac removed everywhere** (tokens `--lilac` / `--lilac-text` and `.stat-lilac` deleted;
      the 4th stat tile on case-study and HRM heroes is now ice).
- [x] New tokens `--lime-soft: #F3FFCC` (card background) and `--ultramarine-muted: #3D4775` (body text).
- [x] `.icon-chip` everywhere: **dark blue circle with a lime icon**. On a blue hover card it flips to
      lime circle + dark blue icon.
- [x] Icon cards are **white with dark blue text**, and **exactly one card per group is light lime**:
      home capabilities → card 3 (Real-time Streaming) · Why Infraloom → card 2 · services → first card.
      Hover is still the solid blue card.
- [x] Contact sidebar office/phone icons use the same dark blue + lime chip.
- Cards without icons (case studies, products, process, workflow, contact form) stay white.
- Note: this replaces the original spec's lilac card variety and "chartreuse max 1–2 per screen" rule.

## Step 9c: Structural changes (explicitly requested, beyond design-only)

- [x] **Process removed entirely**: the `/process` route, its components (`features/process/*`,
      `SDLCFlow`, `LiveMetrics`), `lib/data/process.ts` and the `ProcessStage` type are deleted. The
      "Process" link is gone from the desktop nav, the mobile menu and the footer.
- [x] **Contact moved into the nav menu** as a normal link (with the ice active state); the separate
      "Contact" text link next to the CTA is removed. "Book a call" stays.
- [x] **Dark-mode toggle removed**: `ThemeToggle`, `ThemeProvider` and the pre-paint theme script are
      deleted, so the site is always the light edition (a previously saved "dark" choice is ignored).
      The `[data-theme="dark"]` CSS rules are now unused but harmless.

## Step 9d: Infinity hero graphic + new hero copy (requested after review)

- [x] The "loom ring" target graphic is **replaced everywhere** (home, inner-page and case-study heroes)
      by `InfinityLoop.tsx`: a **geometric infinity** made of two perfect circles (r 100, centres ±140)
      joined by tangent straight lines crossing at the exact centre. Solid primary stroke, no dots, no
      looping effects: it **draws itself once** on load (2.2s, ease-in-out). `LoomRing.tsx` deleted.
- [x] Home hero layout: copy in a left column vertically centred; the infinity is large on the right
      (~46% of the hero); below 980px it moves under the copy at full width.
- [x] **Home hero copy changed at the user's request** (content change):
      title "Built Around **Your Ambition.**" (lime highlight on the second line), description
      "From streamlining everyday operations to unlocking new opportunities, we help businesses move
      forward with confidence." The "Core capabilities" pill was removed.
- [x] Inner-page hero copy sits left again (fixed flex centring) with the infinity on the right.
- [x] Footer wordmark uses the same geometric infinity in place of "oo": x-height tall, on the
      baseline, stroke matched to the letter weight, even spacing (no longer overlaps the "l").

## Step 10: Verify

- [x] Diff visible text (incl. alt / aria-label / href) for every route before vs after: must be identical.
- [x] Mobile width: no horizontal scroll, blocks keep the 12px inset.
- [x] Type-check.

## Skipped / needs a decision

- **Logo recolour**: the logo is a raster PNG (`public/logo/*.png`). The dark version has a cream
  wordmark, not ice. Changing it needs new artwork, so it was left as is.
- **Hero buttons**: the home hero has no buttons, so none were added (that would be new content).
- **Marker on inner-page titles**: those titles are single strings from props; highlighting a phrase
  would mean splitting the copy, so the marker is used only on the home hero's existing accent span.
- **Tag separators**: stack lists (`Tags.tsx`) are now pills. The `/` separators are still in the
  markup (aria-hidden) but hidden visually, because slashes between pills looked broken.
- **Pre-existing build error**: `next build` fails on `src/app/portfolio/[slug]/page.tsx` (Next 15
  expects `params` to be a Promise). It is unrelated to design and was not touched.
- **Unrendered components** (`BigCTA`, `ArchitectureHero`, `TestimonialsRow`, `CaseVisualGeo/HRM`)
  still have old violet styles. They are not rendered on any page.

## Verification results

- Visible text, plus `alt` / `aria-label` / `title` / `placeholder` / `href`, captured from the dev
  server before and after for 11 routes: **identical**.
- 375px device emulation on 10 routes: `scrollWidth == clientWidth` everywhere, nothing past the
  viewport except the intentionally clipped loom ring and marquee.
- `tsc --noEmit`: only the pre-existing `[slug]` error above.
