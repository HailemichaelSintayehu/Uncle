"use client";
import { useCheckVerfiedCodeMutation, useGetUserByEmailQuery } from "@/redux/api";
import { useAppDispatch } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
 


const EmailVerificationForm = () => {
  interface FormData {
    code: string;
  }
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<FormData>();   
    const router = useRouter()
     const [checkVerfiedCode] = useCheckVerfiedCodeMutation();
      const onSubmit: SubmitHandler<FormData> = (data) => {
        const toastId = toast.loading("");
        checkVerfiedCode({ code: data.code})
        .unwrap()
        .then(response => {
          toast.success("Successfully verifed redirect to Login Page", { id: toastId, duration: 1000 })
          router.push("/login");
        })
        .catch(error => {
          toast.error(error?.data, { id: toastId, duration: 1000 })
          console.error('Error:', error);
        });
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
                      type="text"
                      placeholder="Enter 6 Digit Code Here"
                      {...register("code", {
                        required: "Code is required",
                      })}
                    />
                    {errors.code && (
                      <span className="error-message">
                        {errors.code.message}
                      </span>
                    )}
                  </div>

                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                      Verify Now
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

export default EmailVerificationForm;
