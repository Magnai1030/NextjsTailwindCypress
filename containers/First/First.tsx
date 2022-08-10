import { motion, MotionValue, useTransform } from "framer-motion";
import Header from "layouts/Header/Header";
import { FC, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

const First = () => {
  return (
    <section className={`flex w-full h-screen bg-white z-0 p-big`}>
      <div className={`flex flex-1 flex-row relative`}>
        <AnimatePresence>
          <motion.div
            key={"first1"}
            initial={false}
            className="w-1/4 h-96 bg-gray1"
          />
        </AnimatePresence>

        <motion.div
          key={"first2"}
          initial={false}
          className={`w-1/4 h-full bg-gray2`}
        />

        <div className={`w-1/4 h-full bg-gray3`} />
        <div className={`w-1/4 h-full bg-gray4`} />
        <Header />
      </div>
    </section>
  );
};

export default First;
