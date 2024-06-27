"use client";
import { useUpdateBlogPostMutation, useGetAppliancesQuery } from "@/redux/api";

import React, { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";
import "swiper/css/bundle";

interface Props {
    blog: any; // Assuming blog is of type FormData
}
interface FormData {
    id:string,
    blogImg: string;
    category: string;
    title: string;
    description: string;
  }
const EditBlog : React.FC<Props> = ({ blog }) => {
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
    
  
  const initialFormData: FormData = {
    id: blog?.id,
    blogImg: blog?.blogImg,
    category: blog?.category,
    title: blog?.title,
    description: blog?.description,
};
const [formData, setFormData] = useState<FormData>(initialFormData);
useEffect(() => {
    setFormData(initialFormData)
   },[blog])
  

// Example function to handle form input changes
const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
        ...prevFormData,
        [name]: value,
    }));
};
console.log(formData,"$%$%")

        const [submitBlogPost] = useUpdateBlogPostMutation();
    
        const handleSubmit = (e:any,formData:any) => {
            e.preventDefault();
          const toastId = toast.loading("");
          console.log(formData,"()()")
          submitBlogPost(formData)
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
        id="editBlog"
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
                    Edit Blog
                    </div> 
               
                </div>
                <div className="signup-form-wrapper">
                <form >
                 
                  <div className="signup-wrapper">
                  <input
                      type="text"
                      name="id"
                      value={formData?.id}
                      placeholder="ID"
                      hidden
                    />
                    <input
                      type="text"
                      name="title"
                      placeholder="Enter Title"
                      value={formData?.title}
                      onChange={handleInputChange}

                    />
                   
                  </div>
                  <div className="signup-wrapper">
                    <input
                      type="text"
                      name="blogImg"
                      placeholder="Enter Image Url"
                      value={formData?.blogImg}
                      onChange={handleInputChange}

                    />
                    
                  </div>
                  <div className="signup-wrapper">
                  <select
                     name="category"
                    className="shippment-select"
                    value={formData?.category}
                    onChange={handleInputChange}

                  >
                    <option value="" >Select Category</option>
                     {uniqueCategories.map((category, i)=>(
                       <option value={category}>{category}</option>
                  
                     ))}
                   
                  </select>
                  
                
                </div>
                
                <div className="single-form-input">
                  <textarea  onChange={handleInputChange}
 placeholder="Description" name="description" value={formData?.description} ></textarea>
                  </div>
                  <div className="sing-buttom mb-20">
                    <button onClick={(e)=>handleSubmit(e,formData)} type="submit" className="sing-btn">
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

export default EditBlog;
