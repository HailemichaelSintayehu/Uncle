import ErrorMain from "@/components/errorPage/ErrorMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ErrorPage = () => {
  return (
    <>
      <MetaData pageTitle="404">
          <main>
            <ErrorMain />
          </main>
      </MetaData>
    </>
  );
};

export default ErrorPage;
