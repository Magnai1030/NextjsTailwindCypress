import { CursorContext, CursorInitialValue } from "provider";
import React, { FC, useContext, useRef } from "react";
import { motion, useInView } from "framer-motion";

const Second: FC = () => {
  const { setIsZoom } = useContext(CursorContext) as CursorInitialValue;
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section
      ref={ref}
      // onMouseEnter={() => setIsZoom(false)}
      className={`flex w-full h-screen bg-white z-0 p-normal`}
    >
      <motion.div
        style={{
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className={`flex flex-1 flex-row bg-gray4 items-center place-content-center`}
      >
        <p className="w-1/2 text-center">
          <b>Front-End Developer</b> with <b>5</b> year experience. Building and
          maintaining applications in the various industries. Proficient in{" "}
          <b>JS</b> Frameworks. Passionate about <b>UI/UX</b>
        </p>
      </motion.div>
    </section>
  );
};

export default Second;
