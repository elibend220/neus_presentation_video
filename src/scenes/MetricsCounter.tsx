import { useCurrentFrame, interpolate, AbsoluteFill, spring, useVideoConfig } from "remotion";

export const MetricsCounter = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const throughput = Math.round(
    interpolate(frame, [0, 60], [0, 1334], { extrapolateRight: "clamp" })
  );
  const p95 = interpolate(frame, [0, 60], [0, 10.81], { extrapolateRight: "clamp" }).toFixed(2);
  const scale = spring({ frame, fps, config: { damping: 12 } });

  return (
    <AbsoluteFill style={{ backgroundColor: "#0b0d12", justifyContent: "center", alignItems: "center" }}>
      <div style={{ transform: `scale(${scale})`, textAlign: "center", color: "white" }}>
        <div style={{ fontSize: 100, fontWeight: 700 }}>{throughput} req/s</div>
        <div style={{ fontSize: 50, opacity: 0.7 }}>P95 latency: {p95}ms</div>
      </div>
    </AbsoluteFill>
  );
};
