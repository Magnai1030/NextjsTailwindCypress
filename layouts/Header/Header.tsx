import React, { FC } from "react";

const Header: FC = () => {
  return (
    <div className={`absolute top-0 left-0 right-0 bottom-0`}>
      <div className={`flex w-full h-full items-center place-content-center`}>
        <h1 className={"text-white"}>BATMAGNAI</h1>
      </div>
    </div>
  );
};

export default Header;
