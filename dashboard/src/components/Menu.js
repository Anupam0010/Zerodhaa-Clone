


// import React, { useState,useEffect } from "react";

// import { Link, useNavigate } from "react-router-dom";



// const maskEmail = (email) => {

//   if (!email) return "";



   

//   return email.replace("@gmail.com", "");

// };



// const Menu = () => {

//   const navigate = useNavigate();



//   const [selectedMenu, setSelectedMenu] = useState(0);

//   const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

//    const [userEmail, setUserEmail] = useState("");

//    const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle state



//   useEffect(() => {

//     const email = localStorage.getItem("userEmail");

//     if (email) {

//       setUserEmail(email);

//     }

//   }, []);





//   const handleMenuClick = (index) => {

//     setSelectedMenu(index);

//   };



//   const handleProfileClick = () => {

//     setIsProfileDropdownOpen(!isProfileDropdownOpen);

//   };



//   const logout = () => {

//       console.log("Logout clicked!"); // Debug log

//     localStorage.removeItem("isLoggedIn");

//     localStorage.removeItem("userEmail");

//     // navigate("http://localhost:3001"); // dashboard app ka login route

//    window.location.href = "http://localhost:3001";

//   };

//   const menuItems = ["Dashboard", "Orders", "Holdings", "Positions", "Funds", "Apps"];



//   return (

//     // <div className="menu-container">

//     //   <img src="logo.png" style={{ width: "50px" }} />

//        <div className="menu-container p-3 border-bottom bg-white">

//     <div className="d-flex justify-content-between align-items-center">

//       {/* Logo */}

//       <img src="logo.png" style={{ width: "50px" }} alt="logo" />
//          <button
//           className="navbar-toggler ms-auto"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
      



//       {/* 🍔 Hamburger Button: Mobile par dikhega (d-md-none), click par state change karega */}


//     </div>



//       <div className={`menus ${isOpen ? "d-block" : "d-none"}d-md-block`}>

        

         

//           <li>

//             <Link to="/" className={selectedMenu === 0 ? "menu selected" : "menu"}

//               onClick={() => handleMenuClick(0)}>

//               Dashboard

//             </Link>

//           </li>



//           <li>

//             <Link to="/orders" className={selectedMenu === 1 ? "menu selected" : "menu"}

//               onClick={() => handleMenuClick(1)}>

//               Orders

//             </Link>

//           </li>



//           <li>

//             <Link to="/holdings" className={selectedMenu === 2 ? "menu selected" : "menu"}

//               onClick={() => handleMenuClick(2)}>

//               Holdings

//             </Link>

//           </li>



//           <li>

//             <Link to="/positions" className={selectedMenu === 3 ? "menu selected" : "menu"}

//               onClick={() => handleMenuClick(3)}>

//               Positions

//             </Link>

//           </li>



//           <li>

//             <Link to="/funds" className={selectedMenu === 4 ? "menu selected" : "menu"}

//               onClick={() => handleMenuClick(4)}>

//               Funds

//             </Link>

//           </li>



//           <li>

//             <Link to="/apps" className={selectedMenu === 5 ? "menu selected" : "menu"}

//               onClick={() => handleMenuClick(5)}>

//               Apps

//             </Link>

//           </li>

        



//         <hr />



       

//            {/* ✅ EMAIL + LOGOUT ALWAYS VISIBLE */}

//         <div className="profile-row">

//           <div className="profile-info">

//             <div className="avatar">

//               {userEmail ? userEmail[0].toUpperCase() : "U"}

//             </div>

//             <span className="username">

//   {userEmail ? maskEmail(userEmail) : "User"}

// </span>



//           </div>



//           <button className="logout-btn" onClick={logout}>

//             Logout

//           </button>

//         </div>



//       </div>

//     </div>

//   );

// };
// export default Menu;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const maskEmail = (email) => {
  if (!email) return "";
  return email.replace("@gmail.com", "");
};

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [userEmail, setUserEmail] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    if (email) setUserEmail(email);
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    window.location.href = "http://localhost:3001";
  };

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
    setIsOpen(false); // mobile pe click ke baad close
  };

  const menuItems = [
    { name: "Dashboard", path: "/" },
    { name: "Orders", path: "/orders" },
    { name: "Holdings", path: "/holdings" },
    { name: "Positions", path: "/positions" },
    { name: "Funds", path: "/funds" },
    { name: "Apps", path: "/apps" },
  ];

  return (
    <div className="menu-container">
      {/* HEADER */}
      <div className="menu-header">
        <img src="logo.png" alt="logo" className="logo img-fluid"  />

        {/* 🍔 Hamburger (mobile only) */}
        <button
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* MENU */}
      <div className={`menus ${isOpen ? "open" : ""}`}>
        <ul className="nav-links">
          {menuItems.map((item, index) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={`menu ${selectedMenu === index ? "selected" : ""}`}
                onClick={() => handleMenuClick(index)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="profile-row">
          <div className="profile-info">
            <div className="avatar">
              {userEmail ? userEmail[0].toUpperCase() : "U"}
            </div>
            <span className="username">
              {userEmail ? maskEmail(userEmail) : "User"}
            </span>
          </div>

          <button className="logout-btn" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Menu;


