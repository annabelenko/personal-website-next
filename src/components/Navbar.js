import React, { useState } from "react";
import styles from "./navbar.module.css"; // Import CSS Module
import { motion } from "framer-motion";
import Link from "next/link"; // Use Link for internal navigation

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarLogo}>Anna Belenko</div>
      <div className={`${styles.navbarLinks} ${isOpen ? styles.open : ""}`}>
        {/* Correct usage of Link for Next.js 13+ */}
        <Link href="#work" className={styles.navLink}>
          Work
        </Link>
      </div>
      <div className={styles.navbarToggle} onClick={toggleMenu}>
        <motion.div
          className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </nav>
  );
};