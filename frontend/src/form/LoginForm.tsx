"use client";
import {  useLoginMutation, useSendVerificationCodeMutation } from "@/redux/api";
import { useAppDispatch } from "@/redux/hooks";
import { setSession, setUser } from "@/redux/slices/authSlice";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { object, string, number } from 'yup';

interface FormData {
  email: string;
  password: string;
} 

const schema = object({
  email: string().email().required(),
  password: string().required().min(6),
});


const LoginForm = () => {
  const router = useRouter();
  const dispatch = useAppDispatch()
  const [ login, { isLoading } ] = useLoginMutation()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });
  const [sendVerificationCode] = useSendVerificationCodeMutation();
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    const toastId = toast.loading("");
    const email = data.email;
    const password = data.password;
    const userInfo = {
      email,
      password,
    };
    try {
      const response = await login(userInfo).unwrap();
  
      if(response?.user?.isVerified==false){
        await sendVerificationCode({ email:userInfo.email}).unwrap();
        toast.success("Please check your email to verify we have sent you an email", { id: toastId, duration: 1000 });
        router.push(`/email-verificaiton`);
      }else{
      dispatch(setSession(response.session.token))
      dispatch(setUser(response.user))
       toast.success("Login Success", { id: toastId, duration: 1000 });
       router.push("/shop");
      reset();
      } 
      
     
    } catch (error:any) {
      toast.error(`${error.data}`, { id: toastId, duration: 2000 });
    }

  };

  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="signup-wrapper">
                    <input
                      placeholder="Emails"
                      {...register("email")}
                    />
                    {errors.email && (
                      <span className="error-message">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="password"
                      placeholder="Password"
                      {...register("password")}
                    />
                    {errors.password && (
                      <span className="error-message">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  {/* <div className="signup-action">
                    <div className="course-sidebar-list">
                      <input
                        className="signup-checkbo mr-1"
                        type="checkbox"
                        id="sing-in"
                      />
                      <label className="sign-check" htmlFor="sing-in">
                        <span>Remember me</span>
                      </label>
                    </div>
                  </div> */}
                  <div className="sing-buttom mb-20">
                    <button type="submit" className="sing-btn" style={{width: "100%"}}>
                      Login
                    </button>
                  </div>
                </form>

                <div className="registered wrapper">
                  <div className="not-register">
                    <span>Not registered?</span>
                    <span>
                      <Link href="/register">Sign up</Link>
                    </span>
                  </div>
                  <div className="forget-password">
                    <Link href="/forgot-password">Forgot password?</Link>
                  </div>
                </div>
                {/* <div className="sign-social text-center">
                  <span>Or Sign- in with</span>
                </div>
                <div className="sign-social-icon">
                  <div className="sign-facebook">
                    <FacebookIcon />
                    <Link className="ml-1" href="#">
                      Facebook
                    </Link>
                  </div>
                  <div className="sign-gmail">
                    <GoogleIcon />
                    <Link className="ml-1" href="#">
                      Google
                    </Link>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
