import SEO from "components/SEO/SEO";
import Space from "components/Space/Space";
import First from "containers/First/First";
import Second from "containers/Second/Second";
import Works from "containers/Works/Works";
import Layout from "layouts/Layout/Layout";
import { useState } from "react";

const HomePage = () => {
  const [isBorder, setIsBorder] = useState(false);

  return (
    <>
      <SEO title="Batmagnai | Developer" description="Portfolio" />
      <Layout isBorder={isBorder}>
        <First />
        <Space setIsBorder={setIsBorder} />
        <Second />
        <Space setIsBorder={setIsBorder} />
        <Works />
        <Space />
      </Layout>
    </>
  );
};

export default HomePage;
