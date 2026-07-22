import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

export const AttackSimulation = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      <OffthreadVideo src={staticFile("clip-3.mp4")} style={{ width: "100%", height: "100%" }} />
    </AbsoluteFill>
  );
};
