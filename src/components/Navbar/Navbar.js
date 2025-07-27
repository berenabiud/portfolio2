"use client";

import { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link
import styles from "../Navbar.module.css";

const Navbar = () => {
  const [activeItem, setActiveItem] = useState("HOME");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className={styles.navItem}>
              <Link
                to={item.href} // ✅ Use "to" instead of "href"
                className={`${styles.navLink} ${
                  activeItem === item.name ? styles.active : ""
                }`}
                onClick={() => {
                  setActiveItem(item.name);
                  setIsMenuOpen(false);
                }}
              >
                {item.name}
                <span className={styles.navLinkGlow}></span>
              </Link>
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
