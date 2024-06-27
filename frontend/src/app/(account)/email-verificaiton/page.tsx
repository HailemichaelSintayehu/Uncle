import EmailVerificaitonMain from "@/components/email-verificaiton/EmailVerificaitonMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const EmailVerificationPage = () => {
  return (
    <>
      <MetaData pageTitle="Email Verification">
        <main>
          <EmailVerificaitonMain />
        </main>
      </MetaData>
    </>
  );
};

export default EmailVerificationPage;
