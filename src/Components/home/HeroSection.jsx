import { motion } from "motion/react";

const activityImages = [
  {
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=90",
    title: "Quality Education",
    description: "Creating meaningful learning opportunities.",
  },
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=90",
    title: "Student Support",
    description: "Helping students continue their education.",
  },
  {
    src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=90",
    title: "Volunteer Community",
    description: "Working together to create lasting impact.",
  },
];

const impactStats = [
  {
    number: "1,500+",
    label: "Students Supported",
  },
  {
    number: "200+",
    label: "Active Volunteers",
  },
  {
    number: "25+",
    label: "Communities Reached",
  },
];

const HeroSection = () => {
  const movingImages = [
    ...activityImages,
    ...activityImages,
  ];

  const styles = {
    section: {
      width: "100%",
      overflow: "hidden",
      backgroundColor: "#F4F7FB",
    },

    hero: {
      position: "relative",
      minHeight: "720px",
      boxSizing: "border-box",
      padding: "175px 6% 125px",
      display: "flex",
      alignItems: "center",
      overflow: "hidden",
      backgroundColor: "#061F3F",
      backgroundImage:
        "linear-gradient(90deg, rgba(6,31,63,0.99) 0%, rgba(6,31,63,0.94) 45%, rgba(6,31,63,0.67) 72%, rgba(6,31,63,0.52) 100%), url('https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=95')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    darkOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, rgba(6,31,63,0.04), rgba(6,31,63,0.43))",
    },

    pattern: {
      position: "absolute",
      inset: 0,
      opacity: 0.1,
      backgroundImage:
        "radial-gradient(rgba(255,255,255,0.85) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
    },

    glowOne: {
      position: "absolute",
      top: "-210px",
      right: "-130px",
      width: "510px",
      height: "510px",
      borderRadius: "50%",
      backgroundColor: "rgba(227,171,53,0.20)",
      filter: "blur(70px)",
    },

    glowTwo: {
      position: "absolute",
      bottom: "-240px",
      left: "-170px",
      width: "520px",
      height: "520px",
      borderRadius: "50%",
      backgroundColor: "rgba(31,78,124,0.35)",
      filter: "blur(75px)",
    },

    container: {
      position: "relative",
      zIndex: 3,
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      boxSizing: "border-box",
    },

    content: {
      maxWidth: "760px",
    },

    badge: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      marginBottom: "23px",
      padding: "10px 19px",
      color: "#F0C35B",
      backgroundColor: "rgba(240,195,91,0.09)",
      border: "1px solid rgba(240,195,91,0.35)",
      borderRadius: "30px",
      fontSize: "12px",
      fontWeight: "850",
      letterSpacing: "1.6px",
      backdropFilter: "blur(10px)",
    },

    badgeDot: {
      width: "7px",
      height: "7px",
      flexShrink: 0,
      backgroundColor: "#F0C35B",
      borderRadius: "50%",
      boxShadow: "0 0 13px rgba(240,195,91,0.90)",
    },

    title: {
      margin: 0,
      color: "#FFFFFF",
      fontSize: "clamp(45px, 6vw, 76px)",
      lineHeight: "1.07",
      letterSpacing: "-2px",
      textShadow: "0 8px 35px rgba(0,0,0,0.32)",
    },

    highlightedText: {
      color: "#E3AB35",
    },

    description: {
      maxWidth: "680px",
      margin: "25px 0 34px",
      color: "#D5E1EF",
      fontSize: "clamp(16px, 2vw, 18px)",
      lineHeight: "1.8",
      textShadow: "0 3px 15px rgba(0,0,0,0.28)",
    },

    buttons: {
      display: "flex",
      alignItems: "center",
      gap: "15px",
      flexWrap: "wrap",
    },

    primaryButton: {
      display: "inline-block",
      padding: "15px 28px",
      color: "#061F3F",
      backgroundColor: "#E3AB35",
      border: "1px solid #F0C35B",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "850",
      boxShadow: "0 15px 35px rgba(227,171,53,0.28)",
    },

    secondaryButton: {
      display: "inline-block",
      padding: "14px 28px",
      color: "#FFFFFF",
      backgroundColor: "rgba(255,255,255,0.09)",
      border: "1px solid rgba(255,255,255,0.30)",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "750",
      backdropFilter: "blur(11px)",
    },

    statistics: {
      marginTop: "48px",
      display: "flex",
      alignItems: "center",
      gap: "30px",
      flexWrap: "wrap",
    },

    statistic: {
      minWidth: "135px",
      paddingRight: "28px",
      borderRight: "1px solid rgba(255,255,255,0.20)",
    },

    statisticNumber: {
      margin: "0 0 4px",
      color: "#F0C35B",
      fontSize: "27px",
      fontWeight: "900",
    },

    statisticLabel: {
      margin: 0,
      color: "#D0DCEA",
      fontSize: "12px",
      fontWeight: "650",
    },

    scrollText: {
      position: "absolute",
      zIndex: 4,
      right: "4%",
      bottom: "105px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      color: "rgba(255,255,255,0.65)",
      fontSize: "11px",
      fontWeight: "700",
      letterSpacing: "1.5px",
      transform: "rotate(90deg)",
      transformOrigin: "right bottom",
    },

    scrollLine: {
      width: "42px",
      height: "1px",
      backgroundColor: "#E3AB35",
    },

    movingSection: {
      position: "relative",
      zIndex: 5,
      padding: "0 0 90px",
      marginTop: "-72px",
      overflow: "hidden",
      backgroundColor: "#F4F7FB",
    },

    movingHeader: {
      width: "100%",
      maxWidth: "1200px",
      boxSizing: "border-box",
      margin: "0 auto 24px",
      padding: "88px 6% 0",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      flexWrap: "wrap",
    },

    movingLabel: {
      display: "inline-flex",
      alignItems: "center",
      gap: "9px",
      margin: 0,
      padding: "8px 16px",
      color: "#061F3F",
      backgroundColor: "#FFFFFF",
      border: "1px solid #D8E1EC",
      borderRadius: "30px",
      fontSize: "11px",
      fontWeight: "850",
      letterSpacing: "1.5px",
      boxShadow: "0 8px 22px rgba(6,31,63,0.07)",
    },

    movingHint: {
      margin: 0,
      color: "#68778B",
      fontSize: "12px",
      fontWeight: "700",
    },

    carouselViewport: {
      position: "relative",
      width: "100%",
      overflow: "hidden",
    },

    leftFade: {
      position: "absolute",
      zIndex: 5,
      top: 0,
      bottom: 0,
      left: 0,
      width: "8%",
      pointerEvents: "none",
      background:
        "linear-gradient(90deg, #F4F7FB 0%, rgba(244,247,251,0) 100%)",
    },

    rightFade: {
      position: "absolute",
      zIndex: 5,
      top: 0,
      right: 0,
      bottom: 0,
      width: "8%",
      pointerEvents: "none",
      background:
        "linear-gradient(270deg, #F4F7FB 0%, rgba(244,247,251,0) 100%)",
    },

    movingTrack: {
      display: "flex",
      width: "max-content",
      gap: "24px",
      padding: "10px 12px 30px",
    },

    imageCard: {
      position: "relative",
      flex: "0 0 clamp(280px, 30vw, 405px)",
      height: "265px",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
      border: "7px solid #FFFFFF",
      borderRadius: "21px",
      boxShadow: "0 20px 50px rgba(6,31,63,0.17)",
    },

    cardImage: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "14px",
    },

    cardOverlay: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      boxSizing: "border-box",
      padding: "23px",
      background:
        "linear-gradient(180deg, transparent 30%, rgba(6,31,63,0.97) 100%)",
      borderRadius: "14px",
    },

    cardBadge: {
      margin: "0 0 7px",
      color: "#F0C35B",
      fontSize: "10px",
      fontWeight: "850",
      letterSpacing: "1.5px",
    },

    cardTitle: {
      margin: "0 0 6px",
      color: "#FFFFFF",
      fontSize: "20px",
      fontWeight: "850",
    },

    cardDescription: {
      margin: 0,
      color: "#D6E0EC",
      fontSize: "12px",
      lineHeight: "1.55",
    },

    cardNumber: {
      position: "absolute",
      zIndex: 4,
      top: "17px",
      right: "17px",
      width: "37px",
      height: "37px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#061F3F",
      backgroundColor: "#E3AB35",
      border: "3px solid rgba(255,255,255,0.90)",
      borderRadius: "50%",
      fontSize: "11px",
      fontWeight: "900",
      boxShadow: "0 8px 20px rgba(0,0,0,0.20)",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.hero}>
        <div style={styles.darkOverlay} />
        <div style={styles.pattern} />

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

        <div style={styles.container}>
          <motion.div
            style={styles.content}
            initial={{
              opacity: 0,
              x: -70,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
          >
            <motion.span
              style={styles.badge}
              initial={{
                opacity: 0,
                y: -15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.2 }}
            >
              <span style={styles.badgeDot} />
              BLANCO EDUCATIONAL ACADEMY
            </motion.span>

            <motion.h1
              style={styles.title}
              initial={{
                opacity: 0,
                y: 35,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
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
              initial={{
                opacity: 0,
                y: 25,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="/donate"
                style={styles.primaryButton}
                whileHover={{
                  y: -5,
                  scale: 1.04,
                  backgroundColor: "#F0C35B",
                  boxShadow:
                    "0 20px 45px rgba(227,171,53,0.40)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                Support Our Mission
              </motion.a>

              <motion.a
                href="/programs"
                style={styles.secondaryButton}
                whileHover={{
                  y: -5,
                  backgroundColor:
                    "rgba(255,255,255,0.17)",
                }}
                whileTap={{ scale: 0.96 }}
              >
                Explore Programs →
              </motion.a>
            </motion.div>

            <motion.div
              style={styles.statistics}
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.75,
                duration: 0.7,
              }}
            >
              {impactStats.map((item, index) => (
                <div
                  key={item.label}
                  style={{
                    ...styles.statistic,
                    borderRight:
                      index === impactStats.length - 1
                        ? "none"
                        : styles.statistic.borderRight,
                  }}
                >
                  <p style={styles.statisticNumber}>
                    {item.number}
                  </p>

                  <p style={styles.statisticLabel}>
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          style={styles.scrollText}
          animate={{
            x: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span style={styles.scrollLine} />
          SCROLL TO DISCOVER
        </motion.div>
      </div>

      {/* Moving activity cards */}
      <section style={styles.movingSection}>
        <motion.div
          style={styles.movingHeader}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={styles.movingLabel}>
            <span style={styles.badgeDot} />
            OUR WORK IN ACTION
          </p>

          <p style={styles.movingHint}>
            Creating opportunities through education
          </p>
        </motion.div>

        <div style={styles.carouselViewport}>
          <div style={styles.leftFade} />
          <div style={styles.rightFade} />

          <motion.div
            style={styles.movingTrack}
            animate={{
              x: ["0%", "-50%"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {movingImages.map((item, index) => (
              <motion.article
                key={`${item.title}-${index}`}
                style={styles.imageCard}
                whileHover={{
                  y: -12,
                  scale: 1.025,
                  boxShadow:
                    "0 30px 65px rgba(6,31,63,0.25)",
                }}
                transition={{
                  type: "spring",
                  stiffness: 240,
                  damping: 20,
                }}
              >
                <motion.img
                  src={item.src}
                  alt={item.title}
                  style={styles.cardImage}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                <motion.span
                  style={styles.cardNumber}
                  animate={{
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: (index % 3) * 0.3,
                    ease: "easeInOut",
                  }}
                >
                  {String((index % 3) + 1).padStart(
                    2,
                    "0"
                  )}
                </motion.span>

                <div style={styles.cardOverlay}>
                  <p style={styles.cardBadge}>
                    BLANCO INITIATIVE
                  </p>

                  <h3 style={styles.cardTitle}>
                    {item.title}
                  </h3>

                  <p style={styles.cardDescription}>
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default HeroSection;