import { motion, useScroll } from "framer-motion";
import { useEffect, useState } from "react";

const ScrollIndicator = () => {
  const { scrollYProgress } = useScroll();
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  return (
    <motion.div
      style={{
        scaleX: scrollYProgress,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: 6,
        originX: 0,
        backgroundColor: "#e6b800",
        zIndex: 10000,
        transformOrigin: "0%",
      }}
    />
  );
};

export default ScrollIndicator;
