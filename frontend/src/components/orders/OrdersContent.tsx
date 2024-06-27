"use client"
import { useGetOrderQuery } from "@/redux/api";
import Image from "next/image";
import React from "react";

const OrdersContent = () => {
  const { data: orders } = useGetOrderQuery();
  const date = new Date('2024-06-28T20:10:00');
  // utils/formatDate.ts

 const formatDate = (date: Date): string => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const dayName = days[date.getUTCDay()];
  const monthName = months[date.getUTCMonth()];
  const year = date.getUTCFullYear();

  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, '0');
  const seconds = date.getUTCSeconds().toString().padStart(2, '0');
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'
  const strTime = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

  return `${dayName}-${monthName}-${year} ${strTime}`;
};

  console.log(formatDate(date))
  return (
    <>
      <section className="faq-area pb-40 bg-grey fix">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-12">
              <div className="faq-wrapper">
                <div
                  className="choose-right"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="accordion" id="accordionExample">
                    {Object.keys(orders || {}).map((userId) => (
                      <div key={userId} className="accordion-item">
                        <h2 className="accordion-header" id={`heading-${userId}`}>
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse-${userId}`}
                            aria-expanded={userId === orders[userId][0]?.user_id ? "true" : "false"}
                            aria-controls={`collapse-${userId}`}
                          >
                            <div className="d-grid gap-2 product-subtotal">
                              <span className="product-name mb-0">
                                {orders[userId][0]?.first_name + " " + orders[userId][0]?.last_name}
                              </span>
                              <span className="product-name mb-0">Email: {orders[userId][0]?.email}</span>
                              <span className="product-name mb-0">Phone Number: {orders[userId][0]?.phone_number}</span>
                            </div>
                          </button>
                        </h2>
                        <div
                          id={`collapse-${userId}`}
                          className={`accordion-collapse collapse ${userId === orders[userId][0]?.user_id ? "show" : ""}`}
                          aria-labelledby={`heading-${userId}`}
                          data-bs-parent="#accordionExample"
                        >
                          <div className="table-content table-responsive">
                            <table className="table">
                              <thead>
                                <tr>
                                  <th className="product-thumbnail">Images</th>
                                  <th className="cart-product-name">Product</th>
                                  <th className="product-price">Price</th>
                                  <th className="product-quantity">Quantity</th>
                                  <th className="product-quantity">Residential Address</th>
                                  <th className="product-quantity">Delivery Address</th>
                                  <th className="product-quantity">Delivery Date</th>
                                  <th className="product-quantity">Communication Method</th>
                                </tr>
                              </thead>
                              <tbody>
                                {orders[userId]  && orders[userId].length > 0 ? (
                                  <>
                                    {orders[userId].map((item:any, index:any) => (
                                      <tr key={index}>
                                        <td className="product-thumbnail">
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
                                        </td>
                                        <td className="product-name">{item?.name}</td>
                                        <td className="product-subtotal">
                                          <span className="amount">KES {item?.price.toLocaleString()}</span>
                                        </td>
                                        <td className="product-subtotal">
                                          <span className="amount">{item?.quantity}</span>
                                        </td>
                                        <td className="product-subtotal">
                                          <span className="amount">{item?.residential_address}</span>
                                        </td>
                                        <td className="product-subtotal">
                                          <span className="amount">{item?.delivery_address}</span>
                                        </td>
                                        <td className="product-subtotal">
                                          <span className="amount">{formatDate(new Date(item?.preferred_delivery_date))}</span>
                                        </td>
                                        <td className="product-subtotal">
                                          <span className="amount">{item?.preferred_communication_method}</span>
                                        </td>
                                      </tr>
                                    ))}
                                  </>
                                ) : (
                                  <tr>
                                    <td colSpan={8}>No Subscriptions yet.</td>
                                  </tr>
                                )}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OrdersContent;
