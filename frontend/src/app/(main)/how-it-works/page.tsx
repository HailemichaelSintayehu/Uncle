import AboutMain from "@/components/about/AboutMain";
import WhyUncleArea from "@/components/why-uncle/WhyUncleArea";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import BreadCrumb from "@/components/SharedComponents/BreadCrumb";
import HowItWorks from "@/components/how-it-works/HowItWorks";
const AboutPage = () => {
  return (
    <>
      <MetaData pageTitle="How does Uncle work?">
          <main>
            <BreadCrumb title="How It Works" />
            <HowItWorks />
          </main>
      </MetaData>
    </>
  );
};

export default AboutPage;
