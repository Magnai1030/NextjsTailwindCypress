import Box from "components/Box/Box";
import { useScroll } from "framer-motion";
import Header from "layouts/Header/Header";
import { CursorContext, CursorInitialValue } from "provider";
import { useContext } from "react";
const animatedDivs = [
  {
    duration: 1,
    color: "bg-gray1",
  },
  {
    duration: 2,
    color: "bg-gray2",
  },
  {
    duration: 2.5,
    color: "bg-gray3",
  },
  {
    duration: 2.75,
    color: "bg-gray4",
  },
];
const First = () => {
  const { setIsZoom } = useContext(CursorContext) as CursorInitialValue;
  const { scrollY } = useScroll();
  return (
    <section
      className={`flex w-full h-screen bg-white z-0 p-big`}
      // onMouseEnter={() => setIsZoom(false)}
    >
      <div
        className={`flex flex-1 flex-row relative`}
        // onMouseEnter={() => setIsZoom(true)}
      >
        {animatedDivs.map((element, index) => (
          <Box
            key={index}
            index={index + 1}
            element={element}
            value={scrollY}
          />
        ))}
        <Header />
      </div>
    </section>
  );
};

export default First;
