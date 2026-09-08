import { useEffect, useState } from "react";
import { motion } from "motion/react";

const programs = [
  {
    number: "01",
    icon: "📚",
    title: "Quality Education",
    description:
      "Academic learning support, books and educational resources for students from underserved communities.",
  },
  {
    number: "02",
    icon: "💻",
    title: "Digital Learning",
    description:
      "Computer education, digital literacy, online safety and practical technology skills for students.",
  },
  {
    number: "03",
    icon: "🎓",
    title: "Student Scholarships",
    description:
      "Financial and academic support for deserving students who face challenges continuing their education.",
  },
  {
    number: "04",
    icon: "🧭",
    title: "Career Guidance",
    description:
      "Career mentoring, higher-education awareness and employability guidance for successful futures.",
  },
];

const ProgramsPreview = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined"
      ? window.innerWidth < 950
      : false
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const styles = {
    section: {
      position: "relative",
      width: "100%",
      boxSizing: "border-box",
      padding: isMobile ? "80px 5%" : "105px 5%",
      overflow: "hidden",
      backgroundColor: "#061F3F",
    },

    pattern: {
      position: "absolute",
      inset: 0,
      opacity: 0.09,
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    },

    topGlow: {
      position: "absolute",
      top: "-220px",
      left: "50%",
      width: "650px",
      height: "450px",
      backgroundColor: "rgba(37,89,140,0.22)",
      borderRadius: "50%",
      filter: "blur(75px)",
      transform: "translateX(-50%)",
    },

    bottomGlow: {
      position: "absolute",
      right: "-180px",
      bottom: "-250px",
      width: "500px",
      height: "500px",
      backgroundColor: "rgba(22,65,109,0.25)",
      borderRadius: "50%",
      filter: "blur(75px)",
    },

    container: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      boxSizing: "border-box",
    },

    headingArea: {
      maxWidth: "760px",
      margin: "0 auto 65px",
      textAlign: "center",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      marginBottom: "16px",
      padding: "9px 18px",
      color: "#F0C35B",
      backgroundColor: "rgba(240,195,91,0.09)",
      border: "1px solid rgba(240,195,91,0.32)",
      borderRadius: "30px",
      fontSize: "11px",
      fontWeight: "850",
      letterSpacing: "1.8px",
    },

    badgeDot: {
      width: "7px",
      height: "7px",
      backgroundColor: "#F0C35B",
      borderRadius: "50%",
      boxShadow: "0 0 12px rgba(240,195,91,0.85)",
    },

    title: {
      margin: "0 0 18px",
      color: "#FFFFFF",
      fontSize: "clamp(34px, 5vw, 50px)",
      lineHeight: "1.14",
      letterSpacing: "-1px",
    },

    highlightedText: {
      color: "#E3AB35",
    },

    description: {
      maxWidth: "690px",
      margin: "0 auto",
      color: "#BFCDE0",
      fontSize: "16px",
      lineHeight: "1.8",
    },

    desktopStage: {
      position: "relative",
      width: "100%",
      maxWidth: "1060px",
      minHeight: "650px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "280px minmax(230px, 1fr) 280px",
      gridTemplateRows: "270px 270px",
      alignItems: "center",
      justifyContent: "center",
      columnGap: "70px",
      rowGap: "100px",
      boxSizing: "border-box",
    },

    centerLineHorizontal: {
      position: "absolute",
      zIndex: 1,
      top: "50%",
      left: "25%",
      width: "50%",
      height: "1px",
      background:
        "linear-gradient(90deg, transparent, rgba(227,171,53,0.38), transparent)",
    },

    centerLineVertical: {
      position: "absolute",
      zIndex: 1,
      top: "22%",
      left: "50%",
      width: "1px",
      height: "56%",
      background:
        "linear-gradient(180deg, transparent, rgba(227,171,53,0.35), transparent)",
    },

    centreBlock: {
      position: "absolute",
      zIndex: 6,
      top: "50%",
      left: "50%",
      width: "195px",
      height: "195px",
      boxSizing: "border-box",
      padding: "25px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      backgroundColor: "#0A2B50",
      border: "1px solid rgba(227,171,53,0.42)",
      borderRadius: "50%",
      boxShadow:
        "0 25px 60px rgba(0,0,0,0.30), inset 0 0 35px rgba(255,255,255,0.035)",
      transform: "translate(-50%, -50%)",
    },

    centreIcon: {
      width: "48px",
      height: "48px",
      marginBottom: "10px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(227,171,53,0.12)",
      border: "1px solid rgba(227,171,53,0.28)",
      borderRadius: "50%",
      fontSize: "25px",
    },

    centreTitle: {
      margin: "0 0 7px",
      color: "#F0C35B",
      fontSize: "19px",
      fontWeight: "900",
      lineHeight: "1.2",
    },

    centreText: {
      margin: 0,
      color: "#C6D2E2",
      fontSize: "10px",
      lineHeight: "1.5",
    },

    cardPosition: {
      position: "relative",
      zIndex: 5,
      width: "280px",
      height: "270px",
    },

    card: {
      position: "relative",
      width: "100%",
      height: "100%",
      boxSizing: "border-box",
      padding: "24px",
      overflow: "hidden",
      backgroundColor: "#0D315B",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: "19px",
      boxShadow: "0 22px 50px rgba(0,0,0,0.27)",
    },

    cardTopLine: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      backgroundColor: "#DDA52F",
    },

    cardHighlight: {
      position: "absolute",
      top: "-80px",
      right: "-80px",
      width: "170px",
      height: "170px",
      backgroundColor: "rgba(255,255,255,0.04)",
      borderRadius: "50%",
    },

    cardNumber: {
      position: "absolute",
      right: "12px",
      bottom: "-17px",
      margin: 0,
      color: "rgba(255,255,255,0.045)",
      fontSize: "80px",
      fontWeight: "900",
      lineHeight: 1,
    },

    icon: {
      position: "relative",
      zIndex: 2,
      width: "57px",
      height: "57px",
      marginBottom: "17px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      backgroundColor: "#153E69",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "16px",
      fontSize: "26px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.18)",
    },

    cardTitle: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 10px",
      color: "#FFFFFF",
      fontSize: "18px",
      fontWeight: "850",
      lineHeight: "1.25",
    },

    cardDescription: {
      position: "relative",
      zIndex: 2,
      margin: 0,
      color: "#BECBDD",
      fontSize: "11px",
      lineHeight: "1.65",
    },

    learnLink: {
      position: "absolute",
      zIndex: 3,
      left: "24px",
      bottom: "21px",
      color: "#F0C35B",
      fontSize: "11px",
      fontWeight: "850",
      textDecoration: "none",
    },

    mobileGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(245px, 1fr))",
      gap: "24px",
    },

    mobileCardWrapper: {
      width: "100%",
      maxWidth: "360px",
      height: "285px",
      margin: "0 auto",
    },

    buttonArea: {
      marginTop: isMobile ? "45px" : "45px",
      textAlign: "center",
    },

    button: {
      display: "inline-block",
      padding: "15px 29px",
      color: "#061F3F",
      backgroundColor: "#E3AB35",
      border: "1px solid #F0C35B",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "850",
      boxShadow: "0 15px 35px rgba(0,0,0,0.24)",
    },
  };

  const renderProgramCard = (program, index) => {
    return (
      <motion.article
        style={styles.card}
        whileHover={{
          y: -8,
          scale: 1.035,
          borderColor: "rgba(240,195,91,0.52)",
          boxShadow: "0 32px 70px rgba(0,0,0,0.36)",
        }}
        transition={{
          type: "spring",
          stiffness: 230,
          damping: 20,
        }}
      >
        <div style={styles.cardTopLine} />
        <div style={styles.cardHighlight} />

        <p style={styles.cardNumber}>
          {program.number}
        </p>

        <motion.div
          style={styles.icon}
          animate={{
            y: [0, -6, 0],
            rotate: [0, 4, 0, -4, 0],
          }}
          transition={{
            duration: 3.5 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {program.icon}
        </motion.div>

        <h3 style={styles.cardTitle}>
          {program.title}
        </h3>

        <p style={styles.cardDescription}>
          {program.description}
        </p>

        <motion.a
          href="/programs"
          style={styles.learnLink}
          whileHover={{
            x: 6,
            color: "#FFFFFF",
          }}
        >
          Learn more →
        </motion.a>
      </motion.article>
    );
  };

  return (
    <section style={styles.section}>
      <div style={styles.pattern} />
      <div style={styles.topGlow} />
      <div style={styles.bottomGlow} />

      <div style={styles.container}>
        <motion.div
          style={styles.headingArea}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.75 }}
        >
          <span style={styles.badge}>
            <span style={styles.badgeDot} />
            OUR EDUCATIONAL PROGRAMS
          </span>

          <h2 style={styles.title}>
            Learning opportunities that{" "}
            <span style={styles.highlightedText}>
              transform futures
            </span>
          </h2>

          <p style={styles.description}>
            Our programs provide knowledge, confidence and
            practical skills to help every student move toward a
            brighter and more independent future.
          </p>
        </motion.div>

        {isMobile ? (
          <div style={styles.mobileGrid}>
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                style={styles.mobileCardWrapper}
                initial={{
                  opacity: 0,
                  y: 45,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
              >
                {renderProgramCard(program, index)}
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={styles.desktopStage}>
            <div style={styles.centerLineHorizontal} />
            <div style={styles.centerLineVertical} />

            {/* Stationary centre block */}
            <div style={styles.centreBlock}>
              <div style={styles.centreIcon}>
                🌟
              </div>

              <h3 style={styles.centreTitle}>
                Every Child Matters
              </h3>

              <p style={styles.centreText}>
                Education creates confidence, opportunity and
                lasting change.
              </p>
            </div>

            {/* Four aligned cards */}
            {programs.map((program, index) => {
              const isLeftCard = index % 2 === 0;
              const isTopCard = index < 2;

              return (
                <motion.div
                  key={program.title}
                  style={{
                    ...styles.cardPosition,
                    gridColumn: isLeftCard ? "1" : "3",
                    gridRow: isTopCard ? "1" : "2",
                    justifySelf: isLeftCard ? "start" : "end",
                  }}
                  initial={{
                    opacity: 0,
                    scale: 0.94,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    opacity: {
                      duration: 0.6,
                      delay: index * 0.12,
                    },
                    scale: {
                      duration: 0.6,
                      delay: index * 0.12,
                    },
                  }}
                >
                  {/* Controlled circular movement */}
                  <motion.div
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                    animate={{
                      x: [0, 7, 0, -7, 0],
                      y: [-7, 0, 7, 0, -7],
                    }}
                    transition={{
                      duration: 7,
                      repeat: Infinity,
                      ease: "linear",
                      delay: index * 0.4,
                    }}
                  >
                    {renderProgramCard(program, index)}
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        )}

        <div style={styles.buttonArea}>
          <motion.a
            href="/programs"
            style={styles.button}
            whileHover={{
              y: -6,
              scale: 1.045,
              backgroundColor: "#F0C35B",
              boxShadow:
                "0 22px 45px rgba(0,0,0,0.32)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            View All Programs →
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;