import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Hook } from "./scenes/Hook";
import { ArchitectureContrast } from "./scenes/ArchitectureContrast";
import { MetricsCounter } from "./scenes/MetricsCounter";
import { AttackSimulation } from "./scenes/AttackSimulation";
import { ClosingCard } from "./scenes/ClosingCard";
import { TextSlide } from "./scenes/TextSlide";

export const MainVideo = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile("tension-score.mp3")} />
      <Sequence from={0} durationInFrames={90}>
        <Hook />
      </Sequence>

      {/* Architecture positioning slide */}
      <Sequence from={90} durationInFrames={60}>
        <TextSlide
          line1="Every other platform needs"
          line2="a way into your system"
          fontSize1={50}
          fontSize2={60}
        />
      </Sequence>

      {/* Architecture video */}
      <Sequence from={150} durationInFrames={150}>
        <ArchitectureContrast />
      </Sequence>

      {/* Metrics positioning slide */}
      <Sequence from={300} durationInFrames={60}>
        <TextSlide
          line1="Most tools detect."
          line2="Then wait for you to respond."
          fontSize1={50}
          fontSize2={60}
        />
      </Sequence>

      {/* Metrics video */}
      <Sequence from={360} durationInFrames={120}>
        <MetricsCounter />
      </Sequence>

      {/* Attack positioning slide */}
      <Sequence from={480} durationInFrames={60}>
        <TextSlide
          line1="No signature. No history."
          line2="No warning."
          fontSize1={50}
          fontSize2={60}
        />
      </Sequence>

      {/* Attack video */}
      <Sequence from={540} durationInFrames={120}>
        <AttackSimulation />
      </Sequence>

      <Sequence from={660} durationInFrames={90}>
        <ClosingCard />
      </Sequence>
    </AbsoluteFill>
  );
};
