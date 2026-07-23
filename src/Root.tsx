import { Composition } from "remotion";
import { MainVideo } from "./MainVideo";
import { ExplanationVideo } from "./ExplanationVideo";

export const RemotionRoot = () => (
  <>
    <Composition
      id="NeusPresentation"
      component={MainVideo}
      durationInFrames={960}
      fps={30}
      width={1920}
      height={1080}
    />
    <Composition
      id="ExplanationVideo"
      component={ExplanationVideo}
      durationInFrames={720}
      fps={30}
      width={1920}
      height={1080}
    />
  </>
);
