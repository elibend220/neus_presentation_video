import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

export const MetricsCounter = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      <OffthreadVideo src={staticFile("clip-2.mp4")} style={{ width: "100%", height: "100%" }} />
    </AbsoluteFill>
  );
};
