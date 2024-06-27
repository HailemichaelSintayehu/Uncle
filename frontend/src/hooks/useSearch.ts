import { products_data } from "@/data/products-data";
import useGlobalContext from "./use-context";
import { useGetAppliancesQuery } from "@/redux/api";


export const useSearch = () => {
  const { data:appliances } = useGetAppliancesQuery()
  const { filterSearch,settotalShowingProduct } = useGlobalContext();
  if (!filterSearch || filterSearch.trim() === '') {
    return [];
  }
  const filterBySearch = appliances?.filter(
    (item) =>
      item.title.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.category.toLowerCase().includes(filterSearch.toLowerCase()) ||
      item.brand.toLowerCase().includes(filterSearch.toLowerCase())
  );
  // settotalShowingProduct(filterBySearch?.length)
  return filterBySearch;
};
// export const useSearchForVendor = (vendorId:string) => {
//   const { filterSearch,settotalShowingProduct } = useGlobalContext();
//   if (!filterSearch || filterSearch.trim() === '') {
//     return [];
//   }

// //  const filterVendorData = products_data?.filter((item)=> item?.vendorId === vendorId)
//   // const filterBySearch = appliances?.filter(
//   //   (item) =>
//   //     item.title.toLowerCase().includes(filterSearch.toLowerCase()) ||
//   //     item.category.toLowerCase().includes(filterSearch.toLowerCase()) ||
//   //     item.brand.toLowerCase().includes(filterSearch.toLowerCase())
//   // );
//   // settotalShowingProduct(filterBySearch?.length)
//   return filterBySearch;
// };

  