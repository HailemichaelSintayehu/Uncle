import PrivacyPolicyMain from "@/components/privecy-policy/PrivacyPolicyMain";
import TermsAndConditionsMain from "@/components/privecy-policy/TermAndServices";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleThree from "@/layout/WrapperStyleThree";
import React from "react";

const TermsAndConditionsPage = () => {
  return (
    <>
      <MetaData pageTitle="Terms and Conditions" >
        <main>
          <TermsAndConditionsMain />
        </main>
      </MetaData>
    </>
  );
};

export default TermsAndConditionsPage;
