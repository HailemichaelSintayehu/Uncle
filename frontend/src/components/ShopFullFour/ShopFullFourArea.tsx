"use client";
import { useState } from "react";
import SingleProductCard from "../SharedComponents/SingleProductCard";
import FilterHeader from "../SharedComponents/FilterHeader";
import { useFilter } from "@/hooks/useFilter";
import { useSearch } from "@/hooks/useSearch";
import Pagination from "../SharedComponents/Pagination";

const ShopFullFourArea = () => {
  const [ page, setPage ] = useState(0)
  const [filterData, total] = useFilter(page, page + 20);
  const searchData = useSearch();
  const mapData = searchData?.length ? searchData : filterData;
  return (
    <>
      <div className="shop-main-area pt-120 pb-10">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="shop-main-wrapper mb-60">
                {/* filter Header */}
                <FilterHeader />

                <div className="products-wrapper products-full-4-column">
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

export default ShopFullFourArea;
