import React from "react";

import '../../../public/assets/scss/component/_why-uncle-area.scss';

const WhyUncleArea = () => {
  const advantages = [
    { feature: "Upfront Costs", financing: "Low", purchase: "High", yuno: "Depends on Provider" },
    { feature: "Affordability", financing: "Most Affordable", purchase: "Least Affordable", yuno: "High interest rates" },
    { feature: "Switch products as your needs change", financing: "Flexible & Inexpensive", purchase: "Inflexible", yuno: "Inflexible" },
    { feature: "Damage Coverage and Maintenance", financing: "Covered by Uncle", purchase: "All costs on you", yuno: "All costs on you" },
    { feature: "Impact on the environment", financing: "Circular and sustainable", purchase: "Not Sustainable", yuno: "Same as Buying" },
    { feature: "Product Quality", financing: "Always Best", purchase: "Depends on your budget", yuno: "Depends on your budget" },
    { feature: "Credit", financing: "Non-credit subscriptions", purchase: "Upfront payment needed", yuno: "Taking on credit/debt" },
    { feature: "Service and Support", financing: "24/7 Support", purchase: "9 to 5", yuno: "9 to 5" }
  ];
  return (

<div className="container">
  <div className="renting-advantages">
  <h1>Why rent with UNCLE</h1>
          <table>
            <thead>
              <tr>
                <th>Benefits</th>
              
                <th>Buying</th>	
                <th>Buy Now, Pay Later</th>
                  <th>UNCLE</th>
              </tr>
            </thead>  
  <tbody>
      {advantages.map((advantage, index) => (
        <tr key={index} >
          <td>{advantage.feature}</td>
         
          <td ><div  className="highlight highlight-red text-[#690005]">{advantage.purchase}</div></td>
          <td ><div  className="highlight highlight-red text-[#690005]">{advantage.yuno}</div></td>
          <td><div  className="highlight highlight-green text-[#690005]">{advantage.financing}</div></td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>

<div className="perfect-for-you">
<h2>More benefits</h2>      
<div className="row content-container">
       <div className="content col-lg-6">
        <div className="image-container">
          <img src={"/assets/img/why_uncle/1.png"} alt="New" />
        </div>
        <div className="text-container">
          <h3>Affordable</h3>
            <p>
              Enjoy access to the latest in energy-efficient appliances and stylish furniture without the financial burden. Our affordable monthly or yearly subscription plans mean you can live well without the heavy costs.            </p>
            <a href="/shop">Explore all products ➔</a>
        </div>
      </div>
      <div className="content col-lg-6">
        <div className="image-container">
          <img src={"/assets/img/why_uncle/3.png"} alt="New" />
        </div>
        <div className="text-container">
         <h3>Hassle-Free & Flexible</h3>
            <p>
              Say goodbye to the burdens of ownership. Choose from a wide array of household essentials and decide what stays and what goes as your needs change—without any of the hassle.
            </p>
            <a href="/shop">Explore all products ➔</a>
        </div>
      </div>
      <div className="content col-lg-6">
        <div className="image-container">
          <img src={"/assets/img/why_uncle/2.png"} alt="New" />
        </div>
        <div className="text-container">
         <h3>Sustainability</h3>
            <p>
              We are committed to reducing waste and emissions through a sustainable business model that maximizes the lifecycle of products. By retaining ownership, we ensure that incentives for energy and resource efficiency are aligned, benefitting our planet and your pocket.            </p>
            <a href="/shop">Explore all products ➔</a>
        </div>
      </div>  
      <div className="content col-lg-6">
        <div className="image-container">
          <img src={"/assets/img/why_uncle/4.png"} alt="New" />
        </div>
        <div className="text-container">
        <h3>Our Promise</h3>
            <p>
              With UNCLE, you can expect superior quality products and a seamless experience with minimal environmental impact. Our approach not only facilitates smarter consumption and increased accessibility but also fosters a community moving towards more sustainable living.
            </p>
            <a href="/shop">Explore all products ➔</a>
        </div>
      </div>  
      </div>
     
    </div>
</div>


  );
};

export default WhyUncleArea;
