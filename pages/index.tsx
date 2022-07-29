import Cursor from "components/Cursor/Cursor";
import SEO from "components/SEO/SEO";
import First from "containers/First/First";
import Second from "containers/Second/Second";
const HomePage = () => {
  return (
    <>
      <SEO title="Batmagnai | Developer" description="Portfolio" />
      <div className="w-full h-auto z-0">
        <First />
        <Second />
      </div>
      <Cursor />
    </>
  );
};

export default HomePage;
