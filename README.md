# Emberfall: The Emberwild Saga

A self-contained, original fantasy RPG prototype built with classic browser JavaScript. The scene, characters, battle figures, map, and interface are drawn at runtime; the game uses no image or sound assets, framework, bundler, or build step.

## Play

Open `index.html` directly in a modern browser, or serve this folder from any path on a static web server. No root-relative URLs are used. The starting company is ready to travel; open the menu to create a custom company or choose a campaign.

- **WASD / arrow keys:** move and turn; **Q / E:** sidestep
- **F:** search; **R:** camp; **M:** map; **J:** journal; **B:** bestiary
- **1–6:** character sheets; **Esc:** menu; **Space:** interact
- The command bar and touch movement pad provide pointer/touch alternatives.

Walk to the old cooperage in Thornwick and interact to enter the first cellar. Combat is turn-based; attack, cast memorized spells, use a potion, or retreat. Save slots and an autosave use this browser's local storage.

## Files

The classic scripts are intentionally separate by concern and loaded in the requested order from `index.html`. `style.css` is the only stylesheet. Maps, the overland, and combat figures are painted on canvas; all content is original.

## Validation

Run `node validate.js` to check the catalogue counts, scroll references, adventure monster references, generated adventure distribution, dungeon reachability, exits, and seeded generation. JavaScript syntax can be checked with:

```sh
for f in *.js; do node --check "$f"; done
```

## Current scope

This is a playable first-pass implementation of the requested phases: a raycast town and dungeon, party creation and character sheets, basic combat, travel sites, quest journal, maps, bestiary, local saves, generated expeditions, and an original 300-item / 330-creature / 75-spell catalogue. Some later-phase rules and content (such as the full tabletop spell effects, detailed multi-level authored adventures, and exhaustive classic treasure tables) are represented by compact game systems rather than a complete rules compendium.
