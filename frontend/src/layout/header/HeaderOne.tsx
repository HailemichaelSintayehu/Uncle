import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import logoImg from "../../../public/assets/img/logo/uncle-logo.png";
import Image from "next/image";
import Menu from "./components/Menu";
import useGlobalContext from "@/hooks/use-context";
import {
  useTotalProductCount,
  useTotalProductWishlistCount,
  useUniqueCompareCount,
} from "@/hooks/useCartQuantity";
import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { currency_data, language_data } from "@/data/nice-select-data";
import SearchHeaderOne from "./components/SearchHeaderOne";
import { useRouter } from "next/navigation";
import SupportIcon from "@/svg/SupportIcon";
import SupportIconWithHeadphone from "@/svg/SupportIconWithHeadphone";
import { Routes } from "@/routes";
import { filterCategoryData } from "@/data/category-filter-data";
import { useAppSelector } from "@/redux/hooks";
import { filterCategoryType } from "@/interFace/interFace";
import { useGetAppliancesQuery } from "@/redux/api";
import { useLocation } from "react-use";
const HeaderOne = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  
  
  const [active, setActive] = useState<String>("");
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
  const searchRef = useRef(null);
  const {
    setSideCartOpen,
    sideCartOpen,
    sideWishlistOpen,
    setSideWishlistOpen,
    toggleSideMenu,
    scrollDirection,
  } = useGlobalContext();
  const [openCategory, setOpenCategory] = useState<boolean>(false);
  const totalCart = useTotalProductCount();
 
  const session = useAppSelector(state => state.auth.session)
  const totatWishlist = useTotalProductWishlistCount();
  const totatCompare = useUniqueCompareCount();
  const selectHandler = () => {};
  const handleCompare = () => {
    router.push("/compare");
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const currentRef = searchRef.current as HTMLElement | null;
      if (
        currentRef &&
        currentRef.contains &&
        !currentRef.contains(event.target as Node)
      ) {
        setOpenCategory(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
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
  return (
    <>
      <header className="header2">
        <div
          className="header-note"
          style={{ display: open ? "block" : "none" }}
        >
          <p>
            {/* Get your entire order with an extra <span>25%</span> OFF for this
            festival */}
           65% off on everything + First month free (from 12 months) - One Week Only
          </p>
          <span onClick={() => setOpen(!open)} className="note-close-btn">
            <i className="flaticon-cancel"></i>
          </span>
        </div>
        {/* <div className="header-top d-none d-md-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-link">
                  <Link href="/about" className="text-btn">
                    About Us
                  </Link>
                  <Link href="/profile" className="text-btn">
                    My account
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-right">
                  <Link href="/track-order" className="text-btn">
                    Track Order
                  </Link>
                  <NiceSelectTwo
                    options={language_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="lan-select"
                    className="language-select border-left"
                  />
                  <NiceSelectTwo
                    options={currency_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="currency-select"
                    className="currency-select border-left"
                  />
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <div
          id="header-sticky"
          className={`header-main header-main1 ${
            scrollDirection === "down" ? "sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-12 col-lg-12">
                <div className="header-main-content-wrapper">
                  <div className="header-main-left header-main-left-header1">
                    <div className="header-logo header1-logo">
                      <Link href="/" className="logo-bl">
                        <Image src={logoImg} alt="logo-img" width={100} height={25} />
                      </Link>
                    </div>
                    <div className="main-menu main-menu2 d-lg-block">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                <div className="header-top-right">
                  {session ? 
                    <Link href={Routes.PROFILE} className="text-btn">
                        <i className="flaticon-avatar"></i> Profile
                    </Link>:
                  <>
                    <Link href={Routes.LOGIN} className="text-btn">
                      <i className="flaticon-avatar"></i>Sign in
                    </Link>
                    <Link href={Routes.REGISTER} className="text-btn">
                      <i className="flaticon-avatar"></i>Register
                    </Link>
                  </>
                  }

                  {/* <NiceSelectTwo
                    options={language_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="lan-select"
                    className="language-select border-left"
                  />
                  <NiceSelectTwo
                    options={currency_data}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    name="currency-select"
                    className="currency-select border-left"
                  /> */}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="header-bottom  d-lg-block">
          <div className="container">
            <div className="header-bottom-inner">
              <div ref={searchRef} className="category-menu pos-rel">
                <div
                  onClick={() => setOpenCategory(!openCategory)}
                  className={`category-click ${
                    openCategory ? "items-open" : ""
                  }`}
                >
                  <div className="bar-icon bar-icon-2">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <span>Shop</span>
                </div>
                <div
                  className="category-items"
                  style={{ display: openCategory ? "block" : "none" }}
                >
                  {
                    uniqueCategories.map((items, index) => (
                      <Link key={index} href={`/shop`}  className={`category-item ${active == items ? "active-category": ""}`}
                      >
                        <div  onClick={() => handleFilterCategory(items)} className="category-name">{items}</div>
                       </Link>
                    ))
                  }
                </div>
              </div>
              <SearchHeaderOne />
              <div className="action-list  d-xl-flex action-list-header2 pl-20">
                      <div className="action-item action-item-cart">
                        <button
                          type="button"
                          onClick={() => setSideCartOpen(!sideCartOpen)}
                          className="view-cart-button"
                        >
                          <i className="fal fa-shopping-bag"></i>
                          <span className="action-item-number">
                            {totalCart}
                          </span>
                        </button>
                      </div>
                      {/* <div className="action-item action-item-wishlist">
                        <button
                          onClick={() => setSideWishlistOpen(!sideWishlistOpen)}
                          type="button"
                          className="view-wishlist-button"
                        >
                          <i className="fal fa-heart"></i>
                          <span className="action-item-number">
                            {totatWishlist}
                          </span>
                        </button>
                      </div> */}
                      {/* copmare */}
                      {/* <div className="action-item action-item-wishlist">
                        <button
                          onClick={handleCompare}
                          type="button"
                          className="view-wishlist-button"
                        >
                          <i className="fal fa-exchange"></i>
                          <span className="action-item-number">
                            {totatCompare}
                          </span>
                        </button>
                      </div> */}
                      {/* copmare */}
                    </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderOne;
