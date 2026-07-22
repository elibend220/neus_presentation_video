import { useCurrentFrame, interpolate, AbsoluteFill, spring, useVideoConfig } from "remotion";

export const AttackSimulation = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const blocked = Math.round(
    interpolate(frame, [0, 90], [0, 191], { extrapolateRight: "clamp" })
  );
  const checkScale = spring({ frame: frame - 90, fps, config: { damping: 10 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center", color: "white" }}>
        <div style={{ fontSize: 40, color: "#888", marginBottom: 10 }}>
          10 adversarial categories
        </div>
        <div style={{ fontSize: 90, fontWeight: 700 }}>
          {blocked} / 191 blocked
        </div>
        <div style={{ fontSize: 45, marginTop: 20, opacity: frame > 90 ? 1 : 0, transform: `scale(${checkScale})` }}>
          100% block rate · 0% false positive
        </div>
      </div>
    </AbsoluteFill>
  );
};
