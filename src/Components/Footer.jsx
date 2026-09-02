import logo from "../assets/blanco-logo.png";

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: "#031C43",
      color: "#ffffff",
      padding: "38px 6% 16px",
    },

    grid: {
      width: "100%",
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns:
        "1.3fr repeat(3, minmax(170px, 1fr))",
      gap: "30px",
      alignItems: "start",
    },

    brandSection: {
      maxWidth: "280px",
    },

    logo: {
      display: "block",
      width: "78px",
      height: "78px",
      marginBottom: "14px",
      objectFit: "contain",
      backgroundColor: "#ffffff",
      border: "2px solid rgba(228,173,55,0.7)",
      borderRadius: "50%",
    },

    title: {
      margin: "0 0 15px",
      color: "#E4AD37",
      fontSize: "18px",
      fontWeight: "800",
    },

    text: {
      margin: "0 0 9px",
      color: "#CED8E7",
      fontSize: "14px",
      lineHeight: "1.65",
    },

    description: {
      margin: 0,
      color: "#CED8E7",
      fontSize: "14px",
      lineHeight: "1.7",
    },

    link: {
      display: "table",
      marginBottom: "9px",
      color: "#CED8E7",
      fontSize: "14px",
      lineHeight: "1.5",
      textDecoration: "none",
      transition: "color 0.25s ease, transform 0.25s ease",
    },

    contactRow: {
      display: "flex",
      alignItems: "flex-start",
      gap: "9px",
      marginBottom: "11px",
      color: "#CED8E7",
      fontSize: "14px",
      lineHeight: "1.5",
    },

    contactIcon: {
      flexShrink: 0,
      width: "20px",
      color: "#E4AD37",
    },

    bottom: {
      maxWidth: "1200px",
      margin: "28px auto 0",
      paddingTop: "16px",
      borderTop: "1px solid rgba(255,255,255,0.14)",
      textAlign: "center",
      color: "#AAB8CB",
      fontSize: "13px",
      lineHeight: "1.5",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.grid}>
        {/* Brand */}
        <div style={styles.brandSection}>
          <img
            src={logo}
            alt="Blanco Educational Academy"
            style={styles.logo}
          />

          <p style={styles.description}>
            Educating, empowering and elevating students for a
            brighter and more independent future.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={styles.title}>Quick Links</h3>

          <a href="/" style={styles.link}>
            Home
          </a>

          <a href="/about" style={styles.link}>
            About Us
          </a>

          <a href="/programs" style={styles.link}>
            Programs
          </a>

          <a href="/campaigns" style={styles.link}>
            Campaigns
          </a>
        </div>

        {/* Programs */}
        <div>
          <h3 style={styles.title}>Our Programs</h3>

          <p style={styles.text}>Student Scholarships</p>
          <p style={styles.text}>Digital Learning</p>
          <p style={styles.text}>Career Guidance</p>
          <p style={styles.text}>Skill Development</p>
        </div>

        {/* Contact */}
        <div>
          <h3 style={styles.title}>Contact Us</h3>

          <div style={styles.contactRow}>
            <span style={styles.contactIcon}>📍</span>
            <span>Hyderabad, Telangana</span>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.contactIcon}>📞</span>
            <span>+91 98765 43210</span>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.contactIcon}>✉️</span>
            <span>info@blancoacademy.org</span>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        © 2026 Blanco Educational Academy NGO. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;