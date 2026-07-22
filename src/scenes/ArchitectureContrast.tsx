import { AbsoluteFill, Sequence } from "remotion";

export const ArchitectureContrast = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      <Sequence from={0} durationInFrames={45}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#888", fontSize: 60, textAlign: "center" }}>
            Most platforms orchestrate<br />the tools you already have
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={45}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: 90, fontWeight: 700, textAlign: "center" }}>
            NEUS is the tool.
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
