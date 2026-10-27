import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "motion/react";

// const unsplash = (id) =>
//   `https://images.unsplash.com/${id}?auto=format&fit=crop&w=900&q=80`;

const programs = [
  {
    title: "Quality Education",
    tag: "Learning",
    eyebrow: "OUR PROGRAM",
    description:
      "Academic learning support, books and educational resources for students from underserved communities.",
    href: "/programs#education",
    image:
      "https://res.cloudinary.com/nemhlaod/image/upload/v1793096578/e34fed3f-4ef0-465c-873a-d05eb5a0c59a.png",
    icon: (
      <path d="M4 5.5A1.5 1.5 0 0 1 5.5 4H11v15H5.5A1.5 1.5 0 0 0 4 20.5v-15ZM20 5.5A1.5 1.5 0 0 0 18.5 4H13v15h5.5a1.5 1.5 0 0 1 1.5 1.5v-15Z" />
    ),
  },
  {
    title: "Digital Learning",
    tag: "Skills",
    eyebrow: "OUR PROGRAM",
    description:
      "Computer education, digital literacy, online safety and practical technology skills for students.",
    href: "/programs#digital",
    image:
      "https://res.cloudinary.com/yozeshlg/image/upload/v1793091626/WhatsApp_Image_2026-10-26_at_11.44.26_AM.jpg",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="12" rx="2" />
        <path d="M8 20h8M12 16v4" />
      </>
    ),
  },
  {
    title: "Student Scholarships",
    tag: "Support",
    eyebrow: "OUR PROGRAM",
    description:
      "Financial and academic support for deserving students who face challenges continuing their education.",
    href: "/programs#scholarships",
    image:
      "https://res.cloudinary.com/yozeshlg/image/upload/v1793091348/WhatsApp_Image_2026-10-26_at_11.44.18_AM.jpg",
    icon: (
      <>
        <path d="m2 9 10-5 10 5-10 5L2 9Z" />
        <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      </>
    ),
  },
  {
    title: "Career Guidance",
    tag: "Mentoring",
    eyebrow: "OUR PROGRAM",
    description:
      "Career mentoring, higher-education awareness and employability guidance for successful futures.",
    href: "/programs#careers",
    image:
      "https://res.cloudinary.com/nemhlaod/image/upload/v1793091084/d1f59632-b504-4e1a-a6fd-9116d59ea57d.png",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
      </>
    ),
  },
];

/* ---------- Ring settings ---------- */
const CARD_COUNT = 24; // cards around the ring (repeats your programs)
const STEP = 360 / CARD_COUNT;
const AUTO_SPEED = 6.5; // degrees per second  (bigger = faster rotation)
const AUTO_SPEED_REDUCED = 2; // used when the visitor prefers less motion

const getConfig = () => {
  const w = window.innerWidth;
  if (w <= 480) return { radius: 560, cardW: 190, cardH: 310 };
  if (w <= 768) return { radius: 700, cardW: 210, cardH: 335 };
  return { radius: 920, cardW: 230, cardH: 365 };
};

const css = `
@import url("https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@400;500;600;700&display=swap");

.pr, .pr * { box-sizing: border-box; }

.pr {
  --navy: #1f1b14;
  --gold: #f0cf83;
  position: relative; width: 100%; overflow: hidden;
  padding: 64px 0 48px;
  color: #2a251c;
  background:
    radial-gradient(ellipse at 50% 22%, rgba(220,190,128,.22), transparent 46%),
    linear-gradient(180deg, #fcfaf5 0%, #f5f0e5 62%, #ece6d8 100%);
  font-family: "DM Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  isolation: isolate;
}
.pr__inner { position: relative; z-index: 2; width: min(100% - 36px, 1240px); margin: 0 auto; }

/* ---------- Heading ---------- */
.pr__head { max-width: 800px; margin: 0 auto 28px; text-align: center; }
.pr__badge {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 9px 18px; margin-bottom: 18px;
  border: 1px solid rgba(184,138,59,.32); border-radius: 100px;
  background: rgba(255,255,255,.7); color: #705a35;
  font-size: 11px; font-weight: 800; letter-spacing: 1.6px; text-transform: uppercase;
  box-shadow: 0 5px 22px rgba(75,61,38,.06);
}
.pr__badge-icon {
  display: grid; width: 25px; height: 25px; place-items: center; border-radius: 50%;
  background: linear-gradient(135deg, #e5c77c, #a97b30); color: #fff; font-size: 14px;
}
.pr__title {
  margin: 0; color: #1f1b14;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(34px, 5vw, 60px); font-weight: 500;
  line-height: 1.12; letter-spacing: -1.2px; text-wrap: balance;
}
.pr__title em { color: #a57a35; font-style: italic; font-weight: 500; }
.pr__lead { max-width: 560px; margin: 16px auto 0; color: #6f7280; font-size: 16px; line-height: 1.75; }

/* ---------- 3D ring ---------- */
.pr__carousel {
  position: relative; width: 100%; height: 550px; margin: 8px auto 0;
  overflow: hidden;
  perspective: 1400px; perspective-origin: 50% 47%;
  touch-action: pan-y; user-select: none; -webkit-user-select: none;
  cursor: grab;
}
.pr__ring {
  position: absolute; top: 0; left: 50%; width: 0; height: 100%;
  transform-style: preserve-3d;
}

.pr__card {
  position: absolute; top: 260px; left: 0;
  width: var(--card-w); height: var(--card-h);
  margin: calc(var(--card-h) / -2) 0 0 calc(var(--card-w) / -2);
  overflow: hidden; display: block;
  border: 1px solid rgba(225,210,180,.95); border-radius: 24px;
  background-color: #2b261e;
  background-image: var(--img);
  background-size: cover; background-position: center;
  color: #fff; text-decoration: none;
  box-shadow: 0 20px 50px rgba(52,45,30,.22), inset 0 0 0 1px rgba(255,255,255,.25);
  backface-visibility: hidden; -webkit-backface-visibility: hidden;
  transform-style: preserve-3d;
  will-change: transform, opacity, filter;
}
.pr__card:focus-visible { outline: 3px solid #a57a35; outline-offset: 3px; }

.pr__shade {
  position: absolute; inset: 0; pointer-events: none;
  background: linear-gradient(180deg, rgba(16,14,8,.02) 15%, rgba(16,14,8,.06) 35%, rgba(14,12,8,.64) 68%, rgba(10,8,5,.95) 100%);
}

.pr__pill {
  position: absolute; top: 13px; left: 13px; z-index: 3;
  padding: 8px 12px; border: 1px solid rgba(255,255,255,.8); border-radius: 99px;
  background: rgba(255,253,246,.94); color: #2a251c;
  font-size: 11px; font-weight: 800;
  box-shadow: 0 4px 14px rgba(0,0,0,.1); backdrop-filter: blur(8px);
}

.pr__content { position: absolute; right: 0; bottom: 0; left: 0; z-index: 3; padding: 20px 17px 18px; }
.pr__eyebrow { display: block; margin-bottom: 10px; color: var(--gold); font-size: 9px; font-weight: 800; letter-spacing: 1.2px; }
.pr__name {
  margin: 0 0 8px; color: #fffdf6;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 25px; font-weight: 500; line-height: 1.15;
}
.pr__text {
  margin: 0; color: rgba(255,251,239,.84); font-size: 11.5px; line-height: 1.6;
  display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;
}
.pr__more {
  display: flex; align-items: center; justify-content: space-between;
  margin-top: 14px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,.22);
  color: #efd18e; font-size: 9px; font-weight: 800; letter-spacing: 1.3px;
}

.pr__hint {
  position: absolute; top: 14px; left: 50%; z-index: 5;
  display: flex; align-items: center; gap: 9px;
  max-width: calc(100% - 24px); padding: 10px 16px;
  border: 1px solid rgba(191,165,113,.28); border-radius: 100px;
  background: rgba(255,253,247,.85); color: #716346;
  font-size: 10px; font-weight: 800; letter-spacing: 1px; white-space: nowrap;
  transform: translateX(-50%);
  box-shadow: 0 5px 18px rgba(50,40,20,.06); backdrop-filter: blur(10px);
  pointer-events: none;
}
.pr__dot {
  width: 7px; height: 7px; flex-shrink: 0; border-radius: 50%;
  background: #a78647; box-shadow: 0 0 0 4px rgba(167,134,71,.12);
  animation: pr-pulse 1.8s ease-in-out infinite;
}
.pr__glow {
  position: absolute; bottom: 25px; left: 50%; width: min(80%, 720px); height: 55px;
  border-radius: 50%; background: rgba(155,122,64,.14); filter: blur(28px);
  transform: translateX(-50%); pointer-events: none;
}
.pr__floor {
  position: absolute; bottom: 5px; left: 50%; width: min(85%, 850px); height: 1px;
  background: linear-gradient(90deg, transparent, rgba(180,147,85,.4), transparent);
  transform: translateX(-50%); pointer-events: none;
}

/* ---------- CTA ---------- */
.pr__cta-row { margin-top: 22px; text-align: center; }
.pr__cta {
  display: inline-flex; align-items: center; gap: 10px;
  padding: 16px 34px; border-radius: 999px;
  background: var(--navy); color: #fff; text-decoration: none;
  font-weight: 700; font-size: 16px;
  box-shadow: 0 12px 26px rgba(31,27,20,.25);
  transition: background-color .2s ease, transform .2s ease;
}
.pr__cta:hover { background: #a57a35; transform: translateY(-2px); }
.pr__cta:focus-visible { outline: 3px solid #a57a35; outline-offset: 3px; }

@keyframes pr-pulse {
  0%, 100% { box-shadow: 0 0 0 4px rgba(167,134,71,.12); }
  50% { box-shadow: 0 0 0 7px rgba(167,134,71,.04); }
}

@media (max-width: 768px) {
  .pr { padding: 52px 0 40px; }
  .pr__carousel { height: 480px; }
  .pr__card { top: 225px; }
}
@media (max-width: 480px) {
  .pr__carousel { height: 430px; }
  .pr__card { top: 200px; }
  .pr__name { font-size: 21px; }
}
`;

const ProgramsPreview = () => {
  const reduce = useReducedMotion();
  const reduceRef = useRef(false);
  reduceRef.current = !!reduce;

  const carouselRef = useRef(null);
  const ringRef = useRef(null);

  const phase = useRef(0);
  const velocity = useRef(0);
  const pending = useRef(false);
  const dragging = useRef(false);
  const startX = useRef(0);
  const lastX = useRef(0);
  const lastT = useRef(0);
  const suppressClick = useRef(false);

  useEffect(() => {
    const ring = ringRef.current;
    const box = carouselRef.current;
    if (!ring || !box) return;

    const cards = Array.from(ring.querySelectorAll(".pr__card"));
    let visible = true;
    let raf;
    let last = performance.now();

    const render = () => {
      const { radius, cardW, cardH } = getConfig();
      box.style.setProperty("--card-w", `${cardW}px`);
      box.style.setProperty("--card-h", `${cardH}px`);

      cards.forEach((card, i) => {
        const angle = ((i * STEP + phase.current + 540) % 360) - 180;
        const rad = (angle * Math.PI) / 180;
        const cos = Math.cos(rad);
        const sin = Math.sin(rad);
        const depth = Math.max(0, (cos + 1) / 2);
        const off = Math.abs(angle) > 82;

        card.style.transform = `translate3d(${(-radius * sin).toFixed(2)}px, ${(
          (1 - cos) *
          20
        ).toFixed(2)}px, ${(radius * (cos - 1)).toFixed(
          2
        )}px) rotateY(${-angle}deg)`;
        card.style.opacity = off ? "0" : String(0.38 + depth * 0.62);
        card.style.zIndex = String(Math.round((cos + 1) * 100));
        card.style.filter = `brightness(${0.68 + depth * 0.32})`;
        card.style.pointerEvents = Math.abs(angle) < 65 ? "auto" : "none";
        card.style.visibility = off ? "hidden" : "visible";
      });
    };

    const tick = (now) => {
      const delta = Math.min((now - last) / 1000, 0.04);
      last = now;

      if (visible) {
        if (!dragging.current) {
          if (Math.abs(velocity.current) > 0.08) {
            // coast after a flick
            phase.current += velocity.current * delta * 60;
            velocity.current *= Math.pow(0.94, delta * 60);
          } else {
            // endless automatic rotation
            phase.current -=
              (reduceRef.current ? AUTO_SPEED_REDUCED : AUTO_SPEED) * delta;
          }
        }
        phase.current = ((phase.current % 360) + 360) % 360;
        render();
      }
      raf = requestAnimationFrame(tick);
    };

    // stop doing work while the section is off-screen
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        last = performance.now();
      },
      { threshold: 0 }
    );
    io.observe(box);

    render();
    raf = requestAnimationFrame(tick);
    window.addEventListener("resize", render);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", render);
    };
  }, []);

  /* ----- drag / swipe (capture only starts after a real drag, so clicks still work) ----- */
  const onPointerDown = (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    pending.current = true;
    dragging.current = false;
    startX.current = lastX.current = e.clientX;
    lastT.current = performance.now();
  };

  const onPointerMove = (e) => {
    if (!pending.current) return;
    const box = carouselRef.current;

    if (!dragging.current && Math.abs(e.clientX - startX.current) > 6) {
      dragging.current = true;
      velocity.current = 0;
      box?.setPointerCapture?.(e.pointerId);
      if (box) box.style.cursor = "grabbing";
    }
    if (!dragging.current) return;

    const now = performance.now();
    const dx = e.clientX - lastX.current;
    const dt = Math.max(now - lastT.current, 1);
    lastX.current = e.clientX;
    lastT.current = now;

    phase.current += dx * 0.42;
    velocity.current = Math.max(-2.5, Math.min(2.5, (dx / dt) * 0.7));
  };

  const endDrag = () => {
    pending.current = false;
    if (dragging.current) {
      dragging.current = false;
      suppressClick.current = true;
      setTimeout(() => (suppressClick.current = false), 60);
    }
    if (carouselRef.current) carouselRef.current.style.cursor = "grab";
  };

  const onClickCapture = (e) => {
    if (suppressClick.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <section className="pr" aria-labelledby="pr-title">
      <style>{css}</style>

      <div className="pr__inner">
        <motion.header
          className="pr__head"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="pr__badge">
            <span className="pr__badge-icon">✦</span>
            Learn &amp; Grow With Us
          </span>
          <h2 id="pr-title" className="pr__title">
            Learning opportunities that <em>transform futures.</em>
          </h2>
          <p className="pr__lead">
            Our programs give every student knowledge, confidence and practical
            skills to move toward a brighter, more independent future.
          </p>
        </motion.header>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div
            ref={carouselRef}
            className="pr__carousel"
            aria-roledescription="carousel"
            aria-label="Our programs"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
          >
            <div className="pr__hint">
              <span className="pr__dot" />
              Learning for every child · Drag to explore
            </div>

            <div className="pr__glow" />

            <div ref={ringRef} className="pr__ring">
              {Array.from({ length: CARD_COUNT }, (_, i) => {
                const p = programs[i % programs.length];
                const dup = i >= programs.length;
                return (
                  <a
                    key={i}
                    className="pr__card"
                    href={p.href}
                    draggable={false}
                    tabIndex={dup ? -1 : 0}
                    aria-hidden={dup || undefined}
                    style={{ "--img": `url(${p.image})` }}
                  >
                    <span className="pr__shade" />
                    <span className="pr__pill">{p.tag}</span>
                    <span className="pr__content">
                      <span className="pr__eyebrow">{p.eyebrow}</span>
                      <h3 className="pr__name">{p.title}</h3>
                      <p className="pr__text">{p.description}</p>
                      <span className="pr__more">
                        LEARN MORE <span aria-hidden="true">↗</span>
                      </span>
                    </span>
                  </a>
                );
              })}
            </div>

            <div className="pr__floor" />
          </div>
        </motion.div>

        <div className="pr__cta-row">
          <a className="pr__cta" href="/programs">
            View all programs <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;
