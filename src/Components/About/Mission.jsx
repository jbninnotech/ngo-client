import { motion } from "motion/react";

const Mission = () => {
  const values = [
    {
      icon: "⚖️",
      title: "Equal Opportunity",
      description:
        "Every student deserves access to education regardless of financial or social background.",
    },
    {
      icon: "🤝",
      title: "Compassion",
      description:
        "We serve students and communities with empathy, respect and responsibility.",
    },
    {
      icon: "🔍",
      title: "Transparency",
      description:
        "We maintain clarity and accountability in our programs, resources and impact.",
    },
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We use practical, digital and creative approaches to make education engaging.",
    },
  ];

  const styles = {
    section: {
      padding: "105px 6%",
      backgroundColor: "#FFFFFF",
    },

    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
    },

    storyGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(310px, 1fr))",
      alignItems: "center",
      gap: "65px",
      marginBottom: "100px",
    },

    imageWrapper: {
      position: "relative",
      padding: "12px",
      border: "3px solid #D6A12D",
      borderRadius: "26px",
    },

    image: {
      display: "block",
      width: "100%",
      height: "470px",
      objectFit: "cover",
      borderRadius: "18px",
    },

    badge: {
      display: "inline-block",
      marginBottom: "12px",
      color: "#2E7D32",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    title: {
      margin: "0 0 20px",
      color: "#06275B",
      fontSize: "clamp(32px, 5vw, 48px)",
      lineHeight: "1.17",
    },

    goldText: {
      color: "#C58A16",
    },

    paragraph: {
      margin: "0 0 19px",
      color: "#68778B",
      fontSize: "16px",
      lineHeight: "1.85",
    },

    missionGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "25px",
      marginBottom: "100px",
    },

    missionCard: {
      position: "relative",
      padding: "38px",
      overflow: "hidden",
      color: "#FFFFFF",
      background:
        "linear-gradient(145deg, #06275B, #031B42 65%, #123F2A)",
      borderRadius: "22px",
      boxShadow: "0 22px 55px rgba(6,39,91,0.20)",
    },

    missionIcon: {
      width: "65px",
      height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "23px",
      color: "#06275B",
      background:
        "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "18px",
      fontSize: "29px",
    },

    cardTitle: {
      margin: "0 0 14px",
      color: "#FFFFFF",
      fontSize: "26px",
    },

    cardText: {
      margin: 0,
      color: "#CCD8E7",
      fontSize: "15px",
      lineHeight: "1.8",
    },

    headingArea: {
      marginBottom: "48px",
      textAlign: "center",
    },

    headingBadge: {
      margin: "0 0 11px",
      color: "#2E7D32",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    headingTitle: {
      margin: "0 0 14px",
      color: "#06275B",
      fontSize: "clamp(32px, 5vw, 47px)",
    },

    headingText: {
      maxWidth: "680px",
      margin: "auto",
      color: "#68778B",
      lineHeight: "1.8",
    },

    valuesGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "23px",
    },

    valueCard: {
      padding: "31px 25px",
      textAlign: "center",
      background:
        "linear-gradient(145deg, #F7FAFE, #FFFFFF)",
      border: "1px solid #E1E9F2",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(6,39,91,0.08)",
    },

    valueIcon: {
      width: "63px",
      height: "63px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 19px",
      background:
        "linear-gradient(135deg, #EAF2FA, #E9F5E8)",
      borderRadius: "17px",
      fontSize: "28px",
    },

    valueTitle: {
      margin: "0 0 10px",
      color: "#06275B",
      fontSize: "18px",
    },

    valueDescription: {
      margin: 0,
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.7",
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        {/* Our Story */}
        <div style={styles.storyGrid}>
          <motion.div
            style={styles.imageWrapper}
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
              alt="Student receiving educational support"
              style={styles.image}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={styles.badge}>
              OUR STORY
            </span>

            <h2 style={styles.title}>
              Building futures through{" "}
              <span style={styles.goldText}>
                meaningful education
              </span>
            </h2>

            <p style={styles.paragraph}>
              Blanco Educational Academy was created with the
              belief that education can break cycles of poverty and
              create lasting opportunities.
            </p>

            <p style={styles.paragraph}>
              We work with students, parents, volunteers, teachers
              and community partners to provide academic support,
              digital learning, scholarships, career guidance and
              practical skills.
            </p>

            <p style={styles.paragraph}>
              Our goal is not only to help students complete their
              education, but also to help them develop confidence,
              independence and hope for their future.
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div style={styles.missionGrid}>
          <motion.article
            style={styles.missionCard}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              style={styles.missionIcon}
              whileHover={{
                rotate: 8,
                scale: 1.1,
              }}
            >
              🎯
            </motion.div>

            <h3 style={styles.cardTitle}>
              Our Mission
            </h3>

            <p style={styles.cardText}>
              To provide accessible, inclusive and practical
              educational support that empowers underserved
              students with knowledge, confidence and skills for a
              better future.
            </p>
          </motion.article>

          <motion.article
            style={styles.missionCard}
            initial={{ opacity: 0, y: 55 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            whileHover={{ y: -10 }}
          >
            <motion.div
              style={styles.missionIcon}
              whileHover={{
                rotate: -8,
                scale: 1.1,
              }}
            >
              👁️
            </motion.div>

            <h3 style={styles.cardTitle}>
              Our Vision
            </h3>

            <p style={styles.cardText}>
              A society where every child and young person has an
              equal opportunity to learn, grow and build an
              independent and meaningful life.
            </p>
          </motion.article>
        </div>

        {/* Values */}
        <div style={styles.headingArea}>
          <p style={styles.headingBadge}>
            OUR CORE VALUES
          </p>

          <h2 style={styles.headingTitle}>
            Principles that guide our work
          </h2>

          <p style={styles.headingText}>
            Our values shape how we support students, work with
            communities and use the resources entrusted to us.
          </p>
        </div>

        <div style={styles.valuesGrid}>
          {values.map((value, index) => (
            <motion.article
              key={value.title}
              style={styles.valueCard}
              initial={{
                opacity: 0,
                y: 45,
                scale: 0.94,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.025,
              }}
            >
              <motion.div
                style={styles.valueIcon}
                whileHover={{
                  rotate: 8,
                  scale: 1.12,
                }}
              >
                {value.icon}
              </motion.div>

              <h3 style={styles.valueTitle}>
                {value.title}
              </h3>

              <p style={styles.valueDescription}>
                {value.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;