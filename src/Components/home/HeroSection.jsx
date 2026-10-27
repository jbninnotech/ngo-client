import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";


const heroVideo = "https://res.cloudinary.com/yozeshlg/video/upload/v1793075516/Create_a_15-second_photorealistic_cinematic_documentary_video_in_16_9_using_the_supplied_image_as_the_exact_visual_reference_and_opening_frame._Preserve_the_same_Indian_school_environment_children_blue-and-white.mp4";

const heroImage =
  "https://res.cloudinary.com/yozeshlg/image/upload/v1793012797/Laughing_School_Friends_on_Village_Path.png";

// Slide 1 = the image, slide 2 = the video (then it loops back to the image)
const slides = [
  { type: "image", src: heroImage },
  { type: "video", src: heroVideo },
];

const SLIDE_INTERVAL = 2000; // image slides change every 2 seconds

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const videoRef = useRef(null);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);

  useEffect(() => {
    const slide = slides[current];

    // Video slide: play from the start, move on when it ends (onEnded below)
    if (slide.type === "video") {
      const video = videoRef.current;
      if (video) {
        video.currentTime = 0;
        const playPromise = video.play();
        if (playPromise && playPromise.catch) {
          playPromise.catch(goNext); // if autoplay is blocked, skip to images
        }
      }
      return undefined;
    }

    // Image slide: wait 2 seconds, then go to the next slide
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

  const styles = {
    section: {
      width: "100%",
      overflow: "hidden",
      // backgroundColor: "#061F3F",
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
        {/* Slides: video first, then images */}
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