import { Composition } from "remotion";
import { ExplanationVideo } from "./ExplanationVideo";

export const ExplanationRoot = () => (
  <Composition
    id="ExplanationVideo"
    component={ExplanationVideo}
    durationInFrames={720}
    fps={30}
    width={1920}
    height={1080}
  />
);
