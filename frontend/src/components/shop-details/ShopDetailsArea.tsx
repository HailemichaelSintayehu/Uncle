"use client";
import { products_data } from "@/data/products-data";
import { ProductColor, ProductsType, idType } from "@/interFace/interFace";
import Image, { StaticImageData } from "next/image";
import ReactImageMagnify from "react-image-magnify";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import reviewOne from "../../../public/assets/img/testimonial/course-reviews-1.png";
import reviewTwo from "../../../public/assets/img/testimonial/course-reviews-2.png";
import reviewThree from "../../../public/assets/img/testimonial/course-reviews-3.png";
import { cart_product, decrease_quantity } from "@/redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { FreeMode, Thumbs, Controller, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import ProductInfo from "./ProductInfo";
import GetRatting from "@/hooks/GetRatting";
import ModalVideo from "react-modal-video";
import TimerWrapper from "@/utils/TimerWrapper";
import { getColorClass } from "@/hooks/condition-class";
import ReviewForm from "@/form/ReviewForm";
import { useGetApplianceByIdQuery } from "@/redux/api";
import preloaderIMg from "../../../public/assets/img/logo/preloader.svg"
import ProductDetail from "./subComponent/ProductDetail";
const ShopDetailsArea = ({ id }: idType) => {
  const { data:item, isLoading } = useGetApplianceByIdQuery(id)


  const [isOpen, setIsOpen] = useState(false);
  const openVideoModal = () => setIsOpen(!isOpen);
  const dispatch = useDispatch();
  // const item = products_data?.find((itm) => itm.id == id) as ProductsType;
  const [sizeNumber, setSizeNumber] = useState<number>(0);
  // const [size, setSize] = useState<string>(item?.sizeArray?.[0] as string);
  // normal img selection
  const [productImg, setProductImg] = useState<StaticImageData>();
  // select img for show on cart
  const [cartProductImg, setcartProductImg] = useState<StaticImageData>();
  const [colorName, setColorName] = useState<string>("");
  const [activeBorder, setactiveBorder] = useState(0);
  const [activeColorBorder, setactiveColorBorder] = useState(4);
  const [startSlice, setstartSlice] = useState(0);
  const [endSlice, setendSlice] = useState(1);
  const [plan, setPlan] = useState(4)
  const [product,setProduct]=useState(false)
  const handleImg = (props: any, index: number) => {
    setProductImg(props);
    setactiveBorder(index);
    setProduct(true)
  };
  const cartProducts = useSelector(
      (state: RootState) => state.cart.cartProducts
  );
  
  const quantity = cartProducts.find((itm) => itm?.option === "rental" );
  const quantityBuy = cartProducts.find((itm) => itm?.option === "buy" );
  const quantityOne = cartProducts.find((itm) => itm?.option === "Pay Upfront" );
  const totalCart = quantity?.totalCart ? quantity?.totalCart : 1;
  const totalCartBuy = quantityBuy?.totalCart ? quantityBuy?.totalCart : 1;
  const totalCartOne = quantityOne?.totalCart ? quantityOne?.totalCart : 1;

  // const handleActiveSize = (itm: number, id: number) => {
  //   setSizeNumber(id);
  //   // setSize(itm);
  // };
  const plans = [3, 6, 12, 18, 24]
  const price = plan === 0 ? item?.M3_rental_price: plan === 1 ? item?.M6_rental_price : plan === 2? item?.M12_rental_price : plan === 3? item?.M18_rental_price : item?.M24_rental_price
  const non_discount_price = plan === 0 ? item?.M3_non_discount: plan === 1 ? item?.M6_non_discount : plan === 2? item?.M12_non_discount : plan === 3? item?.M18_non_discount : item?.M24_non_discount

  const handleAddToCart = (item: ProductsType) => {
    const newCardProduct = { ...item, option:"rental", plan:plans[plan], price: Number(price as number), refundable:Number(price as number)*2 };
    // newCardProduct.sizeArray = [size];
    // newCardProduct.productImg = cartProductImg
    //   ? cartProductImg
    //   : item?.productImg;

    // newCardProduct.primaryColor = colorName ? colorName : item?.primaryColor;
    dispatch(cart_product(newCardProduct));
  };
  const handleAddToCartBuyOption = (item: ProductsType) => {
    const newCardProduct = { ...item, option:"buy", plan:plans[plan], price: Number(item.buy as any),refundable:0 };
    dispatch(cart_product(newCardProduct));
  };
  let oneTimePrice = 0;
  const priceValue = Number(price as any);
  if (plan < 2) {
  oneTimePrice = (plans[plan] * priceValue) - (plans[plan]*priceValue * 0.1);
  } else {
  oneTimePrice = ((plans[plan] - 1) * priceValue) - (plans[plan]*priceValue * 0.1);
  }
  const handleAddOneTimePayment = (item: ProductsType) => {
    let amount = 0;
    let ref = 0;
  
    switch (item?.plan) {
      case 3:
        amount = item?.M3_rental_price as number;
        break;
      case 6:
        amount = item?.M6_rental_price as number;
        break;
      case 12:
        amount = item?.M12_rental_price as number;
        break;
      case 18:
        amount = item?.M18_rental_price as number;
        break;
      default:
        amount = item?.M24_rental_price as number;
        break; // Ensure you have a break statement in the default case
    }
  
    // Calculate the refundable amount
    ref = amount * 2;
   
    const newCardProduct = { ...item, option:"Pay Upfront", plan:plans[plan], price: oneTimePrice ,refundable:ref  };

    dispatch(cart_product(newCardProduct));
  };
  const handlecolorMainImg = ( index: number) => {
    // setColorName(colorItems?.color);
    // setProductImg(colorItems?.activeImg);
    // setcartProductImg(colorItems?.activeImg);
    setstartSlice(index);
    setPlan(index);
    setendSlice(index + 1);
    setactiveBorder(0);
    setactiveColorBorder(index);
  };
  const [buyOption,setBuyOption]=useState(false);
  const handleChangeBuy=()=>{
    setBuyOption(!buyOption)
    setOnetime(false)
  }
  const [oneTime,setOnetime]=useState(false);
  const handleChangeOnTime=()=>{
    setOnetime(!oneTime)
    setBuyOption(false)
  }

  const [slidesPerView, setSlidesPerView] = useState(4);
  // const [activeColorBorder, setActiveColorBorder] = useState(null);

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
  const images=item?.images?.concat(item?.productImg)

  const features=item?.features.split(" - ");
 

  return (
    <>
      <section className="shop-details-area pt-120 pb-90">
        <div className="container container-small">
          {
            isLoading ?(
              <div className="loading-icon text-center d-flex flex-column align-items-center justify-content-center">
                <Image
                  className="loading-logo"
                  src={preloaderIMg}
                  alt="img"
                />
              </div>
            ):(
              <>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="product-details-tab-wrapper mb-30">
                      <div className="product-details-tab">
                        <div className="tab-content" id="productDetailsTab">
                          {(
                            <>
                              <div
                                className="tab-pane fade active prodcut_bg show"
                                id="pro-1"
                                role="tabpanel"
                                aria-labelledby="pro-1-tab"
                              >
                                <div className="ecomart-img-wrap">
                                  <Image
                                    className="active"
                                    src={item?.productImg || ''}
                                    alt="product-img"
                                    fill
                                  />
                                </div>
                                <div className="ecomart-zoom-img-wrapper">
                                  <div className="text-center">
                                    <div className="ecomart-magnify-img-wrap">
                                    <Swiper
                            modules={[Navigation]}
                               navigation={{
                                nextEl: '.product-tab-slider-button-prev',
                                prevEl: '.product-tab-slider-button-next',
                              }}
                              loop={true}
                              >
                                {images?.map((product, index) => (
                                  <SwiperSlide key={index}>
                                    <li  className="" role="presentation">
                                    
                                    <ReactImageMagnify
                                    smallImage={{
                                      alt: "Wristwatch by Ted Baker London",
                                      isFluidWidth: false,
                                      src: product || '',
                                      width:580,
                                      height:650
                                    }}
                                    largeImage={{
                                      src: product || '',
                                      width: 1200,
                                      height: 1800,
                                    }}
                                    lensStyle={{
                                      backgroundColor: "rgba(0, 0, 0, 0.434)",
                                    }}
                                      />
                                   
                                    </li>
                                  </SwiperSlide>
                                ))}
                                   </Swiper>
                                   <div className="product-tab-slider-nav details_product_prev">
                                  <div style={{top:"50%",left:"0px"}} className="product-tab-slider-button-prev">
                                    <i className="fal fa-long-arrow-left"></i>
                                  </div>
                                  <div  style={{top:"50%",right:"30px"}} className="product-tab-slider-button-next">
                                    <i className="fal fa-long-arrow-right"></i>
                                  </div>
                                </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="d-flex flex-column product-side-info mb-30" style={{ height:'100%' }}> 
                      <h4 className="product-name mb-10">{item?.title}</h4>
                      <div className="d-flex gap-3 align-items-center">
                      <span style={{display:"flex", gap:"10px"}} className="product-price mr-1 mb-2">KES {Number(price as number)?.toLocaleString()}/Mon
                      </span>
                      <div className="d-grid">
                         <span style={{display:"flex", gap:"10px", fontSize:"16px",textDecoration:"line-through",color:"#3333339c "}} className="product-price mr-1 ">KES {Number(non_discount_price as any)?.toLocaleString()}/Mon
                      </span>
                      <span style={{display:"flex", gap:"10px",fontSize:"16px",color:"#f7d02c"}} className="product-price mr-1 mb-2">Save KES {(Number( non_discount_price as number) - Number(price as number))?.toLocaleString()}   
                      </span>
                      </div>
                     
                       </div>
                      {/* {item?.buy?
                      <>
                      <span style={{fontWeight:"normal",display:"flex", gap:"10px"}} className="product-price mr-1">To Buy KES {Number(item?.buy as any)?.toLocaleString()} 
                      <button
                              className="fill-btn ml-3 "
                              style={{ height: "34px", width: "fit-content",lineHeight:"0px", padding:"0px 10px"}}
                              onClick={() => handleAddToCartBuyOption(item)}
                            >
                              Buy
                            </button>
                            </span>
                      </>:""
                      } */}
                      {/* {item?.oldPrice ? (
                        <>
                          <span className="price-old">£{item?.oldPrice}.00</span>{" "}
                          <span className="save_message">
                            You Save ${item?.oldPrice - item?.price} ({item?.discount}
                            %)
                          </span>
                        </>
                      ) : (
                        <></>
                      )} */}

                      <div className="product-ratting">
                        <ul>
                          <GetRatting averageRating={item?.rating as number} /> {item?.rating} Ratings 
                          {/*   | {item?.reviews} Reviews */}
                        </ul>
                      </div>

                      <div className="prodcut_category_brand mt-30">
                        <ul>
                          <li>
                            {" "}
                            Brand:{" "}
                            <span className="text-success">{item?.brand},</span>{" "}
                            Category:{" "}
                            <span className="text-success">{item?.category}</span>{" "}
                          </li>
                        </ul>
                      </div>

                      {/* {item?.discount ? (
                        <>
                          <div className="offer_coutdown">
                            <div className="mr-10">
                              <span className="text-bold">Ends In : </span>
                            </div>

                            <TimerWrapper />
                          </div>
                        </>
                      ) : (
                        <></>
                      )} */}
                      {/* <p className="mb-30">
                        Matent maecenas nec massa viverra aci ute litora aliquam
                        habitant proin commodo bibendum rutru habitant est magnis
                        quisque aliquet congue vesti bulum suscipi erose tellus odio
                        elite purus feugiat prim libero senes nisie gravia
                      </p> */}
                      {item?.totalProduct && item?.totalProduct > 0 ? (
                        <>
                          {/* <div className="available-sizes">
                            <span>Select Sizes : </span>
                            <div className="product-available-sizes">
                              {item?.sizeArray?.map((itm, index) => (
                                <button
                                  onClick={() => handleActiveSize(itm, index)}
                                  className={
                                    sizeNumber === index ? "active_size" : ""
                                  }
                                  type="button"
                                  key={index}
                                >
                                  {itm}
                                </button>
                              ))}
                            </div>
                          </div>

                          {item?.productColor === true ? (
                            <>
                              <div className="d-flex flex-wrap align-items-center mb-30">
                                <div className="mr-5">
                                  <span>Select Colors :</span>
                                </div>
                                <div>
                                  <ul className="product-color-nav">
                                    {item?.productColorArray?.map(
                                      (colorItems, index) => {
                                        const dynamicColor = getColorClass(
                                          colorItems.color
                                        );
                                        return (
                                          <li title={colorItems.color}
                                            onClick={() =>
                                              handlecolorMainImg(colorItems, index)
                                            }
                                            key={index}
                                            className={`${dynamicColor} ${
                                              activeColorBorder === index
                                                ? "active"
                                                : ""
                                            }`}
                                          >
                                            <Image
                                              src={colorItems.activeImg}
                                              alt="img"
                                            />
                                          </li>
                                        
                                        );
                                      }
                                    )}
                                  </ul>
                                </div>
                              </div>
                            </>
                          ) : (
                            <></>
                          )} */}
                         
                          <>
                          <div className="product-price" style={{  fontWeight: 'bold', fontSize: '12px', }}>Select your minimual rental period</div>
                            <div className='py-3'>
                            <ul style={{ display:'flex', gap:'25px' }}>
                              <li style={{ width:'1.5rem', textAlign:'center', fontWeight: 'bold', fontSize: '18px', color: 'black' }}>3</li>
                              <li style={{ width:'1.5rem', textAlign:'center', fontWeight: 'bold', fontSize: '18px', color: 'black' }}>6</li>
                              <li style={{ width:'1.5rem', textAlign:'center', fontWeight: 'bold', fontSize: '18px',color: 'black' }}>12</li>
                              <li style={{ width:'1.5rem', textAlign:'center', fontWeight: 'bold', fontSize: '18px', color: 'black' }}>18</li>
                              <li style={{ width:'1.5rem', textAlign:'center', fontWeight: 'bold', fontSize: '18px', color: 'black' }}>24</li>
                              <li>Months</li>
                              
                            </ul>
                            <ul className="product-color-nav py-3">
                              {plans.map(
                                (item, index) =>  (
                                    <li title={item.toString()}
                                      key={index}
                                      style={{ width:'36px', height:'36px' }}
                                      onClick={() => 
                                        handlecolorMainImg(index)
                                      }
                                      className={`${
                                        activeColorBorder === index
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                    </li>
                                  )
                              )}
                                 
                            </ul>
                          </div>
                          
                          {buyOption==false && oneTime==false &&  
                          <div className="product-quantity-cart mb-25">
                            <div className="product-quantity-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <button
                                  onClick={() => dispatch(decrease_quantity({...item as any,option:"rental"}))}
                                  className="cart-minus"
                                >
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  className="cart-input"
                                  type="text"
                                  readOnly
                                  value={totalCart}
                                />
                                <button
                                  onClick={() => handleAddToCart(item as any)}
                                  className="cart-plus"
                                >
                                  <i className="far fa-plus"></i>
                                </button>
                              </form>
                            </div>
                            <button
                              className="fill-btn"
                              onClick={() => handleAddToCart(item as any)}
                            >
                              Add to cart
                            </button>
                          </div>}
                          </>
                        
                          <div className="">
                          <div 
                                 
                            >
                              <div className="d-grid gap-1">
                              <div className="d-flex ">   
                                    <input id="onetime" checked={oneTime} onClick={()=>handleChangeOnTime()} className="checkbox-buy" type="checkbox"/>
                                    <label htmlFor="onetime"  className="d-flex gap-2">
                                       <span> Pay Upfront </span>
                                       <div style={{height:"30px", color:"#1d2951", fontWeight:"bold"}}> { plan<2?" (Extra 10% Off.)":"(First Month Free + Extra 10% Off.)"} </div>
                                    </label>
                                   
                                </div>
                                <div className="">   
                                    <input id="buy" checked={buyOption} onClick={()=>handleChangeBuy()} className="checkbox-buy" type="checkbox"/>
                                    <label htmlFor="buy"> Buy for KES {Number(item?.buy as any)?.toLocaleString()}</label>
                                </div>
                              </div>
                              
                              {buyOption&&
                              <div className="fill-Buy-option " > 
                                 <div className="product-quantity-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <button
                                  onClick={() => dispatch(decrease_quantity({...item as any,option:"buy"}))}
                                  style={{marginRight:"5px"}}
                                >
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  className="cart-input"
                                  style={{width:"80%",height:"30px",textAlign:"center"}}
                                  type="text"
                                  readOnly
                                  value={totalCartBuy ? totalCartBuy : 0}
                                />
                                <button
                                  onClick={() => handleAddToCartBuyOption(item as any)}
                                  style={{marginLeft:"5px"}}
                                >
                                  <i className="far fa-plus"></i>
                                </button>
                              </form>
                            </div>                 
                            <button
                              className="buy-btn"
                              
                              onClick={() => handleAddToCartBuyOption(item as any)}
                            >
                              Add to cart
                            </button>
                            </div>
                            }
                              {oneTime&&
                              <div className="fill-Buy-option " >
                                {/* <div style={{height:"20px"}}>{`Price:  KES ${Number(totalCart * (Number(oneTimePrice as any)))?.toLocaleString()}`} </div>   */}
                                 {/* <div className='py-3'>
                            <ul style={{ display:'flex', gap:'10px' }}>
                              <li style={{ width:'1.5rem', textAlign:'center' }}>3</li>
                              <li style={{ width:'1.5rem', textAlign:'center' }}>6</li>
                              <li style={{ width:'1.5rem', textAlign:'center' }}>12</li>
                              <li style={{ width:'1.5rem', textAlign:'center' }}>24</li>
                              <li>Months</li>
                              
                            </ul>
                            <ul className="product-color-nav">
                              {plans.map(
                                (item, index) =>  (
                                    <li title={item.toString()}
                                      key={index}
                                      style={{ width:'24px', height:'24px' }}
                                      onClick={() =>
                                        handlecolorMainImg(index)
                                      }
                                      className={`${
                                        activeColorBorder === index
                                          ? "active"
                                          : ""
                                      }`}
                                    >
                                    </li>
                                  )
                              )}
                                 
                            </ul>
                          </div>  */}
                                 <div className="product-quantity-form">
                              <form onSubmit={(e) => e.preventDefault()}>
                                <button
                                  onClick={() => dispatch(decrease_quantity({...item as any,option:"Pay Upfront"}))}
                                  style={{marginRight:"5px"}}
                                >
                                  <i className="far fa-minus"></i>
                                </button>
                                <input
                                  className="cart-input"
                                  style={{width:"80%",height:"30px",textAlign:"center",marginTop:"25px"}}
                                  type="text"
                                  readOnly
                                  value={totalCartOne ? totalCartOne : 0}
                                />
                                <button
                                  onClick={() => handleAddOneTimePayment(item as any)}
                                  style={{marginLeft:"5px"}}
                                >
                                  <i className="far fa-plus"></i>
                                </button>
                              </form>
                            </div>                 
                            <button
                              className="buy-btn"
                              
                              onClick={() => handleAddOneTimePayment(item as any)}
                            >
                              Add to Cart
                            </button>
                            </div>
                            }
                            </div>
                           
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      <div style={{    height: "70px",alignItems: "center" }} className="d-flex gap-4 mb-25">
                            <div className="d-flex align-items-center">
                            <a href="https://wa.me/message/D3NWVQIZT27UJ1" target="_blank" className="whatsapp-order-btn">
                              <svg style={{ width: 20 }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6.014 8.00613C6.12827 7.1024 7.30277 5.87414 8.23488 6.01043L8.23339 6.00894C9.14051 6.18132 9.85859 7.74261 10.2635 8.44465C10.5504 8.95402 10.3641 9.4701 10.0965 9.68787C9.7355 9.97883 9.17099 10.3803 9.28943 10.7834C9.5 11.5 12 14 13.2296 14.7107C13.695 14.9797 14.0325 14.2702 14.3207 13.9067C14.5301 13.6271 15.0466 13.46 15.5548 13.736C16.3138 14.178 17.0288 14.6917 17.69 15.27C18.0202 15.546 18.0977 15.9539 17.8689 16.385C17.4659 17.1443 16.3003 18.1456 15.4542 17.9421C13.9764 17.5868 8 15.27 6.08033 8.55801C5.97237 8.24048 5.99955 8.12044 6.014 8.00613Z" fill="#FFF"></path> <path fill-rule="evenodd" clip-rule="evenodd" d="M12 23C10.7764 23 10.0994 22.8687 9 22.5L6.89443 23.5528C5.56462 24.2177 4 23.2507 4 21.7639V19.5C1.84655 17.492 1 15.1767 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23ZM6 18.6303L5.36395 18.0372C3.69087 16.4772 3 14.7331 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C11.0143 21 10.552 20.911 9.63595 20.6038L8.84847 20.3397L6 21.7639V18.6303Z" fill="#FFF"></path> </g></svg>
                              <span>Order on Whatsapp </span>
                            </a>
                            </div>
                            {/* <div className="d-flex align-items-center">
                            <a href="https://wa.me/message/D3NWVQIZT27UJ1" target="_blank" className="call-us-order">
                              <svg style={{ width: 20 }} fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>phone-call</title> <path d="M18.037 6.635c-0.011-0.001-0.023-0.001-0.035-0.001-0.414 0-0.75 0.336-0.75 0.75 0 0.399 0.312 0.726 0.706 0.749l0.002 0c3.533 0.231 6.311 3.153 6.311 6.723 0 0.186-0.008 0.37-0.022 0.552l0.002-0.024c0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.009-0.143 0.014-0.31 0.014-0.479 0-4.38-3.397-7.967-7.7-8.269l-0.026-0.001zM17.963 2.749c0.449 0.022 10.998 0.688 10.998 12.635 0 0.414 0.336 0.75 0.75 0.75s0.75-0.336 0.75-0.75v0c0.015-0.238 0.024-0.515 0.024-0.795 0-7.059-5.471-12.841-12.405-13.335l-0.043-0.002c-0.009-0-0.019-0.001-0.029-0.001-0.403 0-0.732 0.314-0.757 0.71l-0 0.002c-0.001 0.011-0.001 0.024-0.001 0.037 0 0.401 0.315 0.729 0.711 0.749l0.002 0zM30.637 23.15c-0.109-0.675-0.334-1.281-0.654-1.823l0.013 0.024c-0.114-0.186-0.301-0.317-0.521-0.353l-0.004-0.001-8.969-1.424c-0.035-0.006-0.076-0.009-0.117-0.009-0.207 0-0.395 0.083-0.531 0.218l0-0c-0.676 0.68-1.194 1.516-1.496 2.451l-0.012 0.044c-4.016-1.64-7.141-4.765-8.742-8.675l-0.038-0.105c0.978-0.314 1.814-0.833 2.493-1.509l-0 0c0.136-0.136 0.22-0.324 0.22-0.531 0-0.041-0.003-0.081-0.010-0.12l0.001 0.004-1.425-8.969c-0.036-0.224-0.167-0.412-0.35-0.524l-0.003-0.002c-0.505-0.301-1.094-0.522-1.724-0.626l-0.029-0.004c-0.315-0.070-0.677-0.111-1.048-0.111-0.025 0-0.050 0-0.075 0.001l0.004-0h-0.006c-3.497 0.024-6.326 2.855-6.347 6.351v0.002c0.015 12.761 10.355 23.102 23.115 23.117h0.002c3.5-0.023 6.331-2.854 6.354-6.351v-0.002c0-0.020 0-0.044 0-0.068 0-0.356-0.036-0.703-0.106-1.038l0.006 0.033zM24.383 29.076c-11.933-0.014-21.602-9.684-21.616-21.616v-0.001c0.019-2.673 2.182-4.835 4.854-4.853h0.002c0.016-0 0.036-0 0.055-0 0.272 0 0.537 0.030 0.793 0.086l-0.024-0.005c0.366 0.060 0.695 0.161 1.003 0.3l-0.025-0.010 1.302 8.202c-0.628 0.528-1.404 0.901-2.257 1.050l-0.029 0.004c-0.355 0.064-0.62 0.37-0.62 0.739 0 0.088 0.015 0.172 0.043 0.25l-0.002-0.005c1.772 5.072 5.695 8.994 10.646 10.729l0.121 0.037c0.073 0.026 0.157 0.041 0.245 0.041 0.368 0 0.674-0.265 0.737-0.615l0.001-0.005c0.153-0.882 0.526-1.658 1.061-2.295l-0.006 0.007 8.201 1.303c0.133 0.294 0.237 0.636 0.296 0.994l0.003 0.024c0.046 0.219 0.073 0.471 0.073 0.729 0 0.018-0 0.035-0 0.053l0-0.003c-0.016 2.675-2.179 4.84-4.852 4.859h-0.002z"></path> </g></svg>                              <div>
                                <div className="d-grid">
                                   <div>Call us to order</div>
                                   <div>0711 082 811 </div>
                                </div>
                             
                              </div>
                              
                            </a>
                            </div> */}

                          </div>
                      <div>
                        {/* {item?.totalProduct && item?.totalProduct > 0 ? (
                          <>
                            <p>
                              {item?.totalProduct && item?.totalProduct > 1
                                ? `${item?.totalProduct} Pieces Available`
                                : `${item?.totalProduct} Piece Available`}
                            </p>
                          </>
                        ) : (
                          <>
                            {" "}
                            <p className="text-danger">
                              This Product Is Out Of Stock
                            </p>{" "}
                          </>
                        )} */}
                      </div>

                      {/* {item?.productColorArray?.length ? (
                        <>
                          <div className="product__details__tag tagcloud mt-25 mb-10">
                            <span>Variation : </span>

                            {item?.productColorArray?.map((color, index) => (
                              <Link key={index} href="#" rel="tag">
                                {color.color}
                              </Link>
                            ))}
                          </div>
                        </>
                      ) : (
                        <></>
                      )} */}

                      <ProductInfo item={item} />
                    </div>
                  </div>
                </div>
                {item?.images && item.images.length > 0 &&
                <div className="product-details-nav ecomart-shop-details-nav">
                  <ul className="nav nav-tabs" id="myTab" role="tablist" style={{ width:'60%' }}>
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

                    {/* <div className="product-tab-slider-nav details_product_prev">
                      <div className="product-tab-slider-button-prev">
                        <i className="fal fa-long-arrow-left"></i>
                      </div>
                      <div className="product-tab-slider-button-next">
                        <i className="fal fa-long-arrow-right"></i>
                      </div>
                    </div> */}

                    {/* arrow icon */}

                    {/* product angle view with multiple color */}
                    {/* <Swiper
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
      {item?.images?.map((product, index) => (
        <SwiperSlide key={index}>
          <li style={{display:"flex", justifyContent:"center"}} className="nav-item" role="presentation">
            <button
              type="button"
              data-toggle="tooltip"
              data-bs-toggle="modal"
              data-bs-target="#productDetail"
              className={`nav-link preview_img preview_img_slider ${
                index === activeBorder ? 'active' : ''
              }`}
              role="tab"
              onClick={() => handleImg(product, index)}
            >
              <Image
                className="prodcut_bg"
                style={{
                  objectFit: 'cover',
                }}
                width={300}
                height={100}
                src={product}
                alt="..."
              />
            </button>
          </li>
        </SwiperSlide>
      ))}
    </Swiper> */}
                  </ul>
                </div>}
                <div className="product_info-faq-area pb-0">
                  <div className="">
                    <nav className="product-details-nav">
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <Link
                          className="nav-item nav-link  active"
                          id="nav-general-tab"
                          data-bs-toggle="tab"
                          href="#nav-general"
                          role="tab"
                          aria-selected="true"
                        >
                          Description
                        </Link>
                        {/* <Link
                          className="nav-item nav-link active"
                          id="nav-seller-tab"
                          data-bs-toggle="tab"
                          href="#nav-seller"
                          role="tab"
                          aria-selected="true"
                        >
                          Reviews
                        </Link> */}
                        <Link
                          className="nav-item nav-link"
                          id="spacification-tab"
                          data-bs-toggle="tab"
                          href="#spacification"
                          role="tab"
                          aria-selected="false"
                        >
                          Specification
                        </Link>
                      </div>
                    </nav>
                    <div
                      className="tab-content product-details-content"
                      id="nav-tabContent"
                    >
                      <div className="tab-pane fade  active show" id="nav-general" role="tabpanel">
                        <div className="tabs-wrapper mt-35">
                          <div className="product__details-des">
                            <p>
                              {item?.product_description ||  'No description'}
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* <div
                        className="tab-pane fade active show"
                        id="nav-seller"
                        role="tabpanel"
                      >
                        <div className="tabs-wrapper mt-35">
                          <div className="course-review-item mb-30">
                            <div className="course-reviews-img">
                              <Link href="#">
                                <Image src={reviewOne} alt="image not found" />
                              </Link>
                            </div>
                            <div className="course-review-list">
                              <h5>
                                <Link href="#">Sotapdi Kunda</Link>
                              </h5>
                              <div className="course-start-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>55 min ago</span>
                              </div>
                              <p>
                                Very clean and organized with easy to follow
                                tutorials, Exercises, and solutions. This course does
                                start from the beginning with very little knowledge
                                and gives a great overview of common tools used for
                                data science and progresses into more complex concepts
                                and ideas.
                              </p>
                            </div>
                          </div>
                          <div className="course-review-item mb-30">
                            <div className="course-reviews-img">
                              <Link href="#">
                                <Image src={reviewTwo} alt="image not found" />
                              </Link>
                            </div>
                            <div className="course-review-list">
                              <h5>
                                <Link href="#">Samantha</Link>
                              </h5>
                              <div className="course-start-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>45 min ago</span>
                              </div>
                              <p>
                                The course is good at explaining very basic intuition
                                of the concepts. It will get you scratching the
                                surface so to say. where this course is unique is the
                                implementation methods are so well defined Thank you
                                to the team !.
                              </p>
                            </div>
                          </div>
                          <div className="course-review-item mb-30">
                            <div className="course-reviews-img">
                              <Link href="#">
                                <Image src={reviewThree} alt="image not found" />
                              </Link>
                            </div>
                            <div className="course-review-list">
                              <h5>
                                <Link href="#">Michell Mariya</Link>
                              </h5>
                              <div className="course-start-icon">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <span>30 min ago</span>
                              </div>
                              <p>
                                This course is amazing..! I started this course as a
                                beginner and learnt a lot. Instructors are great.
                                Query handling can be improved.Overall very happy with
                                the course.
                              </p>
                            </div>
                          </div>
                          <div className="product__details-comment ">
                            <div className="comment-title mb-20">
                              <h3>Add a review</h3>
                              <p>
                                Your email address will not be published. Required
                                fields are marked *
                              </p>
                            </div>
                            <div className="comment-rating mb-20">
                              <span>Overall ratings</span>
                              <ul>
                                <li>
                                  <Link href="#">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <i className="fas fa-star"></i>
                                  </Link>
                                </li>
                                <li>
                                  <Link href="#">
                                    <i className="fal fa-star"></i>
                                  </Link>
                                </li>
                              </ul>
                            </div>
                            <div className="comment-input-box mb-20">
                              <ReviewForm />
                            </div>
                          </div>
                        </div>
                      </div> */}

                      <div
                        className="tab-pane fade"
                        id="spacification"
                        role="tabpanel"
                      >
                        {/*  */}
                        <table className="table mt-20">
                          <thead>
                            <tr>
                              <th>Field</th>
                              <th>Value</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item?.model && 
                            <tr>
                              <td>Model</td>
                              <td>{item?.model}</td>
                            </tr>}
                            {item?.size && 
                            <tr>
                              <td>Size</td>
                              <td>{item?.size}</td>
                            </tr>}
                            {/* {item?.height && 
                            <tr>
                              <td>Height</td>
                              <td>{item?.height}</td>
                            </tr>}
                            {item?.depth && 
                            <tr>
                              <td>Depth</td>
                              <td>{item?.depth}</td>
                            </tr>} */}
                            {/* {item?.capacity && 
                            <tr>
                              <td>Capacity</td>
                              <td>{item?.capacity}</td>
                            </tr>} */}
                            {/* {item?.sku && 
                            <tr>
                              <td>Sku</td>
                              <td>{item?.sku}</td>
                            </tr>} */}
                            {item?.warranty && 
                            <tr>
                              <td>Warranty</td>
                              <td>{item?.warranty}</td>
                            </tr>}
                            {item?.features && 
                            <tr>
                              <td>Features</td>
                              <td> 
                                <ul >
                                  {features?.filter(feature => feature.trim() !== "")?.map((items, index)=>(
                                    <li key={index}  style={{listStyle:"disc"}}>{items}</li>
                                  ))}
                               
                               </ul>
                               </td>
                            </tr>}
                          </tbody>
                        </table>
                        {/*  */}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </section>
      <ProductDetail item={item}/>
    </>
  );
};

export default ShopDetailsArea;
