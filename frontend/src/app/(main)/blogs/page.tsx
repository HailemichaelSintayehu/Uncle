import BlogMain from "@/components/blog/BlogMain";
import MetaData from "@/hooks/useMetaData";
import Wrapper from "@/layout/DefaultWrapper";
import { useGetAppliancesQuery } from "@/redux/api";
import React from "react";

const Blogpage = () => {
  
  return (
    <>
      <MetaData pageTitle="Blog">
          <main>
            <BlogMain />
          </main>
      </MetaData>
    </>
  );
};

export default Blogpage;
