import AboutMain from "@/components/about/AboutMain";
import WhyUncleArea from "@/components/why-uncle/WhyUncleArea";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";
import BreadCrumb from "@/components/SharedComponents/BreadCrumb";
const AboutPage = () => {
  return (
    <>
      <MetaData pageTitle="Why Uncle?">
          <main>
            <BreadCrumb title="Why Uncle" />
            <WhyUncleArea />
          </main>
      </MetaData>
    </>
  );
};

export default AboutPage;
