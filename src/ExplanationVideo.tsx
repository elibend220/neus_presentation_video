import { Composition } from "remotion";
import { Hook } from "./scenes/Hook";
import { TextSlide } from "./scenes/TextSlide";
import { ClosingCard } from "./scenes/ClosingCard";
import { AbsoluteFill, Sequence } from "remotion";

const ExplanationScene = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ color: "#888", fontSize: 50, marginBottom: 20 }}>
          {title}
        </div>
        <div style={{ color: "white", fontSize: 70, fontWeight: 700 }}>
          {subtitle}
        </div>
      </div>
    </AbsoluteFill>
  );
};

export const ExplanationVideo = () => {
  return (
    <AbsoluteFill>
      {/* Scene 1: What is it */}
      <Sequence from={0} durationInFrames={90}>
        <ExplanationScene title="NEUS Presentation Video" subtitle="Build Amazing Videos" />
      </Sequence>

      {/* Scene 2: Feature 1 */}
      <Sequence from={90} durationInFrames={90}>
        <ExplanationScene title="React Components" subtitle="Code Your Videos" />
      </Sequence>

      {/* Scene 3: Feature 2 */}
      <Sequence from={180} durationInFrames={90}>
        <ExplanationScene title="Scene Management" subtitle="Organize Content" />
      </Sequence>

      {/* Scene 4: Feature 3 */}
      <Sequence from={270} durationInFrames={90}>
        <ExplanationScene title="Video Integration" subtitle="Embed MP4 Clips" />
      </Sequence>

      {/* Scene 5: Feature 4 */}
      <Sequence from={360} durationInFrames={90}>
        <ExplanationScene title="Text Animations" subtitle="Smooth Fade Effects" />
      </Sequence>

      {/* Scene 6: Feature 5 */}
      <Sequence from={450} durationInFrames={90}>
        <ExplanationScene title="Audio Sync" subtitle="Professional Sound" />
      </Sequence>

      {/* Scene 7: How to start */}
      <Sequence from={540} durationInFrames={90}>
        <ExplanationScene title="Get Started" subtitle="npm install && npm run dev" />
      </Sequence>

      {/* Scene 8: Closing */}
      <Sequence from={630} durationInFrames={90}>
        <ClosingCard />
      </Sequence>
    </AbsoluteFill>
  );
};
