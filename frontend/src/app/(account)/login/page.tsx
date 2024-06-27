import LoginMain from "@/components/login/LoginMain";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const LoginPage = () => {
  return (
    <>
      <MetaData pageTitle="Login">
          <main>
            <LoginMain />
          </main>
      </MetaData>
    </>
  );
};

export default LoginPage;
