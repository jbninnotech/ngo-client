import { motion } from "motion/react";
import AnimatedCounter from "./AnimatedCounter";

const impactData = [
  {
    number: 1500,
    label: "Students Supported",
    icon: "🎓",
  },
  {
    number: 50,
    label: "Educational Programs",
    icon: "📚",
  },
  {
    number: 200,
    label: "Active Volunteers",
    icon: "🤝",
  },
  {
    number: 25,
    label: "Communities Reached",
    icon: "🌍",
  },
];

const styles = {
  section: {
    padding: "100px 6%",
    background: "linear-gradient(180deg, #FFFFFF, #F5F8FC)",
  },

  container: {
    width: "100%",
    maxWidth: "1220px",
    margin: "0 auto",
  },

  badge: {
    display: "table",
    margin: "0 auto 15px",
    padding: "8px 17px",
    color: "#2E7D32",
    backgroundColor: "#EAF5E9",
    border: "1px solid #CFE7CC",
    borderRadius: "30px",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.8px",
  },

  title: {
    maxWidth: "780px",
    margin: "0 auto 18px",
    color: "#06275B",
    textAlign: "center",
    fontSize: "clamp(32px, 5vw, 48px)",
  },

  description: {
    maxWidth: "720px",
    margin: "0 auto 52px",
    color: "#68778B",
    textAlign: "center",
    fontSize: "16px",
    lineHeight: "1.8",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
    gap: "22px",
  },

  card: {
    padding: "34px 20px",
    textAlign: "center",
    background: "linear-gradient(145deg, #F7FAFE, #FFFFFF)",
    border: "1px solid #E1E9F3",
    borderRadius: "18px",
    boxShadow: "0 15px 40px rgba(6,39,91,0.09)",
  },

  icon: {
    display: "block",
    marginBottom: "9px",
    fontSize: "28px",
  },

  number: {
    margin: "0 0 8px",
    color: "#C58A16",
    fontSize: "42px",
    fontWeight: "900",
    fontVariantNumeric: "tabular-nums",
  },

  label: {
    margin: 0,
    color: "#06275B",
    fontSize: "14px",
    fontWeight: "750",
  },
};

const ImpactSection = () => {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8 }}
    >
      <div style={styles.container}>
        <span style={styles.badge}>OUR IMPACT</span>
        <h2 style={styles.title}>Creating measurable change</h2>

        <p style={styles.description}>
          Every number represents students, volunteers and communities
          moving toward a brighter future.
        </p>

        <div style={styles.grid}>
          {impactData.map((item, index) => (
            <motion.article
              key={item.label}
              style={styles.card}
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.6,
                delay: index * 0.13,
              }}
              whileHover={{
                y: -11,
                scale: 1.035,
                boxShadow: "0 25px 55px rgba(6,39,91,0.16)",
              }}
            >
              <span style={styles.icon}>{item.icon}</span>

              <h3 style={styles.number}>
                <AnimatedCounter
                  end={item.number}
                  duration={1900 + index * 220}
                />
              </h3>

              <p style={styles.label}>{item.label}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default ImpactSection;
