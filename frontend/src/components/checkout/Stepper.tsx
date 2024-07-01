"use client";
import React, { useState, useEffect } from "react";
import Address from "./steps/Address";
import Review from "./steps/Review";
import Payment from "./steps/Payment";
import Complete from "./steps/Complete";
import { useAppSelector } from "@/redux/hooks";
import { useRouter } from "next/navigation";
import { Routes } from "@/routes";
import OTPVerification from "@/form/OTPVerification";
import { useSendVerificationCodeMutation } from "@/redux/api";
import { toast } from "sonner";
import ShippingAddressForm from "@/form/ShippingAddressForm";
const Stepper = () => {
  const router = useRouter()
  const session = useAppSelector((state) => state.auth.session);
  const userinfo = useAppSelector((state) => state.auth.user);
  const [step, setStep] = useState<number>(1);
  const [sendVerificationCode] = useSendVerificationCodeMutation();

  const nextStep = async () => {
    setStep((prevStep) => prevStep + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const sendOTP = async () => {
    const toastId = toast.loading("");

    try {
      const response = await sendVerificationCode({ email: userinfo.email }).unwrap();
      toast.success("Please check your email to verify we have sent you an email", { id: toastId, duration: 10000 });

    } catch (error: any) {

      toast.error(`${error.data}`, { id: toastId, duration: 2000 });
    }
  }
useEffect(() => {
// if (step === 2) {
//   sendOTP();
// }
},[step])
  useEffect(() => {
    if(!session){
      router.push(Routes.LOGIN)
    }
  },[])

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow">
            <div className="card-body custom_padding">
              <div className="rows">
                <div className="checkout-list-steps">
                  {/* <div
                    className={`item-step ${step >= 1 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-1 ${
                          step >= 1 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Address </h6>
                    </div>
                  </div> */}
                  <div
                    className={`item-step ${step == 1 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-2 ${
                          step == 1 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Review </h6>
                    </div>
                  </div>
                  {/* <div
                    className={`item-step ${step >= 2 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-4 ${
                          step >= 2 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Verification </h6>
                    </div>
                  </div> */}
                  <div
                    className={`item-step ${step >= 2 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-5 ${
                          step >= 2 ? "active" : ""
                        }`}
                      ></div>
                      
                      <h6 className="mb-1"> Shpping Address </h6>
                    </div>
                  </div>
                  <div
                    className={`item-step item-step-complete ${step === 2 ? "line-active" : ""}`}
                  >
                    <div className="rounded-step">
                      <div
                        className={`icon-step step-3 ${
                          step >= 4 ? "active" : ""
                        }`}
                      ></div>
                      <h6 className="mb-1"> Payment </h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* {step === 1 && (
                  <>
                    {" "}
                    <Address step={step} setStep={setStep}/>{" "}
                  </>
                )} */}
                {step === 1 && (
                  <>
                    {" "}
                    <Review />{" "}
                  </>
                )}
                {/* {step === 2 && (
                 <OTPVerification setStep={setStep}/>
                )} */}
                {step === 2 && (
                 <ShippingAddressForm setStep={setStep}/>
                )}
                {step === 3 && (
                  <>
                    {" "}
                    <Payment />{" "}
                  </>
                )}
              </div>

              <div className="row pt-20 justify-content-between">
                <div className="col-lg-4">
                  {step > 1 && (
                    <button className="btn btn-dark mr-3" onClick={prevStep}>
                      Previous
                    </button>
                  )}
                </div>
                <div className="col-lg-4 text-end">
                  {step < 3 && step >= 1 &&(
                    <button   style={{cursor:step >= 2?"not-allowed":""}} className="btn btn-dark" onClick={nextStep}>
                      Next
                    </button>
                  )} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stepper;
