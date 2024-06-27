"use client";
import { useAppSelector } from "@/redux/hooks";
import { update_cart_product } from "@/redux/slices/cartSlice";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { toast } from "sonner";


interface ShippingAddressProps {
  setStep: (step: number) => void;
}

const ShippingAddressForm: React.FC<ShippingAddressProps> = ({ setStep }) => {
  interface FormData {
    email: string;
    phone_number: string;
    residential_address: string;
    delivery_address: string;
    preferred_delivery_date: string;
    preferred_communication_method: string;
  }
  const user = useAppSelector(state => state.auth.user)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    dispatch(update_cart_product(data as any));
    toast.success("Successfully verifed redirect to Checkout page", { id: toastId, duration: 1000 })
    setStep(4)

  };
  console.log(user, "ooo")
  return (
    <>
      <div className="register-area">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="d-flex gap-2 align-items-center">
                    <i className="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    <span className="text-color-yellow">
                      You may be asked to provide additional documents upon delivery.
                    </span>

                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Country is required",
                      })}
                      value={user?.email}
                      readOnly
                    />
                    {errors.email && (
                      <span className="error-message">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      {...register("phone_number", {
                        required: "Phone Number is required",
                      })}
                      readOnly
                      value={user?.phone}
                    />
                    {errors.phone_number && (
                      <span className="error-message">
                        {errors.phone_number.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      placeholder="Enter Residential Address"
                      {...register("residential_address", {
                        required: "Residential Address is required",
                      })}
                    />
                    {errors.residential_address && (
                      <span className="error-message">
                        {errors.residential_address.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      placeholder="Enter Delivery Address"
                      {...register("delivery_address", {
                        required: "Delivery Address is required",
                      })}
                    />
                    {errors.delivery_address && (
                      <span className="error-message">
                        {errors.delivery_address.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="date"
                      placeholder="Enter Preferred Delivery Date and Time"
                      {...register("preferred_delivery_date", {
                        required: "Preferred Delivery Date and Time is required",
                      })}
                    />
                    {errors.preferred_delivery_date && (
                      <span className="error-message">
                        {errors.preferred_delivery_date.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <select
                      {...register("preferred_communication_method", {
                        required: "Preferred Communication Method is required",
                      })}
                      className="shippment-select"
                    >
                      <option value="" disabled>Select Preferred Communication Method</option>
                      <option value="all">Select All</option>
                      <option value="phone">Phone</option>
                      <option value="email">Email</option>
                      <option value="whatsapp">WhatsApp</option>
                    </select>
                    {errors.preferred_communication_method && (
                      <span className="error-message">
                        {errors.preferred_communication_method.message}
                      </span>
                    )}
                  </div>


                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Save
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShippingAddressForm;
