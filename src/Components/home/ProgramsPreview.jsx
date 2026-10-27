import { motion } from "motion/react";
// Put your background image in the assets folder and change the file name here
import programsBg from "../../assets/heroImage.jpeg";

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

/* ---------- All colors live here: change them in one place ---------- */
const colors = {
  // section background (shows if the image fails to load)
  bg: "#0B3A80",
  // blue layer over the image (lower the last number to show more of the image)
  overlay: "rgba(8,48,115,0.82)",
  dots: "rgba(255,255,255,0.06)",
  glow: "rgba(227,171,53,0.16)",

  // heading area (sits on the blue background)
  sectionHeading: "#FFFFFF",
  sectionBody: "#CBD9EE",
  sectionHighlight: "#F0C35B",
  badge: "#F0C35B",

  // accents
  gold: "#E3AB35",
  goldLight: "#F0C35B",
  dark: "#06275B",

  // cards (white, so text stays easy to read over the image)
  card: "#FFFFFF",
  cardBorder: "rgba(255,255,255,0.2)",
  cardBorderHover: "#F0C35B",
  cardTitle: "#06275B",
  cardBody: "#51627A",
  cardLink: "#1D5FD0",
  iconBg: "#E8F0FC",
  iconBorder: "#C3D6F3",
  number: "rgba(6,39,91,0.10)",
  shadow: "0 18px 40px rgba(0,0,0,0.28)",
  shadowHover: "0 30px 65px rgba(0,0,0,0.4)",
};

const css = `
.program-card-link:focus-visible,
.program-btn:focus-visible {
  outline: 3px solid ${colors.goldLight};
  outline-offset: 3px;
}
`;

const styles = {
  section: {
    position: "relative",
    width: "100%",
    boxSizing: "border-box",
    padding: "100px 5%",
    overflow: "hidden",
    backgroundColor: colors.bg,
    backgroundImage: `linear-gradient(${colors.overlay}, ${colors.overlay}), url(${programsBg})`,
    backgroundSize: "auto, cover",
    backgroundPosition: "center, center",
    backgroundRepeat: "no-repeat",
  },
  pattern: {
    position: "absolute",
    inset: 0,
    backgroundImage: `radial-gradient(${colors.dots} 1.5px, transparent 1.5px)`,
    backgroundSize: "30px 30px",
    pointerEvents: "none",
  },
  topGlow: {
    position: "absolute",
    top: "-240px",
    left: "50%",
    width: "700px",
    height: "420px",
    backgroundColor: colors.glow,
    borderRadius: "50%",
    filter: "blur(80px)",
    transform: "translateX(-50%)",
    pointerEvents: "none",
  },
  container: {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    boxSizing: "border-box",
  },

  /* ---------- Heading ---------- */
  headingArea: {
    maxWidth: "720px",
    margin: "0 auto 60px",
    textAlign: "center",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: "9px",
    marginBottom: "16px",
    color: colors.badge,
    fontSize: "14px",
    fontWeight: "700",
    letterSpacing: "0.3px",
  },
  badgeDot: {
    width: "8px",
    height: "8px",
    backgroundColor: colors.badge,
    borderRadius: "50%",
  },
  title: {
    margin: "0 0 16px",
    color: colors.sectionHeading,
    fontSize: "clamp(32px, 4.6vw, 46px)",
    fontWeight: "800",
    lineHeight: "1.15",
    letterSpacing: "-0.8px",
  },
  highlightedText: { color: colors.sectionHighlight },
  description: {
    margin: "0 auto",
    maxWidth: "620px",
    color: colors.sectionBody,
    fontSize: "16px",
    lineHeight: "1.75",
  },

  /* ---------- Cards ---------- */
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "24px",
    alignItems: "stretch",
  },
  card: {
    position: "relative",
    height: "100%",
    boxSizing: "border-box",
    padding: "32px 26px 26px",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backgroundColor: colors.card,
    border: `1px solid ${colors.cardBorder}`,
    borderRadius: "20px",
    boxShadow: colors.shadow,
  },
  cardTopLine: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "4px",
    backgroundColor: colors.gold,
  },
  cardNumber: {
    position: "absolute",
    top: "14px",
    right: "20px",
    margin: 0,
    color: colors.number,
    fontSize: "40px",
    fontWeight: "800",
    lineHeight: 1,
  },
  icon: {
    width: "60px",
    height: "60px",
    marginBottom: "22px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    backgroundColor: colors.iconBg,
    border: `1px solid ${colors.iconBorder}`,
    borderRadius: "16px",
  },
  cardTitle: {
    margin: "0 0 12px",
    color: colors.cardTitle,
    fontSize: "21px",
    fontWeight: "800",
    lineHeight: "1.25",
  },
  cardDescription: {
    margin: "0 0 24px",
    flex: 1,
    color: colors.cardBody,
    fontSize: "15px",
    lineHeight: "1.7",
  },
  learnLink: {
    alignSelf: "flex-start",
    color: colors.cardLink,
    fontSize: "15px",
    fontWeight: "700",
    textDecoration: "none",
  },

  /* ---------- Button ---------- */
  buttonArea: {
    marginTop: "52px",
    textAlign: "center",
  },
  button: {
    display: "inline-block",
    padding: "15px 30px",
    color: colors.dark,
    backgroundColor: colors.gold,
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "800",
    fontSize: "15px",
    boxShadow: "0 14px 32px rgba(0,0,0,0.3)",
  },
};

const ProgramsPreview = () => {
  return (
    <section style={styles.section}>
      <style>{css}</style>
      <div style={styles.pattern} />
      <div style={styles.topGlow} />

      <div style={styles.container}>
        <motion.div
          style={styles.headingArea}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span style={styles.badge}>
            <span style={styles.badgeDot} />
            Our educational programs
          </span>

          <h2 style={styles.title}>
            Learning opportunities that{" "}
            <span style={styles.highlightedText}>transform futures</span>
          </h2>

          <p style={styles.description}>
            Our programs provide knowledge, confidence and practical skills to
            help every student move toward a brighter and more independent
            future.
          </p>
        </motion.div>

        <div style={styles.grid}>
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              style={styles.card}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              whileHover={{
                y: -8,
                borderColor: colors.cardBorderHover,
                boxShadow: colors.shadowHover,
              }}
            >
              <div style={styles.cardTopLine} />
              <p style={styles.cardNumber} aria-hidden="true">
                {program.number}
              </p>

              <div style={styles.icon} aria-hidden="true">
                {program.icon}
              </div>

              <h3 style={styles.cardTitle}>{program.title}</h3>
              <p style={styles.cardDescription}>{program.description}</p>

              <motion.a
                href="/programs"
                className="program-card-link"
                style={styles.learnLink}
                whileHover={{ x: 5, color: colors.dark }}
              >
                Learn more →
              </motion.a>
            </motion.article>
          ))}
        </div>

        <div style={styles.buttonArea}>
          <motion.a
            href="/programs"
            className="program-btn"
            style={styles.button}
            whileHover={{ y: -3, backgroundColor: colors.goldLight }}
            whileTap={{ scale: 0.97 }}
          >
            View all programs →
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ProgramsPreview;