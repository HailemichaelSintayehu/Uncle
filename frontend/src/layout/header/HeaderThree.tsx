"use client";
import React, { useState } from "react";
import Menu from "./components/Menu";
import logo from "../../../public/assets/img/logo/logo-bl-tr.png";
import Image from "next/image";
import Link from "next/link";
import useGlobalContext from "@/hooks/use-context";
import {
  useTotalProductCount,
  useTotalProductWishlistCount,
  useUniqueCompareCount,
} from "@/hooks/useCartQuantity";
import NiceSelectTwo from "@/components/common/NiceSelectTwo";
import { currency_data, language_data } from "@/data/nice-select-data";
import SearchComponent from "./components/SearchComponent";
import { useRouter } from "next/navigation";
import SearchHeaderTwo from "./components/SearchHeaderTwo";
import { Routes } from "@/routes";
const HeaderThree = () => {
  const [open, setOpen] = useState(true);
  const router = useRouter() 
  const {
    setSideCartOpen,
    sideCartOpen,
    sideWishlistOpen,
    setSideWishlistOpen,
    scrollDirection,
    toggleSideMenu,
  } = useGlobalContext();

  const totalCart = useTotalProductCount();
  const totatWishlist = useTotalProductWishlistCount();
  const totatCompare = useUniqueCompareCount();
  const selectHandler = () => {};

  const handleCompare = () =>{
    router.push("/compare")
  }
  return (
    <>
      <header className="header4">
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
        <div className="header-top d-none d-md-block">
          <div className="container header-container">
            <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-link">
                  <Link href={Routes.ABOUT} className="text-btn">
                    About Us
                  </Link>
                  <Link href={Routes.REGISTER}className="text-btn">
                    Register
                  </Link> 
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="header-top-right">
                  <Link href={Routes.LOGIN} className="text-btn">
                    <i className="flaticon-avatar"></i>Sign in
                  </Link>
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
                        <Image src={logo} alt="logo-img" />
                      </Link>
                    </div>
                    <div className="main-menu main-menu4 d-none d-lg-block">
                      <nav id="mobile-menu">
                        <Menu />
                      </nav>
                    </div>
                  </div>
                  <div className="header-main-right header-main-right-header1">
                    <SearchComponent />
                    <div className="header-main-right header-main-right-header1">
                    <div className="action-list d-none d-xl-flex action-list-header2">
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
                      <div className="user-btn">
                        <Link href={Routes.PROFILE}>
                          <div className="user-icon">
                            <i className="flaticon-avatar"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                    <div className="action-list d-xl-none d-md-flex action-list-header4">
                      <div
                        onClick={() => setSideCartOpen(!sideCartOpen)}
                        className="action-item action-item-cart"
                      >
                        <button type="button" className="view-cart-button">
                          <i className="fal fa-shopping-bag"></i>
                          <span className="action-item-number">
                            {totalCart}
                          </span>
                        </button>
                      </div>
                      <div
                        onClick={() => setSideWishlistOpen(!sideWishlistOpen)}
                        className="action-item action-item-wishlist"
                      >
                        <button type="button" className="view-wishlist-button">
                          <i className="fal fa-heart"></i>
                          <span className="action-item-number">
                            {totatWishlist}
                          </span>
                        </button>
                      </div>
                      <div className="action-item action-item-wishlist action-item-compare">
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
                      </div> 
                    </div>
                    <div className="menu-bar ecomart-menu-bar d-xl-none ml-20">
                      <button
                        className="side-toggle"
                        onClick={toggleSideMenu}
                        type="button"
                      >
                        <div className="bar-icon">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderThree;
