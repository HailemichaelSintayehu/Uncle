import Link from "next/link";
import { filterCategoryData } from "@/data/category-filter-data";
import { useGetAppliancesQuery } from "@/redux/api";
import useGlobalContext from "@/hooks/use-context";
const FooterOne = () => {
  const { data:item, isLoading } = useGetAppliancesQuery()
  const uniqueCategories = item ? Array.from(new Set(item.map(item => item.category))) : [];
  const {
    setFilterBrand,
    setFilterSize,
    setFilterRating,
    setFilterSearch,
    setFilterColor,
    setFilterCategory,
    setSelectData,
    setFilterRange,
  } = useGlobalContext();
  const handleFilterCategory = (item: String) => {
    setFilterSize([]);
    setFilterBrand([]);
    setFilterRating(0);
    setFilterSearch("");
    setFilterColor("");
    setFilterCategory(String(item));
    setSelectData("");
    setFilterRange([]);
    window.history.replaceState(null, String(null), window.location.pathname)
  };
  return (
    <>
      <footer data-background="" className="footer1-bg">
        <section className="footer-area footer-area1 footer-area1-bg pt-95 pb-55">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget1 mb-40">
                  <div className="footer-widget-title">
                    <h4>Company</h4>
                  </div>
                  <ul>
                    <li>
                      <Link href="/about">About Us</Link>
                    </li>
                    <li>
                      <Link href="/why-uncle">Why Uncle</Link>
                    </li>
                    <li>
                      <Link href="/how-it-works">How It Works</Link>
                    </li>
                    {/* <li>
                      <Link href="/about">Payment Type</Link> 
                    </li>
                    <li>
                      <Link href="/about">Awards Winning</Link>
                    </li>
                    <li>
                      <Link href="/about">World Media Partner</Link>
                    </li>
                    <li>
                      <Link href="/about">Become an Agent</Link>
                    </li> */}
                    {/* <li>
                      <Link href="">Referral Program</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget2 mb-40">
                  <div className="footer-widget-title">
                    <h4>Category</h4>
                  </div>
                  <ul>
                    {
                      uniqueCategories.map((category, index) => (
                        <li key={index}>
                          <Link onClick={() => handleFilterCategory(category)} href="/shop">{category}</Link>
                        </li>

                      ))
                    }
                    {/* <li>
                      <Link href="/shop-sidebar-4-column"> {`Women's`} Clothing</Link>
                    </li>
                    <li>
                      <Link href="/shop-sidebar-3-column">Plus Sizes</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-6-column">Complete Your Look</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-5-column">Baby Corner</Link>
                    </li>
                    <li>
                      <Link href="/shop-full-4-column">Man & Woman Shoe</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget3 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Help & Support</h4>
                  </div>
                  <ul>
                    {/* <li>
                      <Link href="/become-vendor">Vendor</Link>
                    </li> */}
                    <li>
                      <Link href="/faq">FAQs</Link>
                    </li>
                    <li>
                      <Link href="/contact">Contact Us</Link>
                    </li>
                    {/* <li>
                      <Link href="/privecy-policy">Return Policy</Link>
                    </li> */}
                    {/* <li>
                      <Link href="/privecy-policy">Shipping & Delivery</Link>
                    </li> */}
                    {/* <li>
                      <Link href="/track-order">Order Tranking</Link>
                    </li> */}
                    {/* <li>
                      <Link href="/shop-full-4-column">List of Shops</Link>
                    </li> */}
                  </ul>
                </div>
              </div>
              {/* <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-widget footer1-widget footer1-widget4 mb-40 ">
                  <div className="footer-widget-title">
                    <h4>Newsletter</h4>
                  </div>
                  <p className="mb-20">
                    Enter your email below to be the first to know about new
                    collections and product launches.
                  </p>
                  <form
                    action="#"
                    className="subscribe-form subscribe-form-footer1"
                  >
                    <input type="text" placeholder="Enter your email" />
                    <button type="submit">
                      Subscribe Now<i className="fas fa-long-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <div className="copyright-area copyright1-area">
          <div className="container">
            <div className="copyright1-inner">
              <div className="copyright-text copyright1-text">
                Copyright by{" "}
                <Link href="/">
                  Uncle
                </Link>
                . All Rights Reserved
              </div>
              <div className="copyright-link">
                {/* <Link href="/privecy-policy" className="text-btn">
                  Shipping & Delivery
                </Link> */}
                {/* <Link href="/privecy-policy" className="text-btn">
                  Refund Policy
                </Link>
                <Link href="/privecy-policy" className="text-btn">
                  Privacy Policy
                </Link> */}
                <Link href="/privacy-policy" className="text-btn">
                  Terms & Conditions
                </Link>
                {/* <Link href="/privecy-policy" className="text-btn">
                  Return Policy
                </Link> */}
              </div>
              <div className="social-wrapper">
                <p>Follow Us:</p>
                <div className="social__links">
                  <ul>
                    <li>
                      <Link target="_blank" href="https://www.facebook.com/unclerentals/">
                        <i className="fab fa-facebook-f"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://youtube.com/">
                        <i className="fab fa-youtube"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.instagram.com/uncle.kenya/">
                        <i className="fab fa-instagram"></i>
                      </Link>
                    </li>
                    <li>
                      <Link target="_blank" href="https://www.tiktok.com/@uncle.kenya">
                        <i className="fab fa-tiktok"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterOne;
