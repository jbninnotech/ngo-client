import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

/* ------------------------------------------------------------------
   THEMES
   Change `const theme = lightTheme;` to `darkTheme` to switch.
------------------------------------------------------------------- */
const lightTheme = {
  colorScheme: "light",

  primary: "#3730A3",
  primaryDark: "#1E1B4B",
  accent: "#0D9488",
  accentDark: "#134E4A",
  accentText: "#0D9488",

  gold: "#F59E0B",
  goldDark: "#D97706",
  goldLight: "#FCD34D",
  goldText: "#D97706",

  pageBg: "#EFEDFB",
  cardBg: "#FFFFFF",
  inputBg: "#FFFFFF",
  tabBg: "#EEEBFB",
  border: "#C9C4EE",
  divider: "#E6E3F7",
  activeBg: "#EEF2FF",
  receiptBg: "#F8F7FF",

  heading: "#3730A3",
  text: "#1E1B4B",
  muted: "#6B6894",
  mutedSoft: "#8A87AE",

  onDark: "#D6D3F5",
  onDarkMuted: "#C4C0EC",

  shadowCard: "0 20px 55px rgba(55,48,163,0.12)",
  shadowSoft: "0 8px 20px rgba(55,48,163,0.18)",
  shadowActive: "0 10px 25px rgba(55,48,163,0.18)",
  shadowGold: "0 14px 30px rgba(245,158,11,0.30)",
  shadowGoldHover: "0 19px 38px rgba(245,158,11,0.42)",
  shadowSummary: "0 22px 60px rgba(30,27,75,0.28)",
  shadowSuccess: "0 30px 90px rgba(0,0,0,0.28)",
  ringAccent: "0 0 0 3px rgba(13,148,136,0.12)",

  glowGold: "rgba(245,158,11,0.16)",
  glowAccent: "rgba(13,148,136,0.20)",
};

const darkTheme = {
  colorScheme: "dark",

  primary: "#6366F1",
  primaryDark: "#0B1020",
  accent: "#14B8A6",
  accentDark: "#0F2A2A",
  accentText: "#2DD4BF",

  gold: "#FBBF24",
  goldDark: "#D97706",
  goldLight: "#FCD34D",
  goldText: "#FBBF24",

  pageBg: "#0B1020",
  cardBg: "#141B2E",
  inputBg: "#1B2440",
  tabBg: "#1B2440",
  border: "#2A3558",
  divider: "#2A3558",
  activeBg: "#12332F",
  receiptBg: "#1B2440",

  heading: "#E6EAF7",
  text: "#E6EAF7",
  muted: "#9AA6C7",
  mutedSoft: "#7D89AD",

  onDark: "#D5DCF2",
  onDarkMuted: "#B4BEDB",

  shadowCard: "0 20px 55px rgba(0,0,0,0.45)",
  shadowSoft: "0 8px 20px rgba(0,0,0,0.35)",
  shadowActive: "0 10px 25px rgba(99,102,241,0.30)",
  shadowGold: "0 14px 30px rgba(251,191,36,0.25)",
  shadowGoldHover: "0 19px 38px rgba(251,191,36,0.38)",
  shadowSummary: "0 22px 60px rgba(0,0,0,0.50)",
  shadowSuccess: "0 30px 90px rgba(0,0,0,0.55)",
  ringAccent: "0 0 0 3px rgba(45,212,191,0.16)",

  glowGold: "rgba(251,191,36,0.14)",
  glowAccent: "rgba(20,184,166,0.18)",
};

const theme = lightTheme;

const Donate = () => {
  const [donationType, setDonationType] = useState("one-time");

  const [selectedAmount, setSelectedAmount] = useState(1000);

  const [customAmount, setCustomAmount] = useState("");

  const [paymentMethod, setPaymentMethod] = useState("upi");

  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    pan: "",
    address: "",
    campaign: "general",
    anonymous: false,
    receipt: true,
  });

  const suggestedAmounts = [
    {
      amount: 500,
      icon: "📚",
      text: "Learning materials for one student",
    },
    {
      amount: 1000,
      icon: "🎒",
      text: "School kit and stationery support",
    },
    {
      amount: 2500,
      icon: "💻",
      text: "Digital-learning support",
    },
    {
      amount: 5000,
      icon: "🎓",
      text: "Educational scholarship assistance",
    },
  ];

  const campaigns = [
    {
      value: "general",
      label: "Where It Is Needed Most",
    },
    {
      value: "education",
      label: "Education for Every Child",
    },
    {
      value: "scholarship",
      label: "Student Scholarship Program",
    },
    {
      value: "digital",
      label: "Digital Classroom Initiative",
    },
    {
      value: "girls-education",
      label: "Girls’ Education Support",
    },
    {
      value: "school-kits",
      label: "School Kit Distribution",
    },
    {
      value: "stem",
      label: "STEM & Robotics Learning Lab",
    },
  ];

  const paymentMethods = [
    {
      value: "upi",
      icon: "📱",
      label: "UPI",
      description: "Google Pay, PhonePe, Paytm",
    },
    {
      value: "card",
      icon: "💳",
      label: "Card",
      description: "Credit or debit card",
    },
    {
      value: "netbanking",
      icon: "🏦",
      label: "Net Banking",
      description: "Pay through your bank",
    },
  ];

  const donationAmount = customAmount
    ? Number(customAmount)
    : selectedAmount;

  const selectedCampaign = campaigns.find(
    (campaign) => campaign.value === formData.campaign
  );

  const handleAmountSelection = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmount = (event) => {
    setCustomAmount(event.target.value);
    setSelectedAmount(null);
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!donationAmount || donationAmount < 100) {
      return;
    }

    setSubmitted(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const resetDonation = () => {
    setSubmitted(false);
    setDonationType("one-time");
    setSelectedAmount(1000);
    setCustomAmount("");
    setPaymentMethod("upi");

    setFormData({
      name: "",
      email: "",
      phone: "",
      pan: "",
      address: "",
      campaign: "general",
      anonymous: false,
      receipt: true,
    });
  };

  const styles = {
    page: {
      minHeight: "100vh",
      backgroundColor: theme.pageBg,
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
      background: `linear-gradient(135deg, ${theme.primaryDark} 0%, ${theme.primary} 55%, ${theme.accentDark} 100%)`,
    },

    heroGlowOne: {
      position: "absolute",
      top: "-190px",
      right: "-100px",
      width: "460px",
      height: "460px",
      borderRadius: "50%",
      backgroundColor: theme.glowGold,
      filter: "blur(25px)",
    },

    heroGlowTwo: {
      position: "absolute",
      bottom: "-230px",
      left: "-140px",
      width: "470px",
      height: "470px",
      borderRadius: "50%",
      backgroundColor: theme.glowAccent,
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
      color: theme.goldLight,
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(252,211,77,0.38)",
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
      color: theme.gold,
    },

    heroDescription: {
      maxWidth: "720px",
      margin: "auto",
      color: theme.onDark,
      fontSize: "18px",
      lineHeight: "1.8",
    },

    donationSection: {
      padding: "95px 6% 110px",
    },

    container: {
      width: "100%",
      maxWidth: "1200px",
      margin: "auto",
      display: "grid",
      gridTemplateColumns: "minmax(0, 1.5fr) minmax(300px, 0.8fr)",
      alignItems: "start",
      gap: "35px",
    },

    formCard: {
      padding: "42px",
      backgroundColor: theme.cardBg,
      border: `1px solid ${theme.border}`,
      borderRadius: "24px",
      boxShadow: theme.shadowCard,
    },

    sectionHeader: {
      marginBottom: "28px",
    },

    smallHeading: {
      margin: "0 0 8px",
      color: theme.accentText,
      fontSize: "12px",
      fontWeight: "800",
      letterSpacing: "1.5px",
    },

    formTitle: {
      margin: "0 0 9px",
      color: theme.heading,
      fontSize: "31px",
    },

    formDescription: {
      margin: 0,
      color: theme.muted,
      fontSize: "14px",
      lineHeight: "1.7",
    },

    typeTabs: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "7px",
      marginBottom: "30px",
      padding: "6px",
      backgroundColor: theme.tabBg,
      borderRadius: "13px",
    },

    typeButton: {
      padding: "13px",
      color: theme.muted,
      backgroundColor: "transparent",
      border: "none",
      borderRadius: "9px",
      fontSize: "13px",
      fontWeight: "800",
      cursor: "pointer",
    },

    activeType: {
      color: "#FFFFFF",
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
      boxShadow: theme.shadowSoft,
    },

    groupTitle: {
      margin: "0 0 14px",
      color: theme.text,
      fontSize: "15px",
      fontWeight: "800",
    },

    amountGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
      gap: "11px",
      marginBottom: "18px",
    },

    amountCard: {
      padding: "17px 12px",
      textAlign: "center",
      color: theme.text,
      backgroundColor: theme.inputBg,
      border: `1.5px solid ${theme.border}`,
      borderRadius: "14px",
      cursor: "pointer",
      boxShadow: "0 2px 8px rgba(55,48,163,0.06)",
    },

    activeAmount: {
      color: theme.primary,
      backgroundColor: theme.activeBg,
      borderColor: theme.primary,
      boxShadow:
        "0 0 0 3px rgba(55,48,163,0.14), 0 10px 25px rgba(55,48,163,0.14)",
    },

    amountIcon: {
      display: "block",
      marginBottom: "7px",
      fontSize: "23px",
    },

    amountNumber: {
      display: "block",
      marginBottom: "5px",
      fontSize: "18px",
      fontWeight: "850",
    },

    amountText: {
      display: "block",
      fontSize: "10px",
      lineHeight: "1.4",
      opacity: 0.82,
    },

    field: {
      display: "grid",
      gap: "7px",
    },

    label: {
      color: theme.text,
      fontSize: "13px",
      fontWeight: "800",
    },

    input: {
      width: "100%",
      padding: "14px 15px",
      color: theme.text,
      backgroundColor: theme.inputBg,
      border: `1px solid ${theme.border}`,
      borderRadius: "9px",
      outline: "none",
      fontSize: "14px",
      colorScheme: theme.colorScheme,
    },

    customAmount: {
      position: "relative",
      marginBottom: "28px",
    },

    currencySymbol: {
      position: "absolute",
      top: "50%",
      left: "15px",
      color: theme.heading,
      fontWeight: "850",
      transform: "translateY(-50%)",
    },

    customInput: {
      width: "100%",
      padding: "14px 15px 14px 36px",
      color: theme.text,
      backgroundColor: theme.inputBg,
      border: `1px solid ${theme.border}`,
      borderRadius: "9px",
      outline: "none",
      fontSize: "14px",
      colorScheme: theme.colorScheme,
    },

    divider: {
      height: "1px",
      margin: "30px 0",
      backgroundColor: theme.divider,
    },

    form: {
      display: "grid",
      gap: "18px",
    },

    twoColumns: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))",
      gap: "16px",
    },

    textarea: {
      width: "100%",
      minHeight: "95px",
      padding: "14px 15px",
      resize: "vertical",
      color: theme.text,
      backgroundColor: theme.inputBg,
      border: `1px solid ${theme.border}`,
      borderRadius: "9px",
      outline: "none",
      fontFamily: "inherit",
      fontSize: "14px",
      colorScheme: theme.colorScheme,
    },

    paymentGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
      gap: "11px",
    },

    paymentCard: {
      padding: "16px",
      display: "flex",
      alignItems: "center",
      gap: "11px",
      color: theme.text,
      backgroundColor: theme.inputBg,
      border: `1.5px solid ${theme.border}`,
      borderRadius: "12px",
      cursor: "pointer",
      textAlign: "left",
    },

    activePayment: {
      backgroundColor: theme.activeBg,
      borderColor: theme.primary,
      boxShadow: "0 0 0 3px rgba(55,48,163,0.14)",
    },

    paymentIcon: {
      fontSize: "24px",
    },

    paymentLabel: {
      margin: "0 0 3px",
      color: theme.heading,
      fontSize: "13px",
      fontWeight: "850",
    },

    paymentDescription: {
      margin: 0,
      color: theme.mutedSoft,
      fontSize: "9px",
    },

    checkboxArea: {
      display: "grid",
      gap: "12px",
    },

    checkboxLabel: {
      display: "flex",
      alignItems: "flex-start",
      gap: "9px",
      color: theme.muted,
      fontSize: "12px",
      lineHeight: "1.5",
    },

    submitButton: {
      width: "100%",
      padding: "16px",
      color: "#FFFFFF",
      background: `linear-gradient(135deg, ${theme.gold}, ${theme.goldDark})`,
      border: "none",
      borderRadius: "10px",
      fontSize: "15px",
      fontWeight: "850",
      cursor: "pointer",
      boxShadow: theme.shadowGold,
    },

    secureText: {
      margin: "-6px 0 0",
      color: theme.mutedSoft,
      textAlign: "center",
      fontSize: "10px",
    },

    summaryCard: {
      position: "sticky",
      top: "105px",
      padding: "32px",
      color: "#FFFFFF",
      background: `linear-gradient(145deg, ${theme.primary} 0%, ${theme.primaryDark} 60%, ${theme.accentDark} 100%)`,
      borderRadius: "22px",
      boxShadow: theme.shadowSummary,
    },

    summaryBadge: {
      display: "inline-block",
      marginBottom: "18px",
      color: theme.goldLight,
      fontSize: "11px",
      fontWeight: "800",
      letterSpacing: "1.4px",
    },

    summaryTitle: {
      margin: "0 0 22px",
      color: "#FFFFFF",
      fontSize: "25px",
    },

    summaryRow: {
      display: "flex",
      justifyContent: "space-between",
      gap: "20px",
      padding: "14px 0",
      color: theme.onDarkMuted,
      borderBottom: "1px solid rgba(255,255,255,0.11)",
      fontSize: "12px",
    },

    summaryValue: {
      color: "#FFFFFF",
      fontWeight: "800",
      textAlign: "right",
    },

    totalArea: {
      marginTop: "20px",
      padding: "20px",
      textAlign: "center",
      backgroundColor: "rgba(255,255,255,0.08)",
      border: "1px solid rgba(255,255,255,0.12)",
      borderRadius: "14px",
    },

    totalLabel: {
      margin: "0 0 6px",
      color: theme.onDarkMuted,
      fontSize: "11px",
    },

    totalAmount: {
      margin: 0,
      color: theme.goldLight,
      fontSize: "35px",
      fontWeight: "900",
    },

    impactList: {
      display: "grid",
      gap: "13px",
      marginTop: "25px",
    },

    impactItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "11px",
      color: theme.onDark,
      fontSize: "12px",
      lineHeight: "1.5",
    },

    check: {
      width: "25px",
      height: "25px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      color: theme.primaryDark,
      background: `linear-gradient(135deg, ${theme.goldLight}, ${theme.gold})`,
      borderRadius: "50%",
      fontWeight: "900",
    },

    successPage: {
      minHeight: "100vh",
      padding: "160px 6% 100px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: `linear-gradient(135deg, ${theme.primaryDark}, ${theme.primary} 60%, ${theme.accentDark})`,
    },

    successCard: {
      width: "100%",
      maxWidth: "650px",
      padding: "55px 45px",
      textAlign: "center",
      backgroundColor: theme.cardBg,
      borderRadius: "25px",
      boxShadow: theme.shadowSuccess,
    },

    successIcon: {
      width: "85px",
      height: "85px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      margin: "0 auto 22px",
      color: "#FFFFFF",
      background: `linear-gradient(135deg, ${theme.accent}, ${theme.accentDark})`,
      borderRadius: "50%",
      fontSize: "38px",
    },

    successTitle: {
      margin: "0 0 14px",
      color: theme.heading,
      fontSize: "35px",
    },

    successDescription: {
      margin: "0 0 25px",
      color: theme.muted,
      lineHeight: "1.8",
    },

    receiptBox: {
      marginBottom: "25px",
      padding: "20px",
      backgroundColor: theme.receiptBg,
      border: `1px solid ${theme.border}`,
      borderRadius: "13px",
    },

    receiptAmount: {
      margin: "0 0 7px",
      color: theme.goldText,
      fontSize: "30px",
      fontWeight: "900",
    },

    receiptText: {
      margin: 0,
      color: theme.muted,
      fontSize: "13px",
    },

    successButton: {
      padding: "14px 25px",
      color: "#FFFFFF",
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.accent})`,
      border: "none",
      borderRadius: "10px",
      fontWeight: "800",
      cursor: "pointer",
    },
  };

  if (submitted) {
    return (
      <main style={styles.successPage}>
        <motion.div
          style={styles.successCard}
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
          transition={{ duration: 0.7 }}
        >
          <motion.div
            style={styles.successIcon}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: 0.3,
              type: "spring",
            }}
          >
            ✓
          </motion.div>

          <h1 style={styles.successTitle}>Thank You for Your Support!</h1>

          <p style={styles.successDescription}>
            Your demo donation has been recorded successfully. Your support
            helps Blanco Educational Academy create better learning
            opportunities for students.
          </p>

          <div style={styles.receiptBox}>
            <p style={styles.receiptAmount}>
              ₹{donationAmount.toLocaleString("en-IN")}
            </p>

            <p style={styles.receiptText}>
              {donationType === "monthly"
                ? "Monthly contribution"
                : "One-time contribution"}{" "}
              • {selectedCampaign?.label}
            </p>
          </div>

          <motion.button
            type="button"
            style={styles.successButton}
            onClick={resetDonation}
            whileHover={{
              y: -4,
              scale: 1.03,
            }}
            whileTap={{ scale: 0.97 }}
          >
            Make Another Donation
          </motion.button>
        </motion.div>
      </main>
    );
  }

  return (
    <main style={styles.page}>
      {/* Hero */}
      {/* <section style={styles.hero}>
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
            SUPPORT EDUCATION
          </span>

          <h1 style={styles.heroTitle}>
            Your generosity can{" "}
            <span style={styles.goldText}>
              change a future.
            </span>
          </h1>

          <p style={styles.heroDescription}>
            Every contribution helps provide education,
            scholarships, technology and essential learning
            resources to deserving students.
          </p>
        </motion.div>
      </section> */}

      {/* Donation form */}
      <section style={styles.donationSection}>
        <div style={styles.container}>
          <motion.div
            style={styles.formCard}
            initial={{ opacity: 0, x: -55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div style={styles.sectionHeader}>
              <p style={styles.smallHeading}>MAKE A CONTRIBUTION</p>

              <h2 style={styles.formTitle}>Donation details</h2>

              <p style={styles.formDescription}>
                Select your donation preference and complete your details
                below.
              </p>
            </div>

            <div style={styles.typeTabs}>
              {[
                {
                  value: "one-time",
                  label: "One-Time Donation",
                },
                {
                  value: "monthly",
                  label: "Monthly Donation",
                },
              ].map((type) => (
                <motion.button
                  key={type.value}
                  type="button"
                  onClick={() => setDonationType(type.value)}
                  style={{
                    ...styles.typeButton,
                    ...(donationType === type.value ? styles.activeType : {}),
                  }}
                  whileTap={{ scale: 0.97 }}
                >
                  {type.label}
                </motion.button>
              ))}
            </div>

            <h3 style={styles.groupTitle}>Select a donation amount</h3>

            <div style={styles.amountGrid}>
              {suggestedAmounts.map((item) => (
                <motion.button
                  key={item.amount}
                  type="button"
                  onClick={() => handleAmountSelection(item.amount)}
                  style={{
                    ...styles.amountCard,
                    ...(selectedAmount === item.amount && !customAmount
                      ? styles.activeAmount
                      : {}),
                  }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <span style={styles.amountIcon}>{item.icon}</span>

                  <span style={styles.amountNumber}>
                    ₹{item.amount.toLocaleString("en-IN")}
                  </span>

                  <span style={styles.amountText}>{item.text}</span>
                </motion.button>
              ))}
            </div>

            <div style={styles.customAmount}>
              <span style={styles.currencySymbol}>₹</span>

              <input
                type="number"
                min="100"
                value={customAmount}
                onChange={handleCustomAmount}
                placeholder="Enter a custom amount"
                style={styles.customInput}
              />
            </div>

            <form style={styles.form} onSubmit={handleSubmit}>
              <div style={styles.field}>
                <label style={styles.label} htmlFor="campaign">
                  Support a Cause *
                </label>

                <select
                  id="campaign"
                  name="campaign"
                  value={formData.campaign}
                  onChange={handleChange}
                  style={styles.input}
                  required
                >
                  {campaigns.map((campaign) => (
                    <option key={campaign.value} value={campaign.value}>
                      {campaign.label}
                    </option>
                  ))}
                </select>
              </div>

              <div style={styles.divider} />

              <h3 style={styles.groupTitle}>Donor information</h3>

              <div style={styles.twoColumns}>
                <div style={styles.field}>
                  <label style={styles.label} htmlFor="donor-name">
                    Full Name *
                  </label>

                  <input
                    id="donor-name"
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
                  <label style={styles.label} htmlFor="donor-phone">
                    Phone Number *
                  </label>

                  <input
                    id="donor-phone"
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
                  <label style={styles.label} htmlFor="donor-email">
                    Email Address *
                  </label>

                  <input
                    id="donor-email"
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
                  <label style={styles.label} htmlFor="donor-pan">
                    PAN Number
                  </label>

                  <input
                    id="donor-pan"
                    name="pan"
                    type="text"
                    value={formData.pan}
                    onChange={handleChange}
                    style={styles.input}
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div style={styles.field}>
                <label style={styles.label} htmlFor="donor-address">
                  Address
                </label>

                <textarea
                  id="donor-address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  style={styles.textarea}
                  placeholder="Enter your address"
                />
              </div>

              <div style={styles.divider} />

              <h3 style={styles.groupTitle}>Select a payment method</h3>

              <div style={styles.paymentGrid}>
                {paymentMethods.map((method) => (
                  <motion.button
                    key={method.value}
                    type="button"
                    onClick={() => setPaymentMethod(method.value)}
                    style={{
                      ...styles.paymentCard,
                      ...(paymentMethod === method.value
                        ? styles.activePayment
                        : {}),
                    }}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <span style={styles.paymentIcon}>{method.icon}</span>

                    <span>
                      <p style={styles.paymentLabel}>{method.label}</p>

                      <p style={styles.paymentDescription}>
                        {method.description}
                      </p>
                    </span>
                  </motion.button>
                ))}
              </div>

              <div style={styles.checkboxArea}>
                <label style={styles.checkboxLabel}>
                  <input
                    name="anonymous"
                    type="checkbox"
                    checked={formData.anonymous}
                    onChange={handleChange}
                  />
                  Display this donation anonymously.
                </label>

                <label style={styles.checkboxLabel}>
                  <input
                    name="receipt"
                    type="checkbox"
                    checked={formData.receipt}
                    onChange={handleChange}
                  />
                  Send a donation acknowledgement and receipt to my email.
                </label>
              </div>

              <motion.button
                type="submit"
                style={styles.submitButton}
                whileHover={{
                  y: -4,
                  scale: 1.01,
                  boxShadow: theme.shadowGoldHover,
                }}
                whileTap={{ scale: 0.97 }}
              >
                Donate ₹{donationAmount.toLocaleString("en-IN")} →
              </motion.button>

              <p style={styles.secureText}>
                🔒 This is a demo payment interface. No real payment will be
                processed.
              </p>
            </form>
          </motion.div>

          {/* Donation summary */}
          <motion.aside
            style={styles.summaryCard}
            initial={{ opacity: 0, x: 55 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span style={styles.summaryBadge}>DONATION SUMMARY</span>

            <h2 style={styles.summaryTitle}>Your contribution</h2>

            <div style={styles.summaryRow}>
              <span>Donation type</span>

              <span style={styles.summaryValue}>
                {donationType === "monthly" ? "Monthly" : "One-Time"}
              </span>
            </div>

            <div style={styles.summaryRow}>
              <span>Selected cause</span>

              <span style={styles.summaryValue}>{selectedCampaign?.label}</span>
            </div>

            <div style={styles.summaryRow}>
              <span>Payment method</span>

              <span style={styles.summaryValue}>
                {
                  paymentMethods.find((method) => method.value === paymentMethod)
                    ?.label
                }
              </span>
            </div>

            <div style={styles.totalArea}>
              <p style={styles.totalLabel}>Total contribution</p>

              <p style={styles.totalAmount}>
                ₹{donationAmount.toLocaleString("en-IN")}
              </p>
            </div>

            <div style={styles.impactList}>
              {[
                "Supports transparent educational initiatives",
                "Donation acknowledgement available",
                "Campaign updates shared with donors",
                "Your information is handled responsibly",
              ].map((item) => (
                <div key={item} style={styles.impactItem}>
                  <span style={styles.check}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </motion.aside>
        </div>
      </section>
    </main>
  );
};

export default Donate;