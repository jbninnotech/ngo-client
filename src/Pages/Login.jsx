// //import { useState } from "react";
// import { motion } from "motion/react";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     role: "student",
//     email: "",
//     password: "",
//   });

//   const [showPassword, setShowPassword] =
//     useState(false);

//   const [error, setError] = useState("");
//   const [success, setSuccess] = useState(false);

//   const roles = [
//     {
//       value: "admin",
//       label: "NGO Administrator",
//       icon: "🛡️",
//     },
//     {
//       value: "coordinator",
//       label: "Program Coordinator",
//       icon: "📋",
//     },
//     {
//       value: "teacher",
//       label: "Teacher",
//       icon: "👩‍🏫",
//     },
//     {
//       value: "volunteer",
//       label: "Volunteer",
//       icon: "🤝",
//     },
//     {
//       value: "student",
//       label: "Student",
//       icon: "🎓",
//     },
//     {
//       value: "donor",
//       label: "Donor",
//       icon: "💛",
//     },
//   ];

//   const demoUsers = {
//     admin: {
//       email: "admin@blanco.org",
//       password: "Admin@123",
//     },
//     coordinator: {
//       email: "coordinator@blanco.org",
//       password: "Coordinator@123",
//     },
//     teacher: {
//       email: "teacher@blanco.org",
//       password: "Teacher@123",
//     },
//     volunteer: {
//       email: "volunteer@blanco.org",
//       password: "Volunteer@123",
//     },
//     student: {
//       email: "student@blanco.org",
//       password: "Student@123",
//     },
//     donor: {
//       email: "donor@blanco.org",
//       password: "Donor@123",
//     },
//   };

//   const selectedRole = roles.find(
//     (role) => role.value === formData.role
//   );

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormData((previousData) => ({
//       ...previousData,
//       [name]: value,
//     }));

//     setError("");
//     setSuccess(false);
//   };

//   const fillDemoCredentials = () => {
//     const demoUser = demoUsers[formData.role];

//     setFormData((previousData) => ({
//       ...previousData,
//       email: demoUser.email,
//       password: demoUser.password,
//     }));

//     setError("");
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const expectedUser =
//       demoUsers[formData.role];

//     if (
//       formData.email !== expectedUser.email ||
//       formData.password !== expectedUser.password
//     ) {
//       setError(
//         "Invalid credentials for the selected role. Click “Use Demo Credentials” and try again."
//       );

//       return;
//     }

//     const loggedInUser = {
//       role: formData.role,
//       email: formData.email,
//       name: selectedRole.label,
//     };

//     sessionStorage.setItem(
//       "blancoUser",
//       JSON.stringify(loggedInUser)
//     );

//     setError("");
//     setSuccess(true);

//     // Temporary redirection until dashboards are created
//     setTimeout(() => {
//       navigate("/");
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//       });
//     }, 1300);
//   };

//   const styles = {
//     page: {
//       minHeight: "100vh",
//       padding: "145px 6% 80px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       background:
//         "linear-gradient(135deg, #031B42 0%, #06275B 55%, #123F2A 100%)",
//     },

//     container: {
//       width: "100%",
//       maxWidth: "1100px",
//       display: "grid",
//       gridTemplateColumns:
//         "repeat(auto-fit, minmax(330px, 1fr))",
//       overflow: "hidden",
//       backgroundColor: "#FFFFFF",
//       border: "1px solid rgba(255,255,255,0.18)",
//       borderRadius: "28px",
//       boxShadow: "0 35px 100px rgba(0,0,0,0.30)",
//     },

//     informationPanel: {
//       position: "relative",
//       minHeight: "650px",
//       padding: "60px 48px",
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "space-between",
//       overflow: "hidden",
//       color: "#FFFFFF",
//       background:
//         "linear-gradient(145deg, #06275B 0%, #031B42 60%, #174A2A 100%)",
//     },

//     glow: {
//       position: "absolute",
//       right: "-140px",
//       bottom: "-130px",
//       width: "350px",
//       height: "350px",
//       borderRadius: "50%",
//       backgroundColor: "rgba(218,165,50,0.16)",
//     },

//     informationContent: {
//       position: "relative",
//       zIndex: 2,
//     },

//     badge: {
//       display: "inline-block",
//       marginBottom: "24px",
//       padding: "8px 16px",
//       color: "#F1C25B",
//       backgroundColor: "rgba(255,255,255,0.08)",
//       border: "1px solid rgba(241,194,91,0.35)",
//       borderRadius: "25px",
//       fontSize: "11px",
//       fontWeight: "800",
//       letterSpacing: "1.5px",
//     },

//     informationTitle: {
//       margin: "0 0 20px",
//       color: "#FFFFFF",
//       fontSize: "clamp(35px, 5vw, 51px)",
//       lineHeight: "1.14",
//     },

//     goldText: {
//       color: "#E0AA34",
//     },

//     informationDescription: {
//       margin: "0 0 35px",
//       color: "#C9D6E7",
//       fontSize: "16px",
//       lineHeight: "1.8",
//     },

//     featureList: {
//       display: "grid",
//       gap: "15px",
//     },

//     feature: {
//       display: "flex",
//       alignItems: "center",
//       gap: "13px",
//       color: "#FFFFFF",
//       fontSize: "14px",
//       fontWeight: "650",
//     },

//     check: {
//       width: "29px",
//       height: "29px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       flexShrink: 0,
//       color: "#06275B",
//       background:
//         "linear-gradient(135deg, #F1C25B, #C98A13)",
//       borderRadius: "50%",
//       fontSize: "12px",
//       fontWeight: "900",
//     },

//     quote: {
//       position: "relative",
//       zIndex: 2,
//       marginTop: "40px",
//       padding: "20px",
//       color: "#DBE5F1",
//       backgroundColor: "rgba(255,255,255,0.08)",
//       border: "1px solid rgba(255,255,255,0.12)",
//       borderRadius: "15px",
//       fontSize: "13px",
//       fontStyle: "italic",
//       lineHeight: "1.7",
//     },

//     formPanel: {
//       padding: "55px 48px",
//       backgroundColor: "#FFFFFF",
//     },

//     formIcon: {
//       width: "62px",
//       height: "62px",
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "center",
//       marginBottom: "22px",
//       color: "#FFFFFF",
//       background:
//         "linear-gradient(135deg, #06275B, #2E7D32)",
//       borderRadius: "17px",
//       fontSize: "28px",
//       boxShadow: "0 13px 30px rgba(6,39,91,0.20)",
//     },

//     formTitle: {
//       margin: "0 0 9px",
//       color: "#06275B",
//       fontSize: "33px",
//     },

//     formDescription: {
//       margin: "0 0 28px",
//       color: "#68778B",
//       fontSize: "14px",
//       lineHeight: "1.7",
//     },

//     rolePreview: {
//       marginBottom: "22px",
//       padding: "13px 15px",
//       display: "flex",
//       alignItems: "center",
//       gap: "12px",
//       color: "#174A26",
//       backgroundColor: "#EAF6EC",
//       border: "1px solid #C9E5CE",
//       borderRadius: "11px",
//       fontSize: "13px",
//       fontWeight: "800",
//     },

//     roleIcon: {
//       fontSize: "23px",
//     },

//     form: {
//       display: "grid",
//       gap: "19px",
//     },

//     field: {
//       display: "grid",
//       gap: "8px",
//     },

//     label: {
//       color: "#17325B",
//       fontSize: "13px",
//       fontWeight: "800",
//     },

//     input: {
//       width: "100%",
//       padding: "14px 15px",
//       color: "#17325B",
//       backgroundColor: "#F7F9FC",
//       border: "1px solid #DCE4EF",
//       borderRadius: "10px",
//       outline: "none",
//       fontSize: "14px",
//     },

//     passwordWrapper: {
//       position: "relative",
//     },

//     passwordInput: {
//       width: "100%",
//       padding: "14px 52px 14px 15px",
//       color: "#17325B",
//       backgroundColor: "#F7F9FC",
//       border: "1px solid #DCE4EF",
//       borderRadius: "10px",
//       outline: "none",
//       fontSize: "14px",
//     },

//     showButton: {
//       position: "absolute",
//       top: "50%",
//       right: "10px",
//       padding: "7px",
//       color: "#2E7D32",
//       backgroundColor: "transparent",
//       border: "none",
//       transform: "translateY(-50%)",
//       fontSize: "12px",
//       fontWeight: "800",
//       cursor: "pointer",
//     },

//     optionsRow: {
//       display: "flex",
//       alignItems: "center",
//       justifyContent: "space-between",
//       gap: "15px",
//       flexWrap: "wrap",
//     },

//     rememberArea: {
//       display: "flex",
//       alignItems: "center",
//       gap: "8px",
//       color: "#64758A",
//       fontSize: "12px",
//     },

//     forgotLink: {
//       color: "#2E7D32",
//       textDecoration: "none",
//       fontSize: "12px",
//       fontWeight: "800",
//     },

//     demoButton: {
//       width: "100%",
//       padding: "12px",
//       color: "#06275B",
//       backgroundColor: "#EDF3F9",
//       border: "1px solid #D7E2EF",
//       borderRadius: "9px",
//       fontSize: "13px",
//       fontWeight: "800",
//       cursor: "pointer",
//     },

//     submitButton: {
//       width: "100%",
//       padding: "15px",
//       color: "#FFFFFF",
//       background:
//         "linear-gradient(135deg, #D7A12D, #AD710B)",
//       border: "none",
//       borderRadius: "10px",
//       fontSize: "14px",
//       fontWeight: "800",
//       cursor: "pointer",
//       boxShadow: "0 13px 28px rgba(197,138,22,0.27)",
//     },

//     error: {
//       padding: "13px 15px",
//       color: "#B42318",
//       backgroundColor: "#FEF0EE",
//       border: "1px solid #F6C6C1",
//       borderRadius: "9px",
//       fontSize: "12px",
//       lineHeight: "1.6",
//     },

//     success: {
//       padding: "13px 15px",
//       color: "#176326",
//       backgroundColor: "#EAF7EC",
//       border: "1px solid #BFE1C5",
//       borderRadius: "9px",
//       fontSize: "13px",
//       fontWeight: "750",
//     },
//   };

//   return (
//     <main style={styles.page}>
//       <motion.section
//         style={styles.container}
//         initial={{
//           opacity: 0,
//           y: 55,
//           scale: 0.97,
//         }}
//         animate={{
//           opacity: 1,
//           y: 0,
//           scale: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           ease: "easeOut",
//         }}
//       >
//         {/* Information */}
//         <div style={styles.informationPanel}>
//           <motion.div
//             style={styles.glow}
//             animate={{
//               scale: [1, 1.25, 1],
//               x: [0, -25, 0],
//             }}
//             transition={{
//               duration: 7,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />

//           <div style={styles.informationContent}>
//             <span style={styles.badge}>
//               BLANCO MEMBER PORTAL
//             </span>

//             <h1 style={styles.informationTitle}>
//               Welcome back to{" "}
//               <span style={styles.goldText}>
//                 meaningful impact.
//               </span>
//             </h1>

//             <p style={styles.informationDescription}>
//               Access your personalised portal to manage programs,
//               volunteering, donations, student progress and NGO
//               activities.
//             </p>

//             <div style={styles.featureList}>
//               {[
//                 "Secure role-based access",
//                 "Personalised user dashboard",
//                 "Program and activity updates",
//                 "Certificates and contribution history",
//               ].map((feature, index) => (
//                 <motion.div
//                   key={feature}
//                   style={styles.feature}
//                   initial={{
//                     opacity: 0,
//                     x: -20,
//                   }}
//                   animate={{
//                     opacity: 1,
//                     x: 0,
//                   }}
//                   transition={{
//                     delay: 0.3 + index * 0.12,
//                   }}
//                 >
//                   <span style={styles.check}>✓</span>
//                   {feature}
//                 </motion.div>
//               ))}
//             </div>
//           </div>

//           <p style={styles.quote}>
//             “Education is not only about learning—it is about
//             creating opportunities that can transform lives.”
//           </p>
//         </div>

//         {/* Login form */}
//         <div style={styles.formPanel}>
//           <motion.div
//             style={styles.formIcon}
//             animate={{
//               y: [0, -6, 0],
//             }}
//             transition={{
//               duration: 3,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             {selectedRole?.icon}
//           </motion.div>

//           <h2 style={styles.formTitle}>
//             Sign in to your account
//           </h2>

//           <p style={styles.formDescription}>
//             Select your role and enter your login credentials.
//           </p>

//           <div style={styles.rolePreview}>
//             <span style={styles.roleIcon}>
//               {selectedRole?.icon}
//             </span>

//             Logging in as {selectedRole?.label}
//           </div>

//           {error && (
//             <motion.div
//               style={styles.error}
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               ⚠ {error}
//             </motion.div>
//           )}

//           {success && (
//             <motion.div
//               style={styles.success}
//               initial={{ opacity: 0, y: -8 }}
//               animate={{ opacity: 1, y: 0 }}
//             >
//               ✓ Login successful! Redirecting…
//             </motion.div>
//           )}

//           <form
//             style={styles.form}
//             onSubmit={handleSubmit}
//           >
//             <div style={styles.field}>
//               <label
//                 style={styles.label}
//                 htmlFor="login-role"
//               >
//                 Select Role *
//               </label>

//               <select
//                 id="login-role"
//                 name="role"
//                 value={formData.role}
//                 onChange={handleChange}
//                 style={styles.input}
//                 required
//               >
//                 {roles.map((role) => (
//                   <option
//                     key={role.value}
//                     value={role.value}
//                   >
//                     {role.label}
//                   </option>
//                 ))}
//               </select>
//             </div>

//             <div style={styles.field}>
//               <label
//                 style={styles.label}
//                 htmlFor="login-email"
//               >
//                 Email Address *
//               </label>

//               <input
//                 id="login-email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 style={styles.input}
//                 placeholder="Enter your email"
//                 autoComplete="email"
//                 required
//               />
//             </div>

//             <div style={styles.field}>
//               <label
//                 style={styles.label}
//                 htmlFor="login-password"
//               >
//                 Password *
//               </label>

//               <div style={styles.passwordWrapper}>
//                 <input
//                   id="login-password"
//                   name="password"
//                   type={
//                     showPassword
//                       ? "text"
//                       : "password"
//                   }
//                   value={formData.password}
//                   onChange={handleChange}
//                   style={styles.passwordInput}
//                   placeholder="Enter your password"
//                   autoComplete="current-password"
//                   required
//                 />

//                 <button
//                   type="button"
//                   style={styles.showButton}
//                   onClick={() =>
//                     setShowPassword(
//                       (previousValue) =>
//                         !previousValue
//                     )
//                   }
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </button>
//               </div>
//             </div>

//             <div style={styles.optionsRow}>
//               <label style={styles.rememberArea}>
//                 <input type="checkbox" />
//                 Remember me
//               </label>

//               <a
//                 href="#forgot-password"
//                 style={styles.forgotLink}
//               >
//                 Forgot password?
//               </a>
//             </div>

//             <motion.button
//               type="button"
//               style={styles.demoButton}
//               onClick={fillDemoCredentials}
//               whileHover={{
//                 y: -2,
//                 backgroundColor: "#E3ECF6",
//               }}
//               whileTap={{ scale: 0.98 }}
//             >
//               Use Demo Credentials
//             </motion.button>

//             <motion.button
//               type="submit"
//               style={styles.submitButton}
//               whileHover={{
//                 y: -4,
//                 scale: 1.01,
//                 boxShadow:
//                   "0 18px 36px rgba(197,138,22,0.38)",
//               }}
//               whileTap={{ scale: 0.97 }}
//             >
//               Sign In →
//             </motion.button>
//           </form>
//         </div>
//       </motion.section>
//     </main>
//   );
// };

// export default Login;