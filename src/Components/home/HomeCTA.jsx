import { motion } from "motion/react";
// import ctaPhoto from "../../assets/school.jpeg";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const ctaPhoto =
  "https://res.cloudinary.com/yozeshlg/image/upload/v1793168172/Gemini_Generated_Image_u4rm96u4rm96u4rm.png";
const chips = [
  {
    icon: "🎓",
    number: "1,500+",
    label: "Students supported",
    top: "6%",
    left: "-14%",
    delay: 0,
  },
  {
    icon: "🤝",
    number: "25+",
    label: "Communities reached",
    top: "74%",
    left: "-8%",
    delay: 0.8,
  },
  {
    icon: "⭐",
    number: "10+",
    label: "Years of service",
    top: "40%",
    left: "52%",
    delay: 1.6,
  },
];

const styles = {
  section: {
    position: "relative",
    overflow: "hidden",
    padding: "90px 5%",
    background:
      "radial-gradient(120% 120% at 0% 0%, #0E4DA8 0%, #0A3A82 40%, #051F4A 100%)",
  },

  card: {
    position: "relative",
    zIndex: 2,
    maxWidth: "1020px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    alignItems: "center",
    gap: "50px",
  },

  grid: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
    backgroundSize: "44px 44px",
    maskImage: "radial-gradient(ellipse at center, black 20%, transparent 75%)",
    WebkitMaskImage:
      "radial-gradient(ellipse at center, black 20%, transparent 75%)",
    pointerEvents: "none",
  },

  glowGold: {
    position: "absolute",
    top: "-120px",
    right: "-80px",
    width: "340px",
    height: "340px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,200,0,0.35) 0%, rgba(255,200,0,0) 70%)",
    pointerEvents: "none",
  },

  glowBlue: {
    position: "absolute",
    bottom: "-140px",
    left: "-80px",
    width: "320px",
    height: "320px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(90,150,255,0.35) 0%, rgba(90,150,255,0) 70%)",
    pointerEvents: "none",
  },

  left: { position: "relative", zIndex: 2 },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    margin: "0 0 16px",
    padding: "7px 16px",
    color: "#FFD16B",
    backgroundColor: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.20)",
    borderRadius: "999px",
    fontSize: "11.5px",
    fontWeight: "800",
    letterSpacing: "1.8px",
  },

  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "#FFC800",
  },

  title: {
    margin: "0 0 16px",
    color: "#ffffff",
    fontSize: "clamp(30px, 4.4vw, 46px)",
    fontWeight: "900",
    lineHeight: "1.12",
    letterSpacing: "-1px",
  },

  highlight: {
    background: "linear-gradient(90deg, #FFD84D, #FFA64D, #FFD84D)",
    backgroundSize: "200% auto",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: "ctaGradient 5s linear infinite",
  },

  text: {
    maxWidth: "440px",
    margin: "0 0 28px",
    color: "rgba(255,255,255,0.82)",
    fontSize: "15.5px",
    lineHeight: "1.75",
  },

  buttons: { display: "flex", flexWrap: "wrap", gap: "12px" },

  donateButton: {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 28px",
    color: "#10213B",
    background: "linear-gradient(135deg, #FFD84D 0%, #FFB800 100%)",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "800",
    boxShadow: "0 10px 26px rgba(255,184,0,0.45)",
  },

  shine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "40px",
    height: "100%",
    background:
      "linear-gradient(100deg, transparent, rgba(255,255,255,0.65), transparent)",
    pointerEvents: "none",
  },

  volunteerButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    padding: "14px 28px",
    color: "#ffffff",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "2px solid rgba(255,255,255,0.45)",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "15px",
    fontWeight: "800",
  },

  note: {
    marginTop: "20px",
    color: "rgba(255,255,255,0.65)",
    fontSize: "13px",
  },

  right: {
    position: "relative",
    zIndex: 2,
    height: "340px",
    minWidth: "260px",
    borderRadius: "22px",
    boxShadow: "0 24px 50px rgba(0,0,0,0.35)",
    border: "3px solid rgba(255,255,255,0.25)",
  },
  photoClip: {
    position: "absolute",
    inset: 0,
    overflow: "hidden",
    borderRadius: "19px",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center top",
    display: "block",
  },
  photoShade: {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(180deg, rgba(5,31,74,0) 45%, rgba(5,31,74,0.75) 100%)",
  },

  chip: {
    position: "absolute",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "14px 20px 14px 14px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    border: "1px solid rgba(255,255,255,0.22)",
    borderRadius: "18px",
    boxShadow: "0 18px 40px rgba(0,0,0,0.28)",
  },
  chipIcon: {
    width: "44px",
    height: "44px",
    display: "grid",
    placeItems: "center",
    fontSize: "22px",
    borderRadius: "14px",
    background: "linear-gradient(135deg, #FFD84D, #FFB800)",
  },
  chipNumber: {
    margin: 0,
    color: "#fff",
    fontSize: "22px",
    fontWeight: "800",
    lineHeight: 1.1,
  },
  chipLabel: { margin: 0, color: "rgba(255,255,255,0.75)", fontSize: "12.5px" },
};

const HomeCTA = () => {
  return (
    <section style={styles.section}>
      <style>{`
        @keyframes ctaGradient { to { background-position: 200% center; } }
        @media (max-width: 700px) {
          .cta-right { order: -1; width: 100%; height: 230px !important; min-width: 0 !important; }
          .cta-chip { display: none !important; }
        }
        @media (prefers-reduced-motion: reduce) { * { animation: none !important; } }
      `}</style>

      {/* background decoration covers the whole section */}
      <div style={styles.grid} />
      <motion.div
        style={styles.glowGold}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={styles.glowBlue}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left: message */}
        <motion.div
          style={styles.left}
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span variants={item} style={styles.badge}>
            <motion.span
              style={styles.dot}
              animate={{
                boxShadow: [
                  "0 0 0 0 rgba(255,200,0,0.7)",
                  "0 0 0 9px rgba(255,200,0,0)",
                ],
              }}
              transition={{ duration: 1.8, repeat: Infinity }}
            />
            JOIN OUR MISSION
          </motion.span>

          <motion.h2 variants={item} style={styles.title}>
            Help a child{" "}
            <span style={styles.highlight}>learn, grow and dream.</span>
          </motion.h2>

          <motion.p variants={item} style={styles.text}>
            Your donation or your time can give a child the education they
            deserve. Every small step brings a brighter tomorrow.
          </motion.p>

          <motion.div variants={item} style={styles.buttons}>
            <motion.a
              href="/donate"
              style={styles.donateButton}
              whileHover={{ y: -4, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                style={styles.shine}
                animate={{ x: ["-120%", "520%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  ease: "easeInOut",
                }}
              />
              <span style={{ position: "relative" }}>♡ Donate Now</span>
              <motion.span
                style={{ position: "relative" }}
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity }}
              >
                →
              </motion.span>
            </motion.a>

            <motion.a
              href="/volunteer"
              style={styles.volunteerButton}
              whileHover={{
                y: -4,
                scale: 1.05,
                backgroundColor: "#ffffff",
                color: "#06275B",
                borderColor: "#ffffff",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Become a Volunteer
            </motion.a>
          </motion.div>

          <motion.p variants={item} style={styles.note}>
            ✓ Every contribution goes toward student education.
          </motion.p>
        </motion.div>

        {/* Right: floating impact cards */}
        <div style={styles.right} className="cta-right">
          <div style={styles.photoClip}>
            <motion.img
              src={ctaPhoto}
              alt="Children learning"
              style={styles.photo}
              draggable={false}
              initial={{ scale: 1.15 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />
            <div style={styles.photoShade} />
          </div>
          {chips.map((c) => (
            <motion.div
              key={c.label}
              className="cta-chip"
              style={{ ...styles.chip, top: c.top, left: c.left }}
              initial={{ opacity: 0, scale: 0.7 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: 0.4 + c.delay * 0.4,
                type: "spring",
                stiffness: 160,
                damping: 14,
              }}
            >
              <motion.div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  delay: c.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <span style={styles.chipIcon}>{c.icon}</span>
                <div>
                  <p style={styles.chipNumber}>{c.number}</p>
                  <p style={styles.chipLabel}>{c.label}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;
