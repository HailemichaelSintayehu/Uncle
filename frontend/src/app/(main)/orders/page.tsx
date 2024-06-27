import OrdersMain from "@/components/orders/OrderMain";
import MetaData from "@/hooks/useMetaData";
import React from "react";

const OrderPage = () => {
  return (
    <>
      <MetaData pageTitle="Orders">
          <main>
            <OrdersMain />
          </main>
      </MetaData>
    </>
  );
};

export default OrderPage;
