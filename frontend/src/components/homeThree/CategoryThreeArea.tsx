import Image from "next/image";
import React from "react";
import category10 from "../../../public/assets/img/product_category/product-cat-10.jpg";
import category11 from "../../../public/assets/img/product_category/product-cat-11.jpg";
import category12 from "../../../public/assets/img/product_category/product-cat-12.jpg";
import category13 from "../../../public/assets/img/product_category/product-cat-13.jpg";
import category14 from "../../../public/assets/img/product_category/product-cat-14.jpg";
import category15 from "../../../public/assets/img/product_category/product-cat-15.jpg";
import Link from "next/link";
import { Routes } from "@/routes";
import { auto } from "@popperjs/core";

const CategoryThreeArea = () => {

  return (
    <>
      <div className="category-area3 pb-0">
        <div className="container">
          <div className="product-category3-wrapper">
            <div className="row">
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 order-xxl-1">
                <div className="product-category2-single pos-rel mb-30">
                  <div className="product-category-img">
                    <Link href={Routes.SHOP}>
                      <img style={{ width: "100%", height: "auto" }} src={"https://res.cloudinary.com/du4apheec/image/upload/v1715593805/Website%20Images/510x550%20Homepage%20Images/Fridges_2_vl0e7z.png"} alt="product-img" />
                    </Link>
                  </div>
                  <div className="product-category-inner">
                    <div className="product-category-content">
                      <a href={`/shop?search=${"Fridges"}`} className="product-category">
                        Fridges
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-6 col-lg-6 col-md-6 col-sm-6 order-xxl-3">
                <div className="product-category2-single pos-rel mb-30">
                  <div className="product-category-img">
                    <Link href={Routes.SHOP}>
                      <img style={{ width: "100%", height: "auto" }} src={"https://res.cloudinary.com/du4apheec/image/upload/v1715588506/Website%20Images/510x550%20Homepage%20Images/Burners_vcbekq.png"} alt="product-img" />
                    </Link>
                  </div>
                  <div className="product-category-inner">
                    <div className="product-category-content">
                      <a href={`/shop?search=${"Cookers/Ovens"}`} className="product-category">
                        Cookers and Ovens
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-12 order-xxl-2">
                <div className="row">
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href={Routes.SHOP}>
                          <img height={100} width={"100"} style={{ width: "100%", height: "auto" }} src={"https://res.cloudinary.com/du4apheec/image/upload/v1715588499/Website%20Images/240x260%20Homepage%20Images/Dishwasher_mf6lvy.png"} alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <a href={`/shop?search=${"Washing Machines"}`} className="product-category">
                            Dishwasher
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href={Routes.SHOP}>
                          <img height={100} width={"100"} style={{ width: "100%", height: "95%" }} src={"https://res.cloudinary.com/du4apheec/image/upload/v1715597031/Cloudinary/6/4_gof86v.png"} alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <a href={`/shop?search=${"Washing Machines"}`} className="product-category">
                            Washing Machines
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href={Routes.SHOP}>
                          <img height={100} width={"100"} style={{ width: "100%", height: "auto" }} src="https://res.cloudinary.com/du4apheec/image/upload/v1715588500/Website%20Images/240x260%20Homepage%20Images/Microwave_mjqtt3.png" alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <a href={`/shop?search=${"Microwaves"}`} className="product-category">
                            Microwaves
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xxl-6 col-xl-3 col-lg-3 col-md-6 col-sm-6">
                    <div className="product-category2-single pos-rel mb-30">
                      <div className="product-category-img">
                        <Link href={Routes.SHOP}>
                          <img height={100} width={"100"} style={{ width: "100%", height: "auto" }} src="https://res.cloudinary.com/du4apheec/image/upload/v1715588497/Website%20Images/240x260%20Homepage%20Images/Water_dispenser_jbld7s.png" alt="product-img" />
                        </Link>
                      </div>
                      <div className="product-category-inner">
                        <div className="product-category-content">
                          <a href={`/shop?search=${"Water Dispensers"}`} className="product-category">
                            Water Dispensers
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryThreeArea;
