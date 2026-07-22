import { AbsoluteFill, Sequence } from "remotion";

export const AttackSimulation = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      <Sequence from={0} durationInFrames={70}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "#888", fontSize: 60, textAlign: "center" }}>
            No signature. No history.<br />No warning.
          </div>
        </AbsoluteFill>
      </Sequence>
      <Sequence from={70}>
        <AbsoluteFill style={{ justifyContent: "center", alignItems: "center" }}>
          <div style={{ color: "white", fontSize: 76, fontWeight: 700, textAlign: "center" }}>
            NEUS doesn't need to<br />have seen it before.
          </div>
        </AbsoluteFill>
      </Sequence>
    </AbsoluteFill>
  );
};
