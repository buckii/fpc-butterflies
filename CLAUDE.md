# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Running the App

Open `index.html` directly in a browser — no build step, server, or dependencies required. Deployed via Netlify with root as the publish directory (`netlify.toml`).

## Architecture

This is a **single-page educational slideshow** with three files:

- `index.html` — All 38 slide divs, each with `id="slide-N"`
- `styles.css` — All styling (brand colors, screen layout, component styles)
- `app.js` — All interactivity (navigation, host plants matching, camouflage game, butterfly hub)
- `images/` — All photos and illustrations (filenames prefixed by slide number, e.g. `slide07_larry_lepidopterist_character.jpg`)

### Slide Navigation

`goToSlide(num)` is the core navigation function. It hides the current slide (removes `.active`, sets `display:none`) and shows the target slide. Only one slide is visible at a time via `position: fixed; inset: 0`.

```js
goToSlide(12)  // triggers renderPlant() on entry
goToSlide(29)  // triggers updateHubVisited() on entry
```

### Slide Map (current implementation, 38 slides)

| Range | Section |
|-------|---------|
| 1 | Main menu (meadow background photo, semi-opaque panel) |
| 2–6 | Tutorial, Teacher's Guide, Resources, Standards, Prompts |
| 7–9 | Larry intro, meadow instructions (click-to-advance) |
| 10 | Meadow hub — 3 clickable areas (Host Plants → 11, Camouflage → 16, Net → 20) |
| 11–15 | Host plants: intro, dynamic matching activity, 3 static summary slides |
| 16–19 | Camouflage intro + original hide-butterfly scene (autumn leaves) |
| 20 | Activity complete / continue |
| 21–26 | Three more camouflage scenes (green leaves, flowers, bark) with info slides |
| 27–28 | Transition + butterfly gallery intro |
| 29 | Butterfly hub — 6 species cards, must visit all 6 to advance |
| 30 | Unused placeholder (all-species grid) |
| 31–36 | Individual butterfly species info cards (Monarch, Blue Morpho, Painted Lady, Swallowtail, Red Admiral, Viceroy) |
| 37–38 | Farewell transition + final congratulations slide |

### Host Plants Activity (Slides 11–12)

`plants[]` array in `app.js` holds 8 plant/butterfly pairs with image paths. `renderPlant()` populates slide 12 dynamically. `revealButterfly()` swaps the plant image for the butterfly image and shows the description panel. `nextPlant()` advances through the array; after the last entry, returns to slide 10.

### Camouflage Activity (Slides 17, 21, 23, 25)

Each scene has a `.camo-hidden-butterfly` SVG element positioned absolutely. Clicking it calls `camoCorrectClick[N](event)` → `goToSlide(info slide)`. Clicking anywhere else calls `camoWrongClick[N](event)` → `showError(...)`. After 3 wrong clicks, `hint-outline` class is added to reveal the butterfly's location.

### Butterfly Hub (Slide 29)

`visitedButterflies` is a `Set`. `visitButterfly(slideNum)` adds the slide to the set and navigates. `returnToHub(slideNum)` adds the slide and routes back to 29 (or to slide 36 if all 6 have been visited). `updateHubVisited()` adds `.visited` class to completed hub items, showing a checkmark.

## Brand Colors

```
#F8971D  orange (PMS 144)     #572700  dark brown (PMS 4625)
#935D3C  brown (PMS 464)      #A1D2DD  light blue (PMS 304)
#CFDD3A  lime (PMS 380)       #77833C  dark green (PMS 7496)
#DA6126  orange-red (PMS 1385) #DBD095 tan (PMS 615)
#006682  teal (PMS 3145)       #9C2F31 red (PMS 1805)
```

Primary font: **Droid Serif** (headings) + **Arial** (body). Loaded from Google Fonts.

## Intended Full Scope (not yet implemented)

`BLOOMS_BUTTERFLIES_IMAGE_GUIDE.md` documents the full 59-slide structure from the original PowerPoint. Sections not yet built include: Butterfly Families grid (slides ~28–36 in original), Butterflies vs Moths comparison (slides ~38–43), and Metamorphosis matching game (slides ~45–57). The current `app.js` repurposes the slide numbers 29–36 for a simplified butterfly species gallery rather than the full family taxonomy system.
