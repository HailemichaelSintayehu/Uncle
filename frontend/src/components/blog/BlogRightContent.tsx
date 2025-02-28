"use client";
import blog_data from "@/data/blog-data";
import { category_data } from "@/data/category-data";
import useGlobalContext from "@/hooks/use-context";
import { useFilter } from "@/hooks/useFilter";
import { useGetAppliancesQuery } from "@/redux/api";
import SearchIcon from "@/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogRightContent = () => {
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
 
  return (
    <>
      <div className="col-xl-4 col-lg-8 col-md-8">
        <div className="sidebar-widget-wrapper">
          <div className="sidebar__search p-relative mb-30">
            <form action="#">
              <input type="text" placeholder="Search for blogs..." />
              <button type="submit">
                 <SearchIcon/>
              </button>
            </form>
          </div>
          <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
              <h4 className="sidebar__widget-title">Recent posts</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="rc__post-wrapper">
                {blog_data?.slice(0, 3)?.map((item) => (
                  <div key={item?.id} className="rc__post d-flex align-items-center">
                    <div className="rc__thumb mr-20">
                      <Link href={`/blog-details/${item?.id}`}>
                        <Image src={item?.blogImg} alt="img" />
                      </Link>
                    </div>
                    <div className="rc__content">
                      <div className="rc__meta">
                        <span> {item?.date} </span>
                      </div>
                      <h6 className="rc__title">
                        <Link href={`/blog-details/${item?.id}`}>
                           {item?.title}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
              <h4 className="sidebar__widget-title">Category</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="sidebar__category">
                <ul>
                  {
                    uniqueCategories.map((category, i) => (
                      <li key={i}>
          <a  href={`/shop?search=${category}`}>
                {category}
              </a>                      
          </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="sidebar__widget mb-30">
            <div className="sidebar__widget-head mb-35">
              <h4 className="sidebar__widget-title">Tags</h4>
            </div>
            <div className="sidebar__widget-content">
              <div className="sidebar__tag ">
                <Link href="/blog">Fashion</Link>
                <Link href="/blog">Hats</Link>
                <Link href="/blog">Bags</Link>
                <Link href="/blog">Snacker</Link>
                <Link href="/blog">Denim</Link>
                <Link href="/blog">Sunglasses</Link>
                <Link href="/blog">Vagabond</Link>
                <Link href="/blog">Tips</Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogRightContent;
