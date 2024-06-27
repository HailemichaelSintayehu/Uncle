import React from "react";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import OrdersContent from "./OrdersContent";
import OrderDashboard from "./OrderDashboard";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";


const OrdersMain = () => {
  return (
    <>
      <BreadCrumb title="Orders" />
      <OrderDashboard/>
      <OrdersContent />
      {/* <FaqFormMain /> */}
      <SidebarMain/>
    </>
  );
};

export default OrdersMain;
