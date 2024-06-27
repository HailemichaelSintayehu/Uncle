import ForgotCodeMain from "@/components/forgot-code/ForgotCodeMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ForgotCode = () => {
  return (
    <>
      <MetaData pageTitle="Forgot Email Verification">
        <main>
          <ForgotCodeMain />
        </main>
      </MetaData>
    </>
  );
};

export default ForgotCode;
