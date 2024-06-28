"use client";

import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { GenderData } from "@/data/nice-select-data";
import useGlobalContext from "@/hooks/use-context";
import { useRegisterMutation } from "@/redux/api";
import FacebookIcon from "@/svg/FacebookIcon";
import GoogleIcon from "@/svg/GoogleIcon";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import { object, string, number } from 'yup';
import { yupResolver } from "@hookform/resolvers/yup"
interface FormData {
  firstname: string;
  lastname: string;
  email: string;
  phone: number;
  password: string;
}

const schema = object({
  firstname: string().min(3).required(),  
  lastname: string().min(3).required(),
  phone: number().min(10).required().positive().integer().typeError('must be a number'),
  email: string().email().required(),
  password: string().required().min(6),
});

const RegisterForm = () => {
  const router = useRouter()
  const { niceSelectData } = useGlobalContext();
  const [showPassword, setShowPassword] = useState(false);
  const [ checked, setChecked ] = useState(false);
  const [ error, setError ] = useState(false)
  function handldCheckBox(){
    setChecked(!checked)
    setError(false)
  }
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [ signup, { isLoading } ] = useRegisterMutation()
  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setError(true)
    if(checked){
    const toastId = toast.loading("");
    const firstname = data.firstname;
    const lastname = data.lastname;
    const email = data.email;
    const phone = data.phone.toString();
    const password = data.password;
    const userInfo = {
      firstname,
      lastname,
      email,
      phone,
      password,
    };
    try {
      const response = await signup(userInfo).unwrap();
      if(response?.user?.isVerified==false){
        toast.success("Please check your email to verify we have sent you an email", { id: toastId, duration: 1000 });
        window?.location.replace(`/email-verificaiton?search=${response?.user?.email}`);
      }else{
        toast.success("Register Successfully",{ id: toastId, duration: 10000 })
        reset();
        router.push("/login")
      }
    } catch (error:any) {
      toast.error(`${error.data}`, { id: toastId, duration: 2000 });

    }
  }
  };

  const selectHandler = () => {};
  return (
    <>
      <div className="register-area pt-120 pb-120">
        <div className="container container-small">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="signup-form-wrapper">
                {/* form */}

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="First Name"
                          {...register("firstname")}
                        />
                        {errors.firstname && (
                          <span className="error-message">
                            {errors.firstname.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          type="text"
                          placeholder="Last Name"
                          {...register("lastname")}
                        />
                        {errors.lastname && (
                          <span className="error-message">
                            {errors.lastname.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          placeholder="Email"
                          {...register("email")}
                        />
                        {errors.email && (
                          <span className="error-message">
                            {errors.email.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          // type="number"
                          placeholder="Phone Number"
                          {...register("phone")}
                        />
                        {errors.phone && (
                          <span className="error-message">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="signup-wrapper">
                        <input
                          className="password_input"
                           type={showPassword ? "text" : "password"}
                          placeholder="Password"
                          {...register("password")}
                        />
                         <span className="input-icon">
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="password-toggle-btn"
                            >
                              <i
                                className={
                                  showPassword
                                    ? "fa-solid fa-eye"
                                    : "fa-regular fa-eye-slash"
                                }
                              ></i>
                            </button>
                          </span>
                        {errors.password && (
                          <span className="error-message">
                            {errors.password.message}
                          </span>
                        )} 
                      </div>
                    </div>
                    {/* <div className="col-md-6">
                      <div className="signup-wrapper">
                        <NiceSelectTwo
                          options={GenderData}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          className="gender_select"
                        />
                      </div>
                    </div> */}
                  </div>
                  <div className="signup-action">
                    <div className="course-sidebar-list">
                      <input
                        className="signup-checkbo mr-1"
                        type="checkbox"
                        checked={checked}
                        onChange={(e) => 
                        handldCheckBox()
                          
                        }
                        id="sing-up"
                      />
                      <label className="sign-check" htmlFor="sing-up">
                        <span>
                          <Link href="/terms-and-conditions">Accept Terms and Conditions</Link>
                        </span>
                      </label>
                      {error && !checked && (
                          <div className="error-message">
                            You must accept terms and privacy policy
                          </div>
                        )}
                    </div>
                  </div>
                  <div className="sing-buttom mb-20">
                    <button disabled={error && !checked }   type="submit" className="sing-btn" style={{width: "100%",cursor:error && !checked ?"not-allowed":""}}>
                      Register
                    </button>
                  </div>
                </form>

                {/*end form */}

                <div className="acount-login text-center">
                  <span>
                    Already have an account? <Link href="login">Log in</Link>
                  </span>
                </div>
                {/* <div className="sign-social text-center">
                  <span>Or Sign- in with</span>
                </div>
                <div className="sign-social-icon">
                  <Link href="#" className="sign-facebook">
                    <FacebookIcon />
                    <span className="ml-1">Facebook</span>
                  </Link>
                  <Link href="#" className="sign-gmail">
                    <GoogleIcon />
                    <span className="ml-1">Google</span>
                  </Link>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
