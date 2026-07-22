# Video Integration Guide

## Current Setup

Your 5 video clips have been integrated into the NEUS presentation video:

- **clip-1.mp4** → ArchitectureContrast scene (7 seconds)
- **clip-2.mp4** → MetricsCounter scene (6 seconds)
- **clip-3.mp4** → AttackSimulation scene (6 seconds)
- **clip-4.mp4** → Available for custom scenes
- **clip-5.mp4** → Available for custom scenes

## Scene Components

### Modified Scenes (now include video)

1. **ArchitectureContrast.tsx**
   - Displays `clip-1.mp4` with optional text overlay
   - Positioning: "Every other platform needs a way into your system" / "NEUS protects from outside it"
   - Duration: 7 seconds (210 frames)

2. **MetricsCounter.tsx**
   - Displays `clip-2.mp4` with optional text overlay
   - Positioning: "Most tools detect. Then wait for you to respond" / "NEUS fights back"
   - Duration: 6 seconds (180 frames)

3. **AttackSimulation.tsx**
   - Displays `clip-3.mp4` with optional text overlay
   - Positioning: "No signature. No history. No warning" / "NEUS doesn't need to have seen it before"
   - Duration: 6 seconds (180 frames)

### Available Components for Remaining Clips

- **VideoClip4.tsx** - Pure video display of clip-4.mp4
- **VideoClip5.tsx** - Pure video display of clip-5.mp4

## How to Customize

### Option 1: Swap Video Clips
Edit the scene files to reference different clips:

```tsx
// In ArchitectureContrast.tsx, change:
<OffthreadVideo src={staticFile("clip-1.mp4")} ... />
// To:
<OffthreadVideo src={staticFile("clip-2.mp4")} ... />
```

### Option 2: Use Video-Only Scenes
Replace a text scene with a pure video scene in `MainVideo.tsx`:

```tsx
import { VideoClip4 } from "./scenes/VideoClip4";

// In MainVideo component:
<Sequence from={90} durationInFrames={210}>
  <VideoClip4 />
</Sequence>
```

### Option 3: Add New Sequences
Insert clips into new time slots:

```tsx
<Sequence from={750} durationInFrames={180}>
  <VideoClip5 />
</Sequence>
```

### Option 4: Layer Videos with Text
Customize text overlays on videos:

```tsx
<AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
  <OffthreadVideo src={staticFile("clip-1.mp4")} style={{ width: "100%", height: "100%" }} />
  
  {/* Optional text overlay */}
  <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
    <div style={{ color: "white", fontSize: 60, opacity: 0.8 }}>
      Custom overlay text
    </div>
  </AbsoluteFill>
</AbsoluteFill>
```

## Timing Adjustments

If videos don't perfectly fit their allocated time:

1. **Video is shorter**: Increase scene duration or add filler/text
2. **Video is longer**: Reduce scene duration (video will be cropped)
3. **Change timing**: Edit frame counts in MainVideo.tsx

Example - extend ArchitectureContrast from 210 to 270 frames:
```tsx
<Sequence from={90} durationInFrames={270}>
  <ArchitectureContrast />
</Sequence>
// Adjust subsequent sequences' "from" values accordingly
```

## Rendering

To render the full video with integrated clips:

```bash
npm run build
```

Output: `out.mp4` (ready to share)

## File Locations

- Video clips: `/public/clip-*.mp4`
- Scene components: `/src/scenes/*.tsx`
- Main composition: `/src/MainVideo.tsx`
- Root config: `/src/Root.tsx`
