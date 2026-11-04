# Open items

Things still to do after the image cleanup on 2026-11-04. See `BLOOMS_BUTTERFLIES_IMAGE_GUIDE.md` for what every
file in `images/` shows.

## Images

- **Viceroy card has no viceroy photo.** The original PowerPoint never had one. The Viceroy card in `index.html`
  (HTML slide 36) currently shows `images/slide15_orange_sulphur_caterpillar.png`. Source a real viceroy photo, add it
  as `images/slide36_viceroy_butterfly.jpg` (under 10 MB, max 2000 px), and update the three references in
  `index.html`.
- **Painted Lady card uses an illustration.** The deck has no painted lady photo, so the card and hub use the
  orange-and-white hub icon `images/slide10_hub_icon_painted_lady.png`. Replace with a photo if one is wanted.
- **Two large PNGs could be smaller.** `tree_bark.png` (7.7 MB) and `slide18_35_49_tigerwing_butterfly_on_leaf.png`
  (6.1 MB) are under the 10 MB limit but slow to load. The bark is opaque and could be a JPG; the tigerwing has a
  transparent background so it must stay PNG, but could be resized.

## Site content not yet built

The site has 38 HTML slides. The PowerPoint has 59. These sections exist in the deck, and all their images are now
in `images/`, but they are not in `index.html`:

- Butterfly families grid and the six family detail slides (PowerPoint 28–36).
- Butterflies vs. moths comparison: antennae, body shape, wings (PowerPoint 38–43).
- Metamorphosis matching game for Monarch, Tigerwing, Spicebush Swallowtail, and Blue Morpho (PowerPoint 45–57).

## Housekeeping

- Click through the hub, the six species cards, the camouflage scenes, and the metamorphosis slides in a browser to
  confirm every image loads. The image swap was verified by file checks only.
- A leftover folder at `~/git/fpc-butterflies images copy` (outside this repo) is from an earlier extraction and
  can be deleted. The original extraction also lives in `~/Downloads/csgfpc/`.
