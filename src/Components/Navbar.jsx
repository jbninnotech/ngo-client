import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import { motion } from "motion/react";
import logo from "../assets/blanco-logo.png";

const navigationLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Programs",
    path: "/programs",
  },
  {
    name: "Campaigns",
    path: "/campaigns",
  },
  {
    name: "Events",
    path: "/events",
  },
  {
    name: "Gallery",
    path: "/gallery",
  },
  {
    name: "Volunteer",
    path: "/volunteer",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isScrolled, setIsScrolled] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };

    handleScroll();

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    if (
      location.pathname === "/" &&
      location.hash === "#about"
    ) {
      setTimeout(() => {
        const aboutSection =
          document.getElementById("about");

        if (aboutSection) {
          aboutSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 150);
    }
  }, [location.pathname, location.hash]);

  const handleNavigation = (event, path) => {
    event.preventDefault();

    navigate(path);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isLinkActive = (path) => {

    return location.pathname === path;
  };

  const styles = {
    navbar: {
      position: "fixed",
      top: 0,
      left: 0,
      zIndex: 1000,
      width: "100%",
      padding: "0 3%",

      background: isScrolled
        ? "rgba(255,255,255,0.97)"
        : "linear-gradient(90deg, #072C73 0%, #064C9D 60%, #0474B9 100%)",

      backdropFilter: isScrolled
        ? "blur(18px)"
        : "none",

      borderBottom: isScrolled
        ? "1px solid rgba(6,39,91,0.09)"
        : "1px solid rgba(255,255,255,0.10)",

      boxShadow: isScrolled
        ? "0 10px 35px rgba(6,39,91,0.12)"
        : "0 8px 25px rgba(3,27,66,0.20)",

      transition:
        "background 0.4s ease, box-shadow 0.4s ease, border 0.4s ease",
    },

    container: {
      width: "100%",
      maxWidth: "1800px",
      minHeight: isScrolled ? "74px" : "92px",
      margin: "0 auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "20px",
      transition: "min-height 0.4s ease",
    },

    brand: {
      display: "flex",
      alignItems: "center",
      gap: "12px",
      flexShrink: 0,
      textDecoration: "none",
      cursor: "pointer",
    },

    logoCircle: {
      width: isScrolled ? "52px" : "62px",
      height: isScrolled ? "52px" : "62px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      overflow: "hidden",
      backgroundColor: "#FFFFFF",

      border: isScrolled
        ? "2px solid #E2E8F0"
        : "2px solid rgba(255,255,255,0.50)",

      borderRadius: "50%",

      boxShadow: isScrolled
        ? "0 5px 15px rgba(6,39,91,0.12)"
        : "0 7px 18px rgba(0,0,0,0.17)",

      transition:
        "width 0.4s ease, height 0.4s ease",
    },

    logo: {
      display: "block",
      width: isScrolled ? "49px" : "59px",
      height: isScrolled ? "49px" : "59px",
      objectFit: "contain",
      transition:
        "width 0.4s ease, height 0.4s ease",
    },

    brandName: {
      margin: 0,
      color: isScrolled
        ? "#10213B"
        : "#FFFFFF",
      fontSize: isScrolled ? "20px" : "22px",
      fontWeight: "800",
      letterSpacing: "-0.3px",
      whiteSpace: "nowrap",
      transition:
        "color 0.4s ease, font-size 0.4s ease",
    },

    navigationArea: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: "4px",
      flexWrap: "wrap",
    },

    linkContainer: {
      position: "relative",
      display: "inline-flex",
    },

    navLink: {
      position: "relative",
      minHeight: isScrolled ? "46px" : "52px",
      padding: "9px 11px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      color: isScrolled
        ? "#374151"
        : "#F7FAFF",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "650",
      whiteSpace: "nowrap",
      cursor: "pointer",
      transition: "color 0.3s ease",
    },

    activeLink: {
      color: isScrolled
        ? "#06499B"
        : "#FFFFFF",
      fontWeight: "800",
    },

    activeLine: {
      position: "absolute",
      right: "11px",
      bottom: isScrolled ? "1px" : "3px",
      left: "11px",
      height: "3px",
      backgroundColor: isScrolled
        ? "#06499B"
        : "#FFFFFF",
      borderRadius: "10px",
    },

    // loginButton: {
    //   minHeight: isScrolled ? "45px" : "49px",
    //   marginLeft: "8px",
    //   padding: "10px 18px",
    //   display: "inline-flex",
    //   alignItems: "center",
    //   justifyContent: "center",
    //   gap: "7px",

    //   color:
    //     location.pathname === "/login"
    //       ? "#FFFFFF"
    //       : isScrolled
    //         ? "#06275B"
    //         : "#FFFFFF",

    //   backgroundColor:
    //     location.pathname === "/login"
    //       ? "#2E7D32"
    //       : isScrolled
    //         ? "#EAF0F8"
    //         : "rgba(255,255,255,0.12)",

    //   border:
    //     location.pathname === "/login"
    //       ? "1px solid #2E7D32"
    //       : isScrolled
    //         ? "1px solid #D8E2EF"
    //         : "1px solid rgba(255,255,255,0.28)",

    //   borderRadius: "25px",
    //   textDecoration: "none",
    //   fontSize: "14px",
    //   fontWeight: "800",
    //   whiteSpace: "nowrap",
    //   cursor: "pointer",
    // },

    // loginIcon: {
    //   fontSize: "15px",
    // },

    donateButton: {
      minHeight: isScrolled ? "47px" : "52px",
      marginLeft: "5px",
      padding: isScrolled
        ? "11px 22px"
        : "12px 25px",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      color: "#10213B",
      background:
        "linear-gradient(135deg, #FFA816 0%, #F58200 100%)",
      border: "none",
      borderRadius: "28px",
      textDecoration: "none",
      fontSize: "14px",
      fontWeight: "800",
      whiteSpace: "nowrap",
      cursor: "pointer",

      boxShadow: isScrolled
        ? "0 8px 20px rgba(245,130,0,0.24)"
        : "0 10px 25px rgba(245,130,0,0.34)",

      transition:
        "min-height 0.4s ease, padding 0.4s ease",
    },

    heart: {
      fontSize: "19px",
      lineHeight: 1,
    },
  };

  return (
    <motion.nav
      style={styles.navbar}
      initial={{
        opacity: 0,
        y: -80,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
    >
      <div style={styles.container}>
        {/* Brand */}
        <motion.a
          href="/"
          style={styles.brand}
          onClick={(event) =>
            handleNavigation(event, "/")
          }
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            style={styles.logoCircle}
            whileHover={{
              rotate: 4,
              scale: 1.07,
            }}
          >
            <img
              src={logo}
              alt="Blanco Educational Academy"
              style={styles.logo}
            />
          </motion.div>

          <h2 style={styles.brandName}>
            Blanco Educational Academy
          </h2>
        </motion.a>

        {/* Navigation links */}
        <div style={styles.navigationArea}>
          {navigationLinks.map((link) => {
            const active = isLinkActive(link.path);

            return (
              <motion.div
                key={link.name}
                style={styles.linkContainer}
                whileHover={{ y: -2 }}
              >
                <motion.a
                  href={link.path}
                  onClick={(event) =>
                    handleNavigation(
                      event,
                      link.path
                    )
                  }
                  style={{
                    ...styles.navLink,
                    ...(active
                      ? styles.activeLink
                      : {}),
                  }}
                  whileHover={{
                    color: isScrolled
                      ? "#06499B"
                      : "#FFD16B",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.name}
                </motion.a>

                {active && (
                  <motion.span
                    layoutId="active-navbar-line"
                    style={styles.activeLine}
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </motion.div>
            );
          })}

          {/* Login
          <motion.a
            href="/login"
            style={styles.loginButton}
            onClick={(event) =>
              handleNavigation(event, "/login")
            }
            whileHover={{
              y: -4,
              scale: 1.03,
              color: "#FFFFFF",
              backgroundColor: "#2E7D32",
              borderColor: "#2E7D32",
            }}
            whileTap={{ scale: 0.96 }}
          >
            <span style={styles.loginIcon}>♙</span>
            Login
          </motion.a> */}

          {/* Donate */}
          <motion.a
            href="/donate"
            style={styles.donateButton}
            onClick={(event) =>
              handleNavigation(event, "/donate")
            }
            whileHover={{
              y: -4,
              scale: 1.04,
              boxShadow:
                "0 15px 34px rgba(245,130,0,0.44)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span style={styles.heart}>♡</span>
            Donate Now
          </motion.a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;