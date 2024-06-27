import React from "react";
import BlogLeftContent from "./BlogLeftContent";
import BlogRightContent from "./BlogRightContent";
import CreateBlog from "./CreateBlog";

const BlogArea = () => {
  
  return (
    <>
      <div className="blog-area pt-120 pb-90">
        <div className="container container-small">
          <div className="row">
            <BlogLeftContent/>
            <BlogRightContent />
            <CreateBlog />
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArea;
