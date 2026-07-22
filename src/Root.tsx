import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";

export const RemotionRoot = () => (
  <Composition
    id="NeusPresentation"
    component={MainVideo}
    durationInFrames={750}
    fps={30}
    width={1920}
    height={1080}
  />
);
