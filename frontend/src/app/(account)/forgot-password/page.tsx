import ForgotPasswordMain from "@/components/forgot-password/ForgotPasswordMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ForgotPassword = () => {
  return (
    <>
      <MetaData pageTitle="Forgot password">
        <main>
          <ForgotPasswordMain />
        </main>
      </MetaData>
    </>
  );
};

export default ForgotPassword;
