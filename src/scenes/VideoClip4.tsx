import { AbsoluteFill, OffthreadVideo, staticFile } from "remotion";

export const VideoClip4 = () => {
  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12" }}>
      <OffthreadVideo src={staticFile("clip-4.mp4")} style={{ width: "100%", height: "100%" }} />
    </AbsoluteFill>
  );
};
