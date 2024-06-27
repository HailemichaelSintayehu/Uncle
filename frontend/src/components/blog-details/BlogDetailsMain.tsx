"use client"
import React from "react";
import blog_data from "@/data/blog-data";
import { BlogType, idType } from "@/interFace/interFace";
import BreadCrumb from "../SharedComponents/BreadCrumb";
import BlogDetailsArea from "./BlogDetailsArea";
import SidebarMain from "../SharedComponents/Sidebars/SidebarMain";
import { useShowBlogsQuery } from "@/redux/api";

const BlogDetailsMain = ({ id }: idType) => {
  const {data:item,isLoading}=useShowBlogsQuery(id as any);
   console.log(item,"()")
  return (
    <>
      <BreadCrumb title={item?.blogs?.title} />
      <BlogDetailsArea item={item?.blogs}/>
      <SidebarMain/>
    </>
  );
};

export default BlogDetailsMain;
