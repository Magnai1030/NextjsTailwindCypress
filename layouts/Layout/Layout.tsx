import React, { FC } from "react";
import Footer from "layouts/Footer/Footer";
import { motion } from "framer-motion";

type LayoutProps = {
  children: React.ReactNode;
  isBorder: boolean;
};
const Layout: FC<LayoutProps> = ({ children, isBorder }) => {
  return (
    <motion.main className={`w-full h-auto`}>
      <motion.div
        style={{
          borderWidth: isBorder ? 25 : 0,
          transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
        }}
        className="w-full h-screen border-black fixed z-10"
      />
      {children}
      <Footer />
    </motion.main>
  );
};

export default Layout;
