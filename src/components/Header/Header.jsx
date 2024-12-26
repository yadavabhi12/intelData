// import React from "react";
// import "./Header.css";

// const Header = () => {
//   const handleExpertClick = () => {
//     alert("Thank you for your interest! Our expert will contact you soon.");
//   };

//   return (
//     <header className="header">
//       <div className="logo">
//         <img src="https://uploads.turbologo.com/uploads/design/preview_image/80437/preview_image20230419-18343-1p5s0y2.png" alt="IntelData Logo" />
//         <h3>IntelData</h3>
//       </div>
//       <nav className="navbar">
//         <ul>
//           <li><a href="#">Product</a></li>
//           <li><a href="#">Solutions</a></li>
//           <li><a href="#">Partners</a></li>
//           <li><a href="#">Developers</a></li>
//           <li><a href="#">Company</a></li>
//           <li><a href="#">Resources</a></li>
//         </ul>
//       </nav>
//       <button className="cta-button" onClick={handleExpertClick}>
//         Talk to an expert
//       </button>
//     </header>
//   );
// };

// export default Header;
import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  const handleExpertClick = () => {
    alert("Thank you for your interest! Our expert will contact you soon.");
  };

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
    setActiveSubmenu(null); // Reset submenu on menu toggle
  };

  const toggleSubmenu = (submenu) => {
    setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
  };

  return (
    <header className="header">
      <div className="logo">
        <img
          src="https://uploads.turbologo.com/uploads/design/preview_image/80437/preview_image20230419-18343-1p5s0y2.png"
          alt="IntelData Logo"
        />
        <h3>IntelData</h3>
      </div>
      <nav className="navbar">
        <ul>
          <li
            onMouseEnter={() => toggleMenu("product")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a href="#">Product</a>
            {activeMenu === "product" && (
              <ul className="dropdown">
                <li>Whatsapp Solutions</li>
                <li>Chatbot Solutions</li>
                <li>Progressive Web Apps</li>
                <li>Marketing Automation</li>
                <li>SMS Solutions</li>
                <li>Email Solutions</li>
                <li>Voice Solutions</li>
                <li>Rich Communication Services</li>
              </ul>
            )}
          </li>
          <li
            onMouseEnter={() => toggleMenu("solutions")}
            onMouseLeave={() => toggleMenu(null)}
          >
            <a href="#">Solutions</a>
            {activeMenu === "solutions" && (
              <ul className="dropdown">
                <li
                  onMouseEnter={() => toggleSubmenu("marketing")}
                  onMouseLeave={() => toggleSubmenu(null)}
                >
                  Conversational Marketing
                  {activeSubmenu === "marketing" && (
                    <ul className="sub-dropdown">
                      <li>Primary Distribution - Capacity Optimization</li>
                      <li>Warehouse to Store Movement</li>
                      <li>Store to Customer Movement</li>
                      <li>Same Day/Next Day Delivery</li>
                    </ul>
                  )}
                </li>
                <li>Conversational Commerce</li>
                <li>Conversational Support</li>
              </ul>
            )}
          </li>
          <li><a href="#">Partners</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Company</a></li>
          <li><a href="#">Resources</a></li>
        </ul>
      </nav>
      <button className="cta-button" onClick={handleExpertClick}>
        Talk to an expert
      </button>
    </header>
  );
};

export default Header;
