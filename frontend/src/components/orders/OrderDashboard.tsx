"use client";
import CountUpContent from "@/components/common/counter/CountUpContent";
import {
  useTotalProductCount,
  useUniqueWishlstCount,
} from "@/hooks/useCartQuantity";
import { useGetOrderQuery, useGetUserSubscriptionsQuery } from "@/redux/api";
import React from "react";
const OrderDashboard = () => {
  const { data:orders} = useGetOrderQuery()
  const ordersLength=Object.keys(orders || {}).length;
  console.log(ordersLength,"^^^")
  return (
    <div style={{margin:"30px auto"}} className=" container row ">
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <CountUpContent number={ordersLength} text="" />
              <p> Orders </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <CountUpContent number={orders?.length} text="" />
              <p>Pending Orders </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4 col-lg-6 col-md-4">
        <div className="counter-wrapper text-center mb-30">
          <div className="counter-icon">
            <div className="counter-icon-wrap">{/* incon will be here */}</div>
            <div className="count-number">
              <CountUpContent number={orders?.length} text="" />
              <p>Delivered Orders </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrderDashboard;
