import KycForm from "@/components/kyc-form/KycForm";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const ResetPassword = () => {
  return (
    <>
      <MetaData pageTitle="Verify Account">
        <main>
          <KycForm />
        </main>
      </MetaData>
    </>
  );
};

export default ResetPassword;
