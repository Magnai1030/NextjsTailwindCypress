import {
  motion,
  useMotionValue,
  useSpring,
  useViewportScroll,
  useTransform,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
const Box = () => {
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <motion.div
      className="w-normal h-normal bg-salmon"
      style={{ y: y1, x: 50 }}
    />
  );
};

export default Box;
