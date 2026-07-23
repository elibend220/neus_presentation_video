# NEUS Presentation Video

A professional video presentation system built with **Remotion** and **React**. Create stunning, animated video presentations with scene-based composition, text overlays, integrated video clips, and synchronized audio.

## ✨ Features

- **React-based composition**: Build videos as React components
- **Scene management**: Organize content into reusable scenes
- **Video integration**: Embed MP4 clips seamlessly
- **Text animations**: Smooth fade-in/out text overlays on black backgrounds
- **Audio sync**: Layer background music or sound effects
- **Real-time preview**: Use Remotion Studio for instant feedback
- **Professional output**: Export high-quality MP4 videos

## 📋 Project Structure

```
src/
├── Root.tsx                 # Main composition config (duration, resolution, fps)
├── MainVideo.tsx            # Timeline orchestration - sequences all scenes
├── scenes/
│   ├── Hook.tsx            # Opening scene with messaging
│   ├── ArchitectureContrast.tsx  # Video + narrative scene
│   ├── MetricsCounter.tsx   # Video + narrative scene
│   ├── AttackSimulation.tsx # Video + narrative scene
│   ├── ClosingCard.tsx      # Closing logo/branding
│   ├── TextSlide.tsx        # Reusable text-on-black component
│   ├── VideoClip4.tsx       # Optional video scenes
│   └── VideoClip5.tsx
public/
├── clip-1.mp4 to clip-5.mp4 # Video assets
├── neus-logo.jpg            # Branding asset
└── tension-score.mp3        # Background music
package.json                 # Dependencies
remotion.config.ts          # Remotion configuration
tsconfig.json               # TypeScript configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

**For using the project:**

```bash
# Clone the repository
git clone https://github.com/elibend220/neus_presentation_video.git
cd neus_presentation_video

# Install dependencies
npm install
```

**For contributing changes back:**

If you want to submit improvements (new scenes, fixes, features):

1. **Fork** the repository (click "Fork" button on GitHub)
2. **Clone your fork**:
   ```bash
   git clone https://github.com/YOUR-USERNAME/neus_presentation_video.git
   cd neus_presentation_video
   npm install
   ```
3. See [CONTRIBUTING.md](CONTRIBUTING.md) for the full workflow

### Development - Live Preview

```bash
# Start Remotion Studio (real-time preview in browser)
npm run dev
```

Then open http://localhost:3000 to see your video composition live. Edit files and watch changes in real-time.

### Production - Render MP4

```bash
# Render final video to out.mp4
npm run build
```

Output file: `out.mp4` (high-quality, full resolution)

## 📐 Current Composition (32 seconds, 1920x1080, 30fps)

| Timestamp | Duration | Scene | Content |
|-----------|----------|-------|---------|
| 0-5s | 5s | AttackSimulation | Video clip #3 - opening hook |
| 5-8s | 3s | Hook | Text: "Zero data egress..." |
| 8-11s | 3s | TextSlide | "Every other platform needs a way into your system" |
| 11-17s | 6s | ArchitectureContrast | Video clip #1 |
| 17-20s | 3s | TextSlide | "Most tools detect. Then wait for you to respond." |
| 20-29s | 9s | MetricsCounter | Video clip #2 (extended) |
| 29-32s | 3s | ClosingCard | Logo + branding |

**Audio**: tension-score.mp3 (loops throughout)

## 🎬 How to Customize

### Change Video Content

1. **Replace video clips**: Copy your MP4 files to `public/` (e.g., `clip-1.mp4`)
2. **Update scene components**: Edit `src/scenes/ArchitectureContrast.tsx` and reference your clip:
   ```tsx
   <OffthreadVideo src={staticFile("your-clip.mp4")} style={{ width: "100%", height: "100%" }} />
   ```

### Modify Text & Messaging

Edit `src/MainVideo.tsx` and update TextSlide components:
```tsx
<TextSlide
  line1="Your first line"
  line2="Your second line"
  fontSize1={50}
  fontSize2={65}
/>
```

### Change Timing

Adjust `durationInFrames` in `src/MainVideo.tsx`:
- At 30fps: 30 frames = 1 second, 90 frames = 3 seconds, 180 frames = 6 seconds

Example: Make Architecture video 8 seconds instead of 6:
```tsx
<Sequence from={330} durationInFrames={240}>  {/* 240 frames = 8 seconds */}
  <ArchitectureContrast />
</Sequence>
```

### Update Branding

Replace `public/neus-logo.jpg` with your logo. Adjust fade timing in `src/scenes/ClosingCard.tsx`.

### Change Audio

1. Replace `public/tension-score.mp3` with your track
2. Ensure audio is MP3 format (or update file type in MainVideo.tsx)
3. Audio will auto-loop to fill the video duration

### Adjust Resolution/FPS

Edit `src/Root.tsx`:
```tsx
<Composition
  id="NeusPresentation"
  component={MainVideo}
  durationInFrames={960}    // Total frames: 960 @ 30fps = 32 seconds
  fps={30}                   // Frames per second
  width={1920}               // Video width
  height={1080}              // Video height
/>
```

## 📹 TextSlide Component (Text-on-Black)

Reusable component for displaying messaging with fade animations:

```tsx
<TextSlide
  line1="Main message"
  line2="Secondary message"
  fontSize1={50}     // Size of line1
  fontSize2={65}     // Size of line2
/>
```

**Fade timing** (in TextSlide.tsx):
- `[0, 3, 80, 90]` → fades in at frame 3, holds until 80, fades out by 90

Adjust these values to control text visibility and transition speed.

## 🎵 Audio Integration

Audio is managed globally in `src/MainVideo.tsx`:
```tsx
<Audio src={staticFile("tension-score.mp3")} />
```

The audio track plays from start to end. If your track is shorter than the video, it will loop.

## 🔧 Project Configuration

**remotion.config.ts**: Core Remotion settings
- Video codec: JPEG frames
- Overwrite existing output by default
- Browser executable path (for headless rendering)

**tsconfig.json**: TypeScript + JSX support for React components

**package.json**: Dependencies
- `remotion@^4.0.0`: Video composition framework
- `@remotion/cli@^4.0.0`: CLI for rendering
- `react@^18.0.0`: Component framework
- `typescript@^5.0.0`: Type safety

## 📚 Example: Creating a New Scene

```tsx
// src/scenes/MyCustomScene.tsx
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const MyCustomScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15, 75, 90], [0, 1, 1, 0]);

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", justifyContent: "center" }}>
      <div style={{ opacity, color: "white", fontSize: 60 }}>
        Custom Content
      </div>
    </AbsoluteFill>
  );
};
```

Then add to `src/MainVideo.tsx`:
```tsx
import { MyCustomScene } from "./scenes/MyCustomScene";

<Sequence from={0} durationInFrames={90}>
  <MyCustomScene />
</Sequence>
```

## 🎓 Resources

- [Remotion Docs](https://www.remotion.dev/docs)
- [React Docs](https://react.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 💡 Tips & Tricks

1. **Preview before rendering**: Use `npm run dev` to preview changes instantly in Remotion Studio
2. **Optimize large videos**: Use lower resolution MP4 clips (1080p or less) to speed up rendering
3. **Test audio sync**: Pay attention to audio fade-in timing relative to your scenes
4. **Use Git for versioning**: Keep track of scene changes and composition iterations
5. **Export as segments**: Create separate compositions for different parts if the video gets complex

## 📄 Video Export Settings

- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920×1080 (customizable)
- **Frame rate**: 30fps (customizable)
- **Color**: YUV420 (web-optimized)
- **Compression**: CRF 18 (high quality)

## 🛠️ Troubleshooting

**"Chrome headless not found"**
- The build script uses a local headless Chrome. If missing, ensure Playwright is installed:
  ```bash
  npm install @playwright/test
  ```

**"Audio track not playing"**
- Ensure the MP3 file is in `public/` folder
- Check the filename in `staticFile()` matches exactly
- MP3 must be valid audio format

**"Video too slow to render"**
- Reduce video clip resolution
- Lower composition resolution (e.g., 1280×720)
- Reduce frame rate (e.g., 24fps)

**"Text doesn't show"**
- Check opacity values aren't 0
- Verify font size isn't too small
- Ensure text color contrasts with background

## 📝 License

This project is open source and available for educational and commercial use.

## 🤝 Contributing

Contributions welcome! Feel free to:
- Add new scene templates
- Improve documentation
- Share custom animations
- Report bugs or suggest features

---

**Happy video creating! 🎬**

Built with ❤️ using Remotion + React
