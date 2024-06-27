"use client";
import { useDeleteBlogPostMutation } from "@/redux/api";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import "swiper/css/bundle";

interface Props {
    blog: any; // Assuming blog is of type FormData
}
interface FormData {
    id:string,
  }
const DeleteBlogPost : React.FC<Props> = ({ blog }) => {
  const initialFormData: FormData = {
    id: blog?.id
};
const [formData, setFormData] = useState<FormData>(initialFormData);
useEffect(() => {
    setFormData(initialFormData)
   },[blog])
  

// Example function to handle form input changes

console.log(formData,"$%$%")

        const [submitBlogPost] = useDeleteBlogPostMutation();
    
        const handleSubmit = (e:any,formData:any) => {
            e.preventDefault();
          const toastId = toast.loading("");
          console.log(formData,"()()")
          submitBlogPost(formData?.id)
          .unwrap()
          .then(response => {
            toast.success("Blog posted Send Successfully", { id: toastId, duration: 3000 })
           
          })
          .catch(error => {
            toast.error("Please try again", { id: toastId, duration: 1000 })
            console.error('Error:', error);
          });
        };
        console.log(blog,"****)()")
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="removeBlog"
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
                   Remove Post
                    </div> 
               
                </div>
                <div className="signup-form-wrapper">
                <form >
                <div className="sidebar__widget-head mb-35"><h4 className="sidebar__widget-title">Are You sure to remove the Blog Post</h4></div>
                <div className="signup-wrapper">
                  <input
                      type="text"
                      name="id"
                      value={formData?.id}
                      placeholder="ID"
                      hidden
                    />
                  </div>
                  <div className="mb-20 d-flex gap-5">
                    <button onClick={(e)=>handleSubmit(e,formData)} type="submit" className="blog-btn">
                     Yes
                    </button>
                    <button  type="button"
                  data-bs-dismiss="modal"
                  aria-label="Close"  
                  className="blog-btn"
                  >
                    No
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

export default DeleteBlogPost;
