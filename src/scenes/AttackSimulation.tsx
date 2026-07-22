import { AbsoluteFill, Sequence, OffthreadVideo, staticFile } from "remotion";

export const AttackSimulation = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      {/* Video with optional text overlay */}
      <OffthreadVideo src={staticFile("clip-3.mp4")} style={{ width: "100%", height: "100%" }} />

      {/* Original text fallback/overlay (optional) */}
      <Sequence from={0} durationInFrames={70}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#888", fontSize: 60, textAlign: "center", opacity: 0.7 }}>
            No signature. No history.<br />No warning.
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={70}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: 76, fontWeight: 700, textAlign: "center", opacity: 0.7 }}>
            NEUS doesn't need to<br />have seen it before.
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
