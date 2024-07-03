"use client";
import React, { useState } from "react";
import Image from "next/image";
import ProfileSidebar from "./ProfileSidebar";
import DashboardCounter from "./DashboardCounter";
import DefaultDashboard from "./DefaultDashboard";
import MyProfile from "./MyProfile";
import thumb from "../../../../public/assets/img/testimonial/author-1.jpg";
import OrderHistory from "./OrderHistory";
import UpdateProfile from "./UpdateProfile";
import UserReviews from "./UserReviews";
import UserComments from "./UserComments";
import PaymentInfo from "./PaymentInfo";
import CancelOrderTrack from "./CancelOrderTrack";
import { useAppSelector } from "@/redux/hooks";
import ShipmentTracking from "./ShipmentTracking";
import Link from "next/link";
import { IoMdCheckmarkCircle } from "react-icons/io";

const ProfileSection = () => {
  const user = useAppSelector((state) => state.auth.user);
  const [option, setOption] = useState("rental");

  return (
    <div className="course-details-area pt-120 pb-100">
      <div className="container container-small">
        <div className="student-profile-author pb-30">
          <div className="student-profile-author-img">
            <div
              className="d-flex justify-content-center align-items-center rounded-circle text-white"
              style={{
                width: "150px",
                fontSize: "50px",
                textTransform: "uppercase",
                height: "150px",
                backgroundColor: "#d3d3d3",
              }}
            >
              {user?.firstname?.charAt(0)}
              {user?.lastname?.charAt(0)}
            </div>
            {/* <Image
                src={thumb}
                alt="img not found"
              /> */}
          </div>
          <div className="student-profile-author-text flex">
            <div>
              <span>Hello,</span>
              <h3 className="student-profile-author-name text-capitalize">
                {" "}
                {user?.firstname} {user?.lastname}{" "}
              </h3>
             {user.isVerified?  <p className="verified"><IoMdCheckmarkCircle /> verified</p>: <p className="not-verified">Not verified</p>}
            </div>
            <Link href={"/profile/verify-account"} className="verify-btn">
              Verify account
            </Link>
          </div>
        </div>
        <div className="row">
          <ProfileSidebar />
          <div className="col-xl-9 col-lg-8">
            <div className="student-profile-content">
              <div className="tab-content" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <h4 className="mb-25">Dashboard</h4>
                  <div className="student-profile-content-fact">
                    <DashboardCounter />
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="d-flex align-items-center gap-4">
                          <h4 className="mb-25">My Recent Purches Products</h4>
                          <div className="country-select">
                            {/* <label>
                         Select option
                        </label> */}
                            <select
                              className="block px-2 text-base border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                              onChange={(e) => setOption(e.target.value)}
                            >
                              <option value="rental">Rental</option>
                              <option value="Pay Upfront">Pay Upfront</option>
                              <option value="buy">Buy</option>
                              <option value="refundable">Refundable</option>
                            </select>
                            {/* <select style={{ height: "30px" }} onChange={(e) => setOption(e.target.value)}>
                              <option value="rental">Rental</option>
                              <option value="ontime">Pay Upfront</option>
                              <option value="buy">Buy</option>
                            </select> */}
                          </div>
                        </div>

                        <DefaultDashboard option={option} />
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <h4 className="mb-25">My Profile</h4>
                  <MyProfile />
                </div>

                <div
                  className="tab-pane fade"
                  id="wishlist"
                  role="tabpanel"
                  aria-labelledby="wishlist-tab"
                >
                  <h4 className="mb-25">Payment Info</h4>
                  <div className="student-profile-wishlist">
                    <div className="row">
                      <PaymentInfo />
                    </div>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="reviews"
                  role="tabpanel"
                  aria-labelledby="reviews-tab"
                >
                  <h4 className="mb-25">Reviews</h4>
                  <UserReviews />
                </div>

                <div
                  className="tab-pane fade"
                  id="comments"
                  role="tabpanel"
                  aria-labelledby="comments-tab"
                >
                  <h4 className="mb-25">Comments</h4>
                  <UserComments />
                </div>

                <div
                  className="tab-pane fade"
                  id="history"
                  role="tabpanel"
                  aria-labelledby="history-tab"
                >
                  <h4 className="mb-25">Subscription History</h4>
                  <OrderHistory />
                </div>
                <div
                  className="tab-pane fade"
                  id="shipment"
                  role="tabpanel"
                  aria-labelledby="shipment-tab"
                >
                  <h4 className="mb-25">Users Shipment </h4>
                  <ShipmentTracking />
                </div>

                <div
                  className="tab-pane fade"
                  id="cancel"
                  role="tabpanel"
                  aria-labelledby="cancel-tab"
                >
                  <h4 className="mb-25">Cancel Orders</h4>
                  <CancelOrderTrack />
                </div>

                <div
                  className="tab-pane fade"
                  id="setting"
                  role="tabpanel"
                  aria-labelledby="setting-tab"
                >
                  <h4 className="mb-25">Settings</h4>
                  <UpdateProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileSection;
