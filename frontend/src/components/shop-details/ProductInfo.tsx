import Link from "next/link";
import React, { FC } from "react";
import SaveGuide from "./subComponent/SaveGuide";
import DeliveryGuide from "./subComponent/DeliveryGuide";
import QuestionGuide from "./subComponent/QuestionGuide";
interface   ProductInfoProps{
  item:any
}  

const ProductInfo:FC<ProductInfoProps> = ({ item }): JSX.Element => {
  return (
    <>
      <div className='mt-auto'>
        <div className="product_block_info">
          {/* <button
            type="button"
            className="quick-view-btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#sizeguide"
          >
           How much you save?
          </button> */}
          {/* <button
            type="button"
            className="quick-view-btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#delivery"
          >
            <i className="fa-regular fa-truck"></i> Delivery and Return
          </button> */}
          <button
            type="button"
            className="quick-view-btn"
            data-toggle="tooltip"
            data-placement="top"
            title="Quick View"
            data-bs-toggle="modal"
            data-bs-target="#askQuestino"
          >
            <i className="fa-regular fa-message"></i> Ask about this product
          </button>
        </div>

        <SaveGuide />
        <DeliveryGuide />
        <QuestionGuide item={item} />
      </div>
    </>
  );
};

export default ProductInfo;
