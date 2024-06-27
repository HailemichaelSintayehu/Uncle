import ContactMain from "@/components/contact/ContactMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <MetaData pageTitle="Contact">
          <main>
            <ContactMain />
          </main>
      </MetaData>
    </>
  );
};

export default ContactPage;
