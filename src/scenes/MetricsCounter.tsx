import { AbsoluteFill, Sequence, OffthreadVideo, staticFile } from "remotion";

export const MetricsCounter = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      {/* Video with optional text overlay */}
      <OffthreadVideo src={staticFile("clip-2.mp4")} style={{ width: "100%", height: "100%" }} />

      {/* Original text fallback/overlay (optional) */}
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#888", fontSize: 60, textAlign: "center", opacity: 0.7 }}>
            Most tools detect.<br />Then wait for you to respond.
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={60}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: 90, fontWeight: 700, textAlign: "center", opacity: 0.7 }}>
            NEUS fights back.
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
