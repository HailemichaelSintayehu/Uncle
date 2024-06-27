"use client";
import { useGetUserByEmailQuery } from "@/redux/api";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-use";
import { toast } from "sonner";
 
interface FormData {
  code: string;
}

const ForgotEmailVerificationForm = () => {
  const router = useRouter();
  const location = useLocation();
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    setSearchValue(searchParams.get('search') as any);
  }, [location]);
  const { data:user } = useGetUserByEmailQuery(searchValue)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    const code = data.code;
    if(code==user?.data.verification_code){
    toast.success("Successfully verifed", { id: toastId, duration: 1000 })
    router.push(`/reset-password?search=${searchValue}`);
    }else{
      toast.error("Please try again", { id: toastId, duration: 1000 })
    }
   
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

export default ForgotEmailVerificationForm;
