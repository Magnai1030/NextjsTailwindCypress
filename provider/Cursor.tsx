import Cursor from "components/Cursor/Cursor";
import { ChildrenProps } from "@types";
import React, { createContext, useState } from "react";

export type CursorInitialValue = {
  setIsZoom: (zoom: boolean) => void;
};

export const CursorContext = createContext<CursorInitialValue | null>(null);

export const CursorProvider: React.FC<ChildrenProps> = ({ children }) => {
  const [isZoom, setIsZoom] = useState<boolean>(false);
  return (
    <CursorContext.Provider
      value={{
        setIsZoom,
      }}
    >
      {children}
      <Cursor isZoom={isZoom} />
    </CursorContext.Provider>
  );
};
