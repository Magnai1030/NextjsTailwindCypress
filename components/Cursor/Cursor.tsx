import { useEffect, memo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { FC } from "react";

type CursorProps = {
  isZoom: boolean;
};

const Cursor: FC<CursorProps> = ({ isZoom }) => {
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
      key={"cursor"}
      initial={false}
      className="bg-white fixed top-0 left-0 mix-blend-difference z-10  rounded-xl h-4 w-4"
      animate={{
        scale: isZoom ? 5 : 1,
      }}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    />
  );
};

export default memo(Cursor);
