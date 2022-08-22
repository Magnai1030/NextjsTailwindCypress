import { CursorContext, CursorInitialValue } from "provider";
import React, { FC, useContext } from "react";

const Works: FC = () => {
  const { setIsZoom } = useContext(CursorContext) as CursorInitialValue;

  return (
    <section
      onMouseEnter={() => setIsZoom(false)}
      className={`flex w-full h-screen bg-white z-0 p-normal`}
    >
      <div
        className={`flex flex-1 flex-row bg-gray4 items-center place-content-center`}
      ></div>
    </section>
  );
};

export default Works;
