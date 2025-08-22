import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <div className={styles.brand}>
          <a href="#home" className={styles.brandLink}>
            Anna Belenko
          </a>
        </div>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <a href="#projects" className={styles.navLink}>
              Work
            </a>
          </li>
          <li>
            <a href="#about" className={styles.navLink}>
              About
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button (for future mobile responsiveness) */}
        <button className={styles.mobileMenuButton}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
