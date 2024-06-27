import PaymentIcon from "@/svg/PaymentIcon";
import ReturnIcon from "@/svg/ReturnIcon";
import ShipingIcon from "@/svg/ShipingIcon";
import SupportIcon from "@/svg/SupportIcon";
import React from "react";

const FeatureAreaHomeThree = () => {
  return (
    <>
      <div className="features-area features-area3">
        <div className="container">
          <div className="features-wrapper">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="features-single">
                  <div className="irc-item">
                    <div className="irc-item-icon">
                      <ShipingIcon />
                    </div>
                    <div className="irc-item-content">
                      <div className="irc-item-heading">Flexible Rental Plans</div>
                      <p>Upgrade, Downgrade or Swap Anytime</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="features-single">
                  <div className="irc-item">
                    <div className="irc-item-icon">
                      <ReturnIcon />
                    </div>
                    <div className="irc-item-content">
                      <div className="irc-item-heading">Affordable Access</div>
                      <p>Low Upfront Costs For Premium Appliances</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="features-single">
                  <div className="irc-item">
                    <div className="irc-item-icon">
                      <PaymentIcon />
                    </div>
                    <div className="irc-item-content">
                      <div className="irc-item-heading">Hassle-Free Service</div>
                      <p>Professional Delivery & Installation Included</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="features-single">
                  <div className="irc-item">
                    <div className="irc-item-icon">
                      <SupportIcon />
                    </div>
                    <div className="irc-item-content">
                      <div className="irc-item-heading">Peace of Mind</div>
                      <p>Free Repairs & Maintenance Covered</p>
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

export default FeatureAreaHomeThree;
