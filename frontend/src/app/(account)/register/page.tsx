import RegisterMain from "@/components/register/RegisterMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const RegisterPage = () => {
  return (
    <>
      <MetaData pageTitle="Register">
        <main>
          <RegisterMain />
        </main>
      </MetaData>
    </>
  );
};

export default RegisterPage;
