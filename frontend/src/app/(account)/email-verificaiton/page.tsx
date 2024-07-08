import EmailVerificaitonMain from "@/components/email-verificaiton/EmailVerificaitonMain";
import MetaData from "@/hooks/useMetaData";
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
