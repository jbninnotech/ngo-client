import { motion } from "motion/react";

const styles = {
  section: {
    padding: "100px 6%",
    backgroundColor: "#ffffff",
  },

  container: {
    position: "relative",
    maxWidth: "1150px",
    margin: "auto",
    padding: "75px 7%",
    overflow: "hidden",
    textAlign: "center",
    background: "linear-gradient(135deg, #1F6A31 0%, #06275B 75%)",
    borderRadius: "28px",
    boxShadow: "0 25px 65px rgba(6,39,91,0.20)",
  },

  glow: {
    position: "absolute",
    top: "-140px",
    right: "-90px",
    width: "330px",
    height: "330px",
    borderRadius: "50%",
    backgroundColor: "rgba(218,165,50,0.18)",
    filter: "blur(12px)",
  },

  title: {
    position: "relative",
    zIndex: 2,
    maxWidth: "760px",
    margin: "0 auto 18px",
    color: "#ffffff",
    fontSize: "clamp(33px, 5vw, 51px)",
    lineHeight: "1.2",
  },

  text: {
    position: "relative",
    zIndex: 2,
    maxWidth: "680px",
    margin: "0 auto 31px",
    color: "#DDE8F2",
    fontSize: "16px",
    lineHeight: "1.8",
  },

  buttons: {
    position: "relative",
    zIndex: 2,
    display: "flex",
    justifyContent: "center",
    gap: "14px",
    flexWrap: "wrap",
  },

  donateButton: {
    padding: "15px 28px",
    color: "#ffffff",
    background: "linear-gradient(135deg, #DBA732, #AD700B)",
    borderRadius: "9px",
    textDecoration: "none",
    fontWeight: "800",
  },

  volunteerButton: {
    padding: "15px 28px",
    color: "#06275B",
    backgroundColor: "#ffffff",
    borderRadius: "9px",
    textDecoration: "none",
    fontWeight: "800",
  },
};

const HomeCTA = () => {
  return (
    <section style={styles.section}>
      <motion.div
        style={styles.container}
        initial={{ opacity: 0, y: 65, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          style={styles.glow}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <h2 style={styles.title}>
          Together, we can educate an entire generation.
        </h2>

        <p style={styles.text}>
          Your time, knowledge or contribution can help a student move
          closer to a brighter and more independent future.
        </p>

        <div style={styles.buttons}>
          <motion.a
            href="/donate"
            style={styles.donateButton}
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Donate Now
          </motion.a>

          <motion.a
            href="/volunteer"
            style={styles.volunteerButton}
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Become a Volunteer
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
};

export default HomeCTA;