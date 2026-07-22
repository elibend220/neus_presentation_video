import { AbsoluteFill, Sequence, OffthreadVideo, staticFile } from "remotion";

export const ArchitectureContrast = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      {/* Video with optional text overlay */}
      <OffthreadVideo src={staticFile("clip-1.mp4")} style={{ width: "100%", height: "100%" }} />

      {/* Original text fallback/overlay (optional) */}
      <Sequence from={0} durationInFrames={45}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#888", fontSize: 60, textAlign: "center", opacity: 0.7 }}>
            Every other platform needs<br />a way into your system.
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={45}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: 90, fontWeight: 700, textAlign: "center", opacity: 0.7 }}>
            NEUS protects from outside it.
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
