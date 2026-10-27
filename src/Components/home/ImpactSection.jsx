import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useInView } from "motion/react";


const impactData = [
  {
    number: 1500,
    label: "Students Supported",
    bg: "#e9f1fd",
    c: "#1d5fd0",
    icon: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      </>
    ),
  },
  {
    number: 50,
    label: "Educational Programs",
    bg: "#e3f6f2",
    c: "#0f9d88",
    icon: (
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5v-15ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5v-15Z" />
    ),
  },
  {
    number: 200,
    label: "Active Volunteers",
    bg: "#fdf3dc",
    c: "#d99512",
    icon: (
      <path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10Z" />
    ),
  },
  {
    number: 25,
    label: "Communities Reached",
    bg: "#fde8e2",
    c: "#e0552f",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18M12 3c2.5 2.7 3.8 5.7 3.8 9s-1.3 6.3-3.8 9c-2.5-2.7-3.8-5.7-3.8-9S9.5 5.7 12 3Z" />
      </>
    ),
  },
];


const useCountUp = (end) => {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  const play = (duration = 1500) => {
    cancelAnimationFrame(rafRef.current);

    if (reduce) {
      setValue(end);
      return;
    }

    const start = performance.now();

    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // fast start, slow finish
      setValue(Math.round(end * eased));
      if (p < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  // stop the animation if the card is removed
  useEffect(() => () => cancelAnimationFrame(rafRef.current), []);

  return [value, play];
};

/* ---------- One card ---------- */
const ImpactCard = ({ data, index, variants }) => {
  const cardRef = useRef(null);
  const inView = useInView(cardRef, { once: true, amount: 0.3 });
  const [value, play] = useCountUp(data.number);

  // 1) count when the card scrolls into view
  useEffect(() => {
    if (inView) play(1900 + index * 220);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <motion.li
      ref={cardRef}
      className="ic__card"
      variants={variants}
      style={{ "--bg": data.bg, "--c": data.c }}
      // 2) count again every time the cursor enters the card
      onMouseEnter={() => play(1200)}
    >
      <span className="ic__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24">{data.icon}</svg>
      </span>

      <div className="ic__text">
        <p className="ic__number">
          {value.toLocaleString("en-IN")}
          <span className="ic__plus">+</span>
        </p>
        <p className="ic__label">{data.label}</p>
      </div>
    </motion.li>
  );
};

const css = `
@import url("https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,700&family=Figtree:wght@400;500;600;800&display=swap");

.ic {
  --navy: #0b2a5b;
  --muted: #5b6b82;

  padding: 56px 5%;
  background: #ffffff;
  color: var(--navy);
  font-family: "Figtree", system-ui, -apple-system, "Segoe UI", sans-serif;
}
.ic__inner { max-width: 1000px; margin: 0 auto; }

/* ---------- Heading ---------- */
.ic__head { max-width: 600px; margin: 0 auto 32px; text-align: center; }
.ic__title {
  margin: 0 0 8px;
  font-family: "Fraunces", Georgia, serif;
  font-size: clamp(26px, 3.4vw, 36px); font-weight: 700;
  line-height: 1.15; letter-spacing: -0.02em; text-wrap: balance;
}
.ic__lead { margin: 0 auto; max-width: 52ch; color: var(--muted); font-size: 15px; line-height: 1.6; }

/* ---------- Small cards ---------- */
.ic__grid {
  display: grid; grid-template-columns: repeat(4, 1fr);
  gap: 14px; margin: 0; padding: 0; list-style: none;
}
.ic__card {
  box-sizing: border-box; height: 100%;
  padding: 16px 16px;
  display: flex; align-items: center; gap: 14px;
  background: #fff;
  border: 1px solid #e8edf4;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(11,42,91,0.04);
  cursor: pointer;
  transition: transform .25s ease, box-shadow .25s ease, border-color .25s ease;
}
.ic__card:hover {
  transform: translateY(-3px);
  border-color: var(--c);
  box-shadow: 0 10px 22px color-mix(in srgb, var(--c) 18%, transparent);
}

.ic__icon {
  flex: none; display: grid; place-items: center;
  width: 44px; height: 44px;
  border-radius: 12px; background: var(--bg); color: var(--c);
  transition: background .25s ease, color .25s ease;
}
.ic__card:hover .ic__icon { background: var(--c); color: #fff; }
.ic__icon svg {
  width: 22px; height: 22px; fill: none; stroke: currentColor;
  stroke-width: 1.9; stroke-linecap: round; stroke-linejoin: round;
}

.ic__text { min-width: 0; }

.ic__number {
  margin: 0;
  font-size: clamp(26px, 2.8vw, 34px);
  font-weight: 800; line-height: 1.05;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  color: var(--navy);
  transition: color .25s ease;
}
.ic__card:hover .ic__number { color: var(--c); }
.ic__plus {
  margin-left: 1px;
  font-size: 0.7em; font-weight: 700;
  color: var(--c);
}

.ic__label {
  margin: 3px 0 0; font-size: 13px; font-weight: 500;
  line-height: 1.3; color: var(--muted);
}

/* ---------- Responsive ---------- */
@media (max-width: 900px) {
  .ic__grid { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 520px) {
  .ic { padding: 44px 5%; }
  .ic__grid { gap: 10px; }
  .ic__card { flex-direction: column; align-items: flex-start; gap: 10px; padding: 14px; }
  .ic__icon { width: 38px; height: 38px; border-radius: 10px; }
  .ic__icon svg { width: 19px; height: 19px; }
  .ic__number { font-size: 26px; }
  .ic__label { font-size: 12px; }
}
@media (prefers-reduced-motion: reduce) {
  .ic *, .ic *::before { transition: none !important; }
}
`;

const ImpactSection = () => {
  const reduce = useReducedMotion();

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.08 } },
  };
  const item = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  return (
    <section className="ic" aria-labelledby="ic-title">
      <style>{css}</style>

      <div className="ic__inner">
        <div className="ic__head">
          <h2 id="ic-title" className="ic__title">
            Creating measurable change
          </h2>
          <p className="ic__lead">
            Every number represents students, volunteers and communities
            moving toward a brighter future.
          </p>
        </div>

        <motion.ul
          className="ic__grid"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {impactData.map((d, index) => (
            <ImpactCard
              key={d.label}
              data={d}
              index={index}
              variants={item}
            />
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default ImpactSection;