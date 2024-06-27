"use client";
import { useCreateBlogPostMutation, useGetAppliancesQuery } from "@/redux/api";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import "swiper/css/bundle";

const CreateBlog = () => {
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
    interface FormData {
        blogImg: string;
        category: string;
        title: string;
        description: string;
      }
   
      const { 
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm<FormData>(); 
        const [submitBlogPost] = useCreateBlogPostMutation();
    
        const onSubmit: SubmitHandler<FormData> = (data) => {
          const toastId = toast.loading("");
          submitBlogPost(data)
          .unwrap()
          .then(response => {
            toast.success("Blog posted Send Successfully", { id: toastId, duration: 3000 })
            reset();
          })
          .catch(error => {
            toast.error("Please try again", { id: toastId, duration: 1000 })
            console.error('Error:', error);
          });
        };
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="createBlog"
        role="dialog"
        aria-hidden="true"
        
      >
        <div
          className="modal-dialog modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  
                <div className="page-title mb-10">
                     Create Blog
                    </div> 
               
                </div>
                <div className="signup-form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                 
                  <div className="signup-wrapper">
                    <input
                      type="title"
                      {...register("title", {
                        required: "Title is required",
                      })}
                      placeholder="Enter Title"

                    />
                    {errors.title && (
                      <span className="error-message">
                        {errors.title.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      {...register("blogImg", {
                        required: "Image url is required",
                      })}
                      placeholder="Enter Image Url"

                    />
                    {errors.blogImg && (
                      <span className="error-message">
                        {errors.blogImg.message}
                      </span>
                    )}
                  </div>
                  <div className="signup-wrapper">
                  <select
                    {...register("category", {
                      required: "Category is required",
                    })}
                    className="shippment-select"
                  >
                    <option value="" >Select Category</option>
                     {uniqueCategories.map((category, i)=>(
                       <option value={category}>{category}</option>
                  
                     ))}
                   
                  </select>
                  {errors.category && (
                    <span className="error-message">
                      {errors.category.message}
                    </span>
                  )}
                </div>
                
                <div className="single-form-input">
                  <textarea  
                  {...register("description", {
                        required: "Description is required",
                      })}
                      placeholder="Description" name="description"  ></textarea>
                  {errors.description && (
                    <span className="error-message">
                      {errors.description.message}
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
      </div>
    </>
  );
};

export default CreateBlog;
