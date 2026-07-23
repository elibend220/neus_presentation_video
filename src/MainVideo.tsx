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
      {/* Attack video at beginning - 5 seconds (full, no text) */}
      <Sequence from={0} durationInFrames={150}>
        <AttackSimulation />
      </Sequence>

      {/* Opening hook - 3 seconds */}
      <Sequence from={150} durationInFrames={90}>
        <Hook />
      </Sequence>

      {/* Architecture positioning slide - 3 seconds */}
      <Sequence from={240} durationInFrames={90}>
        <TextSlide
          line1="Every other platform needs"
          line2="a way into your system"
          fontSize1={50}
          fontSize2={65}
        />
      </Sequence>

      {/* Architecture video - 6 seconds */}
      <Sequence from={330} durationInFrames={180}>
        <ArchitectureContrast />
      </Sequence>

      {/* Metrics positioning slide - 3 seconds */}
      <Sequence from={510} durationInFrames={90}>
        <TextSlide
          line1="Most tools detect."
          line2="Then wait for you to respond."
          fontSize1={50}
          fontSize2={65}
        />
      </Sequence>

      {/* Metrics video - 9 seconds (extended) */}
      <Sequence from={600} durationInFrames={270}>
        <MetricsCounter />
      </Sequence>

      {/* Closing logo at end - 3 seconds */}
      <Sequence from={870} durationInFrames={90}>
        <ClosingCard />
      </Sequence>
    </AbsoluteFill>
  );
};
