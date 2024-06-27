"use client";
import ProductModal from "@/components/SharedComponents/ProductModal";
import ShopDetailsMain from "@/components/shop-details/ShopDetailsMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const DynamicPage = ({ params }: { params: { id: number } }) => {
  const id = params.id;
  return (
    <>
     

      <MetaData pageTitle="Shop Details">
        <main>
          <ShopDetailsMain id={id}/>
          <ProductModal/>
        </main>
      </MetaData>
    </>
  );
};

export default DynamicPage;
