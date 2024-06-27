"use client";
import {useForgetPasswordMutation } from "@/redux/api";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
interface FormData {
  email: string;
}

const ForgotPasswordForm = () => {
  const router = useRouter();
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  ;
  const [submitForgetPassword] = useForgetPasswordMutation();
  const onSubmit: SubmitHandler<FormData> = (data) => {
  
    const toastId = toast.loading("");
    submitForgetPassword(data)
    .unwrap()
    .then(response => {
      toast.success("Verification Code Send Successfully", { id: toastId, duration: 1000 })
      window?.location.replace(`/forgot-code?search=${data.email}`);
      reset();
    })
    .catch(error => {
      toast.error(error?.data?.error, { id: toastId, duration: 1000 })
      console.error('Error:', error);
    });
    reset();
  };
  

  return (
    <>
      <div className="register-area">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}> 
                  <div className="signup-wrapper">
                    <input
                      type="email"
                      placeholder="Enter Your Email Address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="error-message">
                        {errors.email.message}
                      </span>
                    )}
                  </div>

                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Forgot Now
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

export default ForgotPasswordForm;
