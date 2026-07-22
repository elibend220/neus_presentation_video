import { AbsoluteFill, Sequence } from "remotion";

export const MetricsCounter = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      <Sequence from={0} durationInFrames={60}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#888", fontSize: 60, textAlign: "center" }}>
            Most tools detect.<br />Then wait for you to respond.
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={60}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: 90, fontWeight: 700, textAlign: "center" }}>
            NEUS fights back.
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
