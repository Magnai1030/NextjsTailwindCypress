import SEO from "components/SEO/SEO";
import First from "containers/First/First";
import Second from "containers/Second/Second";
import Layout from "layouts/Layout/Layout";
import { useScroll } from "framer-motion";

const HomePage = () => {
  return (
    <>
      <SEO title="Batmagnai | Developer" description="Portfolio" />
      <Layout>
        <First />
        <Second />
      </Layout>
    </>
  );
};

export default HomePage;
