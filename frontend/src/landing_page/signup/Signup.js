import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState(1); // 1=email, 2=otp
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // 📧 Send OTP
  const sendOtp = async () => {
    if (!email) {
      alert("Enter email");
      return;
    }
    if (!isValidEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("http://localhost:3002/send-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      alert(data.message);
      setStep(2); // show OTP box
      startOtpTimer();
    } catch (err) {
      alert("Email OTP failed");
    }
  };
  const startOtpTimer = () => {
    setCanResend(false);
    setTimer(60);

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  // 🔐 Verify OTP
  const verifyOtp = async () => {
    try {
      const res = await fetch("http://localhost:3002/verify-email-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ LOGIN SUCCESS
        // localStorage.setItem("isLoggedIn", "true");
        //   localStorage.setItem("userEmail", email); // ✅ SAVE EMAIL
        // navigate("http://localhost:3000"); // 🔥 REDIRECT
        window.location.href = `http://localhost:3000?email=${encodeURIComponent(
          email
        )}`;
      } else {
        alert(data.message);
      }
    } catch (err) {
      alert("OTP verification failed");
    }
  };

  return (
    <>
      {/* Top Heading */}
      <div className="container text-center mt-5 p-5">
        <h1
          className="fw-semibold mt-5"
          style={{ fontSize: "28px", color: "#424242" }}
        >
          Open a free demat and trading account online
        </h1>
        <p className="mt-2" style={{ fontSize: "20px", color: "#666666" }}>
          Start investing brokerage free and join a community of 1.6+ crore
          investors and traders
        </p>
      </div>

      <div className="container mt-5">
        <div className="row align-items-center">
          {/* LEFT IMAGE */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src="media/images/account_open.svg"
              alt="Preview"
              className="img-fluid"
              style={{ maxWidth: "550px" }}
            />
          </div>

          {/* RIGHT FORM */}
          <div className="col-md-6 mt-3 mt-md-0">
            <div className="mx-auto" style={{ maxWidth: "380px" }}>
              <h2 style={{ fontSize: "24px", color: "#424242" }}>Signup now</h2>
              <p
                className="mb-4"
                style={{ fontSize: "16px", color: "#9b9b9b" }}
              >
                Or track your existing application
              </p>

              {/* EMAIL INPUT */}
              {step === 1 && (
                <>
                  <input
                    type="email"
                    className="form-control mb-3"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <button
                    className="btn btn-primary w-100 py-2"
                    style={{ backgroundColor: "#387ed1" }}
                    onClick={sendOtp}
                  >
                    Get OTP
                  </button>
                </>
              )}

              {/* OTP INPUT */}
              {step === 2 && (
                <>
                  <input
                    type="text"
                    className="form-control mb-3"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                  />

                  <button
                    className="btn btn-success w-100 py-2"
                    onClick={verifyOtp}
                  >
                    Verify OTP
                  </button>
                  <p style={{ fontSize: "13px", color: "#666" }}>
                    {canResend ? (
                      <span
                        style={{
                          color: "#387ed1",
                          cursor: "pointer",
                          fontSize: "15px",
                        }}
                        onClick={sendOtp}
                      >
                        Resend OTP
                      </span>
                    ) : 
                    (
                     <span
  style={{
    fontSize: "15px",   // 👈 yaha size badhao (16 / 17 bhi kar sakte ho)
    color: "#666",
    fontWeight: "500"
  }}
>
  Resend OTP in {timer}s
</span>

                    )}
                  </p>
                </>
              )}

              <p
                className="mt-3"
                style={{ fontSize: "12px", color: "#666666" }}
              >
                By proceeding, you agree to the{" "}
                <a href="" style={{ textDecoration: "None", color: "387de1" }}>
                  Zerodha terms
                </a>{" "}
                &{" "}
                <a href="" style={{ textDecoration: "None", color: "387de1" }}>
                  privacy policy
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;

// import React, { useState } from "react";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1); // 1=email, 2=otp

//   // 📧 Send OTP
//   const sendOtp = async () => {
//     if (!email) {
//       alert("Enter email");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:3002/send-email-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();
//       alert(data.message);
//       setStep(2);
//     } catch (err) {
//       alert("Email OTP failed");
//     }
//   };

// 🔐 Verify OTP
// const verifyOtp = async () => {
//   try {
//     const res = await fetch("http://localhost:3002/verify-email-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp }),
//     });

//     const data = await res.json();

//     if (res.ok) {
//       // ✅ Save login flag
//       localStorage.setItem("isLoggedIn", "true");

//       // 🚀 REDIRECT TO DASHBOARD APP
//       // window.location.href = "http://localhost:3000";
//       window.location.href = "http://localhost:3000";
//       // OR (if dashboard runs on 5174)
//       // window.location.href = "http://localhost:5174";
//     } else {
//       alert(data.message);
//     }
//   } catch (err) {
//     alert("OTP verification failed");
//   }
// };
//   const verifyOtp = async () => {
//   try {
//     const res = await fetch("http://localhost:3002/verify-email-otp", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ email, otp }),
//     });

//     if (!res.ok) {
//       alert("Invalid OTP");
//       return;
//     }

//     // ✅ OTP verified
//     // (No need localStorage here because ports differ)

//     // GO TO DASHBOARD APP
//     window.location.href = "http://localhost:3000";

//   } catch (err) {
//     alert("OTP verification failed");
//   }
// };

//   return (
//     <>
//       <div className="container text-center mt-5 p-5">
//         <h1 className="fw-semibold mt-5" style={{ fontSize: "28px", color: "#424242" }}>
//           Open a free demat and trading account online
//         </h1>
//         <p className="mt-2" style={{ fontSize: "20px", color: "#666666" }}>
//           Start investing brokerage free and join a community of 1.6+ crore
//           investors and traders
//         </p>
//       </div>

//       <div className="container mt-5">
//         <div className="row align-items-center">

//           <div className="col-md-6 text-center mb-4 mb-md-0">
//             <img
//               src="media/images/account_open.svg"
//               alt="Preview"
//               className="img-fluid"
//               style={{ maxWidth: "550px" }}
//             />
//           </div>

//           <div className="col-md-6">
//             <div className="mx-auto" style={{ maxWidth: "380px" }}>
//               <h2 style={{ fontSize: "24px", color: "#424242" }}>Signup now</h2>
//               <p className="mb-4" style={{ fontSize: "16px", color: "#9b9b9b" }}>
//                 Or track your existing application
//               </p>

//               {step === 1 && (
//                 <>
//                   <input
//                     type="email"
//                     className="form-control mb-3"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />

//                   <button
//                     className="btn btn-primary w-100 py-2"
//                     style={{ backgroundColor: "#387ed1" }}
//                     onClick={sendOtp}
//                   >
//                     Get OTP
//                   </button>
//                 </>
//               )}

//               {step === 2 && (
//                 <>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                   />

//                   <button
//                     className="btn btn-success w-100 py-2"
//                     onClick={verifyOtp}
//                   >
//                     Verify OTP
//                   </button>
//                 </>
//               )}

//               <p className="mt-3" style={{ fontSize: "12px", color: "#666666" }}>
//                 By proceeding, you agree to the Zerodha terms & privacy policy
//               </p>
//             </div>
//           </div>

//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;
// import React, { useState } from "react";

// function Signup() {
//   const [email, setEmail] = useState("");
//   const [otp, setOtp] = useState("");
//   const [step, setStep] = useState(1); // 1 = email, 2 = otp

//   // 📧 Send OTP
//   const sendOtp = async () => {
//     if (!email) {
//       alert("Enter email");
//       return;
//     }

//     try {
//       const res = await fetch("http://localhost:3002/send-email-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email }),
//       });

//       const data = await res.json();
//       alert(data.message);
//       setStep(2);
//     } catch (err) {
//       alert("Email OTP failed");
//     }
//   };

//   // 🔐 Verify OTP (FINAL FIX)
//   const verifyOtp = async () => {
//     try {
//       const res = await fetch("http://localhost:3002/verify-email-otp", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ email, otp }),
//       });

//       if (!res.ok) {
//         alert("Invalid OTP");
//         return;
//       }

//       // ✅ IMPORTANT: redirect WITH auth flag
//       window.location.href = "http://localhost:3000?auth=1";

//     } catch (err) {
//       alert("OTP verification failed");
//     }
//   };

//   return (
//     <>
//       <div className="container text-center mt-5 p-5">
//         <h1 className="fw-semibold mt-5" style={{ fontSize: "28px", color: "#424242" }}>
//           Open a free demat and trading account online
//         </h1>
//         <p className="mt-2" style={{ fontSize: "20px", color: "#666666" }}>
//           Start investing brokerage free and join a community of 1.6+ crore
//           investors and traders
//         </p>
//       </div>

//       <div className="container mt-5">
//         <div className="row align-items-center">
//           <div className="col-md-6 text-center mb-4 mb-md-0">
//             <img
//               src="media/images/account_open.svg"
//               alt="Preview"
//               className="img-fluid"
//               style={{ maxWidth: "550px" }}
//             />
//           </div>

//           <div className="col-md-6">
//             <div className="mx-auto" style={{ maxWidth: "380px" }}>
//               <h2 style={{ fontSize: "24px", color: "#424242" }}>Signup now</h2>
//               <p className="mb-4" style={{ fontSize: "16px", color: "#9b9b9b" }}>
//                 Or track your existing application
//               </p>

//               {step === 1 && (
//                 <>
//                   <input
//                     type="email"
//                     className="form-control mb-3"
//                     placeholder="Enter your email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                   />

//                   <button
//                     className="btn btn-primary w-100 py-2"
//                     style={{ backgroundColor: "#387ed1" }}
//                     onClick={sendOtp}
//                   >
//                     Get OTP
//                   </button>
//                 </>
//               )}

//               {step === 2 && (
//                 <>
//                   <input
//                     type="text"
//                     className="form-control mb-3"
//                     placeholder="Enter OTP"
//                     value={otp}
//                     onChange={(e) => setOtp(e.target.value)}
//                   />

//                   <button
//                     className="btn btn-success w-100 py-2"
//                     onClick={verifyOtp}
//                   >
//                     Verify OTP
//                   </button>
//                 </>
//               )}

//               <p className="mt-3" style={{ fontSize: "12px", color: "#666666" }}>
//                 By proceeding, you agree to the Zerodha terms & privacy policy
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Signup;
