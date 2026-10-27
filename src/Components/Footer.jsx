import logo from "../assets/blanco-logo.png";
import { motion } from "motion/react";
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
    

    logo: {
      display: "block",
      width: "115px",
      height: "115px",
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
      gap: "4px",
      marginBottom: "11px",
      marginTop: "10px",
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
      maxWidth: "1100px",
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
  <span>St. George's School, Hyderabad, Telangana</span>
</div>

<div style={{ marginTop: "12px", width: "100%" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3807.771002382384!2d78.5474816749344!3d17.374748783510253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98db4234b68f%3A0x96e167f037081150!2sSt.%20George's%20School!5e0!3m2!1sen!2sin!4v1793007990861!5m2!1sen!2sin"
    width="100%"
    height="125"
    style={{
      border: 0,
      borderRadius: "12px",
      display: "block"
    }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="strict-origin-when-cross-origin"
    title="St. George's School Location"
  />
</div>


          <div style={styles.contactRow}>
            <span style={styles.contactIcon}>📞</span>
            <span>
              <a href="tel:+917989191692" style={styles.link}>
                +91 79891 91692
              </a>
            </span>
          </div>

          <div style={styles.contactRow}>
            <span style={styles.contactIcon}>✉️</span>
            <span>
              <a href="mailto:blancoeducationalacademy@gmail.com" style={styles.link}>
                blancoeducationalacademy@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>

      <div style={styles.bottom}>
        © 2026 Blanco Educational Academy NGO. All rights reserved.
        © 
      </div>
    </footer>
  );
};

export default Footer;