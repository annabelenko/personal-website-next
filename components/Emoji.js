import * as React from "react";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import styles from "./Emoji.module.css";

export const Emoji = () => {
  const constraintsRef = useRef(null);
  const GRID_SIZE = 400; // 20x20 grid (400 pixels)
  const [colors, setColors] = useState(Array(GRID_SIZE).fill("#f9f9f9"));
  const [isMobile, setIsMobile] = useState(false); // State to track screen size

  // Detect mobile screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Mobile breakpoint
    const handleResize = () => setIsMobile(mediaQuery.matches);

    handleResize(); // Set initial state
    mediaQuery.addEventListener("change", handleResize); // Add event listener for changes

    return () => mediaQuery.removeEventListener("change", handleResize); // Cleanup
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
    <div className={styles["emoji-container"]}>
      {/* Smiley Container with Pixelated Background */}
      <div className={styles["smiley-container"]} ref={constraintsRef}>
        <div className={styles["pixel-grid"]}>
          {colors.map((color, index) => (
            <div
              key={index}
              className={styles.pixel}
              style={{ backgroundColor: color }}
            ></div>
          ))}
        </div>
        <motion.img
        src="/smiley.svg"
        alt="Smiley face"
        className={styles["smiley-face"]}
        drag
        dragConstraints={constraintsRef}
        />
        <p className={styles["grab-hint"]}>
          <em>did you know you can grab the smile?</em>
        </p>
      </div>

      {/* Text Section */}
      <div className={styles["text-container"]}>
        <p className={styles["emoji-text"]}>Hello, I'm</p>
        <h1 className={styles["emoji-text"]}>
          <Typewriter
            words={['ANNA :)']}
            loop={1}
            cursor
            cursorStyle="|"
            typeSpeed={350}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h1>
        <p className={styles["emoji-subtitle"]}>
          A passionate{" "}
          {isMobile ? (
            "designer and software engineer,"
          ) : (
            <>
              <span className={`${styles.highlight} ${styles["highlight-yellow"]}`}>designer</span> and{" "}
              <span className={`${styles.highlight} ${styles["highlight-blue"]}`}>software engineer,</span>
            </>
          )}{" "}
          bridging the gap between technology and humans.
        </p>

        {/* Resume Button */}
        <a
          href="https://docs.google.com/document/d/1eCIsecmqw6zLZmWJtBoaB1w1QGrZj6Esqb8LnENvOR8/edit?usp=sharing" 
          target="_blank"
          rel="noopener noreferrer"
          className={styles["resume-button"]}
        >
          Resume
        </a>
      </div>
    </div>
  );
};