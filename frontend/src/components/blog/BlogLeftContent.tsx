"use client";
import blog_data from "@/data/blog-data";
import { useGetBlogsQuery } from "@/redux/api";
import { Routes } from "@/routes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EditBlog from "./EditBlog";
import DeleteBlogPost from "./DeleteBlogPost";

const BlogLeftContent = () => {
  const {data:blogPosts,isLoading}=useGetBlogsQuery();
  const [blog,setBlog]=useState(null);
  console.log(blog,"blogPosts")
 // utils/formatDate.ts
 useEffect(() => {
  setBlog(blog)
 },[blog])

function formatDate(timestampStr:string):string {
  const timestamp = new Date(timestampStr);
  const options = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  const formattedDate = timestamp.toLocaleDateString("en-US", options as any);

  return formattedDate;
}
  
  
  return (
    <>
    <div className="col-xl-8 col-lg-12">
      <button  
      type="button"
      data-toggle="tooltip"
      data-bs-toggle="modal"
      data-bs-target="#createBlog"  
      className="fill-btn mb-5">Add Blog</button>
      </div>
      <div className="col-xl-8 col-lg-12">
        {isLoading===false?
        <div className="blog-main-wrapper mb-30">
          <div className="row">
            {blogPosts?.blogs?.map((item:any) => (
              <div key={item?.id} className="col-xl-12 col-lg-6 col-md-12">
                <div className="blog-wrapper position-relative mb-30">
                  <div className="blog-thumb ">
                    {/* <Link href={`${Routes.BLOG}/${item?.id}`}> */}
                      <img
                        style={{ width: "100%", height: "auto" }}
                        src={item?.blogImg}
                        alt="blog-img"
                      />
                    {/* </Link> */}
                  </div>
                  <div className="blog-content-wrapper">
                    <div className="blog-meta">
                      <div className="blog-date">
                        <i className="flaticon-calendar"></i>
                        <span> {formatDate(item?.createdAt)} </span>
                      </div>
                      <div className="blog-user">
                        <i className="flaticon-avatar"></i>
                        <span>Mark Hanry</span>
                      </div>
                    </div>
                    <div className="blog-content ">
                      <div className="d-flex align-items-baseline gap-5">

                      <Link 
                         
                        className="" href={`/blogs/${item?.id}`}>
                        <h3> {item?.title} </h3>
                      

                      </Link>
                      <i  data-toggle="tooltip"
                        data-bs-toggle="modal"
                        data-bs-target="#editBlog"  onClick={()=>setBlog(item)} className="fa fa-pencil" aria-hidden="true"></i>
                      <i  
                      data-toggle="tooltip"
                        data-bs-toggle="modal"
                        data-bs-target="#removeBlog"  color="red" onClick={()=>setBlog(item)} className="fa fa-trash" aria-hidden="true"></i>

                      </div>
                      <p>
                        {item?.description?.length>=250?item?.description?.slice(0,250)+"...":item?.description}
                      </p>
                      <Link className="blog-btn" href={`/blogs/${item?.id}`}>
                        Read more
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="common-pagination mt-30 mb-20">
            <ul>
              <li>
                <Link href="#">
                  <i className="fal fa-angle-left"></i>
                </Link>
              </li>
              <li className="active">
                <Link href="#">
                  <span>01</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>02</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <i className="fal fa-angle-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>:<div className="d-flex justify-content-center"> <i style={{fontSize:"100px"}} className="fa fa-spinner fa-spin"></i></div> }
        <EditBlog blog={blog}/>
        <DeleteBlogPost blog={blog}/>
      </div>
    </>
  );
};

export default BlogLeftContent;
