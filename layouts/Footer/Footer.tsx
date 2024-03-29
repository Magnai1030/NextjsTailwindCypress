import { CursorContext, CursorInitialValue } from "provider";
import React, { useContext } from "react";

const Footer = () => {
  const { setIsZoom } = useContext(CursorContext) as CursorInitialValue;
  return (
    <footer
      className={`flex w-full h-normal bg-white items-center px-normal`}
      onMouseEnter={() => setIsZoom(true)}
    >
      <p>
        Wanna contact me ? -{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.linkedin.com/in/batmagnai-munkhnasan-027375193/"
        >
          Linkedn
        </a>{" "}
        -{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href="https://www.instagram.com/mgn_prd/"
        >
          Instagram
        </a>{" "}
        - or -{" "}
        <a
          rel="noreferrer"
          target={"_blank"}
          href="mailto:magnai103019@gmail.com"
        >
          Email
        </a>
      </p>
    </footer>
  );
};

export default Footer;
