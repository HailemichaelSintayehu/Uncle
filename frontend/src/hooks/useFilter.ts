import useGlobalContext from "./use-context";
import { useGetAppliancesQuery } from "@/redux/api";
import { products_data } from "@/data/products-data";
import { ProductsType } from "@/interFace/interFace";
import { useLocation } from "react-use";

export const useFilter = (start: number, end: number):[ProductsType[] | undefined, number | undefined] => {
  const { data:appliances } = useGetAppliancesQuery()
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchValue = searchParams.get('search');  

  const {
    filterCategory,
    filterBrand,
    filterColor,
    filterSize,
    filterRating,
    selectData,
    filterRange,
  } = useGlobalContext();
  const filteredData = appliances?.filter((item) => {
    let passesCategory = true;
    let passesBrand = true;
    let passesColor = true;
    let passesSize = true;
    let passesRating = true;
    let passesStatus = true;
    let passesRange = true;

    if (filterCategory && item.category !== filterCategory) {
      passesCategory = false;
      
    }
    if (searchValue && item.category !== searchValue ) {
      passesCategory = false;
    }
  

    if (filterBrand.length && !filterBrand.includes(item.brand)) {
      passesBrand = false;
    }

    // if (
    //   filterSize.length &&
    //   item.sizeArray &&
    //   !item.sizeArray.some((size) => filterSize.includes(size))
    // ) {
    //   passesSize = false;
    // }

    if (
      filterRating &&
      (item.rating < filterRating || item.rating > filterRating + 0.5)
    ) {
      passesRating = false;
    }

    // if (selectData && item.status !== selectData) {
    //   passesStatus = false;
    // }
    if (selectData === "Default") {
      passesStatus = true;
    }

    if (
      filterRange.length &&
      (Number(item?.M3_rental_price as number) < filterRange[0] * 1000 || Number(item.M3_rental_price as number) > filterRange[1] * 1000)
    ) {
      passesRange = false;
    }

    return (
      passesCategory &&
      passesBrand &&
      passesColor &&
      passesSize &&
      passesRating &&
      passesStatus &&
      passesRange
    );
  });

  const result =  filteredData?.slice(start,end)
  return [ result, appliances?.length ];
};
