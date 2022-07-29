import { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FC } from "react";

const Cursor: FC = () => {
  const [isHovered, setHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };
    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="bg-white fixed top-0 left-0 mix-blend-difference z-10"
      animate={{
        height: 100,
        width: 100,
      }}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default Cursor;
