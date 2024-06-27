import React from "react";
import bgImg from "../../../public/assets/img/bg/newsletter-bg.png"
import { SubmitHandler, useForm } from "react-hook-form";
import { useEmailSubscriptionMutation } from "@/redux/api";
import { toast } from "sonner";
interface FormData {
  email: string;
}
const NewsLetterSection = () => {
  const { 
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  ;
  const [submitEmailSubscription] = useEmailSubscriptionMutation();
  const onSubmit: SubmitHandler<FormData> = (data) => {

    
  
    const toastId = toast.loading("");
    submitEmailSubscription(data)
    .unwrap()
    .then(response => {
      toast.success("Subscribed Successfully", { id: toastId, duration: 1000 })
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
      <section className="newsletter-area pt-0 pb-120">
        <div className="container">
          <div
            className="newsletter-wrapper"
            style={{ backgroundImage: `url(${bgImg.src})`}}
          >
            <div className="newsletter-inner">
              <div className="newsletter-content">
                <div className="section-title text-center">
                  <h2 className="section-main-title mb-30">
                    Subscribe Newsletter
                  </h2>
                </div>
                <p className="mb-40">
                  Enter your email below to be the first to know about new
                  collections and product launches.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}
                  className="subscribe-form subscribe-form-newsletter"
                >
                  <input type="text" placeholder="Enter Your Email Address"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })} />
                  <button type="submit">
                    Subscribe<i className="fas fa-long-arrow-right"></i>
                  </button>
                  {errors.email && (
                      <span className="error-message">
                        {errors.email.message}
                      </span>
                    )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsLetterSection;
