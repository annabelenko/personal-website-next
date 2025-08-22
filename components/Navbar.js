import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        {/* Logo/Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.brandLink}>
            Anna Belenko
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className={styles.navLinks}>
          <li>
            <Link href="/" className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/contact" className={styles.navLink}>
              Contact
            </Link>
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
