 

 "use client";
import { useChangePasswordVerfiedPasswordMutation } from "@/redux/api";
import { useAppDispatch } from "@/redux/hooks";
import { clearSession } from "@/redux/slices/authSlice";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLocation } from "react-use";
import { toast } from "sonner";

interface FormData {
  newPassword: string;
}

const ResetPasswordFormTwo = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()  
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
 
  const searchValue = searchParams.get('search'); 
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const [submitChangePasswordForm] = useChangePasswordVerfiedPasswordMutation();
  const onSubmit: SubmitHandler<FormData> = (data) => {
    const toastId = toast.loading("");
    submitChangePasswordForm({ newPassword: data.newPassword, email: searchValue})
    .unwrap()
    .then(response => {
      toast.success("password changed", { id: toastId, duration: 1000 })
      router.push("/login");
      dispatch(clearSession())
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
                      type="password"
                      placeholder="Enter New Password Here"
                      {...register("newPassword", {
                        required: "new password is required",
                        minLength: 6,
                      })}
                    />
                    {errors.newPassword && (
                      <span className="error-message">
                        {errors.newPassword.message}
                      </span>
                    )}
                  </div>

                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn">
                       Reset Password
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

export default ResetPasswordFormTwo;
