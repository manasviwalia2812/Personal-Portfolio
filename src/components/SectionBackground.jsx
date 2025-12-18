import { useMemo } from "react";

const SectionBackground = ({ children }) => {

  // ⭐ Generate stars ONCE per mount
  const stars = useMemo(
    () =>
      Array.from({ length: 160 }, () => ({
        size: Math.random() * 1.4 + 0.6,
        top: Math.random() * 100,
        left: Math.random() * 100,
        opacity: Math.random() * 0.6 + 0.25,
        duration: 5 + Math.random() * 10,
      })),
    []
  );

  return (
    <section className="relative w-full overflow-hidden py-24">

      {/* 🖤 Pure dark base */}
      <div className="absolute inset-0 -z-10 bg-black" />

      {/* 💜 Dark purple atmospheric glow (NO gray / NO white) */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
  radial-gradient(
    circle at 50% 30%,
    rgba(130, 70, 160, 0.10),
    rgba(3, 2, 6, 0.98) 72%
  )
`,
       }}
      />

      {/* ✨ Stars layer */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {stars.map((star, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animation: `twinkle ${star.duration}s infinite ease-in-out`,
            }}
          />
        ))}
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-8">
        {children}
      </div>

      {/* ✨ Twinkle animation */}
      <style>
        {`
          @keyframes twinkle {
            0%, 100% { opacity: 0.25; }
            50% { opacity: 0.9; }
          }
        `}
      </style>

    </section>
  );
};

export default SectionBackground;
