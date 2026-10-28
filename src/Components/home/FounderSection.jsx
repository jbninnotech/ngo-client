import { useState } from "react";
import { motion } from "motion/react";
import suitPhoto from "../../assets/Professional-suit.jpeg";
import normalPhoto from "../../assets/normal-photo.jpeg";
import { useNavigate } from "react-router-dom";

const achievements = [
  { number: "10+", label: "Years of service" },
  { number: "25+", label: "Communities reached" },
  { number: "1,500+", label: "Students supported" },
];

const c = {
  navy: "#06275B",
  gold: "#E3AB35",
  goldDark: "#A8700A",
  body: "#3F5573",
  green: "#2E7D32",
};

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const FounderSection = () => {
  const [flipped, setFlipped] = useState(false);
const navigate = useNavigate()
  const s = {
    section: {
      padding: "90px 6%",
      background: "linear-gradient(180deg, #FFFFFF 0%, #F6F1E8 100%)",
      overflow: "hidden",
    },
    container: {
      maxWidth: "1100px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      alignItems: "center",
      gap: "70px",
    },
    photoWrap: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
    frame: {
      position: "absolute",
      inset: 0,
      margin: "auto",
      width: "clamp(240px, 70vw, 360px)",
      aspectRatio: "4 / 5",
      // border: `3px solid ${c.gold}`,
      borderRadius: "8px",
      transform: "translate(18px, 18px)",
    },
    photoHit: {
      position: "relative",
      width: "clamp(240px, 70vw, 360px)",
      aspectRatio: "4 / 5",
      perspective: "1200px",
      cursor: "pointer",
    },
    inner: {
      position: "relative",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
    },
    face: {
      position: "absolute",
      inset: 0,
      overflow: "hidden",
      borderRadius: "8px",
      boxShadow: "0 30px 60px rgba(6,39,91,0.22)",
      backfaceVisibility: "hidden",
      WebkitBackfaceVisibility: "hidden",
    },
    img: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      objectPosition: "center top",
      display: "block",
    },
    nameTag: {
      position: "absolute",
      left: "-14px",
      bottom: "28px",
      padding: "14px 26px",
      background: c.navy,
      borderLeft: `5px solid ${c.gold}`,
      borderRadius: "6px",
      boxShadow: "0 14px 28px rgba(6,39,91,0.3)",
    },
    name: { margin: 0, color: "#fff", fontSize: "19px", fontWeight: 800 },
    role: {
      margin: "2px 0 0",
      color: "#F0C566",
      fontSize: "12.5px",
      fontWeight: 700,
      letterSpacing: "0.5px",
    },

    label: {
      color: c.green,
      fontSize: "13px",
      fontWeight: 700,
      letterSpacing: "2px",
      textTransform: "uppercase",
    },
    title: {
      margin: "10px 0 24px",
      color: c.navy,
      fontSize: "clamp(26px, 5vw, 36px)",
      fontWeight: 800,
      lineHeight: 1.1,
      letterSpacing: "-1.2px",
    },
    gold: { color: c.goldDark },
    quote: {
      margin: "0 0 22px",
      padding: "4px 0 4px 20px",
      borderLeft: `4px solid ${c.gold}`,
      color: c.navy,
      fontFamily: "Georgia, serif",
      fontStyle: "italic",
      fontSize: "clamp(10px, 2.2vw, 18px)",
      lineHeight: 1.65,
    },
    text: {
      margin: "0 0 14px",
      color: c.body,
      fontSize: "14px",
      lineHeight: 1.8,
    },
    stats: {
      marginTop: "30px",
      paddingTop: "20px",
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      borderTop: `3px solid ${c.gold}`,
    },
    statNum: {
      margin: "0 0 4px",
      color: c.goldDark,
      fontSize: "clamp(25px, 4vw, 36px)",
      fontWeight: 800,
      lineHeight: 1,
    },
    statLabel: { margin: 0, color: c.body, fontSize: "13px" },
    readMore: {
      marginTop: 56, 
      display: "inline-flex",
      alignItems: "center",
      gap: 10,
      padding: "12px 26px",
      background: "#0b2559",
      color: "#fff",
      border: "none",
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 600,
      letterSpacing: "0.04em",
      cursor: "pointer",
      boxShadow: "0 8px 20px rgba(11,37,89,0.25)",
    },
  };

  return (
    <section style={s.section}>
      <div style={s.container}>
        {/* Photo */}
        <motion.div style={s.photoWrap} {...fadeUp(0)}>
          <div style={s.frame} />
          <div
            style={s.photoHit}
            onPointerEnter={(e) =>
              e.pointerType === "mouse" && setFlipped(true)
            }
            onPointerLeave={(e) =>
              e.pointerType === "mouse" && setFlipped(false)
            }
            onClick={() => setFlipped((v) => !v)}
          >
            <motion.div
              style={s.inner}
              animate={{ rotateY: flipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 160, damping: 20 }}
            >
              <div style={s.face}>
                <img
                  src={suitPhoto}
                  alt="Founder"
                  style={s.img}
                  draggable={false}
                />
              </div>
              <div style={{ ...s.face, transform: "rotateY(180deg)" }}>
                <img
                  src={normalPhoto}
                  alt="Founder"
                  style={s.img}
                  draggable={false}
                />
              </div>
            </motion.div>
            <div style={s.nameTag}>
              <p style={s.name}>Mohammad Ismail</p>
              <p style={s.role}>Founder &amp; Chairman</p>
            </div>
          </div>
          <motion.button
            style={s.readMore}
            whileHover={{ y: -2, boxShadow: "0 12px 26px rgba(11,37,89,0.35)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => {
              navigate("/about");
            }}
          >
            Read More
            <span style={{ color: "#e8b04a", fontSize: 16 }}>→</span>
          </motion.button>
        </motion.div>

        {/* Text */}
        <div style={{ maxWidth: "560px" }}>
          {/* <motion.span style={s.label} {...fadeUp(0)}>
            Meet our founder
          </motion.span> */}
          <motion.h2 style={s.title} {...fadeUp(0.1)}>
            A vision built on <span style={s.gold}>education and hope</span>
          </motion.h2>
          <motion.blockquote style={s.quote} {...fadeUp(0.2)}>
            Education is more than learning lessons. It is about giving every
            student the confidence, knowledge and opportunity to build a better
            future.
          </motion.blockquote>
          <motion.p style={s.text} {...fadeUp(0.3)}>
            Blanco Educational Academy was founded with the belief that every
            child deserves meaningful education, regardless of financial
            circumstances or social background.
          </motion.p>
          <motion.p style={s.text} {...fadeUp(0.4)}>
            Through scholarships, learning resources, digital education,
            mentoring and career guidance, the academy continues to help
            students discover their abilities and move toward independent
            futures.
          </motion.p>

          <motion.div style={s.stats} {...fadeUp(0.5)}>
            {achievements.map((a) => (
              <div key={a.label}>
                <p style={s.statNum}>{a.number}</p>
                <p style={s.statLabel}>{a.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;
