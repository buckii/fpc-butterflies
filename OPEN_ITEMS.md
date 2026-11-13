# Open items

Things still to do after the image cleanup on 2026-11-04. See `BLOOMS_BUTTERFLIES_IMAGE_GUIDE.md` for what every
file in `images/` shows.

## FPC Errors List (received 2026-11-13)

The client's emoji-replacement list is saved as `docs/FPC_Errors_List.pdf`. It asks for every emoji in the
meadow, Metamorphosis and Camouflage sections to be replaced with real pictures. Status:

**Done (2026-11-13)**

- Meadow hub (slide 10): every tile now uses a picture. Host Plants = `shared_swallowtail_butterfly_icon.png`
  (Butterfly Photo 1), Camouflage = `slide10_hub_icon_painted_lady.png` (Butterfly Photo 3), Butterflies vs Moths =
  `slide10_butterfly_photo2.png` (Photo 2), Metamorphosis = `slide10_butterfly_photo4.png` (Photo 4), net =
  `slide10_butterfly_net_icon.png` (Net Photo 1).
- Meadow hub styling (client requests, not in the PDF):
  - The green and brown boxes behind Host Plants and Camouflage were removed.
  - The butterflies are scattered unevenly, tilted and sized differently, and flap their wings.
  - `app.js` moves each one to a random nearby spot every few seconds. Motion stops for users who have
    reduced motion turned on.
  - The net is bigger and centered.
  - Positions are in the `.meadow-5` rules in `styles.css`.
- Metamorphosis intro (slide 45): all four stages are photos. The PDF asked for Caterpillar =
  `slide45_chrysalis_on_leaf.jpg` (actually a caterpillar) and Adult = `slide45_giant_swallowtail_illustration.png`.
  Egg (`slide12_butterfly_eggs_on_leaf.jpg`) and Chrysalis (`slide46_monarch_chrysalis.png`) were not in the PDF.
  They were swapped for consistency and can be reverted if the client prefers.
- Matching game:
  - Slide 49: yellow caterpillar with a red head and gold chrysalis.
  - Slide 52: spicebush caterpillar, moth cocoon and spicebush butterfly.
  - Slides 55 and 57: blue morpho chrysalis, rotated upright with `.match-upright`.
  - The old text hints and the `.match-placeholder` / `.match-hint` styles were removed.
- PDF quirks:
  - The "third matching Chrysalis" item is captioned "Caterpillar Photo 2" in the PDF. It was treated as a typo
    and the cocoon was used.
  - The PDF shows the spicebush caterpillar as orange. The old placeholder hint called it green.

**Still open**

- **Camouflage: waiting on the client.** Leaf photo 1 (scene background), Leaf photo 2 (to replace the leaf
  emojis) and Butterfly photo 6 (the hidden butterfly) are blank in the PDF. Ask the client to resend them.
  Suggested stand-ins if they can't:
  - Background: `autumn_leaves.jpg` instead of the animated color wash in slide 17.
  - Hidden butterfly: `slide20_dead_leaf_butterfly_isolated.png`, keeping the click, wrong-click and hint behaviour.
  - Leaf emojis: remove them.
  - Not decided yet: whether this applies only to slide 17 or also to the other camouflage scenes (21, 23, 25).
- Check visually in a browser:
  - Whether the green chrysalis hangs the right way up.
  - Whether the meadow butterflies' speed and range look right, on desktop and on phones.

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
