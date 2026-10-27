import { useState } from "react";
import { motion } from "motion/react";
import suitPhoto from "../../assets/Professional-suit.jpeg";
import normalPhoto from "../../assets/normal-photo.jpeg";

const photos = [suitPhoto, normalPhoto];

const achievements = [
  { number: "10+", label: "Years of service" },
  { number: "25+", label: "Communities reached" },
  { number: "1,500+", label: "Students supported" },
];

const colors = {
  bgFrom: "#EEF6FF",
  bgTo: "#CFE3F8",
  bgGlow: "rgba(227, 171, 53, 0.18)",

  heading: "#06275B",
  highlight: "#A8700A",
  body: "#3F5573",
  quote: "#15365F",
  label: "#2E7D32",

  // accents
  gold: "#E3AB35",
  green: "#2E7D32",

  // photo
  photoBorder: "#FFFFFF",
  backdrop: "rgba(6,39,91,0.08)",

  // name card
  nameCardBg: "#06275B",
  nameCardName: "#FFFFFF",
  nameCardRole: "#F0C566",

  // stats panel
  statsBg: "#FFFFFF",
  statsBorder: "#C9DDF3",
  statsNumber: "#A8700A",
  statsLabel: "#3F5573",
};

const FounderSection = () => {
  const [flipped, setFlipped] = useState(false);

  const styles = {
    section: {
      position: "relative",
      padding: "110px 6%",
      background: `radial-gradient(circle at 85% 8%, ${colors.bgGlow} 0%, rgba(0,0,0,0) 45%), linear-gradient(160deg, ${colors.bgFrom} 0%, ${colors.bgTo} 100%)`,
      overflow: "hidden",
    },
    container: {
      width: "100%",
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      alignItems: "center",
      gap: "80px",
    },

    /* ---------- Photo ---------- */
    photoColumn: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },

    photoHit: {
      position: "relative",
      zIndex: 1,
      width: "clamp(240px, 70vw, 340px)",
      aspectRatio: "1",
      perspective: "1200px",
      cursor: "pointer",
      WebkitTapHighlightColor: "transparent",
    },
    backdrop: {
      position: "absolute",
      inset: 0,
      transform: "translate(22px, 22px)",
      borderRadius: "50%",
      // backgroundColor: colors.backdrop,
      pointerEvents: "none",
    },
    lift: {
      position: "relative",
      width: "100%",
      height: "100%",
    },
    ring: {
      position: "absolute",
      inset: "-12px",
      // border: `2px solid ${colors.gold}`,
      borderRadius: "50%",
      pointerEvents: "none",
    },
    photoInner: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      willChange: "transform",
    },
    photoFace: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      borderRadius: "50%",
      border: `6px solid ${colors.photoBorder}`,
      boxShadow: "0 24px 48px rgba(6,39,91,0.28)",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
      // backgroundColor: "#E7EDF5",
    },
    photo: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      userSelect: "none",
      pointerEvents: "none",
    },
    nameCard: {
      position: "relative",
      zIndex: 2,
      marginTop: "-26px",
      padding: "16px 34px",
      textAlign: "center",
      backgroundColor: colors.nameCardBg,
      borderRadius: "14px",
      boxShadow: "0 16px 32px rgba(6,39,91,0.28)",
    },
    name: {
      margin: "0 0 3px",
      color: colors.nameCardName,
      fontSize: "20px",
      fontWeight: "800",
      letterSpacing: "0.2px",
    },
    role: {
      margin: 0,
      color: colors.nameCardRole,
      fontSize: "13px",
      fontWeight: "700",
      letterSpacing: "0.4px",
    },

    /* ---------- Content ---------- */
    content: { maxWidth: "560px" },
    label: {
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      marginBottom: "18px",
      color: colors.label,
      fontSize: "14px",
      fontWeight: "700",
      letterSpacing: "0.3px",
    },
    labelDot: {
      width: "8px",
      height: "8px",
      borderRadius: "50%",
      backgroundColor: colors.label,
    },
    title: {
      margin: "0 0 28px",
      color: colors.heading,
      fontSize: "clamp(34px, 4.8vw, 48px)",
      fontWeight: "800",
      lineHeight: "1.15",
      letterSpacing: "-0.8px",
    },
    highlight: { color: colors.highlight },
    quoteMark: {
      display: "block",
      marginBottom: "4px",
      color: colors.gold,
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontSize: "72px",
      lineHeight: "0.7",
    },
    quote: {
      margin: "0 0 26px",
      padding: 0,
      color: colors.quote,
      fontFamily: "Georgia, 'Times New Roman', serif",
      fontSize: "clamp(18px, 2.2vw, 21px)",
      fontStyle: "italic",
      fontWeight: "400",
      lineHeight: "1.65",
    },
    text: {
      margin: "0 0 16px",
      color: colors.body,
      fontSize: "16px",
      lineHeight: "1.8",
    },
    statsGrid: {
      marginTop: "34px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      padding: "22px 0",
      backgroundColor: colors.statsBg,
      border: `1px solid ${colors.statsBorder}`,
      borderRadius: "18px",
      boxShadow: "0 12px 30px rgba(6,39,91,0.08)",
    },
    statCard: {
      padding: "4px 10px",
      textAlign: "center",
    },
    statNumber: {
      margin: "0 0 6px",
      color: colors.statsNumber,
      fontSize: "clamp(24px, 3vw, 32px)",
      fontWeight: "800",
      lineHeight: "1.1",
    },
    statLabel: {
      margin: 0,
      color: colors.statsLabel,
      fontSize: "13px",
      fontWeight: "500",
      lineHeight: "1.4",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Founder photo */}
        <motion.div
          style={styles.photoColumn}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            style={styles.photoHit}
            // mouse hover only; touch devices use tap/click
            onPointerEnter={(e) =>
              e.pointerType === "mouse" && setFlipped(true)
            }
            onPointerLeave={(e) =>
              e.pointerType === "mouse" && setFlipped(false)
            }
            onClick={() => setFlipped((v) => !v)}
          >
            <div style={styles.backdrop} />

            <motion.div
              style={styles.lift}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
            >
              <div style={styles.ring} />

              <motion.div
                style={styles.photoInner}
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{
                  type: "spring",
                  stiffness: 180,
                  damping: 22,
                  mass: 0.8,
                }}
              >
                <div style={styles.photoFace}>
                  <img
                    src={photos[0]}
                    alt="Founder of Blanco Educational Academy"
                    style={styles.photo}
                    draggable={false}
                  />
                </div>

                <div
                  style={{ ...styles.photoFace, transform: "rotateY(180deg)" }}
                >
                  <img
                    src={photos[1]}
                    alt="Founder of Blanco Educational Academy"
                    style={styles.photo}
                    draggable={false}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div style={styles.nameCard}>
            {/* Replace with the real founder name */}
            <p style={styles.name}>Mohammad Ismail</p>
            <p style={styles.role}>Founder & Chairman</p>
          </div>
        </motion.div>

        {/* Founder information */}
        <motion.div
          style={styles.content}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
        >
          {/* <span style={styles.label}>
            <span style={styles.labelDot} />
            Meet our founder
          </span> */}

          <h2 style={styles.title}>
            A vision built on{" "}
            <span style={styles.highlight}>education and hope</span>
          </h2>

          <blockquote style={styles.quote}>
            <span style={styles.quoteMark} aria-hidden="true">
              &ldquo;
            </span>
            Education is more than learning lessons. It is about giving every
            student the confidence, knowledge and opportunity to build a better
            future.
          </blockquote>

          <p style={styles.text}>
            Blanco Educational Academy was founded with the belief that every
            child deserves meaningful education, regardless of financial
            circumstances or social background.
          </p>

          <p style={styles.text}>
            Through scholarships, learning resources, digital education,
            mentoring and career guidance, the academy continues to help
            students discover their abilities and move toward independent
            futures.
          </p>

          <motion.div
            style={styles.statsGrid}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {achievements.map((item, index) => (
              <div
                key={item.label}
                style={{
                  ...styles.statCard,
                  borderLeft:
                    index > 0 ? `1px solid ${colors.statsBorder}` : "none",
                }}
              >
                <p style={styles.statNumber}>{item.number}</p>
                <p style={styles.statLabel}>{item.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FounderSection;
