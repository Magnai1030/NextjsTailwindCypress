import React, { FC, useEffect } from "react";
import Footer from "layouts/Footer/Footer";
import { motion, useScroll } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
};
const Layout: FC<LayoutProps> = ({ children }) => {
  const { scrollY } = useScroll();
  useEffect(() => {
    console.log(scrollY);
  }, [scrollY]);
  return (
    // <motion.main
    //   initial={{ opacity: 0 }}
    //   key={"key"}
    //   animate={{ opacity: 1 }}
    //   exit={{ opacity: 0 }}
    //   className="w-full h-screen overflow-scroll border-black"
    // >
    <div className={`w-full h-auto`}>
      {children}
      <Footer />
    </div>
    // </motion.main>
  );
};

export default Layout;
