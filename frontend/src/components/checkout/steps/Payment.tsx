"use client";
import React, { useState } from "react";
import { useCreateStripeSessionMutation } from '@/redux/api';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { update_cart_product, update_cart_product_refundable } from "@/redux/slices/cartSlice";
import { number } from "yup";
const Payment = () => {
  const [selectPayment, setselectPayment] = useState("stripe");
  const router = useRouter()
  const cartProducts = useAppSelector(state => state.cart.cartProducts)
  const [ createSession ] = useCreateStripeSessionMutation()
  const dispatch = useDispatch();
  const totalRefundablePrice = cartProducts?.reduce((total, product) => {
    return total +  Number(product.refundable) as number;
}, 0);

 let cartProductwithRefundable=[...cartProducts,
  {
  id:0,price:totalRefundablePrice,
   totalCart:cartProducts[0]?.totalCart,
 plan:cartProducts[0]?.plan,
 option:"refundable",buy:number,
 email: cartProducts[0].email as string,
 productImg: "https://cdn-icons-png.flaticon.com/512/3585/3585091.png",
 title: "Refundable amount",
 phone_number:  cartProducts[0].phone_number as string,
 residential_address:  cartProducts[0].residential_address as string,
 delivery_address:  cartProducts[0].delivery_address as string,
 preferred_delivery_date:  cartProducts[0].preferred_delivery_date as string,
 preferred_communication_method:   cartProducts[0].preferred_communication_method as string,}]
  console.log(cartProductwithRefundable,"cartProductwithRefundable")
  const handleCheckout  = async () => {
      const toastId = toast.loading("");
      try {
          const response = await createSession(cartProductwithRefundable.map(product => (
            {
              appliance_id: product.id,
              price:product?.option=="rental"?product.price as number:product?.option=="buy"?product.buy as number:product.price as number,
              quantity:product.totalCart as number,
              plan:product.plan,
              option:product?.option

          }))).unwrap()
          dispatch(update_cart_product_refundable(cartProductwithRefundable as any));
          toast.success("Heading to Checkout",{ id: toastId, duration: 1000 })
         
          router.push(`${response}`)
        } catch (error:any){
          toast.error(`${error.data}`, { id: toastId, duration: 2000 });
    
        }
  }
  return (
    <div className="container payment-container mt-50">
      <form>
        <div className="payment-method">
          <h2 className="mb-4">Select Payment Method</h2>
          <div className="payment-options mb-2">
            <span
              className={selectPayment === "stripe" ? "active_payment" : ""}
              onClick={() => setselectPayment("stripe")}
            >
              Stripe
            </span>
            {/* <span
              className={selectPayment === "cash" ? "active_payment" : ""}
              onClick={() => setselectPayment("cash")}
            >
              Cash On Delivery
            </span>
            <span
              className={selectPayment === "bank" ? "active_payment" : ""}
              onClick={() => setselectPayment("bank")}
            >
              Bank Transfer
            </span> */}
          </div>
        </div>

        {selectPayment === "stripe" && (
          <>
            <div className="payment-details">
              {/* <h2>Payment Details</h2> */}
              {/* <label htmlFor="cardnumber">Card Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required placeholder="4242-4242-4242"/> */}
            </div>
            <button className="payment_btn" type='button' onClick={() => handleCheckout()} >
              Checkout
            </button>
          </>
        )}
        {selectPayment === "cash" && (
          <>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
        {selectPayment === "bank" && (
          <>
            <div className="payment-details">
              <h2>Payment Details</h2>
              <label htmlFor="cardnumber"> Bank Account Number</label>
              <input type="text" id="cardnumber" name="cardnumber" required placeholder="142587592471"/>
            </div>
            <button className="payment_btn" type="submit">
              Submit Payment
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default Payment;
