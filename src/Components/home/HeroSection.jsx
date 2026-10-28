import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

const heroVideo =
  "https://res.cloudinary.com/yozeshlg/video/upload/v1793163869/gemini_generated_video_9d70d992.mp4";

const heroImage =
  "https://res.cloudinary.com/yozeshlg/image/upload/v1793163093/Cheerful_Classroom_Learning_Together.png";


const slides = [
  { type: "image", src: heroImage },
  { type: "video", src: heroVideo },
];

const SLIDE_INTERVAL = 3000; 

const HeroSection = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const slide = slides[current];

  
    if (slide.type === "video") {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(goNext);
        }
      }
      return undefined;
    }

   
    const timer = setTimeout(goNext, SLIDE_INTERVAL);
    return () => clearTimeout(timer);
  }, [current]);

  const handleScrollDown = () => {
    const next = document.getElementById("home")?.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    }
  };

  const goTo = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const styles = {
    section: {
      width: "100%",
      overflow: "hidden",
    },

    hero: {
      position: "relative",
      minHeight: "100vh",
      overflow: "hidden",
      backgroundColor: "#061F3F",
    },

    slider: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      display: "flex",
      width: "100%",
      height: "100%",
    },

    slide: {
      flex: "0 0 100%",
      width: "100%",
      height: "100%",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    },

    video: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

   
    overlay: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: "rgba(0,0,0,0.45)",
      pointerEvents: "none",
    },

    content: {
      position: "relative",
      zIndex: 2,
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "120px 6% 100px",
    },

    title: {
      margin: 0,
      color: "#FFFFFF",
      fontFamily: "'Playfair Display', Georgia, 'Times New Roman', serif",
      fontSize: "clamp(24px, 4vw, 60px)",
      fontWeight: "700",
      letterSpacing: "1px",
      lineHeight: 1.15,
    },

    text: {
      maxWidth: "840px",
      margin: "28px 0 0",
      color: "rgba(255,255,255,0.92)",
      fontSize: "clamp(14px, 1.2vw, 17px)",
      lineHeight: 1.7,
    },

    buttons: {
      marginTop: "44px",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "18px",
    },

    donateBtn: {
      padding: "14px 30px",
      color: "#10213B",
      backgroundColor: "#FFC800",
      border: "none",
      borderRadius: "2px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },

    aboutBtn: {
      padding: "14px 34px",
      color: "#FFFFFF",
      backgroundColor: "#111111",
      border: "none",
      borderRadius: "2px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: "pointer",
    },

    scrollButton: {
      position: "absolute",
      zIndex: 4,
      left: "50%",
      bottom: "34px",
      x: "-50%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "10px",
      padding: "10px 18px",
      color: "#FFFFFF",
      backgroundColor: "transparent",
      border: "none",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "800",
      letterSpacing: "2px",
      textShadow: "0 2px 8px rgba(0,0,0,0.6)",
    },

    scrollArrow: {
      display: "block",
      width: "20px",
      height: "20px",
    },
  };

  return (
    <section id="home" style={styles.section}>
      <div style={styles.hero}>
        {/* Slides: image first, then video */}
        <motion.div
          style={styles.slider}
          animate={{ x: `-${current * 100}%` }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
        >
          {slides.map((slide) =>
            slide.type === "video" ? (
              <div key="video" style={styles.slide}>
                <video
                  ref={videoRef}
                  src={slide.src}
                  style={styles.video}
                  muted
                  playsInline
                  preload="auto"
                  onEnded={goNext}
                  onError={goNext}
                />
              </div>
            ) : (
              <div
                key={slide.src}
                style={{
                  ...styles.slide,
                  backgroundImage: `url('${slide.src}')`,
                }}
              />
            )
          )}
        </motion.div>

        {/* Dark overlay */}
        <div style={styles.overlay} />

        {/* Hero text + buttons */}
        <div style={styles.content}>
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Every Child Deserves To Learn
          </motion.h1>

          <motion.p
            style={styles.text}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            At Blanco Educational Academy, we bring quality education,
            nutritious meals, and a safe place to grow to children who need it
            most. With your support, a child's smile today becomes a confident
            future tomorrow.
          </motion.p>

          <motion.div
            style={styles.buttons}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.button
              type="button"
              style={styles.donateBtn}
              onClick={() => goTo("/donate")}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Support A Child
            </motion.button>

            <motion.button
              type="button"
              style={styles.aboutBtn}
              onClick={() => goTo("/about")}
              whileHover={{ y: -4, scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Our Story
            </motion.button>
          </motion.div>
        </div>
        {/* Scroll button with hover effect */}
        <motion.button
          type="button"
          onClick={handleScrollDown}
          style={styles.scrollButton}
          whileHover={{ y: -6, color: "#F0C35B" }}
          whileTap={{ scale: 0.95 }}
        >
          SCROLL
          <motion.svg
            style={styles.scrollArrow}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 6, 0] }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <polyline points="5 9 12 16 19 9" />
          </motion.svg>
        </motion.button>
      </div>
    </section>
  );
};

export default HeroSection;
