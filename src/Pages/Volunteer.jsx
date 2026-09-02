import { useState } from "react";
import { motion } from "motion/react";

const Volunteer = () => {
  const [selectedRole, setSelectedRole] =
    useState("");

  const [submitted, setSubmitted] =
    useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
    location: "",
    availability: "",
    skills: "",
    message: "",
  });

  const opportunities = [
    {
      id: 1,
      icon: "📚",
      title: "Academic Tutor",
      category: "Education",
      description:
        "Support school students with mathematics, science, English and other academic subjects.",
      commitment: "4 hours per week",
      mode: "Offline",
      requirement: "Subject knowledge",
    },
    {
      id: 2,
      icon: "💻",
      title: "Digital Skills Mentor",
      category: "Technology",
      description:
        "Teach computer basics, internet safety, digital communication and essential technology skills.",
      commitment: "Weekend sessions",
      mode: "Hybrid",
      requirement: "Basic computer skills",
    },
    {
      id: 3,
      icon: "🧭",
      title: "Career Mentor",
      category: "Mentoring",
      description:
        "Guide students about career choices, higher education, resumes, interviews and workplace skills.",
      commitment: "2 sessions monthly",
      mode: "Online or Offline",
      requirement: "Industry experience",
    },
    {
      id: 4,
      icon: "🎪",
      title: "Event Support Volunteer",
      category: "Events",
      description:
        "Help organise workshops, awareness programs, registration desks and educational distribution drives.",
      commitment: "Event-based",
      mode: "Offline",
      requirement: "Teamwork",
    },
    {
      id: 5,
      icon: "📸",
      title: "Content & Media Volunteer",
      category: "Creative",
      description:
        "Support photography, video, graphic design, social media and documentation of NGO activities.",
      commitment: "Flexible",
      mode: "Hybrid",
      requirement: "Creative skills",
    },
    {
      id: 6,
      icon: "🤝",
      title: "Fundraising Volunteer",
      category: "Outreach",
      description:
        "Help create awareness, connect with supporters and raise resources for educational campaigns.",
      commitment: "Flexible",
      mode: "Online or Offline",
      requirement: "Communication skills",
    },
  ];

  const benefits = [
    {
      icon: "🌱",
      title: "Create Real Impact",
      description:
        "Use your time and abilities to help students access better educational opportunities.",
    },
    {
      icon: "🏆",
      title: "Volunteer Certificate",
      description:
        "Receive a certificate recognising your volunteering contribution and service hours.",
    },
    {
      icon: "💡",
      title: "Develop New Skills",
      description:
        "Build communication, leadership, teamwork, teaching and organisational experience.",
    },
    {
      icon: "🌐",
      title: "Join a Community",
      description:
        "Connect with educators, professionals, mentors and volunteers who believe in education.",
    },
  ];

  const requirements = [
    "Minimum age of 18 years for independent volunteering",
    "Commitment to student safety and respectful conduct",
    "Willingness to follow NGO policies and instructions",
    "Regular communication with the program coordinator",
    "Background verification where the role requires it",
    "Parental consent for volunteers below 18 years",
  ];

  const handleRoleSelection = (roleTitle) => {
    setSelectedRole(roleTitle);

    setTimeout(() => {
      document
        .getElementById("volunteer-form")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
    }, 100);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    if (submitted) {
      setSubmitted(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      age: "",
      location: "",
      availability: "",
      skills: "",
      message: "",
    });

    setSelectedRole("");
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#F6F8FC",
    },

    hero: {
      position: "relative",
      minHeight: "520px",
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
      maxWidth: "730px",
      margin: "0 auto 30px",
      color: "#CFDBEA",
      fontSize: "18px",
      lineHeight: "1.8",
    },

    heroButton: {
      display: "inline-block",
      padding: "15px 28px",
      color: "#06275B",
      background:
        "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "800",
      boxShadow: "0 14px 30px rgba(218,165,50,0.22)",
    },

    section: {
      padding: "95px 6% 105px",
    },

    whiteSection: {
      padding: "95px 6% 105px",
      backgroundColor: "#FFFFFF",
    },

    container: {
      width: "100%",
      maxWidth: "1250px",
      margin: "auto",
    },

    headingArea: {
      marginBottom: "50px",
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

    opportunityGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "27px",
    },

    opportunityCard: {
      position: "relative",
      padding: "31px",
      overflow: "hidden",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E1E8F1",
      borderRadius: "21px",
      boxShadow: "0 17px 45px rgba(6,39,91,0.10)",
    },

    cardLine: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background:
        "linear-gradient(90deg, #06275B, #2E7D32, #D6A12D)",
    },

    cardHeader: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "20px",
      marginBottom: "20px",
    },

    opportunityIcon: {
      width: "62px",
      height: "62px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background:
        "linear-gradient(135deg, #EAF2FA, #EAF5E9)",
      borderRadius: "17px",
      fontSize: "29px",
    },

    category: {
      padding: "6px 11px",
      color: "#2E7D32",
      backgroundColor: "#EAF6EC",
      borderRadius: "20px",
      fontSize: "10px",
      fontWeight: "800",
    },

    opportunityTitle: {
      margin: "0 0 12px",
      color: "#06275B",
      fontSize: "21px",
    },

    opportunityDescription: {
      minHeight: "73px",
      margin: "0 0 22px",
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.75",
    },

    informationGrid: {
      display: "grid",
      gap: "10px",
      marginBottom: "22px",
      padding: "16px",
      backgroundColor: "#F7F9FC",
      borderRadius: "12px",
    },

    informationRow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "15px",
      color: "#758497",
      fontSize: "12px",
    },

    informationValue: {
      color: "#17325B",
      fontWeight: "800",
      textAlign: "right",
    },

    selectButton: {
      width: "100%",
      padding: "14px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #06275B, #124E82)",
      border: "none",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: "800",
      cursor: "pointer",
    },

    benefitGrid: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "24px",
    },

    benefitCard: {
      padding: "31px 25px",
      textAlign: "center",
      background:
        "linear-gradient(145deg, #F7FAFE, #FFFFFF)",
      border: "1px solid #E1E9F2",
      borderRadius: "18px",
      boxShadow: "0 15px 40px rgba(6,39,91,0.08)",
    },

    benefitIcon: {
      width: "65px",
      height: "65px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 19px",
      background:
        "linear-gradient(135deg, #EAF2FA, #E9F5E8)",
      borderRadius: "18px",
      fontSize: "29px",
    },

    benefitTitle: {
      margin: "0 0 10px",
      color: "#06275B",
      fontSize: "18px",
    },

    benefitDescription: {
      margin: 0,
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.7",
    },

    formSection: {
      padding: "100px 6%",
      background:
        "linear-gradient(135deg, #031B42, #06275B 60%, #123F2A)",
    },

    formContainer: {
      width: "100%",
      maxWidth: "1100px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(320px, 1fr))",
      gap: "45px",
      alignItems: "start",
    },

    requirementsPanel: {
      padding: "38px",
      color: "#FFFFFF",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.14)",
      borderRadius: "22px",
      backdropFilter: "blur(12px)",
    },

    requirementsBadge: {
      display: "inline-block",
      marginBottom: "14px",
      color: "#F1C25B",
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.6px",
    },

    requirementsTitle: {
      margin: "0 0 17px",
      color: "#FFFFFF",
      fontSize: "34px",
      lineHeight: "1.25",
    },

    requirementsText: {
      margin: "0 0 28px",
      color: "#CAD7E7",
      fontSize: "15px",
      lineHeight: "1.8",
    },

    requirementList: {
      display: "grid",
      gap: "15px",
    },

    requirement: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      color: "#FFFFFF",
      fontSize: "14px",
      lineHeight: "1.6",
    },

    check: {
      width: "27px",
      height: "27px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#06275B",
      background:
        "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "50%",
      fontSize: "12px",
      fontWeight: "900",
    },

    applicationForm: {
      padding: "39px",
      backgroundColor: "#FFFFFF",
      borderRadius: "22px",
      boxShadow: "0 25px 65px rgba(0,0,0,0.22)",
    },

    formTitle: {
      margin: "0 0 8px",
      color: "#06275B",
      fontSize: "29px",
    },

    formDescription: {
      margin: "0 0 26px",
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.7",
    },

    successMessage: {
      marginBottom: "22px",
      padding: "15px",
      color: "#21692F",
      backgroundColor: "#EAF6EC",
      border: "1px solid #C7E4CB",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: "750",
    },

    form: {
      display: "grid",
      gap: "18px",
    },

    twoColumns: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(170px, 1fr))",
      gap: "16px",
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

    textarea: {
      width: "100%",
      minHeight: "120px",
      padding: "14px 15px",
      resize: "vertical",
      color: "#17325B",
      backgroundColor: "#F7F9FC",
      border: "1px solid #DCE4EF",
      borderRadius: "9px",
      outline: "none",
      fontFamily: "inherit",
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
            BECOME A VOLUNTEER
          </span>

          <h1 style={styles.heroTitle}>
            Give your time.{" "}
            <span style={styles.goldText}>
              Change a life.
            </span>
          </h1>

          <p style={styles.heroDescription}>
            Share your knowledge, experience and compassion to help
            students learn, grow and build brighter futures.
          </p>

          <motion.a
            href="#volunteer-form"
            style={styles.heroButton}
            whileHover={{ y: -5, scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Apply as a Volunteer →
          </motion.a>
        </motion.div>
      </section>

      {/* Opportunities */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headingArea}>
            <p style={styles.smallHeading}>
              FIND YOUR ROLE
            </p>

            <h2 style={styles.sectionTitle}>
              Volunteer opportunities
            </h2>

            <p style={styles.sectionDescription}>
              Choose an opportunity that matches your skills,
              interests and availability.
            </p>
          </div>

          <div style={styles.opportunityGrid}>
            {opportunities.map((opportunity, index) => (
              <motion.article
                key={opportunity.id}
                style={styles.opportunityCard}
                initial={{ opacity: 0, y: 55 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.09,
                }}
                whileHover={{
                  y: -12,
                  borderColor: "rgba(46,125,50,0.35)",
                  boxShadow:
                    "0 28px 65px rgba(6,39,91,0.17)",
                }}
              >
                <div style={styles.cardLine} />

                <div style={styles.cardHeader}>
                  <motion.div
                    style={styles.opportunityIcon}
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 3 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {opportunity.icon}
                  </motion.div>

                  <span style={styles.category}>
                    {opportunity.category}
                  </span>
                </div>

                <h3 style={styles.opportunityTitle}>
                  {opportunity.title}
                </h3>

                <p style={styles.opportunityDescription}>
                  {opportunity.description}
                </p>

                <div style={styles.informationGrid}>
                  <div style={styles.informationRow}>
                    <span>Commitment</span>

                    <span style={styles.informationValue}>
                      {opportunity.commitment}
                    </span>
                  </div>

                  <div style={styles.informationRow}>
                    <span>Mode</span>

                    <span style={styles.informationValue}>
                      {opportunity.mode}
                    </span>
                  </div>

                  <div style={styles.informationRow}>
                    <span>Preferred Skill</span>

                    <span style={styles.informationValue}>
                      {opportunity.requirement}
                    </span>
                  </div>
                </div>

                <motion.button
                  type="button"
                  style={styles.selectButton}
                  onClick={() =>
                    handleRoleSelection(
                      opportunity.title
                    )
                  }
                  whileHover={{
                    y: -4,
                    background:
                      "linear-gradient(135deg, #2E7D32, #174A26)",
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  Select This Role →
                </motion.button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={styles.whiteSection}>
        <div style={styles.container}>
          <div style={styles.headingArea}>
            <p style={styles.smallHeading}>
              WHY VOLUNTEER WITH US?
            </p>

           <h2 style={styles.sectionTitle}>
  Grow while creating an impact
</h2>

            <p style={styles.sectionDescription}>
              Volunteering is an opportunity to contribute,
              connect and develop valuable experience.
            </p>
          </div>

          <div style={styles.benefitGrid}>
            {benefits.map((benefit, index) => (
              <motion.article
                key={benefit.title}
                style={styles.benefitCard}
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
                  style={styles.benefitIcon}
                  whileHover={{
                    rotate: 8,
                    scale: 1.12,
                  }}
                >
                  {benefit.icon}
                </motion.div>

                <h3 style={styles.benefitTitle}>
                  {benefit.title}
                </h3>

                <p style={styles.benefitDescription}>
                  {benefit.description}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Application */}
      <section
        id="volunteer-form"
        style={styles.formSection}
      >
        <div style={styles.formContainer}>
          <motion.div
            style={styles.requirementsPanel}
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={styles.requirementsBadge}>
              BEFORE YOU APPLY
            </span>

            <h2 style={styles.requirementsTitle}>
              Volunteer requirements
            </h2>

            <p style={styles.requirementsText}>
              Our volunteers work closely with students and
              communities. Please review these basic expectations
              before applying.
            </p>

            <div style={styles.requirementList}>
              {requirements.map((requirement, index) => (
                <motion.div
                  key={requirement}
                  style={styles.requirement}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.1,
                  }}
                >
                  <span style={styles.check}>✓</span>
                  {requirement}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            style={styles.applicationForm}
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={styles.formTitle}>
              Volunteer Application
            </h2>

            <p style={styles.formDescription}>
              Complete the form and our volunteer coordinator will
              contact you.
            </p>

            {submitted && (
              <motion.div
                style={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Your volunteer application has been submitted.
              </motion.div>
            )}

            <form
              style={styles.form}
              onSubmit={handleSubmit}
            >
              <div style={styles.field}>
                <label
                  style={styles.label}
                  htmlFor="volunteer-role"
                >
                  Preferred Volunteer Role *
                </label>

                <select
                  id="volunteer-role"
                  value={selectedRole}
                  onChange={(event) =>
                    setSelectedRole(event.target.value)
                  }
                  style={styles.input}
                  required
                >
                  <option value="">
                    Select a volunteer role
                  </option>

                  {opportunities.map((opportunity) => (
                    <option
                      key={opportunity.id}
                      value={opportunity.title}
                    >
                      {opportunity.title}
                    </option>
                  ))}
                </select>
              </div>

              <div style={styles.twoColumns}>
                <div style={styles.field}>
                  <label
                    style={styles.label}
                    htmlFor="volunteer-name"
                  >
                    Full Name *
                  </label>

                  <input
                    id="volunteer-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div style={styles.field}>
                  <label
                    style={styles.label}
                    htmlFor="volunteer-age"
                  >
                    Age *
                  </label>

                  <input
                    id="volunteer-age"
                    name="age"
                    type="number"
                    min="15"
                    max="80"
                    value={formData.age}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter age"
                    required
                  />
                </div>
              </div>

              <div style={styles.twoColumns}>
                <div style={styles.field}>
                  <label
                    style={styles.label}
                    htmlFor="volunteer-email"
                  >
                    Email Address *
                  </label>

                  <input
                    id="volunteer-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter your email"
                    required
                  />
                </div>

                <div style={styles.field}>
                  <label
                    style={styles.label}
                    htmlFor="volunteer-phone"
                  >
                    Phone Number *
                  </label>

                  <input
                    id="volunteer-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="+91 98765 43210"
                    required
                  />
                </div>
              </div>

              <div style={styles.twoColumns}>
                <div style={styles.field}>
                  <label
                    style={styles.label}
                    htmlFor="volunteer-location"
                  >
                    Location *
                  </label>

                  <input
                    id="volunteer-location"
                    name="location"
                    type="text"
                    value={formData.location}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Enter city or area"
                    required
                  />
                </div>

                <div style={styles.field}>
                  <label
                    style={styles.label}
                    htmlFor="availability"
                  >
                    Availability *
                  </label>

                  <select
                    id="availability"
                    name="availability"
                    value={formData.availability}
                    onChange={handleChange}
                    style={styles.input}
                    required
                  >
                    <option value="">
                      Select availability
                    </option>
                    <option value="weekdays">
                      Weekdays
                    </option>
                    <option value="weekends">
                      Weekends
                    </option>
                    <option value="evenings">
                      Evenings
                    </option>
                    <option value="event-based">
                      Event-based
                    </option>
                    <option value="flexible">
                      Flexible
                    </option>
                  </select>
                </div>
              </div>

              <div style={styles.field}>
                <label
                  style={styles.label}
                  htmlFor="skills"
                >
                  Skills or Experience *
                </label>

                <input
                  id="skills"
                  name="skills"
                  type="text"
                  value={formData.skills}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Example: Teaching, coding, design"
                  required
                />
              </div>

              <div style={styles.field}>
                <label
                  style={styles.label}
                  htmlFor="volunteer-message"
                >
                  Why would you like to volunteer?
                </label>

                <textarea
                  id="volunteer-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Tell us why you want to join..."
                />
              </div>

              <motion.button
                type="submit"
                style={styles.submitButton}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  boxShadow:
                    "0 16px 35px rgba(197,138,22,0.36)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Submit Volunteer Application →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Volunteer;