import React, { FC, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

const Second: FC = () => {
  const viewRef = useRef<HTMLDivElement>(null);
  // const isInView = useInView(viewRef);
  return (
    <section
      className={`flex w-full h-screen bg-white z-0 p-normal border-big border-black`}
    >
      <div
        ref={viewRef}
        className={`flex flex-1 flex-row bg-gray4 items-center place-content-center p-`}
      >
        <p className="w-1/2 text-center">
          <b>Front-End Developer</b> with <b>4</b> year experience. Building and
          maintaining applications in the various industries. Proficient in{" "}
          <b>JS</b> Frameworks. Passionate about <b>UI/UX</b>
        </p>
      </div>
    </section>
  );
};

export default Second;
