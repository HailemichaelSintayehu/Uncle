"use client";

import { useCreateContactUsMutation } from "@/redux/api";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@reduxjs/toolkit/query";
import Image from "next/image";
import React, { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSelector } from "react-redux";
import { toast } from "sonner";
 
interface FormData {
  email: string;
  name: string;
  phone: string;
  message: string;
}
interface QuestionAboutProductProps{
  item:any
}
 
const QuestionAboutProduct:FC<QuestionAboutProductProps> = ({item}) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  
  const [submitContactForm] = useCreateContactUsMutation();
  const user = useAppSelector(state => state.auth.user)
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const email = user?user.email:data.email;
    const name = user?user.firstname+" "+user?.lastname:data?.name;
    const phone = user?user.phone:data?.phone;
    const message = data?.message;
    const product_id=item?.id
    const userInfo = {
      email,
      name,
      phone,
      product_id,
      message,
    };
    submitContactForm(userInfo)
    .unwrap()
    .then(response => {
      toast.success("Question Send Successfully",{ id: toastId, duration: 1000 })
    })
    .catch(error => {
      toast.error("Please try again", { id: toastId, duration: 1000 })
    });
    reset()
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
       
        <div className="">
          <img
          className="active"
          src={item?.productImg}
          alt="product-img"
          width="200"
        />
        <span className="">{item?.title}</span>
            </div>
        <div className="signup-form-wrapper">
          {!user&&
          <>
          <div className="signup-wrapper">
            <input
              type="email"
              placeholder="Email or Username"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div>
          <div className="signup-wrapper">
            <input
              type="text"
              placeholder="Name"
              {...register("name", {
                required: "Name is required",
              })}
            />
            {errors.name && (
              <span className="error-message">{errors.name.message}</span>
            )}
          </div>
          <div className="signup-wrapper">
            <input
              type="text"
              placeholder="Phone"
              {...register("phone", {
                required: "Phone is required",
              })}
            />
            {errors.phone && (
              <span className="error-message">{errors.phone.message}</span>
            )}
          </div>
          </>}
          
          <div className="order-notes">
            <div className="checkout-form-list">
              <textarea
                id="checkout-mess"
                cols={30}
                rows={10}
                placeholder="Write Your Message Here.."
                {...register("message", {
                  required: "Message is required",
                })}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message.message}</span>
              )}
            </div>
          </div>
          <div className="sing-buttom mb-20">
            <button type="submit" className="sing-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default QuestionAboutProduct;
