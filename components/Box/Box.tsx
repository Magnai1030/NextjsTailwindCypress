import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
const Box = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 200]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  return (
    <motion.div
      className="w-normal h-normal bg-white"
      style={{ y: y1, x: 50 }}
    />
  );
};

export default Box;
