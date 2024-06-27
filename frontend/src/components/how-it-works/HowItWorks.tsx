import React from "react";
import thumb from "../../../public/assets/img/about/about-thumb.jpg";
import logo from "../../../public/assets/img/about/1990.png";
import Image from "next/image";
import Link from "next/link";
import './../../../public/assets/scss/component/_how-it-works.scss';

const HowItWorks = () => {
  const reasons = [
    {
      icon: "/assets/img/how-it-works/icons8-dollar-coin-100.png",
      title: 'Affordable',
      description: 'High-quality appliances, furniture, and household goods within reach of every income level. Experience the best in home essentials without breaking the bank. Our rental options are designed to suit every budget, ensuring you get the quality you deserve at a price you can afford.'
    },
    {
      icon: "/assets/img/how-it-works/icons8-quality-100.png",
      title: 'Flexible',
      description: 'Rent what you need, when you need it. Easily upgrade or swap items as your needs evolve. Life is always changing, and your home should adapt with you. With our flexible rental plans, you can easily upgrade or exchange items to fit your current lifestyle and preferences.'
    },
    {
      icon: "/assets/img/how-it-works/icons8-sustainable-100.png",
      title: 'Sustainable',
      description: 'By maximizing the lifecycle of energy-efficient products, we reduce waste and emissions, aligning incentives for responsible consumption. Join us in our commitment to sustainability. Renting with us means contributing to a greener planet by reducing electronic waste and promoting the use of energy-efficient products.'
    },
    {
      icon: "/assets/img/how-it-works/icons8-guarantee-100.png",
      title: 'Hassle-Free',
      description: 'If the device is damaged, you are insured. We cover 90% of the costs for repairs of all kinds, from display breakage to water damage to technical defects.'
    },
    {
      icon: "/assets/img/how-it-works/icons8-umbrella-as-an-insurance-coverage-logotype-layout-100.png",
      title: 'Guaranteed Protection',
      description: 'Simple and convenient rental process with easy delivery and setup. Enjoy a seamless rental experience with straightforward processes and quick, hassle-free delivery and setup. Spend more time enjoying your new appliances and furniture, and less time dealing with logistics.'
    },
    {
      icon: "/assets/img/how-it-works/icons8-online-support-100.png",
      title: 'Customer Service',
      description: 'Always available to assist you with any questions or needs.Our dedicated customer service team is here to help. Whether you have questions, need assistance, or want to provide feedback, we are just an email or call away, ready to support you.'
    }
  ];
  return (
    <div className="container">
      <div className="how-it-works">
        <h1>How does Uncle work?</h1>

        <p className="description">
          Experience the freedom and flexibility of renting with UNCLE.
        </p>
        <p className="description">
          Renting appliances with Uncle is simple. Choose the products you want and how long you want them for, check out, and we will deliver to you in less than <strong>72 hours</strong>. Here&apos;s how it works:
        </p>
        <div className="choose-section">
          <div className="image">
            <img src="assets/img/Choose.png" alt="Choose illustration" />
          </div>
          <div className="text">
            <h2>Choose & Subscribe</h2>
            <ul>
              <li>Browse our range of high-quality appliances and select the items that suit your needs.</li>
              <li>
                Choose how long you want to rent. Don&apos;t worry, you can always extend plan.
              </li>
              <li>
                Create an account and submit your order. We&apos;ll do a quick background check—don&apos;t worry, it&apos;s simple and won&apos;t affect your credit score.
              </li>
            </ul>
          </div>
        </div>
        <div className="choose-section">
          <div className="image">
            <img src="assets/img/2.png" alt="Choose illustration" />
          </div>
          <div className="text">
            <h2>Use & Upgrade</h2>
            <ul>
              <li>We&apos;ll deliver and install your chosen products for free. Sit back and relax—we handle it all.</li>
              <li>
                Most repairs, along with damage and theft protection, are covered under UNCLE Care. So you can enjoy your products worry-free.
              </li>
              <li>
                Upgrade or swap items as your needs change, without additional costs. Love an item? You can buy it outright whenever you like.
              </li>
            </ul>
          </div>
        </div>
        <div className="choose-section">
          <div className="image">
            <img src="assets/img/3.png" alt="Choose illustration" />
          </div>
          <div className="text">
            <h2>
              Return & Recirculate</h2>
            <ul>
              <li>When your contract ends, notify us, and we&apos;ll pick up the items at no extra fee.</li>
              <li>
                Returned items are refurbished and re-rented, extending their lifecycle and reducing waste, aligning with our commitment to the environment.</li>
            </ul>
          </div>
        </div>
        <h1>Ready to Start?</h1>

        <p className="description">
          Join UNCLE today and experience the smart way to furnish your home. Affordable, flexible, and responsible—transform how you live, with just a few clicks.        </p>
        <p className="description">
          Enjoy the comforts of a modern home without the burdens of ownership. With UNCLE, living well has never been easier.        </p>
      </div>
      <div className="reasons-for-uncle">
        <h1>Even more reasons for uncle</h1>
        <div className="reasons-list">
          {reasons.map((reason, index) => (
            <div className="reason-item" key={index}>
              <img src={reason.icon} alt={reason.title} />
              <h2>{reason.title}</h2>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>

    </div>

  );
};

export default HowItWorks;
