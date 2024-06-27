import React from "react";
import thumb from "../../../public/assets/img/about/about-thumb.jpg";
import logo from "../../../public/assets/img/about/1990.png";
import Image from "next/image";
import Link from "next/link";

const AboutArea = () => {
  return (
    <>
      <section className="about-area my-90">
        <div className="container container-small">
          <div className="row align-items-start py-5">
            {/* <div className="col-lg-6">
              <div className="about-thumb pos-rel mb-30">
                <Image style={{ width: "100%", height: "auto" }} className="about-thumb-main" src={thumb} alt="img" />
                <Image className="est-time-img" src={logo} alt="img" />
              </div>
            // </div> */}
            {/* // <div className="col-lg-6">
            //   <div className="about-content mb-30 "> */}
            <div>
              <div style={{marginLeft:"200px",marginRight:"200px"}}>
                <div className="section-title">
                  {/* <h2 className="section-main-title mb-40">Our story is the same as yours</h2> */}
                  <h1 className="text-center mb-5">Our story is the same as yours</h1>
                </div>
                <p  className="mb-40 ">
                  We started Uncle to solve our own problems. As short-term residents in Kenya, we were frustrated by the lack of affordable furnishing options. Our only choices were to rent a fully furnished apartment at three or four times the price of an unfurnished one or to buy appliances and furniture and resell them later.
                  <br></br>
                  <br></br>
                  As we dug deeper, we realized this was just the tip of the iceberg. The continuous use of outdated appliances in Africa is harming the planet. Shockingly, over 70% of appliances used in Africa are inefficient second-hand imports from the Europe and North America, negating the energy savings from newer, energy-efficient models globally.
                  <br></br>
                  <br></br>
                  We launched Uncle to provide a convenient solution for expats, a sustainable option for local Kenyans, and a positive impact on our planet. Our mission is to make high-quality home essentials affordable and accessible to everyone, regardless of their living situation.                  <br></br>
                  <br></br>
                  We’re building something special here, and we’re excited to have you join us on this journey.
                </p>
                <p><strong >We also care about the planet. </strong></p>
                {/* <ul>
                  <li><strong><span >Accessible Luxury:</span></strong><span >&nbsp;High-quality appliances, furniture, and household goods within reach of every income level.</span></li>
                  <li><strong><span >Flexibility and Choice:</span></strong><span >&nbsp;Rent what you need, when you need it. Easily upgrade or swap items as your needs evolve.</span></li>
                </ul>
                <ul>
                  <li><strong><span >Sustainable Living:</span></strong><span >&nbsp;By maximizing the lifecycle of energy-efficient products, we reduce waste and emissions, aligning incentives for responsible consumption.</span></li>
                </ul> */}
                <p><span >There is a growing problem of e-waste in Africa. According to UN Environment, e-waste in Africa is projected to reach 5.4 million tons by 2030 due to increasing demand for household goods from the growing middle class. Outdated, second-hand imports from Europe and North America consume enough energy to negate all global energy savings from modern appliances.
                  <br></br>
                  <br></br>
                  By using Uncle you are saying goodbye to energy-guzzling appliances and cheaply made furniture that end up in our landfills because they are unusable after a short time. We hare helping to reduce waste and build a more sustainable Africa.
                </span></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutArea;
