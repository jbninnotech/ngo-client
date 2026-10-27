import { motion } from "motion/react";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const styles = {
  section: {
    padding: "40px 5%",
    backgroundColor: "#ffffff",
  },

  card: {
    position: "relative",
    maxWidth: "720px",
    margin: "0 auto",
    padding: "36px 6% 34px",
    overflow: "hidden",
    textAlign: "center",
    background:
      "radial-gradient(120% 120% at 0% 0%, #0E4DA8 0%, #0A3A82 40%, #051F4A 100%)",
    borderRadius: "22px",
    border: "1px solid rgba(255,255,255,0.08)",
    boxShadow:
      "0 16px 40px rgba(6,39,91,0.28), inset 0 1px 0 rgba(255,255,255,0.12)",
  },

  dots: {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
    backgroundSize: "20px 20px",
    maskImage: "radial-gradient(ellipse at center, black 25%, transparent 75%)",
    WebkitMaskImage:
      "radial-gradient(ellipse at center, black 25%, transparent 75%)",
    pointerEvents: "none",
  },

  glow: {
    position: "absolute",
    top: "-90px",
    right: "-60px",
    width: "240px",
    height: "240px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,200,0,0.32) 0%, rgba(255,200,0,0) 70%)",
    pointerEvents: "none",
  },

  inner: {
    position: "relative",
    zIndex: 2,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    margin: "0 0 12px",
    padding: "6px 14px",
    color: "#FFD16B",
    backgroundColor: "rgba(255,255,255,0.10)",
    border: "1px solid rgba(255,255,255,0.20)",
    borderRadius: "999px",
    fontSize: "11px",
    fontWeight: "800",
    letterSpacing: "1.6px",
  },

  dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: "#FFC800",
  },

  title: {
    margin: "0 auto 10px",
    color: "#ffffff",
    fontSize: "clamp(22px, 3.6vw, 30px)",
    fontWeight: "800",
    lineHeight: "1.25",
  },

  highlight: {
    background: "linear-gradient(90deg, #FFD84D 0%, #FFA64D 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
  },

  text: {
    maxWidth: "460px",
    margin: "0 auto 22px",
    color: "rgba(255,255,255,0.82)",
    fontSize: "14px",
    lineHeight: "1.65",
  },

  buttons: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
  },

  donateButton: {
    position: "relative",
    overflow: "hidden",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    padding: "11px 24px",
    color: "#10213B",
    background: "linear-gradient(135deg, #FFD84D 0%, #FFB800 100%)",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "800",
    boxShadow: "0 8px 20px rgba(255,184,0,0.4)",
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
    padding: "11px 24px",
    color: "#ffffff",
    backgroundColor: "rgba(255,255,255,0.06)",
    border: "2px solid rgba(255,255,255,0.5)",
    borderRadius: "999px",
    textDecoration: "none",
    fontSize: "14px",
    fontWeight: "800",
  },
};

const HomeCTA = () => {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.card}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <div style={styles.dots} />
        <motion.div
          style={styles.glow}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          style={styles.inner}
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
                  "0 0 0 8px rgba(255,200,0,0)",
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
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.span
                style={styles.shine}
                animate={{ x: ["-120%", "480%"] }}
                transition={{
                  duration: 2.2,
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  ease: "easeInOut",
                }}
              />
              <span style={{ position: "relative" }}>♡ Donate Now</span>
            </motion.a>

            <motion.a
              href="/volunteer"
              style={styles.volunteerButton}
              whileHover={{
                y: -3,
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
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;