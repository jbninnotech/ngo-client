import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const Campaigns = () => {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [selectedCampaign, setSelectedCampaign] =
    useState(null);

  const [donationAmount, setDonationAmount] =
    useState("");

  const [donationSuccess, setDonationSuccess] =
    useState(false);

  const campaigns = [
    {
      id: 1,
      category: "Education",
      icon: "🎒",
      title: "Education for Every Child",
      description:
        "Help children from underserved communities receive school admission support, books, uniforms and quality learning opportunities.",
      target: 500000,
      raised: 365000,
      donors: 184,
      students: 120,
      daysLeft: 28,
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 2,
      category: "Scholarship",
      icon: "🎓",
      title: "Sponsor a Student Scholarship",
      description:
        "Support talented students who are at risk of discontinuing their education because of financial difficulties.",
      target: 350000,
      raised: 217000,
      donors: 96,
      students: 35,
      daysLeft: 42,
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 3,
      category: "Technology",
      icon: "💻",
      title: "Digital Classroom Initiative",
      description:
        "Help us provide computers, projectors, internet access and digital-learning resources to community education centres.",
      target: 750000,
      raised: 438000,
      donors: 142,
      students: 300,
      daysLeft: 55,
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 4,
      category: "Girls Education",
      icon: "👧",
      title: "Empower Her Through Education",
      description:
        "Support girls with school fees, hygiene essentials, mentoring and educational resources to continue their studies confidently.",
      target: 400000,
      raised: 286000,
      donors: 127,
      students: 80,
      daysLeft: 34,
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 5,
      category: "School Kits",
      icon: "📚",
      title: "School Kit Distribution Drive",
      description:
        "Provide students with school bags, notebooks, stationery, uniforms and other essential classroom materials.",
      target: 250000,
      raised: 192000,
      donors: 215,
      students: 500,
      daysLeft: 18,
      image:
        "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1000&q=85",
    },
    {
      id: 6,
      category: "STEM",
      icon: "🤖",
      title: "STEM & Robotics Learning Lab",
      description:
        "Help establish a practical learning lab where students can explore science, robotics, AI, electronics and innovation.",
      target: 900000,
      raised: 495000,
      donors: 168,
      students: 250,
      daysLeft: 65,
      image:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=85",
    },
  ];

  const categories = [
    "All",
    ...new Set(
      campaigns.map((campaign) => campaign.category)
    ),
  ];

  const visibleCampaigns =
    activeCategory === "All"
      ? campaigns
      : campaigns.filter(
          (campaign) =>
            campaign.category === activeCategory
        );

  const formatMoney = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const openDonation = (campaign) => {
    setSelectedCampaign(campaign);
    setDonationAmount("");
    setDonationSuccess(false);
  };

  const closeDonation = () => {
    setSelectedCampaign(null);
    setDonationAmount("");
    setDonationSuccess(false);
  };

  const handleDonation = (event) => {
    event.preventDefault();

    if (
      !donationAmount ||
      Number(donationAmount) < 100
    ) {
      return;
    }

    setDonationSuccess(true);
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

    section: {
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
      margin: "0 auto",
      color: "#68778B",
      fontSize: "16px",
      lineHeight: "1.8",
    },

    filterContainer: {
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

    campaignGrid: {
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
      height: "245px",
      overflow: "hidden",
    },

    campaignImage: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },

    imageOverlay: {
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(180deg, transparent 40%, rgba(3,27,66,0.82) 100%)",
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

    campaignIcon: {
      position: "absolute",
      right: "18px",
      bottom: "17px",
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

    cardContent: {
      padding: "28px",
    },

    campaignTitle: {
      margin: "0 0 13px",
      color: "#06275B",
      fontSize: "22px",
      lineHeight: "1.35",
    },

    campaignDescription: {
      minHeight: "82px",
      margin: "0 0 23px",
      color: "#68778B",
      fontSize: "14px",
      lineHeight: "1.75",
    },

    progressArea: {
      marginBottom: "20px",
    },

    progressHeader: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "15px",
      marginBottom: "9px",
    },

    raisedAmount: {
      color: "#2E7D32",
      fontSize: "15px",
      fontWeight: "850",
    },

    targetAmount: {
      color: "#78879A",
      fontSize: "12px",
      fontWeight: "700",
    },

    progressTrack: {
      height: "10px",
      overflow: "hidden",
      backgroundColor: "#E6EBF2",
      borderRadius: "10px",
    },

    progressBar: {
      height: "100%",
      background:
        "linear-gradient(90deg, #2E7D32, #D6A12D)",
      borderRadius: "10px",
    },

    progressPercentage: {
      margin: "8px 0 0",
      color: "#C18413",
      textAlign: "right",
      fontSize: "12px",
      fontWeight: "800",
    },

    statistics: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "9px",
      marginBottom: "23px",
      padding: "16px 10px",
      backgroundColor: "#F7F9FC",
      borderRadius: "12px",
    },

    statistic: {
      textAlign: "center",
      borderRight: "1px solid #E2E7EF",
    },

    lastStatistic: {
      textAlign: "center",
    },

    statisticNumber: {
      margin: "0 0 3px",
      color: "#06275B",
      fontSize: "15px",
      fontWeight: "850",
    },

    statisticLabel: {
      margin: 0,
      color: "#7A899B",
      fontSize: "10px",
      fontWeight: "700",
    },

    donateButton: {
      width: "100%",
      padding: "14px 20px",
      color: "#FFFFFF",
      background:
        "linear-gradient(135deg, #06275B, #124E82)",
      border: "none",
      borderRadius: "10px",
      fontSize: "14px",
      fontWeight: "800",
      cursor: "pointer",
    },

    supportSection: {
      padding: "0 6% 105px",
    },

    supportBox: {
      position: "relative",
      maxWidth: "1200px",
      margin: "auto",
      padding: "70px 7%",
      overflow: "hidden",
      textAlign: "center",
      background:
        "linear-gradient(135deg, #1F6A31 0%, #06275B 75%)",
      borderRadius: "28px",
      boxShadow: "0 25px 65px rgba(6,39,91,0.20)",
    },

    supportTitle: {
      margin: "0 0 15px",
      color: "#FFFFFF",
      fontSize: "clamp(30px, 5vw, 48px)",
    },

    supportText: {
      maxWidth: "660px",
      margin: "0 auto 27px",
      color: "#D5E0ED",
      lineHeight: "1.8",
    },

    supportButton: {
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
      maxWidth: "500px",
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

    modalCampaign: {
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

    amountButtons: {
      display: "grid",
      gridTemplateColumns:
        "repeat(auto-fit, minmax(80px, 1fr))",
      gap: "10px",
      marginBottom: "18px",
    },

    amountButton: {
      padding: "12px",
      color: "#17325B",
      backgroundColor: "#F5F8FC",
      border: "1px solid #DCE4EF",
      borderRadius: "9px",
      fontWeight: "800",
      cursor: "pointer",
    },

    selectedAmount: {
      color: "#FFFFFF",
      backgroundColor: "#2E7D32",
      borderColor: "#2E7D32",
    },

    label: {
      display: "block",
      marginBottom: "8px",
      color: "#17325B",
      fontSize: "13px",
      fontWeight: "800",
    },

    input: {
      width: "100%",
      padding: "14px 15px",
      marginBottom: "20px",
      color: "#17325B",
      backgroundColor: "#F7F9FC",
      border: "1px solid #DCE4EF",
      borderRadius: "9px",
      outline: "none",
      fontSize: "14px",
    },

    modalButton: {
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

    successText: {
      color: "#68778B",
      lineHeight: "1.7",
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
            ACTIVE CAMPAIGNS
          </span>

          <h1 style={styles.heroTitle}>
            Your support can{" "}
            <span style={styles.goldText}>
              transform a future.
            </span>
          </h1>

          <p style={styles.heroDescription}>
            Support meaningful educational campaigns that provide
            students with learning opportunities, scholarships,
            technology and essential school resources.
          </p>
        </motion.div>
      </section>

      {/* Campaign cards */}
      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.headingArea}>
            <p style={styles.smallHeading}>
              SUPPORT A CAUSE
            </p>

            <h2 style={styles.sectionTitle}>
              Campaigns creating real impact
            </h2>

            <p style={styles.sectionDescription}>
              Select a campaign and help us create equal educational
              opportunities for every student.
            </p>
          </div>

          <div style={styles.filterContainer}>
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
            style={styles.campaignGrid}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {visibleCampaigns.map(
              (campaign, index) => {
                const percentage = Math.min(
                  Math.round(
                    (campaign.raised /
                      campaign.target) *
                      100
                  ),
                  100
                );

                return (
                  <motion.article
                    key={campaign.id}
                    style={styles.card}
                    initial={{
                      opacity: 0,
                      y: 55,
                    }}
                    animate={{
                      opacity: 1,
                      y: 0,
                    }}
                    transition={{
                      duration: 0.55,
                      delay: index * 0.1,
                    }}
                    whileHover={{
                      y: -12,
                      boxShadow:
                        "0 30px 70px rgba(6,39,91,0.17)",
                    }}
                  >
                    <div style={styles.imageContainer}>
                      <motion.img
                        src={campaign.image}
                        alt={campaign.title}
                        style={styles.campaignImage}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5 }}
                      />

                      <div style={styles.imageOverlay} />

                      <span style={styles.category}>
                        {campaign.category}
                      </span>

                      <motion.div
                        style={styles.campaignIcon}
                        animate={{
                          y: [0, -6, 0],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      >
                        {campaign.icon}
                      </motion.div>
                    </div>

                    <div style={styles.cardContent}>
                      <h3 style={styles.campaignTitle}>
                        {campaign.title}
                      </h3>

                      <p
                        style={
                          styles.campaignDescription
                        }
                      >
                        {campaign.description}
                      </p>

                      <div style={styles.progressArea}>
                        <div style={styles.progressHeader}>
                          <span style={styles.raisedAmount}>
                            {formatMoney(campaign.raised)}
                          </span>

                          <span style={styles.targetAmount}>
                            Target:{" "}
                            {formatMoney(campaign.target)}
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
                              duration: 1.3,
                              delay: 0.2,
                            }}
                          />
                        </div>

                        <p
                          style={
                            styles.progressPercentage
                          }
                        >
                          {percentage}% funded
                        </p>
                      </div>

                      <div style={styles.statistics}>
                        <div style={styles.statistic}>
                          <p
                            style={
                              styles.statisticNumber
                            }
                          >
                            {campaign.donors}
                          </p>

                          <p
                            style={
                              styles.statisticLabel
                            }
                          >
                            Donors
                          </p>
                        </div>

                        <div style={styles.statistic}>
                          <p
                            style={
                              styles.statisticNumber
                            }
                          >
                            {campaign.students}
                          </p>

                          <p
                            style={
                              styles.statisticLabel
                            }
                          >
                            Students
                          </p>
                        </div>

                        <div
                          style={styles.lastStatistic}
                        >
                          <p
                            style={
                              styles.statisticNumber
                            }
                          >
                            {campaign.daysLeft}
                          </p>

                          <p
                            style={
                              styles.statisticLabel
                            }
                          >
                            Days Left
                          </p>
                        </div>
                      </div>

                      <motion.button
                        type="button"
                        style={styles.donateButton}
                        onClick={() =>
                          openDonation(campaign)
                        }
                        whileHover={{
                          y: -4,
                          scale: 1.01,
                          background:
                            "linear-gradient(135deg, #2E7D32, #174A26)",
                        }}
                        whileTap={{ scale: 0.97 }}
                      >
                        Support This Campaign →
                      </motion.button>
                    </div>
                  </motion.article>
                );
              }
            )}
          </motion.div>
        </div>
      </section>

      {/* Support CTA */}
      <section style={styles.supportSection}>
        <motion.div
          style={styles.supportBox}
          initial={{ opacity: 0, y: 55 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={styles.supportTitle}>
            Every contribution creates an opportunity.
          </h2>

          <p style={styles.supportText}>
            Whether you support one student or an entire learning
            program, your contribution helps build a better future.
          </p>

          <motion.a
            href="#campaign-list"
            style={styles.supportButton}
            onClick={(event) => {
              event.preventDefault();

              window.scrollTo({
                top: 500,
                behavior: "smooth",
              });
            }}
            whileHover={{ y: -5, scale: 1.04 }}
          >
            Explore Campaigns →
          </motion.a>
        </motion.div>
      </section>

      {/* Donation popup */}
      <AnimatePresence>
        {selectedCampaign && (
          <motion.div
            style={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeDonation}
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
              {!donationSuccess ? (
                <>
                  <div style={styles.modalHeader}>
                    <div>
                      <h2 style={styles.modalTitle}>
                        Support This Campaign
                      </h2>

                      <p style={styles.modalCampaign}>
                        {selectedCampaign.title}
                      </p>
                    </div>

                    <button
                      type="button"
                      style={styles.closeButton}
                      onClick={closeDonation}
                    >
                      ×
                    </button>
                  </div>

                  <form onSubmit={handleDonation}>
                    <label style={styles.label}>
                      Select an amount
                    </label>

                    <div style={styles.amountButtons}>
                      {[500, 1000, 2500, 5000].map(
                        (amount) => (
                          <button
                            key={amount}
                            type="button"
                            onClick={() =>
                              setDonationAmount(
                                String(amount)
                              )
                            }
                            style={{
                              ...styles.amountButton,
                              ...(donationAmount ===
                              String(amount)
                                ? styles.selectedAmount
                                : {}),
                            }}
                          >
                            ₹{amount.toLocaleString("en-IN")}
                          </button>
                        )
                      )}
                    </div>

                    <label
                      style={styles.label}
                      htmlFor="custom-amount"
                    >
                      Or enter a custom amount
                    </label>

                    <input
                      id="custom-amount"
                      type="number"
                      min="100"
                      value={donationAmount}
                      onChange={(event) =>
                        setDonationAmount(
                          event.target.value
                        )
                      }
                      placeholder="Minimum ₹100"
                      style={styles.input}
                      required
                    />

                    <motion.button
                      type="submit"
                      style={styles.modalButton}
                      whileHover={{
                        y: -3,
                        scale: 1.01,
                      }}
                      whileTap={{ scale: 0.97 }}
                    >
                      Continue with ₹
                      {donationAmount || "0"}
                    </motion.button>
                  </form>
                </>
              ) : (
                <motion.div
                  style={styles.successArea}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                  }}
                >
                  <div style={styles.successIcon}>✓</div>

                  <h2 style={styles.modalTitle}>
                    Thank You for Your Support!
                  </h2>

                  <p style={styles.successText}>
                    Your demo contribution of{" "}
                    <strong>
                      ₹
                      {Number(
                        donationAmount
                      ).toLocaleString("en-IN")}
                    </strong>{" "}
                    has been recorded for{" "}
                    <strong>
                      {selectedCampaign.title}
                    </strong>
                    .
                  </p>

                  <motion.button
                    type="button"
                    style={styles.modalButton}
                    onClick={closeDonation}
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

export default Campaigns;