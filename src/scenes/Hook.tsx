import { useCurrentFrame, interpolate, AbsoluteFill } from "remotion";

export const Hook = () => {
  const frame = useCurrentFrame();
  const line1Opacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });
  const line2Opacity = interpolate(frame, [30, 50], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ opacity: line1Opacity, color: "#888", fontSize: 55 }}>
          Zero data egress isn't a feature.
        </div>
        <div style={{ opacity: line2Opacity, color: "white", fontSize: 70, fontWeight: 700, marginTop: 20 }}>
          It's the regulation.
        </div>
      </div>
    </AbsoluteFill>
  );
};
