import CartMain from "@/components/cart/CartMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import React from "react";

const CartPage = () => {
  return (
    <>
      <MetaData pageTitle="Cart">
          <main>
            <CartMain />
          </main>
      </MetaData>
    </>
  );
};

export default CartPage;
