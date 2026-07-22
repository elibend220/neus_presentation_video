import { AbsoluteFill, Sequence, staticFile } from "remotion";
import { Hook } from "./scenes/Hook";
import { ArchitectureContrast } from "./scenes/ArchitectureContrast";
import { MetricsCounter } from "./scenes/MetricsCounter";
import { AttackSimulation } from "./scenes/AttackSimulation";
import { ClosingCard } from "./scenes/ClosingCard";
import { TextSlide } from "./scenes/TextSlide";

export const MainVideo = () => {
  return (
    <AbsoluteFill>
      {/* Closing logo at beginning - 3 seconds */}
      <Sequence from={0} durationInFrames={90}>
        <ClosingCard />
      </Sequence>

      {/* Opening hook - 3 seconds */}
      <Sequence from={90} durationInFrames={90}>
        <Hook />
      </Sequence>

      {/* Architecture positioning slide - 3 seconds */}
      <Sequence from={180} durationInFrames={90}>
        <TextSlide
          line1="Every other platform needs"
          line2="a way into your system"
          fontSize1={50}
          fontSize2={65}
        />
      </Sequence>

      {/* Architecture video - 6 seconds */}
      <Sequence from={270} durationInFrames={180}>
        <ArchitectureContrast />
      </Sequence>

      {/* Metrics positioning slide - 3 seconds */}
      <Sequence from={450} durationInFrames={90}>
        <TextSlide
          line1="Most tools detect."
          line2="Then wait for you to respond."
          fontSize1={50}
          fontSize2={65}
        />
      </Sequence>

      {/* Metrics video - 6 seconds */}
      <Sequence from={540} durationInFrames={180}>
        <MetricsCounter />
      </Sequence>

      {/* Attack positioning slide - 3 seconds */}
      <Sequence from={720} durationInFrames={90}>
        <TextSlide
          line1="No signature. No history."
          line2="No warning."
          fontSize1={50}
          fontSize2={65}
        />
      </Sequence>

      {/* Attack video - 6 seconds */}
      <Sequence from={810} durationInFrames={180}>
        <AttackSimulation />
      </Sequence>
    </AbsoluteFill>
  );
};
