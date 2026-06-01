type SavannaBackdropProps = {
  variant?: "home" | "page";
};

function AcaciaTree({
  x,
  y,
  scale = 1,
  opacity = 0.9,
}: {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      <rect x="-2.5" y="-70" width="5" height="70" fill="#1a1612" />
      <ellipse cx="0" cy="-78" rx="42" ry="11" fill="#2d3a24" />
      <ellipse cx="0" cy="-86" rx="32" ry="9" fill="#4a5c3a" opacity="0.85" />
    </g>
  );
}

function MaasaiHut({
  x,
  y,
  scale = 1,
  opacity = 0.82,
}: {
  x: number;
  y: number;
  scale?: number;
  opacity?: number;
}) {
  return (
    <g transform={`translate(${x}, ${y}) scale(${scale})`} opacity={opacity}>
      {/* Mud wall cylinder */}
      <path
        d="M-20 0 L-22 -2 Q-24 -16, -20 -22 Q-12 -26, 0 -26 Q12 -26, 20 -22 Q24 -16, 22 -2 L20 0 Z"
        fill="#6b4a30"
      />
      <path
        d="M-18 0 L-19 -2 Q-21 -14, -17 -19 Q-10 -22, 0 -22 Q10 -22, 17 -19 Q21 -14, 19 -2 L18 0 Z"
        fill="#8b6344"
      />
      <path
        d="M-14 0 L-14 -10 M-4 0 L-4 -12 M6 0 L6 -11 M14 0 L14 -9"
        stroke="#5a3d28"
        strokeWidth="0.6"
        opacity="0.45"
      />

      {/* Dried grass thatch roof */}
      <path
        d="M0 -24 Q-30 -24, -34 -34 Q-38 -52, 0 -64 Q38 -52, 34 -34 Q30 -24, 0 -24"
        fill="#7a6340"
      />
      <path
        d="M0 -28 Q-28 -30, -32 -38 Q-36 -48, 0 -58 Q36 -48, 32 -38 Q28 -30, 0 -28"
        fill="#8b7348"
      />
      <path
        d="M0 -34 Q-24 -36, -28 -44 Q-32 -50, 0 -54 Q32 -50, 28 -44 Q24 -36, 0 -34"
        fill="#9a8458"
        opacity="0.9"
      />

      {/* Dried thatch strands */}
      <path
        d="M-32 -36 Q-16 -38, 0 -40 Q16 -38, 32 -36"
        stroke="#6b5330"
        strokeWidth="0.8"
        fill="none"
        opacity="0.55"
      />
      <path
        d="M-30 -42 Q-14 -44, 0 -46 Q14 -44, 30 -42"
        stroke="#7a6340"
        strokeWidth="0.7"
        fill="none"
        opacity="0.5"
      />
      <path
        d="M-26 -48 Q-12 -50, 0 -51 Q12 -50, 26 -48"
        stroke="#6b5330"
        strokeWidth="0.6"
        fill="none"
        opacity="0.45"
      />
      <path
        d="M-20 -54 Q-8 -55, 0 -56 Q8 -55, 20 -54"
        stroke="#8b7348"
        strokeWidth="0.5"
        fill="none"
        opacity="0.4"
      />

      {/* Roof edge fringe — bleached dry grass */}
      <path
        d="M-34 -32 Q-18 -34, 0 -35 Q18 -34, 34 -32"
        stroke="#a89060"
        strokeWidth="1.2"
        fill="none"
        opacity="0.5"
      />

      {/* Door */}
      <path d="M-5 0 L-5 -14 Q0 -18, 5 -14 L5 0 Z" fill="#3a2818" />
      <path d="M-5 -14 Q0 -18, 5 -14" stroke="#2a1c10" strokeWidth="0.5" fill="none" />
    </g>
  );
}

const homeHuts: { x: number; y: number; scale: number; opacity?: number }[] = [
  { x: 200, y: 662, scale: 1.5, opacity: 0.78 },
  { x: 250, y: 666, scale: 1.15, opacity: 0.62 },
  { x: 540, y: 661, scale: 1.55, opacity: 0.8 },
  { x: 590, y: 665, scale: 1.1, opacity: 0.55 },
  { x: 880, y: 663, scale: 1.45, opacity: 0.74 },
  { x: 930, y: 667, scale: 1.05, opacity: 0.52 },
];

const pageHuts: { x: number; y: number; scale: number; opacity?: number }[] = [
  { x: 260, y: 664, scale: 1.3, opacity: 0.52 },
  { x: 560, y: 662, scale: 1.4, opacity: 0.55 },
  { x: 920, y: 665, scale: 1.2, opacity: 0.45 },
];

export function SavannaBackdrop({ variant = "page" }: SavannaBackdropProps) {
  const isHome = variant === "home";
  const huts = isHome ? homeHuts : pageHuts;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(
              180deg,
              #0a0908 0%,
              #0a0908 38%,
              #1a1008 52%,
              #4a2810 68%,
              #8b4518 78%,
              #c4622a 86%,
              #e08a1a 92%,
              #2a1810 100%
            )
          `,
        }}
      />

      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: isHome ? "52%" : "58%",
          width: isHome ? "140px" : "100px",
          height: isHome ? "140px" : "100px",
          background:
            "radial-gradient(circle, rgb(224 138 26 / 0.55) 0%, rgb(196 100 30 / 0.25) 45%, transparent 70%)",
          filter: "blur(2px)",
        }}
      />
      <div
        className="absolute left-1/2 -translate-x-1/2 rounded-full"
        style={{
          top: isHome ? "54%" : "60%",
          width: isHome ? "56px" : "40px",
          height: isHome ? "56px" : "40px",
          background: "rgb(224 138 26 / 0.35)",
          filter: "blur(8px)",
        }}
      />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <path
          d="M-40 520 C200 480, 400 530, 600 500 C800 470, 1000 520, 1240 490 L1240 820 L-40 820 Z"
          fill="#1a1208"
          opacity="0.85"
        />
        <path
          d="M-40 580 C180 550, 380 600, 580 570 C780 540, 980 590, 1240 560 L1240 820 L-40 820 Z"
          fill="#2a2010"
          opacity="0.9"
        />
        <path
          d="M-40 640 C220 610, 420 670, 620 640 C820 610, 1020 660, 1240 630 L1240 820 L-40 820 Z"
          fill="#3a2a14"
          opacity="0.75"
        />

        <AcaciaTree x={100} y={660} scale={1.25} opacity={0.88} />
        <AcaciaTree x={350} y={668} scale={1} opacity={0.72} />
        <AcaciaTree x={620} y={655} scale={1.4} opacity={0.9} />
        <AcaciaTree x={900} y={665} scale={1.15} opacity={0.78} />
        <AcaciaTree x={1100} y={672} scale={0.9} opacity={0.6} />

        {isHome && (
          <>
            <AcaciaTree x={480} y={648} scale={1.6} opacity={0.35} />
            <AcaciaTree x={780} y={652} scale={1.3} opacity={0.4} />
          </>
        )}

        {huts.map((hut) => (
          <MaasaiHut
            key={`${hut.x}-${hut.scale}`}
            x={hut.x}
            y={hut.y}
            scale={hut.scale}
            opacity={hut.opacity}
          />
        ))}
      </svg>
    </div>
  );
}
