"use client";

import { useGetUserSubscriptionsQuery, useCancelSubscriptionMutation } from "@/redux/api";
import Image from "next/image";
import React from "react";
import { toast } from "sonner";
interface OptionProps {
  option: string
}

const DefaultDashboard: React.FC<OptionProps> = ({ option }) => {
  const { data:subscriptions, refetch } = useGetUserSubscriptionsQuery({    
    refetchOnMountOrArgChange: true
  })
  const [ cancelSubscription ] = useCancelSubscriptionMutation()
  const handleCancel = async (itemId:string, subscriptionId:string) => {
    const toastId = toast.loading("");
    console.log(itemId, subscriptionId,"kkkk")
    try {
      await cancelSubscription({itemId:itemId, subscriptionId:subscriptionId}).unwrap()
      refetch()
      toast.success("Subscription Cancelled",{ id: toastId, duration: 1000 })
    } catch (error:any){
      toast.error(`${error.data}`, { id: toastId, duration: 2000 });

    }
  }
  const totalPrice = subscriptions?.filter((items)=>items?.option===option)?.reduce(
    (total, subscription) =>
      total + (subscription?.price ?? 0) * (subscription?.quantity ?? 0),
    0
  );
  const totalProducts = subscriptions?.filter((items)=>items?.option===option)?.reduce(
    (total, subscription) =>
     Number(total) + Number(subscription?.quantity) ?? 0,
    0
  );
  return (
    <>
      <div className="table-responsive">
        <div>
          {/* <p>
            {" "}
            <strong>Order Id</strong> : 125426368579
          </p>
          <p>
            <strong>Order Date</strong> : 27 Feb 2024
          </p>
          <p>
            <strong>Delivere Date</strong> : 27 Feb 2024
          </p> */}

          <section className="cart-area pt-10 pb-10">
            <div className="container container-small">
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="product-thumbnail">Images</th>
                          <th className="cart-product-name">Product</th>
                          <th className="product-price">Price</th>
                          <th className="product-quantity">Quantity</th>
                          <th className="product-quantity">plan</th>
                          <th className="product-quantity">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {subscriptions && subscriptions.length > 0 ? (
                          <>
                          {subscriptions?.filter((items)=>items?.option===option)?.map((item, index) => {
                            return (
                              <tr key={index}>  
                                <td className="product-thumbnail">
                                  {/* <Link href={`/shop/${item?.id}`}> */}
                                    <Image
                                      src={item?.image}
                                      width={50}
                                      height={50}
                                      style={{
                                        width: "auto",
                                        height: "auto",
                                      }}
                                      alt=""
                                    />
                                  {/* </Link> */}
                                </td>
                                <td className="product-name">
                                  {/* <Link href={`/shop-details/${item?.id}`}> */}
                                    {item?.name}
                                  {/* </Link> */}
                                </td>
  
                                <td className="product-subtotal">
                                  <span className="amount">KES {item?.price.toLocaleString()}</span>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">{item?.quantity}</span>
                                </td>
                                <td className="product-subtotal">
                                  <span className="amount">{ item?.option=="buy"?"buy":`${item?.plan} months`}</span>
                                </td>
                                <td className="product-subtotal">
                                  <div className="bd-banner__btn">
                                    <button
                                      onClick={() => handleCancel(item.stripe_subscription_item_id, item.stripe_subscription_id)}
                                      // data-toggle="tooltip"
                                      // data-placement="top"
                                      // title="Quick View"
                                      // data-bs-toggle="modal"
                                      // data-bs-target="#orderTrackModal"
                                      className="btn_back"
                                    >
                                      Cancel
                                    </button>
                                  </div>
                                </td>
                              </tr>
                            );
                          })}
                          <tr>
                          <td></td>
                          <td className="product-name">Total Amount</td>

                          <td className="product-subtotal">
                            <span className="amount">KES {totalPrice?.toLocaleString()}</span>
                          </td>
                          <td className="product-subtotal">
                            <span className="amount">{totalProducts}</span>
                          </td>
                          <td  className="product-subtotal">
                          </td>
                        </tr>
                          </>
                        ):(
                          <tr>
                            <td colSpan={6} > No Subscriptions yet.</td>
                          </tr>
                        )}

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default DefaultDashboard;
