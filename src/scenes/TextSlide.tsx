import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";

interface TextSlideProps {
  line1: string;
  line2?: string;
  fontSize1?: number;
  fontSize2?: number;
}

export const TextSlide = ({
  line1,
  line2,
  fontSize1 = 60,
  fontSize2 = 90,
}: TextSlideProps) => {
  const frame = useCurrentFrame();
  const line1Opacity = interpolate(frame, [0, 10, 40, 50], [0, 1, 1, 0], {
    extrapolateRight: "clamp",
  });
  const line2Opacity = line2
    ? interpolate(frame, [10, 20, 40, 50], [0, 1, 1, 0], {
        extrapolateRight: "clamp",
      })
    : 0;

  return (
    <AbsoluteFill style={{ backgroundColor: "#000000", justifyContent: "center", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div
          style={{
            opacity: line1Opacity,
            color: "#888",
            fontSize: fontSize1,
            marginBottom: 20,
          }}
        >
          {line1}
        </div>
        {line2 && (
          <div
            style={{
              opacity: line2Opacity,
              color: "white",
              fontSize: fontSize2,
              fontWeight: 700,
            }}
          >
            {line2}
          </div>
        )}
      </div>
    </AbsoluteFill>
  );
};
