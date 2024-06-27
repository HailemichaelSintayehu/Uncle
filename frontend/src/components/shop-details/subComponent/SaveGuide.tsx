import React, { useMemo, useState } from "react";
import Image from "next/image";
import { useGetApplianceByIdQuery } from "@/redux/api";
import { useParams } from "next/navigation";
import NiceSelect from "@/components/common/NiceSelect";

const SaveGuide = () => {
  const params = useParams()
  const { data:item } = useGetApplianceByIdQuery(parseInt(params.id as string))
  const [ plan, setPlan ] = useState(1)
  const [ duration, setDuration ] = useState(1)
  const price = plan === 3 ? item?.M3_rental_price: plan === 6 ? item?.M6_rental_price : plan === 12? item?.M12_rental_price : plan === 18? item?.M18_rental_price: item?.M24_rental_price

  const total = useMemo(() => (
    Math.floor(duration/plan) * (Number(price as number))
  ), [item, duration, plan])

  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="sizeguide"
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-option="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                <div className="">
                    <div className="ecomart-common-search-result border-bottom">
                      <Image src={item?.productImg as string} className='object-cover' style={{ objectFit:'cover' }} alt="img" width={200} height={100} />
                      <div className="preview_content">
                        <div className="single_product h4">
                            {item?.title}
                        </div>
                      </div>
                    </div>
                    <div className='d-flex gap-2 mt-3'>
                      <div className="d-flex flex-column gap-3 justify-content-start flex-grow-1 p-2 bg-gray-500 border">
                        <h5 className="text-center">Uncle Subscription</h5>
                        <div className="d-flex justify-content-between py-1">
                          <p className="mt-0 mb-0">Uncle Plan</p>
                          <NiceSelect
                            options={[{ id: 1, option: "1 month"}, { id : 3, option: "3 months"}, { id: 6, option: "6 month"}, { id : 12, option: "12 months"}]}
                            defaultCurrent={0}
                            onChange={(a) => setPlan(a.id)}
                            name="sorting-list"
                            className="sorting-list"
                          />                        </div>
                        <div className="d-flex justify-content-between py-1">
                          <p className="mt-0 mb-0">Subscription Duration</p>
                          <NiceSelect
                            options={[{ id: 1, option: "1 month"}, { id : 3, option: "3 months"}, { id: 6, option: "6 month"}, { id : 12, option: "12 months"}]}
                            defaultCurrent={0}
                            onChange={(a) => setDuration(a.id)}
                            name="sorting-list"
                            className="sorting-list"
                          />
                        </div>
                        <div className="d-flex justify-content-between py-">
                          <p className="mt-0 mb-0">Recurring Charge</p>
                          <p className="mt-0 mb-0">${price?.toLocaleString()}</p>
                        </div>
                        <small className="mt-auto border-top">Subscription</small>
                        <div className="d-flex justify-content-between py-1">
                          <h4 className="mt-0 mb-0">Total</h4>
                          <h4 className="mt-0 mb-0">${total.toLocaleString()}</h4>
                        </div>
                      </div>
                      <div className="d-flex flex-column gap-3 justify-content-start flex-grow-1 p-2 bg-gray-500 border">
                        <h5 className="text-center">One-Off Purchase</h5>
                        <div className="d-flex justify-content-between py-1">
                          <p className="mt-0 mb-0">Retail Price</p>
                          <p className="mt-0 mb-0">$899.00</p>
                        </div>
                        <div className="d-flex justify-content-between py-1">
                          <p className="mt-0 mb-0">Extended Warranty</p>
                          <p className="mt-0 mb-0">$95.00</p>
                        </div>
                        <div className="d-flex justify-content-between py-1">
                          <p className="mt-0 mb-0">Consumables</p>
                          <p className="mt-0 mb-0">0</p>
                        </div>
                        <div className="d-flex justify-content-between py-1">
                          <p className="mt-0 mb-0">Service & Maintenance</p>
                          <p className="mt-0 mb-0">$95.00</p>
                        </div>
                        <small className="border-top">Estimated based on average selling prices</small>
                        <div className="d-flex justify-content-between py-1">
                          <h4 className="mt-0 mb-0">Total</h4>
                          <h4 className="mt-0 mb-0">$95.00</h4>
                        </div>
                      </div>
                    </div>
                    <div className='d-flex flex-column align-items-center gap-2 mt-5'>
                      <h4>With Uncle subscription plan, you save:</h4>
                      <h3>$0</h3>
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

export default SaveGuide;
