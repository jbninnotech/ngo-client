import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Gallery = () => {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedIndex, setSelectedIndex] =
    useState(null);

  const galleryItems = [
    {
      id: 1,
      category: "Education",
      title: "Learning Together",
      description:
        "Students participating in an interactive classroom learning session.",
      location: "Hyderabad",
      date: "August 2026",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 2,
      category: "Digital Learning",
      title: "Digital Literacy Workshop",
      description:
        "Students learning computer fundamentals and essential digital skills.",
      location: "Blanco Learning Centre",
      date: "July 2026",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 3,
      category: "Volunteering",
      title: "Volunteers Creating Impact",
      description:
        "Our volunteers supporting students through mentoring and educational activities.",
      location: "Hyderabad",
      date: "July 2026",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 4,
      category: "Scholarships",
      title: "Scholarship Recognition Day",
      description:
        "Celebrating deserving students who received educational scholarships.",
      location: "Community Hall",
      date: "June 2026",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 5,
      category: "STEM & Robotics",
      title: "Young Innovators Workshop",
      description:
        "Students exploring robotics, electronics, AI awareness and practical science.",
      location: "Blanco Innovation Lab",
      date: "June 2026",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 6,
      category: "Education",
      title: "School Kit Distribution",
      description:
        "Distributing school bags, notebooks, stationery and essential learning materials.",
      location: "Government School",
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 7,
      category: "Career Guidance",
      title: "Career Mentoring Session",
      description:
        "Professionals guiding students about careers, higher education and future skills.",
      location: "Hyderabad",
      date: "May 2026",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 8,
      category: "Community",
      title: "Community Reading Program",
      description:
        "Encouraging children to build reading habits through books and storytelling.",
      location: "Community Learning Centre",
      date: "April 2026",
      image:
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 9,
      category: "Environment",
      title: "Green School Initiative",
      description:
        "Students and volunteers planting trees and learning about environmental responsibility.",
      location: "Hyderabad",
      date: "March 2026",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 10,
      category: "Health",
      title: "Student Health Awareness",
      description:
        "A student health, hygiene, nutrition and well-being awareness program.",
      location: "Community Centre",
      date: "March 2026",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 11,
      category: "Digital Learning",
      title: "Learning Through Technology",
      description:
        "Students using digital tools to explore creative and interactive learning.",
      location: "Blanco Learning Centre",
      date: "February 2026",
      image:
        "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: 12,
      category: "Volunteering",
      title: "Volunteer Orientation",
      description:
        "Preparing volunteers to teach, mentor and support students effectively.",
      location: "Blanco Educational Academy",
      date: "February 2026",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=85",
    },
  ];

  const categories = [
    "All",
    ...new Set(
      galleryItems.map((item) => item.category)
    ),
  ];

  const visibleItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter(
          (item) =>
            item.category === activeCategory
        );

  const openImage = (index) => {
    setSelectedIndex(index);
  };

  const closeImage = () => {
    setSelectedIndex(null);
  };

  const showPrevious = (event) => {
    event.stopPropagation();

    setSelectedIndex((currentIndex) =>
      currentIndex === 0
        ? visibleItems.length - 1
        : currentIndex - 1
    );
  };

  const showNext = (event) => {
    event.stopPropagation();

    setSelectedIndex((currentIndex) =>
      currentIndex === visibleItems.length - 1
        ? 0
        : currentIndex + 1
    );
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#F6F8FC",
    },

    hero: {
      position: "relative",
      minHeight: "490px",
      padding: "175px 6% 100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: "hidden",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #031B42 0%, #06275B 55%, #123F2A 100%)",
    },

    heroGlowOne: {
      position: "absolute",
      top: "-190px",
      right: "-100px",
      width: "460px",
      height: "460px",
      borderRadius: "50%",
      backgroundColor: "rgba(218,165,50,0.16)",
      filter: "blur(25px)",
    },

    heroGlowTwo: {
      position: "absolute",
      bottom: "-230px",
      left: "-140px",
      width: "470px",
      height: "470px",
      borderRadius: "50%",
      backgroundColor: "rgba(46,125,50,0.20)",
      filter: "blur(30px)",
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      maxWidth: "850px",
    },

    heroBadge: {
      display: "inline-block",
      marginBottom: "20px",
      padding: "9px 18px",
      color: "#F1C25B",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(241,194,91,0.38)",
      borderRadius: "30px",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    heroTitle: {
      margin: "0 0 20px",
      color: "#FFFFFF",
      fontSize: "clamp(42px, 6vw, 68px)",
      lineHeight: "1.1",
    },

    goldText: {
      color: "#E0AA34",
    },

    heroDescription: {
      maxWidth: "720px",
      margin: "auto",
      color: "#CFDBEA",
      fontSize: "18px",
      lineHeight: "1.8",
    },

    gallerySection: {
      padding: "95px 6% 110px",
    },

    container: {
      width: "100%",
      maxWidth: "1300px",
      margin: "auto",
    },

    headingArea: {
      textAlign: "center",
    },

    smallHeading: {
      margin: "0 0 12px",
      color: "#2E7D32",
      fontSize: "13px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    sectionTitle: {
      margin: "0 0 14px",
      color: "#06275B",
      fontSize: "clamp(32px, 5vw, 48px)",
    },

    sectionDescription: {
      maxWidth: "720px",
      margin: "auto",
      color: "#68778B",
      fontSize: "16px",
      lineHeight: "1.8",
    },

    filters: {
      margin: "38px auto 50px",
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      flexWrap: "wrap",
    },

    filterButton: {
      padding: "11px 18px",
      color: "#52647B",
      backgroundColor: "#FFFFFF",
      border: "1px solid #DCE4EF",
      borderRadius: "25px",
      fontSize: "13px",
      fontWeight: "750",
      cursor: "pointer",
    },

    activeFilter: {
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #06275B, #2E7D32)",
      borderColor: "transparent",
      boxShadow: "0 9px 22px rgba(6,39,91,0.20)",
    },

    galleryGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(280px, 1fr))",
      gridAutoRows: "290px",
      gap: "20px",
    },

    galleryCard: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E1E8F1",
      borderRadius: "20px",
      boxShadow: "0 17px 45px rgba(6,39,91,0.10)",
      cursor: "pointer",
    },

    galleryImage: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    imageOverlay: {
      position: "absolute",
      inset: 0,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      padding: "24px",
      color: "#FFFFFF",
      background:
        "linear-gradient(180deg, transparent 30%, rgba(3,27,66,0.92) 100%)",
    },

    imageCategory: {
      position: "absolute",
      top: "17px",
      left: "17px",
      padding: "7px 13px",
      color: "#06275B",
      backgroundColor: "rgba(255,255,255,0.94)",
      borderRadius: "20px",
      fontSize: "10px",
      fontWeight: "800",
    },

    zoomIcon: {
      position: "absolute",
      top: "17px",
      right: "17px",
      width: "42px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      backgroundColor: "rgba(3,27,66,0.65)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "50%",
      fontSize: "18px",
      backdropFilter: "blur(8px)",
    },

    imageTitle: {
      margin: "0 0 7px",
      fontSize: "20px",
      lineHeight: "1.3",
    },

    imageMeta: {
      margin: 0,
      color: "#D5DFEC",
      fontSize: "12px",
    },

    ctaSection: {
      padding: "0 6% 105px",
    },

    cta: {
      maxWidth: "1200px",
      margin: "auto",
      padding: "70px 7%",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #1F6A31, #06275B 75%)",
      borderRadius: "28px",
      boxShadow: "0 25px 65px rgba(6,39,91,0.20)",
    },

    ctaTitle: {
      margin: "0 0 15px",
      color: "#FFFFFF",
      fontSize: "clamp(30px, 5vw, 48px)",
    },

    ctaText: {
      maxWidth: "650px",
      margin: "0 auto 27px",
      color: "#D5E0ED",
      lineHeight: "1.8",
    },

    ctaButton: {
      display: "inline-block",
      padding: "14px 26px",
      color: "#06275B",
      background:
        "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "800",
    },

    lightbox: {
      position: "fixed",
      inset: 0,
      zIndex: 3000,
      padding: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(2,13,32,0.92)",
      backdropFilter: "blur(12px)",
    },

    lightboxContent: {
      position: "relative",
      width: "100%",
      maxWidth: "1050px",
      maxHeight: "92vh",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
      borderRadius: "22px",
      boxShadow: "0 35px 100px rgba(0,0,0,0.50)",
    },

    largeImage: {
      display: "block",
      width: "100%",
      height: "min(65vh, 650px)",
      objectFit: "cover",
    },

    caption: {
      padding: "25px 30px",
      backgroundColor: "#FFFFFF",
    },

    captionCategory: {
      margin: "0 0 7px",
      color: "#2E7D32",
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "1.3px",
    },

    captionTitle: {
      margin: "0 0 8px",
      color: "#06275B",
      fontSize: "24px",
    },

    captionDescription: {
      margin: "0 0 8px",
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.7",
    },

    captionMeta: {
      margin: 0,
      color: "#C18413",
      fontSize: "12px",
      fontWeight: "750",
    },

    closeButton: {
      position: "absolute",
      top: "15px",
      right: "15px",
      zIndex: 5,
      width: "42px",
      height: "42px",
      color: "#FFFFFF",
      backgroundColor: "rgba(3,27,66,0.80)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "50%",
      fontSize: "20px",
      cursor: "pointer",
    },

    previousButton: {
      position: "absolute",
      top: "42%",
      left: "16px",
      zIndex: 5,
      width: "48px",
      height: "48px",
      color: "#FFFFFF",
      backgroundColor: "rgba(3,27,66,0.78)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "50%",
      fontSize: "23px",
      cursor: "pointer",
    },

    nextButton: {
      position: "absolute",
      top: "42%",
      right: "16px",
      zIndex: 5,
      width: "48px",
      height: "48px",
      color: "#FFFFFF",
      backgroundColor: "rgba(3,27,66,0.78)",
      border: "1px solid rgba(255,255,255,0.25)",
      borderRadius: "50%",
      fontSize: "23px",
      cursor: "pointer",
    },
  };

  const selectedItem =
    selectedIndex !== null
      ? visibleItems[selectedIndex]
      : null;

  return (
    <main style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <motion.div
          style={styles.heroGlowOne}
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
          style={styles.heroGlowTwo}
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

        <motion.div
          style={styles.heroContent}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span style={styles.heroBadge}>
            OUR GALLERY
          </span>

          <h1 style={styles.heroTitle}>
            Moments that show{" "}
            <span style={styles.goldText}>
              meaningful impact.
            </span>
          </h1>

          <p style={styles.heroDescription}>
            Explore moments from our educational programs,
            workshops, community drives and student-development
            initiatives.
          </p>
        </motion.div>
      </section>

      {/* Gallery */}
      <section style={styles.gallerySection}>
        <div style={styles.container}>
          <div style={styles.headingArea}>
            <p style={styles.smallHeading}>
              STORIES THROUGH PICTURES
            </p>

            <h2 style={styles.sectionTitle}>
              Our journey in action
            </h2>

            <p style={styles.sectionDescription}>
              Every photograph represents students learning,
              volunteers serving and communities growing together.
            </p>
          </div>

          <div style={styles.filters}>
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setSelectedIndex(null);
                }}
                style={{
                  ...styles.filterButton,
                  ...(activeCategory === category
                    ? styles.activeFilter
                    : {}),
                }}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeCategory}
            style={styles.galleryGrid}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {visibleItems.map((item, index) => (
              <motion.article
                key={item.id}
                style={styles.galleryCard}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.06,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.015,
                  boxShadow:
                    "0 28px 65px rgba(6,39,91,0.18)",
                }}
                onClick={() => openImage(index)}
              >
                <motion.img
                  src={item.image}
                  alt={item.title}
                  style={styles.galleryImage}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                />

                <div style={styles.imageOverlay}>
                  <span style={styles.imageCategory}>
                    {item.category}
                  </span>

                  <motion.span
                    style={styles.zoomIcon}
                    whileHover={{
                      rotate: 8,
                      scale: 1.1,
                    }}
                  >
                    ⛶
                  </motion.span>

                  <h3 style={styles.imageTitle}>
                    {item.title}
                  </h3>

                  <p style={styles.imageMeta}>
                    📍 {item.location} &nbsp; • &nbsp;
                    {item.date}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <motion.div
          style={styles.cta}
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.ctaTitle}>
            Become part of our next story.
          </h2>

          <p style={styles.ctaText}>
            Join our volunteer community and help us create more
            meaningful educational experiences for students.
          </p>

          <motion.a
            href="/volunteer"
            style={styles.ctaButton}
            whileHover={{ y: -5, scale: 1.04 }}
          >
            Join as a Volunteer →
          </motion.a>
        </motion.div>
      </section>

      {/* Full-screen lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            style={styles.lightbox}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImage}
          >
            <motion.div
              style={styles.lightboxContent}
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.92,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 30,
                scale: 0.94,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                type="button"
                style={styles.closeButton}
                onClick={closeImage}
              >
                ×
              </button>

              <button
                type="button"
                style={styles.previousButton}
                onClick={showPrevious}
                aria-label="Previous image"
              >
                ‹
              </button>

              <button
                type="button"
                style={styles.nextButton}
                onClick={showNext}
                aria-label="Next image"
              >
                ›
              </button>

              <AnimatePresence mode="wait">
                <motion.img
                  key={selectedItem.id}
                  src={selectedItem.image}
                  alt={selectedItem.title}
                  style={styles.largeImage}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                />
              </AnimatePresence>

              <div style={styles.caption}>
                <p style={styles.captionCategory}>
                  {selectedItem.category}
                </p>

                <h2 style={styles.captionTitle}>
                  {selectedItem.title}
                </h2>

                <p style={styles.captionDescription}>
                  {selectedItem.description}
                </p>

                <p style={styles.captionMeta}>
                  📍 {selectedItem.location} &nbsp; • &nbsp;
                  {selectedItem.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Gallery;