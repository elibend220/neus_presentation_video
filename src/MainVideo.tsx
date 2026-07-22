import { AbsoluteFill, Audio, Sequence, staticFile } from "remotion";
import { Hook } from "./scenes/Hook";
import { ArchitectureContrast } from "./scenes/ArchitectureContrast";
import { MetricsCounter } from "./scenes/MetricsCounter";
import { AttackSimulation } from "./scenes/AttackSimulation";
import { ClosingCard } from "./scenes/ClosingCard";

export const MainVideo = () => {
  return (
    <AbsoluteFill>
      <Audio src={staticFile("tension-score.mp3")} />
      <Sequence from={0} durationInFrames={90}>
        <Hook />
      </Sequence>
      <Sequence from={90} durationInFrames={210}>
        <ArchitectureContrast />
      </Sequence>
      <Sequence from={300} durationInFrames={180}>
        <MetricsCounter />
      </Sequence>
      <Sequence from={480} durationInFrames={180}>
        <AttackSimulation />
      </Sequence>
      <Sequence from={660} durationInFrames={90}>
        <ClosingCard />
      </Sequence>
    </AbsoluteFill>
  );
};
