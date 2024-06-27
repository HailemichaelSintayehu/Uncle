"use client";
import useGlobalContext from "@/hooks/use-context";
import { remove_cart_product } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

const SidebarCard = () => {
  const { sideCartOpen, setSideCartOpen } = useGlobalContext();
  const dispatch = useDispatch();
  const cartProducts = useSelector(
    (state: RootState) => state.cart.cartProducts
  );
  const totalPrice = cartProducts.reduce(
    (total, product) => total + (product?.price ?? 0) * (product?.totalCart ?? 0),
    0
  );
  const totalPriceWithRefundable = cartProducts.reduce(
    (total, product) => {
      // Extract price, refundable, and totalCart from the product object, using default values if undefined
      const price = product?.price ?? 0;
      const refundable = product?.refundable as number ?? 0;
      const totalCart = product?.totalCart as number;
  
      // Calculate the contribution of this product to the total
      const productTotal = (price + refundable) * totalCart as number;
  
      // Add the product's contribution to the running total
      return total + productTotal;
    },
    0 // Initial value of the total
  );
console.log(cartProducts,"###")
  return (
    <>
      <div className="fix">
        <div
          className={`sidebar-action sidebar-cart ${
            sideCartOpen ? "cart-open" : ""
          }`}
        >
          <button
            onClick={() => setSideCartOpen(!sideCartOpen)}
            className="close-sidebar"
          >
            Close<i className="fal fa-times"></i>
          </button>
          <h4 className="sidebar-action-title">Shopping Cart</h4>
          <div className="sidebar-action-list">
            {cartProducts?.length ? (
              <>
                {cartProducts?.map((item,index) => {
                  const productPrice =
                    (item.price ?? 0) * (item.totalCart ?? 0);
                  const productPriceRef =
                    (item.refundable ?? 0) * (item.totalCart ?? 0);
                  return (
                    <div key={index} className="sidebar-list-item">
                      <div className="product-image pos-rel">
                        <Link href={`/shop/${item?.id}`} className="">
                          <Image src={item?.productImg} alt="img" fill/>
                        </Link>
                      </div>
                      <div className="product-desc">
                        <div className="product-name">
                          <div className="option-tag">{item?.option=="rental"?"Monthly":item?.option=="buy"?"Buy":item?.option}</div>
                          <Link href={`/shop/${item?.id}`}> {item?.title} </Link>
                        </div>
                        <div className="product-pricing mb-2">
                          <span className="item-number">
                            {item?.totalCart} &times;
                          </span>
                          <span className="price-now">KES {productPrice.toLocaleString()}</span>
                        </div>
                        <div className="product-pricing">
                          <span className="item-number">
                          Refundable
                          </span> 
                          <span className="price-now">KES {productPriceRef.toLocaleString()}</span>
                        </div>
                        <button
                          onClick={() => dispatch(remove_cart_product(item))}
                          className="remove-item"
                        >
                          <i className="fal fa-times"></i>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </>
            ) : (
              <></>
            )}
          </div>
          {cartProducts?.length ? (
            <>
              <div className="product-price-total">
                <span>Subtotal :</span>
                <span className="subtotal-price">
                  KES {totalPrice.toLocaleString()}
                </span>
              </div>
              <div className="product-price-total">
                <span>Total :</span>
                <span className="subtotal-price">
                  KES {Number(totalPriceWithRefundable).toLocaleString()}
                </span>
              </div>
              <div className="sidebar-action-btn">
                <Link onClick={() => setSideCartOpen(!sideCartOpen)} href="/cart" className="fill-btn">
                  View cart
                </Link>
                <Link onClick={() => setSideCartOpen(!sideCartOpen)} href="/checkout" className="border-btn">
                  Checkout
                </Link>
              </div>
            </>
          ) : (
            <>
              <p className="text-center pt-20">Your Cart Is Empty</p>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default SidebarCard;
