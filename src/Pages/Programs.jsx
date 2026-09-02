import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Programs = () => {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedProgram, setSelectedProgram] =
    useState(null);

    const [modalMode, setModalMode] =
  useState("details");

  const [applicationSubmitted, setApplicationSubmitted] =
    useState(false);

  const [formData, setFormData] = useState({
    studentName: "",
    age: "",
    phone: "",
    email: "",
    location: "",
  });

  const programs = [
    {
      id: 1,
      category: "Academic Support",
      icon: "📚",
      title: "Free Tuition & Learning Support",
      description:
        "After-school academic support for students who need additional guidance in mathematics, science, English and other subjects.",
      ageGroup: "Classes 5–10",
      duration: "6 Months",
      mode: "Offline",
      seats: 60,
      enrolled: 42,
      schedule: "Monday–Friday",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Subject-wise academic guidance",
        "Weekly assessments",
        "Homework support",
        "Parent progress updates",
      ],
    },
    {
      id: 2,
      category: "Technology",
      icon: "💻",
      title: "Digital Literacy Program",
      description:
        "Practical computer education covering basic computer operations, internet usage, online safety and digital communication.",
      ageGroup: "Ages 12–18",
      duration: "12 Weeks",
      mode: "Hybrid",
      seats: 40,
      enrolled: 29,
      schedule: "Saturday & Sunday",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Computer fundamentals",
        "Internet and email",
        "Online safety",
        "Practical assignments",
      ],
    },
    {
      id: 3,
      category: "Scholarships",
      icon: "🎓",
      title: "Student Scholarship Program",
      description:
        "Financial assistance for deserving students who demonstrate academic potential but face financial challenges.",
      ageGroup: "School & College",
      duration: "Academic Year",
      mode: "Financial Support",
      seats: 50,
      enrolled: 34,
      schedule: "Annual Selection",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
      features: [
        "School or college fee assistance",
        "Books and learning materials",
        "Academic mentoring",
        "Performance review",
      ],
    },
    {
      id: 4,
      category: "Career Development",
      icon: "🧭",
      title: "Career Guidance & Mentoring",
      description:
        "Helping students understand career opportunities, higher education options and the skills required for their future.",
      ageGroup: "Ages 15–22",
      duration: "8 Weeks",
      mode: "Online & Offline",
      seats: 80,
      enrolled: 57,
      schedule: "Every Saturday",
      image:
        "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Career-awareness sessions",
        "One-to-one mentoring",
        "Resume and interview guidance",
        "Higher-education counselling",
      ],
    },
    {
      id: 5,
      category: "STEM",
      icon: "🤖",
      title: "STEM, AI & Robotics Program",
      description:
        "Hands-on learning in science, electronics, robotics, coding and artificial intelligence through practical models.",
      ageGroup: "Ages 10–18",
      duration: "10 Weeks",
      mode: "Offline",
      seats: 45,
      enrolled: 36,
      schedule: "Weekend Program",
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Basic electronics",
        "Robotics models",
        "Introduction to coding",
        "AI-awareness activities",
      ],
    },
    {
      id: 6,
      category: "Skill Development",
      icon: "🗣️",
      title: "Spoken English & Communication",
      description:
        "Helping students build confidence in spoken English, public speaking, presentations and professional communication.",
      ageGroup: "Ages 13–22",
      duration: "12 Weeks",
      mode: "Hybrid",
      seats: 50,
      enrolled: 31,
      schedule: "Three Days a Week",
      image:
        "https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Spoken English practice",
        "Group discussions",
        "Public speaking",
        "Interview communication",
      ],
    },
    {
      id: 7,
      category: "Skill Development",
      icon: "🛠️",
      title: "Employability Skills Training",
      description:
        "Workplace-readiness training for college students and young adults preparing for internships and employment.",
      ageGroup: "Ages 18–25",
      duration: "8 Weeks",
      mode: "Hybrid",
      seats: 70,
      enrolled: 48,
      schedule: "Flexible Batches",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Resume preparation",
        "Aptitude and reasoning",
        "Mock interviews",
        "Workplace etiquette",
      ],
    },
    {
      id: 8,
      category: "Teacher Development",
      icon: "👩‍🏫",
      title: "Volunteer Teacher Training",
      description:
        "Training volunteers and community teachers to deliver engaging, inclusive and student-friendly learning sessions.",
      ageGroup: "Teachers & Volunteers",
      duration: "4 Weeks",
      mode: "Offline",
      seats: 35,
      enrolled: 22,
      schedule: "Weekend Sessions",
      image:
        "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85",
      features: [
        "Teaching methodologies",
        "Classroom engagement",
        "Student assessment",
        "Child safety awareness",
      ],
    },
  ];

  const categories = [
    "All",
    ...new Set(
      programs.map((program) => program.category)
    ),
  ];

  const visiblePrograms =
    activeCategory === "All"
      ? programs
      : programs.filter(
          (program) =>
            program.category === activeCategory
        );

  const openDetails = (program) => {
  setSelectedProgram(program);
  setModalMode("details");
  setApplicationSubmitted(false);
};

const openApplication = (program) => {
  setSelectedProgram(program);
  setModalMode("apply");
  setApplicationSubmitted(false);

  setFormData({
    studentName: "",
    age: "",
    phone: "",
    email: "",
    location: "",
  });
};

  const closeApplication = () => {
    setSelectedProgram(null);
    setApplicationSubmitted(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setApplicationSubmitted(true);
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

    programsSection: {
      padding: "95px 6% 110px",
    },

    container: {
      width: "100%",
      maxWidth: "1250px",
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

    programGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(330px, 1fr))",
      gap: "29px",
    },

    card: {
      position: "relative",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E1E8F1",
      borderRadius: "23px",
      boxShadow: "0 18px 48px rgba(6,39,91,0.10)",
    },

    imageContainer: {
      position: "relative",
      height: "235px",
      overflow: "hidden",
    },

    programImage: {
      width: "100%",
      height: "100%",
      display: "block",
      objectFit: "cover",
    },

    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, transparent 42%, rgba(3,27,66,0.82) 100%)",
    },

    category: {
      position: "absolute",
      top: "17px",
      left: "17px",
      padding: "7px 13px",
      color: "#06275B",
      backgroundColor: "rgba(255,255,255,0.94)",
      borderRadius: "20px",
      fontSize: "11px",
      fontWeight: "800",
    },

    programIcon: {
      position: "absolute",
      right: "18px",
      bottom: "16px",
      width: "51px",
      height: "51px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#FFFFFF",
      borderRadius: "15px",
      fontSize: "25px",
      boxShadow: "0 10px 24px rgba(0,0,0,0.18)",
    },

    content: {
      padding: "28px",
    },

    programTitle: {
      margin: "0 0 13px",
      color: "#06275B",
      fontSize: "22px",
      lineHeight: "1.35",
    },

    programDescription: {
      minHeight: "82px",
      margin: "0 0 22px",
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.75",
    },

    informationGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "10px",
      marginBottom: "20px",
    },

    informationBox: {
      padding: "12px",
      backgroundColor: "#F7F9FC",
      borderRadius: "10px",
    },

    informationLabel: {
      margin: "0 0 4px",
      color: "#8290A2",
      fontSize: "10px",
      fontWeight: "700",
      textTransform: "uppercase",
    },

    informationValue: {
      margin: 0,
      color: "#17325B",
      fontSize: "13px",
      fontWeight: "800",
    },

    seatsArea: {
      marginBottom: "22px",
    },

    seatsHeader: {
      display: "flex",
      justifyContent: "space-between",
      gap: "15px",
      marginBottom: "8px",
      color: "#607187",
      fontSize: "12px",
      fontWeight: "700",
    },

    progressTrack: {
      height: "8px",
      overflow: "hidden",
      backgroundColor: "#E4EAF1",
      borderRadius: "10px",
    },

    progressBar: {
      height: "100%",
      background:
        "linear-gradient(90deg, #2E7D32, #D6A12D)",
      borderRadius: "10px",
    },

    actionButtons: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "10px",
    },

    detailsButton: {
      padding: "13px 14px",
      color: "#06275B",
      backgroundColor: "#EEF3F9",
      border: "1px solid #DCE5F0",
      borderRadius: "9px",
      fontSize: "13px",
      fontWeight: "800",
      cursor: "pointer",
    },

    applyButton: {
      padding: "13px 14px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #06275B, #124E82)",
      border: "none",
      borderRadius: "9px",
      fontSize: "13px",
      fontWeight: "800",
      cursor: "pointer",
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

    overlay: {
      position: "fixed",
      inset: 0,
      zIndex: 2000,
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(3,20,48,0.80)",
      backdropFilter: "blur(8px)",
    },

    modal: {
      width: "100%",
      maxWidth: "540px",
      maxHeight: "90vh",
      overflowY: "auto",
      padding: "35px",
      backgroundColor: "#FFFFFF",
      borderRadius: "22px",
      boxShadow: "0 30px 90px rgba(0,0,0,0.35)",
    },

    modalHeader: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "20px",
      marginBottom: "25px",
    },

    modalTitle: {
      margin: "0 0 6px",
      color: "#06275B",
      fontSize: "25px",
    },

    modalProgram: {
      margin: 0,
      color: "#C18413",
      fontSize: "14px",
      fontWeight: "750",
    },

    closeButton: {
      width: "36px",
      height: "36px",
      flexShrink: 0,
      color: "#06275B",
      backgroundColor: "#EDF2F8",
      border: "none",
      borderRadius: "50%",
      fontSize: "18px",
      cursor: "pointer",
    },

    featureList: {
      display: "grid",
      gap: "11px",
      margin: "0 0 25px",
      padding: 0,
      listStyle: "none",
    },

    feature: {
      display: "flex",
      alignItems: "center",
      gap: "11px",
      color: "#52647A",
      fontSize: "14px",
    },

    featureCheck: {
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#FFFFFF",
      backgroundColor: "#2E7D32",
      borderRadius: "50%",
      fontSize: "12px",
    },

    form: {
      display: "grid",
      gap: "17px",
    },

    field: {
      display: "grid",
      gap: "7px",
    },

    label: {
      color: "#17325B",
      fontSize: "13px",
      fontWeight: "800",
    },

    input: {
      width: "100%",
      padding: "14px 15px",
      color: "#17325B",
      backgroundColor: "#F7F9FC",
      border: "1px solid #DCE4EF",
      borderRadius: "9px",
      outline: "none",
      fontSize: "14px",
    },

    submitButton: {
      width: "100%",
      padding: "15px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #D7A12D, #AD710B)",
      border: "none",
      borderRadius: "10px",
      fontWeight: "800",
      cursor: "pointer",
    },

    successArea: {
      padding: "20px 5px",
      textAlign: "center",
    },

    successIcon: {
      width: "72px",
      height: "72px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 18px",
      color: "#FFFFFF",
      backgroundColor: "#2E7D32",
      borderRadius: "50%",
      fontSize: "32px",
    },
  };

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
            EDUCATIONAL PROGRAMS
          </span>

          <h1 style={styles.heroTitle}>
            Learn today.{" "}
            <span style={styles.goldText}>
              Lead tomorrow.
            </span>
          </h1>

          <p style={styles.heroDescription}>
            Explore educational programs created to help students
            gain knowledge, confidence, practical skills and equal
            opportunities for their future.
          </p>
        </motion.div>
      </section>

      {/* Programs */}
      <section style={styles.programsSection}>
        <div style={styles.container}>
          <div style={styles.headingArea}>
            <p style={styles.smallHeading}>
              DISCOVER OUR PROGRAMS
            </p>

            <h2 style={styles.sectionTitle}>
              Education for every stage
            </h2>

            <p style={styles.sectionDescription}>
              Select a suitable program and submit an application
              for educational support or training.
            </p>
          </div>

          <div style={styles.filters}>
            {categories.map((category) => (
              <motion.button
                key={category}
                type="button"
                onClick={() =>
                  setActiveCategory(category)
                }
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
            style={styles.programGrid}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {visiblePrograms.map((program, index) => {
              const percentage = Math.min(
                Math.round(
                  (program.enrolled / program.seats) *
                    100
                ),
                100
              );

              return (
                <motion.article
                  key={program.id}
                  style={styles.card}
                  initial={{ opacity: 0, y: 55 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: index * 0.08,
                  }}
                  whileHover={{
                    y: -12,
                    boxShadow:
                      "0 30px 70px rgba(6,39,91,0.17)",
                  }}
                >
                  <div style={styles.imageContainer}>
                    <motion.img
                      src={program.image}
                      alt={program.title}
                      style={styles.programImage}
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                    />

                    <div style={styles.imageOverlay} />

                    <span style={styles.category}>
                      {program.category}
                    </span>

                    <motion.div
                      style={styles.programIcon}
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {program.icon}
                    </motion.div>
                  </div>

                  <div style={styles.content}>
                    <h3 style={styles.programTitle}>
                      {program.title}
                    </h3>

                    <p style={styles.programDescription}>
                      {program.description}
                    </p>

                    <div style={styles.informationGrid}>
                      <div style={styles.informationBox}>
                        <p style={styles.informationLabel}>
                          Age Group
                        </p>

                        <p style={styles.informationValue}>
                          {program.ageGroup}
                        </p>
                      </div>

                      <div style={styles.informationBox}>
                        <p style={styles.informationLabel}>
                          Duration
                        </p>

                        <p style={styles.informationValue}>
                          {program.duration}
                        </p>
                      </div>

                      <div style={styles.informationBox}>
                        <p style={styles.informationLabel}>
                          Mode
                        </p>

                        <p style={styles.informationValue}>
                          {program.mode}
                        </p>
                      </div>

                      <div style={styles.informationBox}>
                        <p style={styles.informationLabel}>
                          Schedule
                        </p>

                        <p style={styles.informationValue}>
                          {program.schedule}
                        </p>
                      </div>
                    </div>

                    <div style={styles.seatsArea}>
                      <div style={styles.seatsHeader}>
                        <span>
                          {program.enrolled} enrolled
                        </span>

                        <span>
                          {program.seats} total seats
                        </span>
                      </div>

                      <div style={styles.progressTrack}>
                        <motion.div
                          style={styles.progressBar}
                          initial={{ width: 0 }}
                          whileInView={{
                            width: `${percentage}%`,
                          }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 1.2,
                            delay: 0.2,
                          }}
                        />
                      </div>
                    </div>

                    <div style={styles.actionButtons}>
  <motion.button
    type="button"
    style={styles.detailsButton}
    onClick={() => openDetails(program)}
    whileHover={{
      y: -3,
      color: "#FFFFFF",
      backgroundColor: "#2E7D32",
      borderColor: "#2E7D32",
    }}
    whileTap={{ scale: 0.97 }}
  >
    View Details
  </motion.button>

  <motion.button
    type="button"
    style={styles.applyButton}
    onClick={() => openApplication(program)}
    whileHover={{
      y: -3,
      background:
        "linear-gradient(135deg, #2E7D32, #174A26)",
    }}
    whileTap={{ scale: 0.97 }}
  >
    Apply Now →
  </motion.button>
</div>
                  </div>
                </motion.article>
              );
            })}
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
            Not sure which program is right for you?
          </h2>

          <p style={styles.ctaText}>
            Contact our team and we will help you find a suitable
            educational program based on your goals and eligibility.
          </p>

          <motion.a
            href="/contact"
            style={styles.ctaButton}
            whileHover={{ y: -5, scale: 1.04 }}
          >
            Speak to Our Team →
          </motion.a>
        </motion.div>
      </section>

      {/* Application modal */}
      <AnimatePresence>
        {selectedProgram && (
          <motion.div
            style={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeApplication}
          >
            <motion.div
              style={styles.modal}
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
              {modalMode === "details" ? (
  /* View Details content */
  <>
    <div style={styles.modalHeader}>
      <div>
        <p
          style={{
            margin: "0 0 7px",
            color: "#2E7D32",
            fontSize: "12px",
            fontWeight: "800",
            letterSpacing: "1.4px",
          }}
        >
          {selectedProgram.category}
        </p>

        <h2 style={styles.modalTitle}>
          {selectedProgram.title}
        </h2>

        <p style={styles.modalProgram}>
          Complete program information
        </p>
      </div>

      <button
        type="button"
        style={styles.closeButton}
        onClick={closeApplication}
      >
        ×
      </button>
    </div>

    <motion.div
      style={{
        position: "relative",
        height: "210px",
        marginBottom: "25px",
        overflow: "hidden",
        borderRadius: "16px",
      }}
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <img
        src={selectedProgram.image}
        alt={selectedProgram.title}
        style={{
          width: "100%",
          height: "100%",
          display: "block",
          objectFit: "cover",
        }}
      />

      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, transparent 35%, rgba(3,27,66,0.75))",
        }}
      />

      <motion.div
        style={{
          position: "absolute",
          right: "18px",
          bottom: "16px",
          width: "53px",
          height: "53px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#FFFFFF",
          borderRadius: "15px",
          fontSize: "26px",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.20)",
        }}
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {selectedProgram.icon}
      </motion.div>
    </motion.div>

    <p
      style={{
        margin: "0 0 25px",
        color: "#637389",
        fontSize: "15px",
        lineHeight: "1.8",
      }}
    >
      {selectedProgram.description}
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(2, minmax(0, 1fr))",
        gap: "11px",
        marginBottom: "27px",
      }}
    >
      {[
        {
          label: "Age Group",
          value: selectedProgram.ageGroup,
          icon: "👥",
        },
        {
          label: "Duration",
          value: selectedProgram.duration,
          icon: "📅",
        },
        {
          label: "Learning Mode",
          value: selectedProgram.mode,
          icon: "💻",
        },
        {
          label: "Schedule",
          value: selectedProgram.schedule,
          icon: "🕐",
        },
      ].map((item) => (
        <div
          key={item.label}
          style={{
            padding: "15px",
            background:
              "linear-gradient(145deg, #F6F9FD, #FFFFFF)",
            border: "1px solid #E1E8F1",
            borderRadius: "12px",
          }}
        >
          <span
            style={{
              display: "block",
              marginBottom: "7px",
              fontSize: "19px",
            }}
          >
            {item.icon}
          </span>

          <p
            style={{
              margin: "0 0 4px",
              color: "#8290A2",
              fontSize: "10px",
              fontWeight: "800",
              textTransform: "uppercase",
            }}
          >
            {item.label}
          </p>

          <p
            style={{
              margin: 0,
              color: "#06275B",
              fontSize: "13px",
              fontWeight: "800",
            }}
          >
            {item.value}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginBottom: "27px",
        padding: "21px",
        backgroundColor: "#F7FAF8",
        border: "1px solid #DCEBDD",
        borderRadius: "14px",
      }}
    >
      <h3
        style={{
          margin: "0 0 16px",
          color: "#06275B",
          fontSize: "17px",
        }}
      >
        What students will receive
      </h3>

      <ul style={styles.featureList}>
        {selectedProgram.features.map((feature) => (
          <li
            key={feature}
            style={styles.feature}
          >
            <span style={styles.featureCheck}>
              ✓
            </span>

            {feature}
          </li>
        ))}
      </ul>
    </div>

    <div
      style={{
        marginBottom: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "15px",
          marginBottom: "9px",
          color: "#617287",
          fontSize: "12px",
          fontWeight: "700",
        }}
      >
        <span>
          {selectedProgram.enrolled} students enrolled
        </span>

        <span>
          {selectedProgram.seats -
            selectedProgram.enrolled}{" "}
          seats available
        </span>
      </div>

      <div style={styles.progressTrack}>
        <motion.div
          style={{
            ...styles.progressBar,
            width: `${
              (selectedProgram.enrolled /
                selectedProgram.seats) *
              100
            }%`,
          }}
          initial={{ width: 0 }}
          animate={{
            width: `${
              (selectedProgram.enrolled /
                selectedProgram.seats) *
              100
            }%`,
          }}
          transition={{ duration: 1.2 }}
        />
      </div>
    </div>

    <motion.button
      type="button"
      style={styles.submitButton}
      onClick={() => {
        setModalMode("apply");
        setApplicationSubmitted(false);
      }}
      whileHover={{
        y: -3,
        scale: 1.01,
        background:
          "linear-gradient(135deg, #2E7D32, #174A26)",
      }}
      whileTap={{ scale: 0.97 }}
    >
      Apply for This Program →
    </motion.button>
  </>
) : !applicationSubmitted ? (
  /* Apply Now form */
  <>
    <div style={styles.modalHeader}>
      <div>
        <h2 style={styles.modalTitle}>
          Program Application
        </h2>

        <p style={styles.modalProgram}>
          {selectedProgram.title}
        </p>
      </div>

      <button
        type="button"
        style={styles.closeButton}
        onClick={closeApplication}
      >
        ×
      </button>
    </div>

    <ul style={styles.featureList}>
      {selectedProgram.features.map((feature) => (
        <li
          key={feature}
          style={styles.feature}
        >
          <span style={styles.featureCheck}>
            ✓
          </span>

          {feature}
        </li>
      ))}
    </ul>

    <form
      style={styles.form}
      onSubmit={handleSubmit}
    >
      <div style={styles.field}>
        <label
          style={styles.label}
          htmlFor="student-name"
        >
          Student Name *
        </label>

        <input
          id="student-name"
          name="studentName"
          type="text"
          value={formData.studentName}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter the student name"
          required
        />
      </div>

      <div style={styles.field}>
        <label
          style={styles.label}
          htmlFor="student-age"
        >
          Age *
        </label>

        <input
          id="student-age"
          name="age"
          type="number"
          min="5"
          max="70"
          value={formData.age}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter age"
          required
        />
      </div>

      <div style={styles.field}>
        <label
          style={styles.label}
          htmlFor="student-phone"
        >
          Phone Number *
        </label>

        <input
          id="student-phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          style={styles.input}
          placeholder="+91 98765 43210"
          required
        />
      </div>

      <div style={styles.field}>
        <label
          style={styles.label}
          htmlFor="student-email"
        >
          Email Address
        </label>

        <input
          id="student-email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter email address"
        />
      </div>

      <div style={styles.field}>
        <label
          style={styles.label}
          htmlFor="student-location"
        >
          Location *
        </label>

        <input
          id="student-location"
          name="location"
          type="text"
          value={formData.location}
          onChange={handleChange}
          style={styles.input}
          placeholder="Enter your city or area"
          required
        />
      </div>

      <motion.button
        type="submit"
        style={styles.submitButton}
        whileHover={{
          y: -3,
          scale: 1.01,
        }}
        whileTap={{ scale: 0.97 }}
      >
        Submit Application
      </motion.button>
    </form>
  </>
) : (
  /* Application success */
  <motion.div
    style={styles.successArea}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
  >
    <div style={styles.successIcon}>✓</div>

    <h2 style={styles.modalTitle}>
      Application Submitted!
    </h2>

    <p
      style={{
        color: "#68778B",
        lineHeight: "1.7",
      }}
    >
      Your demo application for{" "}
      <strong>{selectedProgram.title}</strong>{" "}
      has been submitted successfully.
    </p>

    <motion.button
      type="button"
      style={styles.submitButton}
      onClick={closeApplication}
      whileHover={{ y: -3 }}
    >
      Done
    </motion.button>
  </motion.div>
)}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Programs;