import { motion } from "motion/react";

const HeroSection = () => {
  const styles = {
    hero: {
      position: "relative",
      minHeight: "570px",
      padding: "175px 6% 100px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      isolation: "isolate",
      backgroundColor: "#031B42",
    },

    videoBackground: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center",
      zIndex: -2,
      pointerEvents: "none",
    },

    videoOverlay: {
      position: "absolute",
      inset: 0,
      zIndex: -1,
      background:
        "linear-gradient(90deg, rgba(3, 20, 52, 0.92) 0%, rgba(3, 27, 66, 0.78) 50%, rgba(3, 27, 66, 0.58) 100%)",
      pointerEvents: "none",
    },

    glowOne: {
      position: "absolute",
      top: "-180px",
      right: "-100px",
      width: "470px",
      height: "470px",
      borderRadius: "50%",
      backgroundColor: "rgba(218,165,50,0.12)",
      filter: "blur(25px)",
      zIndex: 0,
      pointerEvents: "none",
    },

    glowTwo: {
      position: "absolute",
      bottom: "-230px",
      left: "-140px",
      width: "470px",
      height: "470px",
      borderRadius: "50%",
      backgroundColor: "rgba(46,125,50,0.14)",
      filter: "blur(30px)",
      zIndex: 0,
      pointerEvents: "none",
    },

    container: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1250px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(310px, 1fr))",
      alignItems: "center",
      gap: "60px",
    },

    content: {
      maxWidth: "650px",
    },

    badge: {
      display: "inline-block",
      marginBottom: "20px",
      padding: "9px 18px",
      color: "#F1C25B",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(241,194,91,0.38)",
      borderRadius: "30px",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    title: {
      margin: "0 0 22px",
      color: "#FFFFFF",
      fontSize: "clamp(42px, 6vw, 68px)",
      lineHeight: "1.1",
      fontWeight: "800",
    },

    goldText: {
      color: "#E0AA34",
    },

    description: {
      margin: "0 0 31px",
      color: "#E0E8F4",
      fontSize: "17px",
      lineHeight: "1.85",
    },

    buttons: {
      display: "flex",
      gap: "14px",
      flexWrap: "wrap",
    },

    primaryButton: {
      padding: "14px 25px",
      color: "#06275B",
      background:
        "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "800",
    },

    secondaryButton: {
      padding: "14px 25px",
      color: "#FFFFFF",
      backgroundColor: "rgba(255,255,255,0.09)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "750",
    },

    imageWrapper: {
      position: "relative",
      padding: "14px",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.17)",
      borderRadius: "28px",
      boxShadow: "0 30px 70px rgba(0,0,0,0.28)",
      backdropFilter: "blur(5px)",
      WebkitBackdropFilter: "blur(5px)",
    },

    image: {
      display: "block",
      width: "100%",
      height: "420px",
      objectFit: "cover",
      borderRadius: "20px",
    },

    floatingCard: {
      position: "absolute",
      right: "28px",
      bottom: "28px",
      maxWidth: "240px",
      padding: "18px 21px",
      color: "#06275B",
      backgroundColor: "#FFFFFF",
      borderRadius: "14px",
      boxShadow: "0 16px 38px rgba(0,0,0,0.22)",
    },

    cardNumber: {
      margin: "0 0 4px",
      color: "#2E7D32",
      fontSize: "29px",
      fontWeight: "900",
    },

    cardText: {
      margin: 0,
      color: "#64758A",
      fontSize: "12px",
      fontWeight: "700",
    },
  };

  return (
    <section style={styles.hero}>
      {/* Full background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
        style={styles.videoBackground}
      >
        <source
          src="https://res.cloudinary.com/nemhlaod/video/upload/v1793095538/184828-874264394_medium.mp4"
          type="video/mp4"
        />
        Your browser does not support background video.
      </video>

      {/* Dark overlay to keep text readable */}
      <div style={styles.videoOverlay} />

      {/* Animated background glow effects */}
      <motion.div
        style={styles.glowOne}
        animate={{
          scale: [1, 1.22, 1],
          x: [0, -35, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={styles.glowTwo}
        animate={{
          scale: [1, 1.18, 1],
          y: [0, -35, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Hero content */}
      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={styles.badge}>
            ABOUT BLANCO
          </span>

          <h1 style={styles.title}>
            Education should be an{" "}
            <span style={styles.goldText}>
              opportunity for everyone.
            </span>
          </h1>

          <p style={styles.description}>
            Blanco Educational Academy is an education-focused NGO
            working to empower underserved students through quality
            learning, scholarships, digital education, mentoring
            and skill-development programs.
          </p>

          <div style={styles.buttons}>
            <motion.a
              href="/programs"
              style={styles.primaryButton}
              whileHover={{ y: -5, scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Explore Our Programs →
            </motion.a>

            <motion.a
              href="/volunteer"
              style={styles.secondaryButton}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(255,255,255,0.16)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              Join Our Mission
            </motion.a>
          </div>
        </motion.div>

        {/* Classroom image and student counter */}
        <motion.div
          style={styles.imageWrapper}
          initial={{
            opacity: 0,
            x: 60,
            scale: 0.94,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.85,
            delay: 0.15,
          }}
        >
          <img
            src="https://res.cloudinary.com/nemhlaod/image/upload/v1793100098/9a774f98-ce85-4f5c-984e-f8dd4e052848.png"
            alt="Students learning together"
            style={styles.image}
          />

          <motion.div
            style={styles.floatingCard}
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p style={styles.cardNumber}>1,500+</p>

            <p style={styles.cardText}>
              Students supported through education
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;