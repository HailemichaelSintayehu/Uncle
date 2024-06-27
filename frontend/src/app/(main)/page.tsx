//@refresh
import ProductModal from "@/components/SharedComponents/ProductModal";
import FloatingButton from "@/components/floatingButton/FloatingButton";
import HomeThreeMain from "@/components/homeThree/HomeThreeMain";
import MetaData from "@/hooks/useMetaData";
import WrapperStyleThree from "@/layout/WrapperStyleThree";
import React from "react";

const HomeThreePage = () => {
  return (
    <>
      <MetaData pageTitle="Home">
        <main>
          <HomeThreeMain />
          <ProductModal />
        </main>
      </MetaData>
    </>
  );
};

export default HomeThreePage;
