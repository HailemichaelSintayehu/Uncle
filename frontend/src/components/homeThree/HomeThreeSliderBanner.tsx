"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, EffectFade } from "swiper";
import "swiper/css/bundle";
import home from "../../../public/assets/img/banner/home.png";
import shape8 from "../../../public/assets/img/slider-img/shape/shape-8.png";
import shape9 from "../../../public/assets/img/slider-img/shape/shape-9.png";
import Link from "next/link";
import Image from "next/image";
const HomeThreeSliderBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0); // State to track active slide index

  const handleSlideChange = (swiper: any) => {
    setActiveIndex(swiper.realIndex); // Update activeIndex state when slide changes
  };
  const sliderData = [
    {
      id: 1,
      bgImg: "/assets/img/banner/home.png",
      tagOne: "New Arrival",
      textColor:"#fff",
      tagTwo: "Premium Appliances for Every Budget!",
      // text: "Discover our latest selection of electronic items, thoughtfully curated to keep you current with the newest technology trends, starting from Kes 1200."
    },
    {
      id: 2,
      bgImg: "/assets/img/banner/home2.png",
      tagOne: "On Trending",
      textColor:"#000",
      tagTwo: "Haijawahi kuwa rahisi kuboresha nyumba yako!",
      // text: "Stay ahead of the curve with our latest collection of kitchen appliances. From state-of-the-art cookware to innovative gadgets, equip your kitchen with the best tools for culinary excellence."
    },
    {
      id: 3,
      bgImg: "/assets/img/banner/home3.png",
      tagOne: "Featured Product",
      textColor:"#fff",
      tagTwo: "Smart rental for urban living",
      // text: "Discover the epitome of technology with our featured electronics, designed to make a statement. Find the perfect devices that complement your lifestyle and set you apart."
    },
];


  return (
    <>
      <div  className="banner-area banner-area-3 " >
        {/* <div className="banner-shape-wrapper-2">
          <div className="banner-shape-8">
            <Image src={shape8} alt="shape-8" />
          </div>
          <div className="banner-shape-9">
            <Image src={shape9} alt="shape-9" />
          </div>
          <div className="banner-shape-10">
            <Image src={shape9} alt="shape-9" />
          </div>
          <div className="banner-shape-11">
            <Image src={shape9} alt="shape-9" />
          </div>
        </div> */}
        <div  className="slider__active">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, EffectFade]}
          effect={"fade"}
          onSlideChange={handleSlideChange}
          navigation={{
            nextEl: ".slider-button-prev",
            prevEl: ".slider-button-next",
          }}
          pagination={{
            el: ".slider2-pagination",
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
          }}
          loop={true}
        >
          {sliderData?.map((item, index) => {
            return (
              <SwiperSlide key={item.id}>
                {/* Only render content if it's the active slide */}
                {index === activeIndex && (
                  <div style={{
                    backgroundImage: `url(${item?.bgImg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100vh',
                    width: '100%',
                    padding:"0px 50px"
                  }} className="">
                    <div className="container">
                       <div className=" row align-items-end">
                      <div className="col-xxl-7 col-xl-7 col-lg-7">
                        <div className="banner-content pos-rel">
                          <span  style={{color:item?.textColor}} className="banner-subtitle">{item?.tagOne}</span>
                          <h1  style={{color:item?.textColor}} className="banner-title">
                            {item?.tagTwo}
                          </h1>
                          {/* <p style={{color:item?.textColor}} className="mb-40">
                            {item?.text}
                          </p> */}
                          <div className="banner-btn">
                            <Link
                              // style={{height:"80px", width:""}}
                              className="fill-btn"
                              href="/shop"
                            >
                              Rent Now
                            </Link>
                          </div>
                        </div>
                      </div>
                      <div className="col-xxl-5 col-xl-5 col-lg-5">
                        <div className="banner-thumb-wrapper-2 pos-rel">
                          {/* <span className="linear-shape"></span>
                          <div className="banner-bg-shape"></div> */}
                          <div className="banner-thumb-3">
                            {/* <img width={390} height={580} src={item?.bgImg} alt="banner-7" /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                   
                  </div>
                )}
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="slider-nav d-none">
          <div className="slider-button-prev">
            <i className="fal fa-long-arrow-left"></i>
          </div>
          <div className="slider-button-next">
            <i className="fal fa-long-arrow-right"></i>
          </div>
        </div>
        <div className="slider2-pagination-container">
          <div className="container">
            <div className="slider-pagination slider2-pagination"></div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default HomeThreeSliderBanner;
