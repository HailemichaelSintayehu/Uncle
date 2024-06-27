import AboutMain from "@/components/about/AboutMain";
import OurTeam from "@/components/about/OurTeam";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <MetaData pageTitle="Our Story">
          <main>
            <AboutMain />
            <OurTeam />
          </main>
      </MetaData>
    </>
  );
};

export default AboutPage;
