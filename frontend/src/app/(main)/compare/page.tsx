import CompareMain from "@/components/compare/CompareMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const page = () => {
  return (
    <>
      <MetaData pageTitle="Compare">
        <main>
          <CompareMain />
        </main>
      </MetaData>
    </>
  );
};

export default page;
