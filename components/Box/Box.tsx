import { BoxItem } from "@types";
import { motion, useTransform, MotionValue } from "framer-motion";
import { FC } from "react";

type BoxProps = {
  element: BoxItem;
  index: number;
  value: MotionValue<number>;
};
const Box: FC<BoxProps> = ({ element, index, value }) => {
  const y = useTransform(value, [0, 50 * index], [0, 75 * index]);

  return (
    <motion.div
      style={{ y: y }}
      initial={{ y: -500 }}
      animate={{ y: 0 }}
      transition={{
        duration: index / 3,
        type: "spring",
        stiffness: 100 * index,
      }}
      className={`w-1/4 h-full ${element.color}`}
    />
  );
};

export default Box;
