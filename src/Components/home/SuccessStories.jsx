import { motion } from "motion/react";

const stories = [
  {
    image:
      "https://res.cloudinary.com/yozeshlg/image/upload/v1793091348/WhatsApp_Image_2026-10-26_at_11.44.18_AM.jpg",
    category: "Student Support",
    title: "A Dream Supported",
    description:
      "Educational assistance and mentoring helped a young student continue school with confidence.",
  },
  {
    image:
      "https://res.cloudinary.com/yozeshlg/image/upload/v1793091567/WhatsApp_Image_2026-10-26_at_11.44.32_AM.jpg",
    category: "Volunteering",
    title: "Volunteers Creating Impact",
    description:
      "Our volunteers provide meaningful learning experiences through mentoring and community workshops.",
  },
  {
    image:
      "https://res.cloudinary.com/yozeshlg/image/upload/v1793091626/WhatsApp_Image_2026-10-26_at_11.44.26_AM.jpg",
    category: "Digital Education",
    title: "Learning Beyond Classrooms",
    description:
      "Digital programs introduce students to technology, creativity and important future-ready skills.",
  },
];


const styles = {
  section: {
    padding: "70px 6%",
    backgroundColor: "#F5F8FC",
  },

  container: {
    width: "100%",
    maxWidth: "1100px",
    margin: "0 auto",
  },

  badge: {
    display: "table",
    margin: "0 auto 14px",
    padding: "7px 16px",
    color: "#2E7D32",
    backgroundColor: "#EAF5E9",
    border: "1px solid #CFE7CC",
    borderRadius: "30px",
    fontSize: "12px",
    fontWeight: "800",
    letterSpacing: "1.8px",
  },

  sectionTitle: {
    maxWidth: "780px",
    margin: "0 auto 12px",
    color: "#06275B",
    textAlign: "center",
    fontSize: "clamp(22px, 5vw, 28px)",
  },

  description: {
    maxWidth: "620px",
    margin: "0 auto 40px",
    color: "#68778B",
    textAlign: "center",
    fontSize: "15px",
    lineHeight: "1.7",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "22px",
  },

  card: {
    overflow: "hidden",
    backgroundColor: "#ffffff",
    border: "1px solid #E6ECF4",
    borderRadius: "16px",
    boxShadow: "0 10px 28px rgba(6,39,91,0.08)",
  },

  imageContainer: {
    position: "relative",
    height: "190px",
    overflow: "hidden",
  },

  image: {
    display: "block",
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  category: {
    position: "absolute",
    left: "14px",
    bottom: "14px",
    padding: "6px 12px",
    color: "#ffffff",
    backgroundColor: "#2E7D32",
    borderRadius: "20px",
    fontSize: "10px",
    fontWeight: "700",
  },

  content: {
    padding: "20px",
  },

  title: {
    margin: "0 0 8px",
    color: "#06275B",
    fontSize: "18px",
  },

  storyText: {
    margin: "0 0 14px",
    color: "#68778B",
    fontSize: "13px",
    lineHeight: "1.6",
  },

  link: {
    display: "inline-block",
    color: "#C18413",
    textDecoration: "none",
    fontSize: "13px",
    fontWeight: "800",
  },
};

const SuccessStories = () => {
  return (
    <motion.section
      style={styles.section}
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div style={styles.container}>
        <span style={styles.badge}>STORIES OF CHANGE</span>

        <h2 style={styles.sectionTitle}>Every child has a story</h2>

        <p style={styles.description}>
          Real lives changed because someone believed in them.
        </p>

        <div style={styles.grid}>
          {stories.map((story, index) => (
            <motion.article
              key={story.title}
              style={styles.card}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.14,
              }}
              whileHover={{
                y: -8,
                boxShadow: "0 20px 44px rgba(6,39,91,0.15)",
              }}
            >
              <div style={styles.imageContainer}>
                <motion.img
                  src={story.image}
                  alt={story.title}
                  style={styles.image}
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                <span style={styles.category}>{story.category}</span>
              </div>

              <div style={styles.content}>
                <h3 style={styles.title}>{story.title}</h3>
                <p style={styles.storyText}>{story.description}</p>

                <motion.a
                  href="/gallery"
                  style={styles.link}
                  whileHover={{ x: 6 }}
                >
                  Read more →
                </motion.a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SuccessStories;