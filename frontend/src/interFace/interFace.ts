import { StaticImageData } from "next/image";
import React from "react";
export interface AppContextType {
  scrollDirection?: string;
  setScrollDirection?: React.Dispatch<React.SetStateAction<string>> | undefined;
  toggleSideMenu: () => void;
  niceSelectData: string;
  setNiceSelectData: React.Dispatch<React.SetStateAction<string>>;
  filterType: string;
  sideMenuOpen: boolean;
  setSideMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideFilterOpen: boolean;
  setSideFilterOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideCartOpen: boolean;
  setSideCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sideWishlistOpen: boolean;
  setSideWishlistOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setFilterType: React.Dispatch<React.SetStateAction<string>>;
  filterCategory: string;
  setFilterCategory: React.Dispatch<React.SetStateAction<string>>;
  selectData: string;
  setSelectData: React.Dispatch<React.SetStateAction<string>>;
  filterSearch: string;
  setFilterSearch: React.Dispatch<React.SetStateAction<string>>;
  filterColor: string;
  setFilterColor: React.Dispatch<React.SetStateAction<string>>;
  filterBrand: string[];
  setFilterBrand: React.Dispatch<React.SetStateAction<string[]>>;
  filterSize: string[];
  setFilterSize: React.Dispatch<React.SetStateAction<string[]>>;
  dynamicId: number;
  setDynamicId: React.Dispatch<React.SetStateAction<number>>;
  totalShowingProduct: number;
  settotalShowingProduct: React.Dispatch<React.SetStateAction<number>>;
  filterRating: number;
  setFilterRating: React.Dispatch<React.SetStateAction<number>>;
  filterRange: number[];
  setFilterRange: React.Dispatch<React.SetStateAction<number[]>>;
  setModalData: any;
  modalData: any;
}

// product type

interface productAngleViewType {
  id: number;
  productImg: StaticImageData;
}

export interface ProductColor {
  color: string;
  activeImg: StaticImageData;
  angleViewProducts?: productAngleViewType[];
}

export interface ProductsType {
  id: number;
  title: string;
  description:string;
  rating: number;
  reviews?:number;
  category: string;
  brand: string;
  model:string;
  warranty:string;
  status?: string;
  discount?: number;
  price?: number;
  buy?:number;
  email:string;
  phone_number:  string;
  residential_address:  string;
  delivery_address: string;
  preferred_delivery_date:  string;
  preferred_communication_method:   string;
  refundable?:number;
  option?:string;
  productImg: string;
  images?:string[],
  oldPrice?: number;
  totalCart?: number;
  plan?:number;
  totalProduct?: number;
  size?:string,

  full_retail_price?:number,
  M3_rental_price?:number,
  M6_rental_price?:number,
  M12_rental_price?:number,
  M18_rental_price?:number,
  M24_rental_price?: number,
  M3_non_discount?:number,
  M6_non_discount?:number,
  M12_non_discount?:number,
  M18_non_discount?:number,
  M24_non_discount?:number,
  Be_Upfront_Payment_3M?:number,
  Be_Upfront_Payment_6M?:number,
  Be_Upfront_Payment_12M?:number,
  Be_Upfront_Payment_18M?:number,
  Be_Upfront_Payment_24M?:number,
  // width: number;
  // height: number;
  // depth: number;
  // capacity: number;
  features:string;
  product_description?:string
  // sku:string
}
export interface ProductsTypeId {
  id: number;
  item_name: string;
  title:string;
  totalProduct:number;
  full_retail_price: number;
  featured_image: string;
  image: string[];
  size: string;
  M3_rental_price: number;
  M6_rental_price: number;
  M12_rental_price: number;
  M18_rental_price: number;
  M24_rental_price: number;
  M3_non_discount: number;
  M6_non_discount: number;
  M12_non_discount: number;
  M18_non_discount: number;
  M24_non_discount: number;
  in_stock: number;
  rating: number;
  category: string;
  brand: string;
  description: string;
  reviews: string;
  condition: string;
  warranty: string;
  model: string;
  key_features: string;
  buy?: number;
  product_description: string;
  productImg:string;
  images?:string[],
  retail_price?:number,
  features:string;
  discount?: number;

}

// combo package type

interface groupProduct {
  productId: number;
}

export interface TgroupPackage {
  
  id: number;
  title:string;
  thumbnail: StaticImageData;
  groupProducts: groupProduct[];
}

export interface CategoryType {
  id: number;
  category: string;
  totalProduct: number;
  categoryImg: StaticImageData;
}
export interface vendorType {
  id: number;
  Items: number;
  Sells: number;
  vendor: string;
  verified:boolean;
  vendorStatus?: string;
  description: string;
  vendorId: string;
  averageRating: number;
  totalRating: number;
  vendorImg: StaticImageData;
  vendorBanner: StaticImageData;
}
//counter type
export interface CounterType {
  id: number;
  counterNum: number;
  text: string;
  icon?: string;
}

// menu-data type
export interface MenuType {
  id: number;
  hasDropdown?: boolean;
  megaMenu?: boolean;
  active?: boolean;
  title: string;
  pluseIncon?: boolean;
  link: string;
  submenus?: any[];
  pages?: boolean;
}

//product select option-type
export type NiceSelcetType = {
  id: number;
  option: string;
};
// id type
export interface idType {
  id: number;
}
export interface CountryType {
  id: number;
  option: string;
}

export interface BlogType {
  id: number;
  blogImg: StaticImageData;
  category: string;
  date: string;
  title: string;
}

// faq data type

export interface faqDataType {
  id: number;
  title: string;
  details: string;
  tab: string;
  divpen: string;
}

export interface filterCategoryType {
  id: number;
  category: string;
  total: number;

}
export interface colorFilterType {
  id: number;
  productColor: string;
}
// comment type

export interface CommentType {
  id: string;
  date: string;
  comment: string;
  email: string;
  name: string;
  postId: string;
  img: string | StaticImageData;
  title: string;
}

export interface UserReviewType {
  id: string;
  productName: string;
  review: string;
  name: string;
  email: string;
  date: string;
  productId: string;
  categoryName: string;
  retting: number;
  img?: string | StaticImageData;
}
export interface Order {
  id: string;
  stripe_subscription_item_id: string;
  stripe_subscription_id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  plan: number;
  option: string;
  email: string;
  phone_number: string;
  residential_address: string;
  delivery_address: string;
  preferred_delivery_date: string;
  preferred_communication_method: string;
  first_name: string;
  last_name: string;
}