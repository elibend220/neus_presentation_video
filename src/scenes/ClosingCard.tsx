import { AbsoluteFill, Img, staticFile, interpolate, useCurrentFrame } from "remotion";

export const ClosingCard = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12", justifyContent: "center", alignItems: "center" }}>
      <Img src={staticFile("neus-logo.png")} style={{ width: 400, opacity }} />
    </AbsoluteFill>
  );
};
