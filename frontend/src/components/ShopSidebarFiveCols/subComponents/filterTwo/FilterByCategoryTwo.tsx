 
"use client";
import { filterCategoryData } from "@/data/category-filter-data";
import useGlobalContext from "@/hooks/use-context";
import { filterCategoryType } from "@/interFace/interFace";
import { useGetAppliancesQuery } from "@/redux/api";
import React, { useState } from "react";
const FilterByCategoryTwo = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<String>("");
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
    setFilterRange,
  } = useGlobalContext();
  const handleFilterCategory = (item: String) => {
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterSearch("");
    setFilterColor("");
    setFilterCategory(String(item));
    setSelectData("");
    setFilterRange([]);
    setActive(String(item))
    window.history.replaceState(null, String(null), window.location.pathname)

  };
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
  return (
    <>
      <div className={`filter-widget ${open ? "child-content-hidden" : ""}`}>
        <h4
          onClick={() => setOpen(!open)}
          className="filter-widget-title drop-btn"
        >
          Category
        </h4>
        <div
          className={`filter-widget-content ${open ? "content-hidden" : ""}`}
        >
          <div className="category-items">
            {uniqueCategories?.map((item,index) => (
              <button
                onClick={() => handleFilterCategory(item)}
                key={index}
                type="button"
                className={`category-item ${active === item ? "active-category": ""}`}
              >
                <div className="category-name">{item}</div>{" "}
                {/* <span className="category-items-number">{item?.total}</span> */}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterByCategoryTwo;
