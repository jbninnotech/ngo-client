import { motion } from "motion/react";

const stories = [
  {
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=900&q=85",
    category: "Student Support",
    title: "A Dream Supported",
    description:
      "Educational assistance and mentoring helped a young student continue school with confidence.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=900&q=85",
    category: "Volunteering",
    title: "Volunteers Creating Impact",
    description:
      "Our volunteers provide meaningful learning experiences through mentoring and community workshops.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=900&q=85",
    category: "Digital Education",
    title: "Learning Beyond Classrooms",
    description:
      "Digital programs introduce students to technology, creativity and important future-ready skills.",
  },
];

const styles = {
  section: {
    padding: "100px 6%",
    backgroundColor: "#F5F8FC",
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

  sectionTitle: {
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
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "28px",
  },

  card: {
    overflow: "hidden",
    backgroundColor: "#ffffff",
    border: "1px solid #E6ECF4",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(6,39,91,0.10)",
  },

  imageContainer: {
    position: "relative",
    height: "250px",
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
    left: "18px",
    bottom: "17px",
    padding: "7px 13px",
    color: "#ffffff",
    backgroundColor: "#2E7D32",
    borderRadius: "20px",
    fontSize: "10px",
    fontWeight: "750",
  },

  content: {
    padding: "26px",
  },

  title: {
    margin: "0 0 12px",
    color: "#06275B",
    fontSize: "21px",
  },

  storyText: {
    margin: "0 0 20px",
    color: "#68778B",
    fontSize: "14px",
    lineHeight: "1.75",
  },

  link: {
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
        <span style={styles.badge}>SUCCESS STORIES</span>

        <h2 style={styles.sectionTitle}>
          Education that transforms lives
        </h2>

        <p style={styles.description}>
          Every supported student represents a dream receiving the
          opportunity to grow.
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
                y: -12,
                boxShadow: "0 25px 60px rgba(6,39,91,0.17)",
              }}
            >
              <div style={styles.imageContainer}>
                <motion.img
                  src={story.image}
                  alt={story.title}
                  style={styles.image}
                  whileHover={{ scale: 1.09 }}
                  transition={{ duration: 0.5 }}
                />

                <span style={styles.category}>
                  {story.category}
                </span>
              </div>

              <div style={styles.content}>
                <h3 style={styles.title}>{story.title}</h3>
                <p style={styles.storyText}>{story.description}</p>

                <motion.a
                  href="/gallery"
                  style={styles.link}
                  whileHover={{ x: 6 }}
                >
                  Explore our gallery →
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