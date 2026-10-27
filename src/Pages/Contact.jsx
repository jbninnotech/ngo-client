import { useState } from "react";
import { motion } from "motion/react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const contactDetails = [
    {
      icon: "📍",
      title: "Visit Our Office",
      text: "St. George's School, Hyderabad, Telangana, India",
      linkText: "Get directions",
      href: "https://www.google.com/maps?ll=17.374749,78.550057&z=14&t=m&hl=en&gl=IN&mapclient=embed&cid=10872085256862175568",
    },
    {
      icon: "📞",
      title: "Call Us",
      text: "+91 79891 91692",
      linkText: "Call now",
      href: "tel:+917989191692",
    },
    {
      icon: "✉️",
      title: "Email Us",
      text: "blancoeducationalacademy@gmail.com",
      linkText: "Send an email",
      href: "mailto:blancoeducationalacademy@gmail.com",
    },
    {
      icon: "🕐",
      title: "Working Hours",
      text: "Monday – Saturday",
      linkText: "9:00 AM – 6:00 PM",
      href: "#contact-form",
    },
  ];

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: "#FFFFFF",
    },

    hero: {
      position: "relative",
      minHeight: "470px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "170px 6% 90px",
      overflow: "hidden",
      textAlign: "center",
      // Combine a dark semi-transparent gradient with your background image URL
      backgroundImage: `
        linear-gradient(135deg, rgba(3, 27, 66, 0.88) 0%, rgba(6, 39, 91, 0.85) 55%, rgba(18, 63, 42, 0.88) 100%),
        url('https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1920&q=80')
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    heroGlowOne: {
      position: "absolute",
      top: "-180px",
      right: "-100px",
      width: "430px",
      height: "430px",
      borderRadius: "50%",
      backgroundColor: "rgba(218,165,50,0.15)",
      filter: "blur(25px)",
    },

    heroGlowTwo: {
      position: "absolute",
      bottom: "-220px",
      left: "-140px",
      width: "450px",
      height: "450px",
      borderRadius: "50%",
      backgroundColor: "rgba(46,125,50,0.20)",
      filter: "blur(30px)",
    },

    heroContent: {
      position: "relative",
      zIndex: 2,
      maxWidth: "820px",
      margin: "auto",
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
      letterSpacing: "-1.5px",
    },

    goldText: {
      color: "#E0AA34",
    },

    heroDescription: {
      maxWidth: "700px",
      margin: "0 auto",
      color: "#CFDBEA",
      fontSize: "18px",
      lineHeight: "1.8",
    },

    detailsSection: {
      position: "relative",
      zIndex: 4,
      padding: "0 6%",
      marginTop: "-45px",
    },

    detailsGrid: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(230px, 1fr))",
      gap: "20px",
    },

    detailCard: {
      position: "relative",
      padding: "30px 24px",
      overflow: "hidden",
      textAlign: "center",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E2E9F3",
      borderRadius: "18px",
      boxShadow: "0 18px 45px rgba(6,39,91,0.13)",
    },

    detailLine: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "4px",
      background:
        "linear-gradient(90deg, #06275B, #2E7D32, #D6A12D)",
    },

    detailIcon: {
      width: "60px",
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 18px",
      background:
        "linear-gradient(135deg, #EAF2FA, #E9F5E8)",
      borderRadius: "16px",
      fontSize: "27px",
    },

    detailTitle: {
      margin: "0 0 9px",
      color: "#06275B",
      fontSize: "18px",
    },

    detailText: {
      minHeight: "24px",
      margin: "0 0 13px",
      color: "#65758B",
      fontSize: "14px",
      lineHeight: "1.6",
    },

    detailLink: {
      color: "#2E7D32",
      textDecoration: "none",
      fontSize: "13px",
      fontWeight: "800",
    },

    contactSection: {
      padding: "100px 6%",
      background:
        "linear-gradient(180deg, #FFFFFF 0%, #F5F8FC 100%)",
    },

    contactContainer: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(320px, 1fr))",
      alignItems: "stretch",
      gap: "45px",
    },

    informationPanel: {
      position: "relative",
      padding: "48px 42px",
      overflow: "hidden",
      color: "#FFFFFF",
      background:
        "linear-gradient(145deg, #06275B 0%, #031B42 60%, #123F2A 100%)",
      borderRadius: "24px",
      boxShadow: "0 25px 60px rgba(6,39,91,0.20)",
    },

    panelGlow: {
      position: "absolute",
      right: "-120px",
      bottom: "-120px",
      width: "300px",
      height: "300px",
      backgroundColor: "rgba(218,165,50,0.14)",
      borderRadius: "50%",
    },

    smallHeading: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 12px",
      color: "#F0C15A",
      fontSize: "13px",
      fontWeight: "800",
      letterSpacing: "1.8px",
    },

    panelTitle: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 18px",
      color: "#FFFFFF",
      fontSize: "clamp(30px, 4vw, 43px)",
      lineHeight: "1.2",
    },

    panelDescription: {
      position: "relative",
      zIndex: 2,
      margin: "0 0 35px",
      color: "#C8D5E6",
      fontSize: "16px",
      lineHeight: "1.8",
    },

    reasonList: {
      position: "relative",
      zIndex: 2,
      display: "grid",
      gap: "17px",
    },

    reason: {
      display: "flex",
      alignItems: "center",
      gap: "14px",
      color: "#FFFFFF",
      fontSize: "15px",
      fontWeight: "650",
    },

    check: {
      width: "31px",
      height: "31px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: "#06275B",
      background:
        "linear-gradient(135deg, #F1C25B, #C98A13)",
      borderRadius: "50%",
      fontWeight: "900",
    },

    socialArea: {
      position: "relative",
      zIndex: 2,
      marginTop: "40px",
      paddingTop: "25px",
      borderTop: "1px solid rgba(255,255,255,0.14)",
    },

    socialTitle: {
      margin: "0 0 15px",
      color: "#FFFFFF",
      fontSize: "14px",
    },

    socialButtons: {
      display: "flex",
      gap: "10px",
      flexWrap: "wrap",
    },

    socialButton: {
      width: "42px",
      height: "42px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#FFFFFF",
      backgroundColor: "rgba(255,255,255,0.10)",
      border: "1px solid rgba(255,255,255,0.16)",
      borderRadius: "50%",
      textDecoration: "none",
    },

    formContainer: {
      padding: "48px 42px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E3EAF3",
      borderRadius: "24px",
      boxShadow: "0 20px 55px rgba(6,39,91,0.10)",
    },

    formTitle: {
      margin: "0 0 10px",
      color: "#06275B",
      fontSize: "31px",
    },

    formDescription: {
      margin: "0 0 30px",
      color: "#6B7A8E",
      fontSize: "15px",
      lineHeight: "1.7",
    },

    form: {
      display: "grid",
      gap: "20px",
    },

    twoColumns: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(190px, 1fr))",
      gap: "18px",
    },

    fieldGroup: {
      display: "grid",
      gap: "8px",
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
      backgroundColor: "#F8FAFD",
      border: "1px solid #DDE5EF",
      borderRadius: "9px",
      outline: "none",
      fontSize: "14px",
    },

    textarea: {
      width: "100%",
      minHeight: "135px",
      padding: "14px 15px",
      resize: "vertical",
      color: "#17325B",
      backgroundColor: "#F8FAFD",
      border: "1px solid #DDE5EF",
      borderRadius: "9px",
      outline: "none",
      fontSize: "14px",
      fontFamily: "inherit",
    },

    submitButton: {
      width: "100%",
      padding: "15px 24px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #D8A32F 0%, #AC700B 100%)",
      border: "none",
      borderRadius: "10px",
      fontSize: "15px",
      fontWeight: "800",
      cursor: "pointer",
      boxShadow: "0 12px 28px rgba(197,138,22,0.26)",
    },

    successMessage: {
      padding: "14px 16px",
      color: "#176326",
      backgroundColor: "#EAF7EC",
      border: "1px solid #BFE1C5",
      borderRadius: "9px",
      fontSize: "14px",
      fontWeight: "700",
    },

    mapSection: {
      padding: "0 6% 100px",
      backgroundColor: "#F5F8FC",
    },

    mapContainer: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      padding: "45px",
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(280px, 1fr))",
      alignItems: "center",
      gap: "30px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #E2E9F2",
      borderRadius: "24px",
      boxShadow: "0 18px 50px rgba(6,39,91,0.09)",
    },

    mapTitle: {
      margin: "0 0 13px",
      color: "#06275B",
      fontSize: "30px",
    },

    mapText: {
      margin: "0 0 23px",
      color: "#65758B",
      lineHeight: "1.8",
    },

    directionButton: {
      display: "inline-block",
      padding: "13px 23px",
      color: "#FFFFFF",
      backgroundColor: "#2E7D32",
      borderRadius: "9px",
      textDecoration: "none",
      fontWeight: "750",
    },

    mapVisual: {
      minHeight: "250px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #E8F0FA 0%, #E9F5E8 100%)",
      border: "1px solid #D9E5ED",
      borderRadius: "18px",
    },

    mapPin: {
      fontSize: "60px",
    },

    mapLocation: {
      margin: "10px 0 0",
      color: "#06275B",
      fontSize: "18px",
      fontWeight: "800",
    },
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

    console.log("Contact form submitted:", formData);

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main style={styles.page}>
      {/* Hero */}
      <section style={styles.hero}>
        <motion.div
          style={styles.heroGlowOne}
          animate={{
            scale: [1, 1.2, 1],
            x: [0, -30, 0],
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
            y: [0, -30, 0],
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
          <span style={styles.heroBadge}>CONTACT US</span>

          <h1 style={styles.heroTitle}>
            Let’s create a{" "}
            <span style={styles.goldText}>
              brighter future
            </span>{" "}
            together.
          </h1>

          <p style={styles.heroDescription}>
            Have questions about our programs, donations,
            volunteering or student support? Our team would be
            happy to hear from you.
          </p>
        </motion.div>
      </section>

      {/* Contact cards */}
      <section style={styles.detailsSection}>
        <div style={styles.detailsGrid}>
          {contactDetails.map((detail, index) => (
            <motion.article
              key={detail.title}
              style={styles.detailCard}
              initial={{ opacity: 0, y: 55 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.025,
                boxShadow:
                  "0 26px 60px rgba(6,39,91,0.17)",
              }}
            >
              <div style={styles.detailLine} />

              <motion.div
                style={styles.detailIcon}
                whileHover={{
                  rotate: 8,
                  scale: 1.12,
                }}
              >
                {detail.icon}
              </motion.div>

              <h3 style={styles.detailTitle}>
                {detail.title}
              </h3>

              <p style={styles.detailText}>
                {detail.text}
              </p>

              <motion.a
                href={detail.href}
                target={
                  detail.href.startsWith("http")
                    ? "_blank"
                    : undefined
                }
                rel={
                  detail.href.startsWith("http")
                    ? "noreferrer"
                    : undefined
                }
                style={styles.detailLink}
                whileHover={{ x: 5 }}
              >
                {detail.linkText} →
              </motion.a>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section
        id="contact-form"
        style={styles.contactSection}
      >
        <div style={styles.contactContainer}>
          <motion.div
            style={styles.informationPanel}
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              style={styles.panelGlow}
              animate={{
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <p style={styles.smallHeading}>
              HOW CAN WE HELP?
            </p>

            <h2 style={styles.panelTitle}>
              Your message can begin something meaningful.
            </h2>

            <p style={styles.panelDescription}>
              Contact our team to learn more about supporting a
              student, volunteering, partnering with us or applying
              for educational assistance.
            </p>

            <div style={styles.reasonList}>
              {[
                "Student support enquiries",
                "Volunteer registration",
                "Donations and sponsorships",
                "School and institutional partnerships",
              ].map((reason, index) => (
                <motion.div
                  key={reason}
                  style={styles.reason}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + index * 0.12,
                  }}
                >
                  <span style={styles.check}>✓</span>
                  {reason}
                </motion.div>
              ))}
            </div>

            <div style={styles.socialArea}>
              <p style={styles.socialTitle}>
                Follow our journey
              </p>

              <div style={styles.socialButtons}>
                {[
                  { icon: "f", label: "Facebook" },
                  { icon: "i", label: "Instagram" },
                  { icon: "in", label: "LinkedIn" },
                  { icon: "t", label: "Twitter" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#social"
                    aria-label={social.label}
                    style={styles.socialButton}
                    whileHover={{
                      y: -5,
                      backgroundColor: "#D09A28",
                    }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            style={styles.formContainer}
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
          >
            <h2 style={styles.formTitle}>
              Send us a message
            </h2>

            <p style={styles.formDescription}>
              Complete the form and our team will contact you as
              soon as possible.
            </p>

            {submitted && (
              <motion.div
                style={styles.successMessage}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ✓ Thank you! Your message has been submitted.
              </motion.div>
            )}

            <form
              style={styles.form}
              onSubmit={handleSubmit}
            >
              <div style={styles.twoColumns}>
                <div style={styles.fieldGroup}>
                  <label
                    style={styles.label}
                    htmlFor="name"
                  >
                    Full Name *
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    style={styles.input}
                    required
                  />
                </div>

                <div style={styles.fieldGroup}>
                  <label
                    style={styles.label}
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    style={styles.input}
                  />
                </div>
              </div>

              <div style={styles.fieldGroup}>
                <label
                  style={styles.label}
                  htmlFor="email"
                >
                  Email Address *
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  style={styles.input}
                  required
                />
              </div>

              <div style={styles.fieldGroup}>
                <label
                  style={styles.label}
                  htmlFor="subject"
                >
                  Enquiry Type *
                </label>

                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={styles.input}
                  required
                >
                  <option value="">
                    Select an enquiry type
                  </option>
                  <option value="student-support">
                    Student Support
                  </option>
                  <option value="volunteer">
                    Volunteering
                  </option>
                  <option value="donation">
                    Donations and Sponsorship
                  </option>
                  <option value="partnership">
                    School or NGO Partnership
                  </option>
                  <option value="general">
                    General Enquiry
                  </option>
                </select>
              </div>

              <div style={styles.fieldGroup}>
                <label
                  style={styles.label}
                  htmlFor="message"
                >
                  Message *
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  style={styles.textarea}
                  required
                />
              </div>

              <motion.button
                type="submit"
                style={styles.submitButton}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  boxShadow:
                    "0 17px 35px rgba(197,138,22,0.38)",
                }}
                whileTap={{ scale: 0.97 }}
              >
                Send Message →
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Location */}
     
    </main>
  );
};

export default Contact;