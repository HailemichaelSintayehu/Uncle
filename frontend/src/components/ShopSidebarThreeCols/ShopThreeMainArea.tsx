"use client"
import React, { useState } from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import SidebarFilterMain from "../ShopSidebarFiveCols/subComponents/SidebarFilterMain";
import { useFilter } from "@/hooks/useFilter";
import { useSearch } from "@/hooks/useSearch";
import FilterHeaderCommon from "../SharedComponents/Sidebars/FilterHeaderCommon";
import SidebarFilterMainTwo from "../ShopSidebarFiveCols/subComponents/filterTwo/SidebarFilterMainTwo";
import Pagination from "../SharedComponents/Pagination";
const ShopThreeMainArea = () => {
  const [ page, setPage ] = useState(0)
  const [filterData, total] = useFilter(page, page + 12);
  const searchData = useSearch()
  const mapData = searchData?.length ? searchData :  filterData
  
  return (
    <>
      <div className="shop-main-area pt-120 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <SidebarFilterMainTwo />
            </div>
            <div className="col-xl-9 col-lg-8 col-md-12">
              <div className="shop-main-wrapper mb-60">
              {/* <FilterHeaderCommon /> */}
                <div className="products-wrapper products-3-column">
                  {mapData?.map((item) => (
                    <SingleProductCard key={item.id} item={item} />
                  ))}
                </div>
                <Pagination total={total} page={page} setPage={(a) => setPage(a)}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopThreeMainArea;
