# neus-presentation-video

A [Remotion](https://www.remotion.dev/) video presenting NEUS: a hook,
an architecture contrast, an animated metrics counter, an attack
simulation, and a closing card.

## Structure

- `src/Root.tsx` — registers the `NeusPresentation` composition (1920x1080, 30fps, 750 frames / 25s).
- `src/MainVideo.tsx` — sequences the five scenes.
- `src/scenes/` — one file per scene (`Hook`, `ArchitectureContrast`, `MetricsCounter`, `AttackSimulation`, `ClosingCard`).

## Setup

```bash
npm install
```

`src/scenes/ClosingCard.tsx` renders `public/neus-logo.png`, which is not
included in this repo yet — add the NEUS logo there before rendering, or
the closing card will show a broken image.

## Development

```bash
npm run dev    # opens Remotion Studio
```

## Render

```bash
npm run build  # renders NeusPresentation to out.mp4
```
