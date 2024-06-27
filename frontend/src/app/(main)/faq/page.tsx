import FaqMain from "@/components/faq/FaqMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const FaqPage = () => {
  return (
    <>
      <MetaData pageTitle="Faq">
          <main>
            <FaqMain />
          </main>
      </MetaData>
    </>
  );
};

export default FaqPage;
