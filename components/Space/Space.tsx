import { useInView } from "framer-motion";
import { FC, useEffect, useRef } from "react";
type SpaceProps = {
  setIsBorder?: (border: boolean) => void;
};
const Space: FC<SpaceProps> = ({ setIsBorder }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  useEffect(() => {
    if (setIsBorder) {
      setIsBorder(isInView);
    }
  }, [isInView]);

  return <section ref={ref} className={`flex w-full h-screen bg-white z-0`} />;
};

export default Space;
