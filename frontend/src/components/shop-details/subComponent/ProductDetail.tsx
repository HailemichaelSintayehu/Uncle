"use client";
import QuestionAboutProduct from "@/form/QuestionAboutProduct";
import React, { FC, useEffect, useState } from "react";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import Image from "next/image";
interface ProductDetailProps{
  item:any
}

const ProductDetail:FC<ProductDetailProps> = ({item}) => {
  const [slidesPerView, setSlidesPerView] = useState(4);

useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setSlidesPerView(1);
    } else if (window.innerWidth <= 992) {
      setSlidesPerView(2);
    } else if (window.innerWidth <= 1200) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(4);
    }
  };

  // Set initial slidesPerView
  handleResize();

  // Add event listener for window resize
  window.addEventListener('resize', handleResize);

  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="productDetail"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered "
          role="document"
        >
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  
                  {/* <div style={{display:"grid",justifyContent:"center"}}>
                    <img
                    className="active"
                    src={item}
                    alt="product-img"
                    width="700"
                    />
                  </div> */}
                  {item?.images && item.images.length > 0 &&
                <div className="product-details-nav ecomart-shop-details-nav">
                  <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ width:'96%' }}>
                    {/* {item?.productColorArray?.length &&
                    item?.productColorArray?.length > 4 ? (
                      <>
                        <div className="product-tab-slider-nav details_product_prev">
                          <div className="product-tab-slider-button-prev">
                            <i className="fal fa-long-arrow-left"></i>
                          </div>
                          <div className="product-tab-slider-button-next">
                            <i className="fal fa-long-arrow-right"></i>
                          </div>
                        </div>
                      </>
                    ) : (
                      <></>
                    )} */}

                    <div  className="product-tab-slider-nav details_product_prev">
                      <div style={{left:"-22px"}} className="product-tab-slider-button-prev">
                        <i className="fal fa-long-arrow-left"></i>
                      </div>
                      <div className="product-tab-slider-button-next">
                        <i className="fal fa-long-arrow-right"></i>
                      </div>
                    </div>

                    {/* arrow icon */}

                    {/* product angle view with multiple color */}
                    <Swiper
      loop={true}
      spaceBetween={0}
      slidesPerView={slidesPerView}
      modules={[Controller, FreeMode, Thumbs, Navigation]}
      navigation={{
        nextEl: '.product-tab-slider-button-prev',
        prevEl: '.product-tab-slider-button-next',
      }}
      watchSlidesProgress={false}
    >
      {item?.images?.map((product:any, index:number) => (
        <SwiperSlide key={index}>
          <li style={{display:"flex", justifyContent:"center"}} className="nav-item" role="presentation">
            <button
              type="button"
              data-toggle="tooltip"
              data-bs-toggle="modal"
              data-bs-target="#productDetail"
              className={`nav-link preview_img preview_img_slider`}
              role="tab"
            >
              <Image
                className="prodcut_bg"
                style={{
                  objectFit: 'cover',
                }}
                width={700}
                height={200}
                src={product}
                alt="..."
              />
            </button>
          </li>
        </SwiperSlide>
      ))}
    </Swiper>
                  </ul>
                </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
