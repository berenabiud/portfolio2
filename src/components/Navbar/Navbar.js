"use client";

import { useState } from "react";
import styles from "../Navbar.module.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // ✅ Add menu state

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "PORTFOLIO", href: "/portfolio" },
    { name: "CONTACT", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <div className={styles.logo}>
          <div className={styles.logoCircle}>
            <span className={styles.logoText}>BR</span>
          </div>
        </div>

        {/* Navigation Items */}
        <ul
          className={`${styles.navMenu} ${
            isMenuOpen ? styles.showMenu : ""
          }`} // ✅ Add conditional class
        >
          {navItems.map((item) => (
            <li key={item.name} className={styles.navItem}>
              <a
                href={item.href}
                className={`${styles.navLink} ${
                  activeItem === item.name ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false); // ✅ Close menu on click
                }}
              >
                {item.name}
                <span className={styles.navLinkGlow}></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className={styles.bgElements}>
        <div className={styles.bgElement1}></div>
        <div className={styles.bgElement2}></div>
        <div className={styles.bgElement3}></div>
      </div>
    </nav>
  );
};

export default Navbar;
