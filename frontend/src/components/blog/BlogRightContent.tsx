"use client";
import { useGetAppliancesQuery, useGetBlogsQuery } from "@/redux/api";
import SearchIcon from "@/svg/SearchIcon";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const BlogRightContent = () => {
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
  const {data:blogPosts}=useGetBlogsQuery();
  console.log(blogPosts,"blogPosts")
 // utils/formatDate.ts


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
const [searchQuery, setSearchQuery] = useState('');

const filteredBlogPosts = blogPosts?.blogs?.filter((post:any) =>
  post.title.toLowerCase().includes(searchQuery.toLowerCase())
);

const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(event.target.value);
};
  return (
    <>
      <div className="col-xl-4 col-lg-8 col-md-8">
        <div className="sidebar-widget-wrapper">
          <div className="sidebar__search p-relative mb-30">
            <form action="#">
              <input type="text" placeholder="Search for blogs..."  value={searchQuery}
        onChange={handleSearchChange}/>
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
              {filteredBlogPosts?.length?
              <div className="rc__post-wrapper">
                {filteredBlogPosts?.slice(0, 3)?.map((item:any) => (
                  <div key={item?.id} className="rc__post d-flex align-items-center">
                    <div className="rc__thumb mr-20">
                      <Link href={`/blogs/${item?.id}`}>
                        <img src={item?.blogImg} alt="img" />
                      </Link>
                    </div>
                    <div className="rc__content">
                      <div className="rc__meta">
                        <span> {formatDate(item?.createdAt)} </span>
                      </div>
                      <h6 className="rc__title">
                        <Link href={`/blogs/${item?.id}`}>
                           {item?.title}
                        </Link>
                      </h6>
                    </div>
                  </div>
                ))}
              </div>:<div className="d-grid justify-content-center">  <SearchIcon/> <h5 className="sidebar__widget-title mt-2 mb-2">Post not found</h5></div>}
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
