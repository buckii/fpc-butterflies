# Blooms & Butterflies Image Matching Process

## Overview
Match 86 images from "Blooms and Butterflies images" folder to correct slides in the educational game using the PowerPoint and notes as reference.

## Source Files
- **Images folder**: `/Users/brad/Downloads/csgfpc/Blooms and Butterflies images/` (86 images)
- **PowerPoint PDF**: `/Users/brad/Downloads/csgfpc/Blooms and Butterflies EA.pdf` (59 pages, 14.4MB)
- **Notes document**: `/Users/brad/Downloads/csgfpc/Blooms and Butterflies Notes - smaller.pdf` (instructions for slides 1-39)

## Game Structure (59 slides total)

### 1. Main Menu & Tutorial (Slides 1-6)
- Slide 1: Title screen with meadow background
- Slides 2-6: Tutorial pages

### 2. Larry Intro & Meadow Hub (Slides 7-11)
- Slide 7: Larry the Lepidopterist intro
- Slides 8-11: Meadow hub with activity icons (Host Plants, Camouflage, Butterfly Families, Butterflies vs Moths, Metamorphosis)

### 3. Host Plants Activity (Slides 12-16)
**Need images of:**
- Slide 13: Milkweed → Monarch
- Slide 13: Carrot → Black Swallowtail
- Slide 14: Milkweed → Queen
- Slide 14: Parsley → Black Swallowtail
- Slide 15: Clover → Orange Sulphur
- Slide 15: Nettles → Red Admiral
- Slide 16: Passion Vine → Gulf Fritillary
- Slide 16: Hackberry → American Snout

### 4. Camouflage Activity (Slides 18-26)
**Need images of butterflies hidden in:**
- Slide 19: Instructions
- Slide 21: Brimstone on leaves (green camouflage)
- Slide 22: Leaf butterfly on bark/leaves
- Slide 23: Eastern Tiger Swallowtail in flowers
- Slide 24: Dead Leaf on ground
- Slide 25: Peppered Moth on tree bark
- Slide 26: Gray Cracker on bark

### 5. Butterfly Families (Slides 28-36)
**Need example butterflies for 6 families:**
- Slide 29: Swallowtails (Papilionidae) - examples needed
- Slide 30: Blues, Hairstreaks, Coppers (Lycaenidae) - examples needed
- Slide 31: Metalmarks (Riodinidae) - examples needed
- Slide 32: Whites & Sulphurs (Pieridae) - examples needed
- Slide 33: Skippers (Hesperiidae) - examples needed
- Slide 34-36: Brushfoot (Nymphalidae) - examples needed

### 6. Butterflies vs Moths (Slides 38-44)
**Need images showing differences:**
- Antennae (clubbed vs feathery)
- Body shape (slender vs fuzzy)
- Wing colors (bright vs dull)
- Resting position (vertical vs flat)

### 7. Metamorphosis (Slides 45-57)
**Need lifecycle stage images:**
- Eggs (various species)
- Caterpillars (various species)
- Chrysalis/Pupa (various species)
- Adult butterflies (various species)

## Process Steps

### Step 1: Sample All Images (PARTIALLY COMPLETE - 13/86 done)
Read each image to identify:
- Species (if butterfly/moth)
- Subject (plant, caterpillar, chrysalis, background, etc.)
- Potential use (background, activity image, educational content)

**Already sampled (13 images):**
1. `0283bd58-64fc-4421-a2f5-18e76f3c0ed0.png` - Monarch butterfly
2. `1302081e-f0e7-4882-b44c-c182cfe9cb48.jpg` - Wildflower meadow (background)
3. `24f847e6-ed8f-403f-92ca-cedc5571235f.png` - Tree bark texture
4. `0719fcfe-cc5f-432c-8fdb-1b6f43fd10bd.png` - Black Swallowtail
5. `11aa4d86-7338-4eaa-ab78-62060eeb405b.png` - Yellow Sulphur on clover
6. `18de2a74-fd14-472a-89ae-2a69a82be37b.png` - Carrots (host plant)
7. `33df4f95-cb5e-45b9-946a-0fcdff0281c2.png` - Tigerwing butterfly
8. `55eea558-5824-45fe-b48e-97602fa03caa.png` - Eastern Tiger Swallowtail on sunflowers
9. `6e5640aa-0117-4fd7-a432-4159cd700530.png` - Green butterfly (Brimstone?)
10. `78f0c8bc-0863-4125-8a07-f7b4b8be4306.png` - Tigerwing on leaf
11. `93453f12-f65d-4152-9bf2-c12632d2f5ac.png` - Monarch & caterpillar on milkweed
12. `a52bc2a1-c241-4c1d-88ad-de2bf38b9a5e.png` - Caterpillar specimen
13. `ba70fec3-f2db-405e-b3c8-a1c05a9994af.png` - Gray Cracker on wood

**Remaining: ~73 images to sample**

### Step 2: Create Image Inventory Spreadsheet
Create a table with columns:
- Filename
- Image Type (butterfly, moth, caterpillar, chrysalis, plant, background, etc.)
- Species (if identifiable)
- Description
- Potential Slides (list of slide numbers where it could be used)
- Primary Use (background, educational content, activity image, icon)

### Step 3: Map Images to Slides
For each slide, assign specific images:
- Primary background image
- Educational content images (butterflies, plants, lifecycle stages)
- Interactive elements (if applicable)

### Step 4: Document Matches
Create final mapping document showing:
```
Slide X: [Title]
- Background: [filename]
- Content Images:
  - [filename] - [purpose]
  - [filename] - [purpose]
```

### Step 5: Implementation
Once mapping is complete, images can be integrated into the game code.

## Key Matches Already Found

### Backgrounds
- `1302081e-f0e7-4882-b44c-c182cfe9cb48.jpg` → Slides 1, 7-11 (meadow hub)
- `24f847e6-ed8f-403f-92ca-cedc5571235f.png` → Slide 25 (tree bark for camouflage)

### Host Plants Activity
- `18de2a74-fd14-472a-89ae-2a69a82be37b.png` → Slide 13 (Carrots for Black Swallowtail)
- `11aa4d86-7338-4eaa-ab78-62060eeb405b.png` → Slide 15 (Clover for Orange Sulphur)
- `93453f12-f65d-4152-9bf2-c12632d2f5ac.png` → Slide 13 (Milkweed for Monarch)

### Camouflage Activity
- `6e5640aa-0117-4fd7-a432-4159cd700530.png` → Slide 21 (Brimstone on leaves)
- `55eea558-5824-45fe-b48e-97602fa03caa.png` → Slide 23 (Tiger Swallowtail in flowers)
- `ba70fec3-f2db-405e-b3c8-a1c05a9994af.png` → Slide 26 (Gray Cracker on bark)

### Metamorphosis
- `93453f12-f65d-4152-9bf2-c12632d2f5ac.png` → Slide 46 (Monarch caterpillar)
- `a52bc2a1-c241-4c1d-88ad-de2bf38b9a5e.png` → Various lifecycle slides
- `0283bd58-64fc-4421-a2f5-18e76f3c0ed0.png` → Adult butterfly examples

### Butterfly Families
- `0719fcfe-cc5f-432c-8fdb-1b6f43fd10bd.png` → Slide 29 (Black Swallowtail for Swallowtail family)
- `33df4f95-cb5e-45b9-946a-0fcdff0281c2.png` → Slide 34-36 (Tigerwing for Brushfoot family)

## Commands to Resume Work

### List all images:
```bash
cd "/Users/brad/Downloads/csgfpc/Blooms and Butterflies images"
ls -1
```

### Count images:
```bash
cd "/Users/brad/Downloads/csgfpc/Blooms and Butterflies images"
ls -1 | wc -l
```

### Read an image:
```bash
Read tool with file_path: /Users/brad/Downloads/csgfpc/Blooms and Butterflies images/[filename]
```

### View PowerPoint slide:
```bash
Read tool with file_path: /Users/brad/Downloads/csgfpc/Blooms and Butterflies EA.pdf
# Optionally specify offset and limit to view specific pages
```

## Next Steps
1. Complete Step 1: Sample remaining 73 images
2. Create comprehensive inventory spreadsheet/table
3. Map each image to appropriate slide(s)
4. Document final mappings
5. Implement in game code

## Status
- **Task Created**: Task #1 (in_progress)
- **Progress**: 13/86 images sampled (15%)
- **Last Updated**: 2026-03-04
