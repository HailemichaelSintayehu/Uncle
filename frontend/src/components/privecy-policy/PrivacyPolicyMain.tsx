import React from "react";
import Link from "next/link";
import RefundForm from "./RefundForm";
import BreadCrumb from "../SharedComponents/BreadCrumb";
const PrivacyPolicyMain = () => {
  return (
    <>
      <BreadCrumb title="Privacy Policy" />
      <section className="terms_conditions_section section_space_lg pt-120">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav tabs_nav_boxed unordered_list_block mb-60"
                role="tablist"
              >
                {/* <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_conditions"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Terms and Conditions</span>
                  </button>
                </li> */}
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_privacy_policy"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Privacy Policy</span>
                  </button>
                </li>

                {/* <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#product_refund_policy"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span> Refund Policy</span>
                  </button>
                </li> */}
              </ul>
            </div>
            <div className="col-lg-9">
              <div className="tab-content mb-60">
                <div
                  className="tab-pane fade show active"
                  id="tab_privacy_policy"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">Privacy Policy Statement</h3>
                    <h4 className="info_title">Last Updated: June 27, 2024</h4>

                    <p>
                      <strong>Hawa Dolo Ltd </strong> is committed to protecting the privacy and security of your personal information. We take care to protect the privacy of our customers and users of our products that communicate online with us via the website and social media platforms.
                    </p>
                    <p>
                      We have therefore developed this privacy policy to inform you of the data we collect, what we do with your information, what we do to keep it secure as well as the rights and choices you have over your personal information. We will let you know which entity will be the ‘controller’ of your personal data when you purchase a product or service with us. Hawa Dolo Ltd is the controller of and is responsible for our website.
                    </p>
                    <p>
                      By browsing or using our website, you agree to this policy governing its use. If you do not accept this policy, then you must not use our website.
                    </p>

                    <ul className="icon_list  unordered_list_block">
                      <h4 className="info_title">We promise:</h4>

                      <li>
                        <i className="fas fa-circle"></i>
                        <span> To keep your data safe and private.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Not to sell your data.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> To make it easy for you to manage and review your marketing choices at any time.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> To delete your data if it is no longer required.</span>
                      </li>


                      <h4 className="info_title">How we use your information</h4>

                      <li>
                        <span className="list_item_text">
                          All personal data that we obtain about you will be used in accordance with current data protection laws and this privacy policy. We, or third-party data processors acting on our behalf, will process your personal data as follows.
                        </span>
                        <span className="list_item_text">
                          As necessary, to perform a contract with you, we will use the following information:                        </span>
                      </li>
                      <h4 className="info_title">Your name and contact details</h4>

                      <li>
                        <i className="fas fa-circle"></i>
                        <span> To deliver your orders.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Send order updates by text, email or by telephone.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Sending you information by email or post about new products and services – we will only send you this with your consent.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> For fraud prevention.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> For customer service and product support.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span>For training purposes (Internal).</span>
                      </li>

                      <h4 className="info_title">Your date of birth information</h4>

                      <li>
                        <span className="list_item_text">
                          For product rental and finance applications as well as fraud prevention.</span>
                      </li>

                      <h4 className="info_title">Your payment information</h4>
                      <li>
                        <span className="list_item_text">
                          We use credit/debit card details on our servers ONLY for payment that you agree on. These are processed directly by the credit card company.
                        </span>
                      </li>
                      <h4 className="info_title">Your contact history with us</h4>

                      <li>
                        <span className="list_item_text">
                          For customer service and support.</span>
                      </li>
                      <h3 className="warpper_title">Purchase history and saved items</h3>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> What you’ve bought and what you’ve stored in your basket for another time.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> To remember your wish list.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> To provide customer service, support and to deal with returns.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span>To comply with legal obligations about looking after your data, to prevent and detect fraud against either you or Hawa Dolo Ltd.</span>
                      </li>
                      <h4 className="info_title">Visitors to our website</h4>
                      <li>
                        <span className="list_item_text">
                          When someone visits ,
                          <Link className="link" href="/" target="_blank">
                            www.uncle.ke
                          </Link>, we use a behavior analysis or third-party service, such as Google Analytics, to collect standard internet log information and details of visitor behavior patterns if necessary. We do this to find out things such as the number of visitors to the various parts of the site. This information is only processed in a way which does not identify anyone. We do not make, and do not allow Google or third-party to make, any attempt to find out the identities of those visiting our website. If we do want to collect personally identifiable information through our website, we will be up front about this. We will make it clear when we collect personal information and will explain what we intend to do with it.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          We reserve the right to remove, alter or modify voucher codes at our discretion without prior notice.
                          You will automatically be billed for monthly rental fee on the same date as the first payment date each month within the contract period.
                          If you do not want to pay for your goods online, you can simply call our Sales Team on 0702062075 who will process your order and take your card details over the phone.
                        </span>
                      </li>
                      <h4 className="info_title">Sharing your information</h4>
                      <li>
                        <span className="list_item_text">
                          We will not sell or rent your personal data to a third party including your name, address, email address. However, to fulfil your order or service we will share it with:                        </span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Payment service providers.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Delivery companies.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Professional service providers, such as marketing agencies, advertising partners and website hosts who help us run our business.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Online review platforms.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Credit reference agencies, finance companies, law enforcement and fraud prevention agencies.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Manufacturers or Distributors (Such as Opalnet Kenya) when spare parts are sent to you or for warranty purposes.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Service engineers or technicians repairing products in your home or work premises.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> We may provide third parties with anonymized information and analytics about our customers and, before we do so, we will make sure that it does not identify you. We also anonymize and aggregate personal information (so that it does not identify you) and use it for purposes including testing our IT systems, improving our website and to develop new products and services. We also share this information with third parties.</span>
                      </li>
                      <h4 className="info_title">Other companies within Hawa Dolo Limited</h4>

                      <li>
                        <span className="list_item_text">
                          We don’t have with other companies as a Group.
                        </span>
                      </li>
                      <h4 className="info_title">Marketing messages</h4>

                      <li>
                        <span className="list_item_text">
                          We will only send you marketing messages if you consent for us to do so. You can stop receiving marketing messages from us at any time. You can do this:</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Through your online account.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> By clicking on the ‘unsubscribe’ link in any email.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> By emailing
                          <Link className="link" href=" support@uncle.ke">
                            support@uncle.ke
                          </Link>
                          or by writing to Hawa Dolo Ltd.</span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          Once you do this, we will update your profile to ensure that you don’t receive further marketing messages. Please note that we will update our systems as quickly as we can but you may still get messages from us while we process your request. Stopping marketing messages will not stop communications in regards to orders or customer-related issues. We also engage in online advertising to keep you aware of what we’re up to and to help you find our products.
                        </span>
                      </li>
                      <h4 className="info_title">Online advertising</h4>
                      <li>
                        <span className="list_item_text">
                          Like many companies, we target Hawa Dolo banners and ads to you when you are on other websites and apps. We do this using a variety of digital marketing networks and ad exchanges. We also use a range of advertising technologies like pixels, ad tags, cookies, and mobile identifiers, as well as specific services offered by some sites and social networks such as Facebook. The banners and ads you see will be based on information we hold about you, your previous use of Hawa Dolo banners/ads that you have previously clicked on.
                        </span>
                      </li>
                      <h4 className="info_title">Cookies</h4>
                      <li>
                        <span className="list_item_text">
                          We use cookies on our website. For more information on cookies and how to remove them, please see our cookie policy here.
                        </span>
                      </li>

                      <h4 className="info_title">Your information</h4>
                      <li>
                        <span className="list_item_text">
                          We will keep your information for either as long as you have an account, as long as is needed to be able to provide the services to you or for as long as is necessary to provide product-related services. Unless otherwise required by law, your data will be stored for a period of years after our last contact with you before being deleted. If required to meet legal or regulatory requirements, resolve disputes, prevent fraud, or enforce our terms and conditions.
                        </span>
                      </li>
                      <h4 className="info_title">Your rights</h4>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to be informed about how your personal information is being used.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to access the personal information we hold about you.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to request the correction of inaccurate personal information we hold about you.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to request that we delete your data or stop processing it or collecting it, in some circumstances.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to stop direct marketing messages and withdraw consent for other consent-based processing at any time.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to request that we transfer or port elements of your data either to you or another service provider.</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> The right to complain to your data protection regulator.</span>
                      </li>

                      <h4 className="info_title">How long we retain your data.</h4>

                      <li>
                        <span className="list_item_text">
                          We retain a record of your personal information in order to provide you with a high quality and consistent service. We will always retain your information in accordance with the General Data Protection Regulation (GDPR) and will never retain your information for longer than is necessary. Unless otherwise required by law, your data will be stored for a period of 7 years after our last contact with you, at which point it will be deleted.                            </span>
                      </li>
                      <h4 className="info_title">Transfer of personal data outside the Kenya.</h4>
                      <li>
                        <span className="list_item_text">
                          Although we are based in Kenya, we may transfer your personal information to a location (for example, to a secure server) outside of Kenya, if we consider it necessary or desirable for the purposes set out in this notice. In such cases, to safeguard your privacy rights, transfers will be made to recipients in which an “adequacy decision” applies. This is a decision from the ICO confirming that adequate safeguards are in place in that location for the protection of personal data or will be carried out under standard contractual clauses that have been approved by the ICO as providing appropriate safeguards for international personal data transfers.
                        </span>
                      </li>

                      <h4 className="info_title">Changes to our privacy statement.</h4>
                      <li>
                        <span className="list_item_text">
                          If significant changes are made to this statement, we will make it clear on our websites or via customer email so that you so that you are able to review the changes before you continue to receive marketing messages from us.                        </span>
                      </li>

                      <h4 className="info_title">How to contact us.</h4>
                      <li>
                        <span className="list_item_text">
                          If you want to exercise your rights, make a complaint or just have questions regarding the privacy statement, then please contact us by emailing ,
                          <Link href="mailto:support@uncle.ke" className="link">
                            support@uncle.ke.
                          </Link>
                        </span>
                      </li>

                      <h3 className="info_title">Credit Reference Agency Information Notice.</h3>
                      <li>
                        <span className="list_item_text">
                          In order to process your application, we will perform credit and identity checks on you with one or more credit reference agencies (“CRAs”). Where you take banking services from us we may also make periodic searches at CRAs to manage your account with us.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          Please note that we currently only use Creditinfo Kenya to check our customers&apos Credit Scores, but we may use other agencies in addition if necessary.                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          To do this, we will supply your personal information to CRAs and they will give us information about you. This will include information from your credit application and about your financial situation and financial history. CRAs will supply to us both public (including the electoral register) and shared credit, financial situation and financial history information and fraud prevention information.                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          <strong>We will use this information to:</strong>
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Assess your creditworthiness and whether you can afford to take the product;</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Verify the accuracy of the data you have provided to us;</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Prevent criminal activity, fraud and money laundering;</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Manage your account(s);</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Trace and recover debts; and</span>
                      </li>
                      <li>
                        <i className="fas fa-circle"></i>
                        <span> Ensure any offers provided to you are appropriate to your circumstances.</span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          <strong>We will continue to exchange information about you with CRAs while you have a relationship with us.</strong> We will also inform the CRAs about your settled accounts. If you borrow and do not repay in full and on time, CRAs will record the outstanding debt. This information may be supplied to other organisations by CRAs.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          <strong>Note: Hawa Dolo Limited may seek your approval to obtain credit evaluation data from external sources, including mobile carriers, financial institutions, credit bureaus, or other third-party credit assessment companies. This information would be utilized to 1) contact you (if applicable), and 2) generate a credit profile, which could influence the pricing of our offerings based on your credit assessment. You reserve the right to grant or deny this request.
                            By consenting to Hawa Dolo Limited&aposs request (which may be conveyed to you through various channels, such as SMS or email during the purchase process), you authorize Hawa Dolo Limited to initiate procedures to acquire your personal details and credit evaluation (potentially involving an informational call). Furthermore, you agree to the sharing of your personal data between Uncle and the third-party credit assessment provider, subject to applicable legal requirements.
                            You maintain the ability to revoke your consent at any stage by refusing to grant further permissions. Uncle&aposs Privacy Policy governs all aspects of the credit evaluation information request. Uncle assumes no liability for any errors, delays, failures, or unavailability of the credit evaluation service. You agree to hold Uncle harmless from any detriment, damage, or loss you may incur due to unfavorable credit information, unavailability of credit information, or any errors, delays, failures, or unavailability of the service.</strong>
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          When CRAs receive a search from us they will place a search footprint on your credit file that may be seen by other lenders.                      </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          If you are making a joint application or tell us that you have a spouse or financial associate, we will link your records together, so you should make sure you discuss this with them, and share with them this information, before lodging the application. CRAs will also link your records together and these links will remain on your and their files until such time as you or your partner successfully files for a disassociation with the CRAs to break that link.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          <strong>
                            The identities of the CRAs, their role also as fraud prevention agencies, the data they hold, the ways in which they use and share personal information, data retention periods and your data protection rights with the CRAs are explained in more detail at https://ke.creditinfo.com.
                          </strong>
                        </span>
                      </li>
                    </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default PrivacyPolicyMain;
