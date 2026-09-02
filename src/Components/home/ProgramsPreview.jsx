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
      "Career mentoring, higher-education awareness, communication training and employability guidance.",
  },
];

const ProgramsPreview = () => {
  const styles = {
    section: {
      position: "relative",
      padding: "105px 6%",
      overflow: "hidden",
      background:
        "linear-gradient(135deg, #031B42 0%, #06275B 55%, #123F2A 100%)",
    },

    container: {
      position: "relative",
      zIndex: 2,
      width: "100%",
      maxWidth: "1220px",
      margin: "0 auto",
    },

    glowOne: {
      position: "absolute",
      top: "-220px",
      right: "-150px",
      width: "500px",
      height: "500px",
      borderRadius: "50%",
      backgroundColor: "rgba(216,161,45,0.12)",
      filter: "blur(25px)",
      pointerEvents: "none",
    },

    glowTwo: {
      position: "absolute",
      bottom: "-230px",
      left: "-170px",
      width: "480px",
      height: "480px",
      borderRadius: "50%",
      backgroundColor: "rgba(46,125,50,0.18)",
      filter: "blur(30px)",
      pointerEvents: "none",
    },

    badge: {
      display: "table",
      margin: "0 auto 15px",
      padding: "9px 18px",
      color: "#F1C25B",
      backgroundColor: "rgba(218,165,50,0.10)",
      border: "1px solid rgba(218,165,50,0.35)",
      borderRadius: "30px",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    title: {
      maxWidth: "780px",
      margin: "0 auto 18px",
      color: "#ffffff",
      textAlign: "center",
      fontSize: "clamp(32px, 5vw, 48px)",
      lineHeight: "1.15",
    },

    description: {
      maxWidth: "720px",
      margin: "0 auto 52px",
      color: "#C7D5E8",
      textAlign: "center",
      fontSize: "16px",
      lineHeight: "1.8",
    },

    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "24px",
    },

    card: {
      position: "relative",
      minHeight: "385px",
      padding: "34px 28px",
      overflow: "hidden",
      background:
        "linear-gradient(145deg, rgba(255,255,255,0.11), rgba(255,255,255,0.045))",
      border: "1px solid rgba(255,255,255,0.15)",
      borderRadius: "21px",
      boxShadow: "0 22px 50px rgba(0,0,0,0.22)",
      backdropFilter: "blur(15px)",
    },

    line: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background: "linear-gradient(90deg, #D7A22F, #F0C765, #2E8A42)",
    },

    number: {
      position: "absolute",
      right: "15px",
      bottom: "-17px",
      margin: 0,
      color: "rgba(255,255,255,0.055)",
      fontSize: "98px",
      fontWeight: "900",
      lineHeight: 1,
    },

    icon: {
      position: "relative",
      zIndex: 2,
      width: "68px",
      height: "68px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "25px",
      background:
        "linear-gradient(135deg, rgba(255,255,255,0.17), rgba(46,125,50,0.18))",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "18px",
      fontSize: "30px",
    },

    cardTitle: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 14px",
      color: "#ffffff",
      fontSize: "21px",
    },

    cardText: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 24px",
      color: "#C5D2E3",
      fontSize: "14px",
      lineHeight: "1.8",
    },

    link: {
      position: "absolute",
      left: "28px",
      bottom: "28px",
      zIndex: 3,
      color: "#F0C15A",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "800",
    },

    buttonArea: {
      marginTop: "45px",
      textAlign: "center",
    },

    button: {
      display: "inline-block",
      padding: "14px 26px",
      color: "#06275B",
      background: "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "800",
    },
  };

  return (
    <section style={styles.section}>
      <motion.div
        style={styles.glowOne}
        animate={{ scale: [1, 1.25, 1], x: [0, -35, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        style={styles.glowTwo}
        animate={{ scale: [1, 1.2, 1], y: [0, -35, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      <div style={styles.container}>
        <span style={styles.badge}>OUR PROGRAMS</span>

        <h2 style={styles.title}>
          Building better opportunities through learning
        </h2>

        <p style={styles.description}>
          Explore educational programs created to help students gain
          knowledge, confidence and practical skills.
        </p>

        <div style={styles.grid}>
          {programs.map((program, index) => (
            <motion.article
              key={program.title}
              style={styles.card}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{
                y: -15,
                scale: 1.025,
                borderColor: "rgba(240,193,90,0.42)",
              }}
            >
              <div style={styles.line} />
              <p style={styles.number}>{program.number}</p>

              <motion.div
                style={styles.icon}
                animate={{
                  y: index % 2 === 0 ? [0, -7, 0] : [0, 7, 0],
                }}
                transition={{
                  duration: 3.5 + index * 0.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {program.icon}
              </motion.div>

              <h3 style={styles.cardTitle}>{program.title}</h3>
              <p style={styles.cardText}>{program.description}</p>

              <motion.a
                href="/programs"
                style={styles.link}
                whileHover={{ x: 6, color: "#ffffff" }}
              >
                Learn more →
              </motion.a>
            </motion.article>
          ))}
        </div>

        <div style={styles.buttonArea}>
          <motion.a
            href="/programs"
            style={styles.button}
            whileHover={{ y: -5, scale: 1.04 }}
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