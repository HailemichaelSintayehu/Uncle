import WishlistMain from "@/components/wishlist/WishlistMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const WishListPage = () => {
  return (
    <>
      

      <MetaData pageTitle="Wishlist">
        <main>
          <WishlistMain />
        </main>
      </MetaData>
    </>
  );
};

export default WishListPage;
