# Contributing to NEUS Presentation Video

Thanks for your interest in contributing! This guide will help you get started.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork**:
   ```bash
   git clone https://github.com/your-username/neus_presentation_video.git
   cd neus_presentation_video
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

### Preview Your Changes

```bash
npm run dev
```

This starts Remotion Studio at http://localhost:3000. Edit code and see changes live.

### Test Your Changes

```bash
npm run build
```

This renders the full video to `out.mp4` (takes ~2-5 minutes depending on complexity).

## Types of Contributions

### 🎬 New Scene Components

Create a new scene in `src/scenes/`:

```tsx
// src/scenes/YourNewScene.tsx
import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

export const YourNewScene = () => {
  const frame = useCurrentFrame();
  
  return (
    <AbsoluteFill style={{ backgroundColor: "#000000" }}>
      {/* Your content here */}
    </AbsoluteFill>
  );
};
```

Then import and add to `src/MainVideo.tsx`.

### 🎨 Animation Improvements

- Enhance fade transitions
- Add new animation effects
- Improve timing and pacing
- Create reusable animation utilities

### 📖 Documentation

- Improve README with examples
- Add troubleshooting guides
- Create video tutorials
- Document best practices

### 🐛 Bug Fixes

- Report issues with reproduction steps
- Submit PRs with fixes
- Include before/after examples

### ⚡ Performance Optimizations

- Reduce render times
- Optimize video encoding
- Improve memory usage
- Faster preview loading

## Code Style

### TypeScript/React

- Use functional components
- Prefer hooks over class components
- Use proper TypeScript types
- Keep components focused and reusable

### Naming Conventions

- Components: PascalCase (e.g., `TextSlide`)
- Files: PascalCase for components (e.g., `TextSlide.tsx`)
- Variables/functions: camelCase (e.g., `durationInFrames`)
- Constants: UPPER_SNAKE_CASE (rare in this project)

### Example Code

```tsx
// ✅ Good
export const MyScene = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 15], [0, 1]);

  return (
    <AbsoluteFill style={{ opacity }}>
      Content
    </AbsoluteFill>
  );
};

// ❌ Avoid
const myScene = () => {
  // No type safety
  const frame = useCurrentFrame();
  return <div>{frame}</div>;
};
```

## Git Workflow

### Commit Messages

Write clear, descriptive commit messages:

```
feature: Add spring animation to TextSlide

- Add spring physics to text fade-in
- Customize damping and tension parameters
- Update TextSlide props interface
- Include usage examples in comments
```

```
fix: Resolve audio desync in long videos

- Fixed audio duration calculation
- Add audio looping logic
- Test with 60+ second compositions
```

### Before Submitting

1. Run `npm run build` to verify it works
2. Check video output quality
3. Update README if adding features
4. Add comments to complex logic
5. Test with different resolutions/frame rates

## Pull Request Process

1. **Describe your changes**: What, why, and how
2. **Reference issues**: Link related GitHub issues
3. **Include examples**: Before/after screenshots or videos if applicable
4. **Update docs**: Keep README and comments current
5. **Be specific**: "Improve text animation" → "Add cubic-bezier easing to TextSlide fade"

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## How to Test
Steps to verify the changes

## Changes Made
- Item 1
- Item 2
- Item 3

## Screenshots/Videos
(if applicable)
```

## Development Tips

### Remotion Studio Shortcuts

- **R**: Restart preview
- **Spacebar**: Play/pause
- **← / →**: Seek frames
- **1-9**: Jump to percentages of video

### Common Tasks

**Add a new scene to the timeline**:
```tsx
import { YourNewScene } from "./scenes/YourNewScene";

<Sequence from={300} durationInFrames={90}>
  <YourNewScene />
</Sequence>
```

**Change video duration**:
Edit `src/Root.tsx` → `durationInFrames` property

**Add debugging**:
```tsx
console.log("Frame:", frame);
console.log("Opacity:", opacity);
```

**Test animation timing**:
Use Remotion Studio's timeline to visualize frame-by-frame

## Questions?

- Check the [README.md](README.md) for detailed documentation
- Review existing scenes for patterns
- Check [Remotion docs](https://www.remotion.dev/docs)
- Open a GitHub discussion for questions

## Code of Conduct

- Be respectful and inclusive
- Give constructive feedback
- Focus on code, not person
- Help others learn

---

**Thank you for contributing!** Your work helps the community create amazing videos. 🎬

