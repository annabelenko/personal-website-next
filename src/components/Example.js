import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js Image component
import styles from "./Example.module.css"; // Import CSS Module

export const Example = () => {
  const constraintsRef = useRef(null);
  const GRID_SIZE = 400; // 20x20 grid (400 pixels)
  const [colors, setColors] = useState(Array(GRID_SIZE).fill("#f9f9f9"));
  const [isMobile, setIsMobile] = useState(false); // State to track screen size

  // Detect mobile screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
    handleResize(); // Set initial state
    window.addEventListener("resize", handleResize); // Add event listener for resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  // Update pixel colors dynamically
  useEffect(() => {
    const interval = setInterval(() => {
      setColors((prevColors) =>
        prevColors.map(() => {
          const gray = Math.floor(Math.random() * 60) + 225; // Generate gray between 225-255
          return `rgb(${gray}, ${gray}, ${gray})`; // Random gray shade
        })
      );
    }, 1000); // Change colors every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className={styles.exampleContainer}>
      {/* Smiley Container with Pixelated Background */}
      <div className={styles.smileyContainer} ref={constraintsRef}>
        <div className={styles.pixelGrid}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={styles.pixel}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <motion.div
          drag
          dragConstraints={constraintsRef}
          className="smiley-face"
        >
          <Image
            src="/smiley.svg" // Smiley must be in the public folder
            alt="Smiley face"
            width={100}
            height={100}
          />
        </motion.div>
      </div>

      {/* Text Section */}
      <div className={styles.textContainer}>
        <p className={styles.exampleText}>Hello, I'm</p>
        <h1 className={styles.exampleText}>ANNA :)</h1>
        <p className={styles.exampleSubtitle}>
          A passionate{" "}
          {isMobile ? (
            <span>designer and software engineer</span>
          ) : (
            <>
              <span className={`${styles.highlight} ${styles.highlightYellow}`}>
                designer
              </span>{" "}
              and{" "}
              <span className={`${styles.highlight} ${styles.highlightBlue}`}>
                software engineer
              </span>
            </>
          )}{" "}
          bridging the gap between technology and humans.
        </p>

        {/* Resume Button */}
        <a
          href="https://example.com/resume.pdf" // Replace with your actual resume link
          target="_blank"
          rel="noopener noreferrer"
          className={styles.resumeButton}
        >
          Resume
        </a>
      </div>
    </div>
  );
};