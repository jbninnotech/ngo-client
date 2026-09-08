import { motion } from "motion/react";

const achievements = [
  {
    number: "10+",
    label: "Years of Service",
  },
  {
    number: "25+",
    label: "Communities Reached",
  },
  {
    number: "1,500+",
    label: "Students Supported",
  },
];

const FounderSection = () => {
  const styles = {
    section: {
      position: "relative",
      padding: "110px 6%",
      overflow: "hidden",
      background:
        "linear-gradient(145deg, #FFFFFF 0%, #F5F8FC 48%, #F8F1E2 100%)",
    },

    backgroundPattern: {
      position: "absolute",
      inset: 0,
      opacity: 0.25,
      backgroundImage:
        "radial-gradient(#AFC1D9 1px, transparent 1px)",
      backgroundSize: "29px 29px",
    },

    goldGlow: {
      position: "absolute",
      top: "-160px",
      right: "-120px",
      width: "430px",
      height: "430px",
      borderRadius: "50%",
      backgroundColor: "rgba(224,170,52,0.16)",
      filter: "blur(35px)",
    },

    greenGlow: {
      position: "absolute",
      bottom: "-190px",
      left: "-150px",
      width: "440px",
      height: "440px",
      borderRadius: "50%",
      backgroundColor: "rgba(46,125,50,0.13)",
      filter: "blur(38px)",
    },

    container: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(320px, 1fr))",
      alignItems: "center",
      gap: "80px",
    },

    imageColumn: {
      position: "relative",
      width: "100%",
      maxWidth: "480px",
      minHeight: "580px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },

    outerCircle: {
      position: "absolute",
      width: "450px",
      maxWidth: "94%",
      aspectRatio: "1",
      border: "1px solid rgba(6,39,91,0.17)",
      borderRadius: "50%",
    },

    middleCircle: {
      position: "absolute",
      width: "385px",
      maxWidth: "82%",
      aspectRatio: "1",
      border: "1px dashed rgba(196,137,22,0.55)",
      borderRadius: "50%",
    },

    portraitFrame: {
      position: "relative",
      zIndex: 3,
      width: "330px",
      maxWidth: "72%",
      height: "445px",
      padding: "9px",
      overflow: "hidden",
      background:
        "linear-gradient(145deg, #FFFFFF, #E7EDF5)",
      border: "1px solid rgba(6,39,91,0.12)",
      borderRadius: "165px 165px 28px 28px",
      boxShadow: "0 30px 75px rgba(6,39,91,0.22)",
    },

    portrait: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      borderRadius: "156px 156px 22px 22px",
    },

    imageOverlay: {
      position: "absolute",
      inset: "9px",
      zIndex: 2,
      background:
        "linear-gradient(180deg, transparent 60%, rgba(3,27,66,0.45) 100%)",
      borderRadius: "156px 156px 22px 22px",
      pointerEvents: "none",
    },

    floatingIcon: {
      position: "absolute",
      zIndex: 5,
      width: "62px",
      height: "62px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(255,255,255,0.94)",
      border: "1px solid rgba(6,39,91,0.12)",
      borderRadius: "18px",
      boxShadow: "0 15px 35px rgba(6,39,91,0.16)",
      fontSize: "27px",
      backdropFilter: "blur(10px)",
    },

    founderBadge: {
      position: "absolute",
      zIndex: 6,
      right: "4px",
      bottom: "50px",
      maxWidth: "190px",
      padding: "17px 20px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #236D35 0%, #06275B 100%)",
      border: "4px solid #FFFFFF",
      borderRadius: "16px",
      boxShadow: "0 18px 42px rgba(6,39,91,0.25)",
    },

    founderBadgeTitle: {
      margin: "0 0 4px",
      color: "#F3C55F",
      fontSize: "17px",
      fontWeight: "900",
    },

    founderBadgeText: {
      margin: 0,
      color: "#E0E9F2",
      fontSize: "11px",
      fontWeight: "650",
      lineHeight: "1.5",
    },

    content: {
      position: "relative",
      maxWidth: "600px",
    },

    label: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      marginBottom: "17px",
      padding: "8px 17px",
      color: "#2E7D32",
      backgroundColor: "#EAF4EB",
      border: "1px solid #CDE3CF",
      borderRadius: "30px",
      fontSize: "11px",
      fontWeight: "850",
      letterSpacing: "1.7px",
    },

    labelDot: {
      width: "7px",
      height: "7px",
      backgroundColor: "#C58A16",
      borderRadius: "50%",
      boxShadow: "0 0 10px rgba(197,138,22,0.65)",
    },

    title: {
      margin: "0 0 9px",
      color: "#06275B",
      fontSize: "clamp(35px, 5vw, 52px)",
      lineHeight: "1.15",
      letterSpacing: "-1px",
    },

    founderName: {
      color: "#C58A16",
    },

    designation: {
      margin: "0 0 25px",
      color: "#2E7D32",
      fontSize: "15px",
      fontWeight: "800",
      letterSpacing: "0.4px",
    },

    quoteBox: {
      position: "relative",
      margin: "0 0 25px",
      padding: "24px 25px 24px 30px",
      overflow: "hidden",
      color: "#15365F",
      backgroundColor: "rgba(255,255,255,0.88)",
      border: "1px solid #DEE7F1",
      borderLeft: "4px solid #D6A02E",
      borderRadius: "0 16px 16px 0",
      boxShadow: "0 14px 38px rgba(6,39,91,0.08)",
      fontSize: "17px",
      fontWeight: "750",
      fontStyle: "italic",
      lineHeight: "1.75",
    },

    quotationMark: {
      position: "absolute",
      top: "-20px",
      right: "15px",
      color: "rgba(197,138,22,0.10)",
      fontSize: "110px",
      fontFamily: "serif",
      fontWeight: "900",
      lineHeight: 1,
    },

    text: {
      margin: "0 0 17px",
      color: "#66778C",
      fontSize: "15px",
      lineHeight: "1.85",
    },

    statsGrid: {
      marginTop: "30px",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(125px, 1fr))",
      gap: "13px",
    },

    statCard: {
      padding: "17px 13px",
      textAlign: "center",
      backgroundColor: "rgba(255,255,255,0.88)",
      border: "1px solid #DDE6F0",
      borderRadius: "13px",
      boxShadow: "0 10px 28px rgba(6,39,91,0.07)",
    },

    statNumber: {
      margin: "0 0 4px",
      color: "#C58A16",
      fontSize: "21px",
      fontWeight: "900",
    },

    statLabel: {
      margin: 0,
      color: "#17365F",
      fontSize: "10px",
      fontWeight: "750",
      lineHeight: "1.4",
    },

    signatureArea: {
      marginTop: "28px",
      display: "flex",
      alignItems: "center",
      gap: "14px",
    },

    signatureLine: {
      width: "45px",
      height: "2px",
      background:
        "linear-gradient(90deg, #C58A16, #2E7D32)",
    },

    signatureText: {
      margin: 0,
      color: "#06275B",
      fontSize: "13px",
      fontWeight: "850",
      letterSpacing: "1px",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.backgroundPattern} />

      <motion.div
        style={styles.goldGlow}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -35, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        style={styles.greenGlow}
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

      <div style={styles.container}>
        {/* Founder portrait */}
        <motion.div
          style={styles.imageColumn}
          initial={{
            opacity: 0,
            x: -70,
            scale: 0.94,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
        >
          <motion.div
            style={styles.outerCircle}
            animate={{ rotate: 360 }}
            transition={{
              duration: 28,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            style={styles.middleCircle}
            animate={{ rotate: -360 }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          <motion.div
            style={{
              ...styles.floatingIcon,
              top: "65px",
              left: "4px",
            }}
            animate={{
              y: [0, -13, 0],
              rotate: [0, -6, 0],
            }}
            transition={{
              duration: 3.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            📚
          </motion.div>

          <motion.div
            style={{
              ...styles.floatingIcon,
              top: "135px",
              right: "-3px",
            }}
            animate={{
              y: [0, 13, 0],
              rotate: [0, 7, 0],
            }}
            transition={{
              duration: 4.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🎓
          </motion.div>

          <motion.div
            style={{
              ...styles.floatingIcon,
              bottom: "45px",
              left: "18px",
            }}
            animate={{
              y: [0, -10, 0],
              x: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            🌱
          </motion.div>

          <motion.div
            style={styles.portraitFrame}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow:
                "0 38px 85px rgba(6,39,91,0.27)",
            }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 18,
            }}
          >
            {/* Replace this URL with the real founder photograph */}
            <motion.img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=90"
              alt="Founder of Blanco Educational Academy"
              style={styles.portrait}
              whileHover={{ scale: 1.06 }}
              transition={{ duration: 0.6 }}
            />

            <div style={styles.imageOverlay} />
          </motion.div>

          <motion.div
            style={styles.founderBadge}
            animate={{ y: [0, -9, 0] }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <p style={styles.founderBadgeTitle}>
              Educate. Empower.
            </p>

            <p style={styles.founderBadgeText}>
              Building brighter futures through meaningful
              education.
            </p>
          </motion.div>
        </motion.div>

        {/* Founder information */}
        <motion.div
          style={styles.content}
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.85,
            ease: "easeOut",
          }}
        >
          <span style={styles.label}>
            <span style={styles.labelDot} />
            MEET OUR FOUNDER
          </span>

          <h2 style={styles.title}>
            A vision built on{" "}
            <span style={styles.founderName}>
              education and hope
            </span>
          </h2>

          {/* Replace this with the real founder name */}
          <p style={styles.designation}>
            FOUNDER NAME — FOUNDER & CHAIRMAN
          </p>

          <motion.blockquote
            style={styles.quoteBox}
            initial={{
              opacity: 0,
              y: 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.65,
            }}
          >
            <span style={styles.quotationMark}>“</span>

            Education is more than learning lessons. It is about
            giving every student the confidence, knowledge and
            opportunity to build a better future.
          </motion.blockquote>

          <p style={styles.text}>
            Blanco Educational Academy was founded with the belief
            that every child deserves meaningful education,
            regardless of financial circumstances or social
            background.
          </p>

          <p style={styles.text}>
            Through scholarships, learning resources, digital
            education, mentoring and career guidance, the academy
            continues to help students discover their abilities and
            move toward independent futures.
          </p>

          <div style={styles.statsGrid}>
            {achievements.map((item, index) => (
              <motion.div
                key={item.label}
                style={styles.statCard}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  delay: 0.25 + index * 0.13,
                }}
                whileHover={{
                  y: -7,
                  scale: 1.035,
                  boxShadow:
                    "0 17px 35px rgba(6,39,91,0.13)",
                }}
              >
                <p style={styles.statNumber}>
                  {item.number}
                </p>

                <p style={styles.statLabel}>
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>

          <div style={styles.signatureArea}>
            <span style={styles.signatureLine} />

            <p style={styles.signatureText}>
              EDUCATE • EMPOWER • ELEVATE
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;