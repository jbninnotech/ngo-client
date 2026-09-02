import { motion } from "motion/react";

const HeroSection = () => {
  const styles = {
    hero: {
      position: "relative",
      minHeight: "720px",
      display: "flex",
      alignItems: "center",
      padding: "175px 6% 95px",
      overflow: "hidden",
      background:
        "linear-gradient(135deg, #031B42 0%, #06275B 55%, #12452B 100%)",
    },

    glowOne: {
      position: "absolute",
      top: "-180px",
      right: "-120px",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      backgroundColor: "rgba(216, 163, 47, 0.14)",
      filter: "blur(20px)",
    },

    glowTwo: {
      position: "absolute",
      bottom: "-200px",
      left: "-150px",
      width: "450px",
      height: "450px",
      borderRadius: "50%",
      backgroundColor: "rgba(54, 145, 55, 0.18)",
      filter: "blur(25px)",
    },

    container: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1250px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(310px, 1fr))",
      alignItems: "center",
      gap: "60px",
    },

    content: {
      maxWidth: "680px",
    },

    badge: {
      display: "inline-block",
      padding: "10px 19px",
      marginBottom: "23px",
      color: "#F4C65D",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(244,198,93,0.40)",
      borderRadius: "30px",
      fontSize: "13px",
      fontWeight: "800",
      letterSpacing: "1.4px",
    },

    title: {
      margin: 0,
      color: "#FFFFFF",
      fontSize: "clamp(43px, 6vw, 76px)",
      lineHeight: "1.08",
      letterSpacing: "-2px",
    },

    highlightedText: {
      color: "#E0AA34",
    },

    description: {
      maxWidth: "650px",
      margin: "25px 0 34px",
      color: "#DDE7F5",
      fontSize: "18px",
      lineHeight: "1.8",
    },

    buttons: {
      display: "flex",
      gap: "15px",
      flexWrap: "wrap",
    },

    primaryButton: {
      padding: "15px 27px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #D9A532, #AE710C)",
      borderRadius: "9px",
      textDecoration: "none",
      fontWeight: "750",
      boxShadow:
        "0 12px 30px rgba(218, 165, 50, 0.25)",
    },

    secondaryButton: {
      padding: "15px 27px",
      color: "#FFFFFF",
      backgroundColor: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.30)",
      borderRadius: "9px",
      textDecoration: "none",
      fontWeight: "700",
      backdropFilter: "blur(8px)",
    },

    imageWrapper: {
      position: "relative",
      padding: "17px",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.18)",
      borderRadius: "31px",
      backdropFilter: "blur(12px)",
      boxShadow: "0 30px 60px rgba(0,0,0,0.28)",
    },

    image: {
      display: "block",
      width: "100%",
      height: "480px",
      objectFit: "cover",
      objectPosition: "center",
      borderRadius: "23px",
    },

    floatingCard: {
      position: "absolute",
      left: "25px",
      bottom: "25px",
      width: "210px",
      maxWidth: "calc(100% - 50px)",
      padding: "17px 20px",
      color: "#06275B",
      backgroundColor: "#FFFFFF",
      borderRadius: "14px",
      boxShadow: "0 15px 40px rgba(0,0,0,0.22)",
    },

    cardNumber: {
      margin: 0,
      color: "#2E7D32",
      fontSize: "27px",
      fontWeight: "800",
    },

    cardText: {
      margin: "3px 0 0",
      color: "#607086",
      fontSize: "13px",
      fontWeight: "600",
    },
  };

  return (
    <section id="home" style={styles.hero}>
      <motion.div
        style={styles.glowOne}
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

      <motion.div
        style={styles.glowTwo}
        animate={{
          scale: [1, 1.15, 1],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div style={styles.container}>
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
        >
          <motion.span
            style={styles.badge}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
          >
            BLANCO EDUCATIONAL ACADEMY
          </motion.span>

          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.2,
              duration: 0.75,
            }}
          >
            Educating minds.
            <br />

            <span style={styles.highlightedText}>
              Elevating futures.
            </span>
          </motion.h1>

          <motion.p
            style={styles.description}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.4,
              duration: 0.7,
            }}
          >
            We empower underserved students through quality
            education, scholarships, digital learning, mentoring
            and career-development programs.
          </motion.p>

          <motion.div
            style={styles.buttons}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#donate"
              style={styles.primaryButton}
              whileHover={{
                y: -5,
                scale: 1.04,
              }}
              whileTap={{ scale: 0.96 }}
            >
              Support Our Mission
            </motion.a>

            <motion.a
              href="#programs"
              style={styles.secondaryButton}
              whileHover={{
                y: -5,
                backgroundColor:
                  "rgba(255,255,255,0.18)",
              }}
              whileTap={{ scale: 0.96 }}
            >
              Explore Programs →
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          style={styles.imageWrapper}
          initial={{
            opacity: 0,
            x: 70,
            scale: 0.92,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          whileHover={{
            scale: 1.015,
          }}
        >
          <motion.img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85"
            alt="Students receiving education"
            style={styles.image}
            animate={{
              y: [0, -7, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            style={styles.floatingCard}
            animate={{
              y: [0, -9, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p style={styles.cardNumber}>1,500+</p>

            <p style={styles.cardText}>
              Students Empowered
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;