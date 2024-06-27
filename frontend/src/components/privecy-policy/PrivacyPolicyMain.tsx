import React from "react";
import Link from "next/link";
import RefundForm from "./RefundForm";
import BreadCrumb from "../SharedComponents/BreadCrumb";
const PrivacyPolicyMain = () => {
  return (
    <>
      <BreadCrumb title="Privecy Policy" />
      <section className="terms_conditions_section section_space_lg pt-120">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-3">
              <ul
                className="nav tabs_nav_boxed unordered_list_block mb-60"
                role="tablist"
              >
                <li role="presentation">
                  <button
                    className="active"
                    data-bs-toggle="tab"
                    data-bs-target="#tab_privacy_policy"
                    type="button"
                    role="tab"
                    aria-selected="false"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Terms and Conditions</span>
                  </button>
                </li>
                {/* <li role="presentation">
                  <button
                    data-bs-toggle="tab"
                    data-bs-target="#tab_terms_conditions"
                    type="button"
                    role="tab"
                    aria-selected="true"
                  >
                    <i className="fas fa-circle"></i>
                    <span>Terms & Conditions</span>
                  </button>
                </li> */}

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
                    <h3 className="warpper_title">Terms and Conditions of Sale</h3>
                    <p>
                      This website <strong>www.uncle.ke</strong>, is operated by Hawa Dolo Limited (referred to as &quot;we&quot;, &quot;our&quot; or &quot;us&quot;).
                      These terms will apply to all customer&quot;s (referred to as &quot;you&quot;, &quot;your&quot; or &quot;the buyer&quot;)
                      purchases of items either processed via our website or over the phone line.
                      Please check the conditions below before you make any new purchase as they will be updated from time to time.
                    </p>

                    <h4 className="info_title">Note:</h4>
                    <p>
                      The contract&apos;s content will be stored.
                      You may store the terms found here and readily look them up.
                      For safety reasons your personal data is not available via the internet.
                      We keep this data in confidence according to our Privacy Policy.
                    </p>

                    <ul className="icon_list  unordered_list_block">
                      <h4 className="info_title">Contact Details And communication</h4>

                      <li>
                        <span className="list_item_text">
                          You authorize <strong>Hawa Dolo</strong> Limited to send electronic communications to the contact details you provide in the Agreement.
                          Ensuring the accuracy and completeness of such information is your sole responsibility.
                          This enables Hawa Dolo Limited to reach you or your Designated Contact Person during reasonable hours concerning matters related to Your Account.
                          You acknowledge and accept that it is your exclusive obligation to maintain your contact details current.
                          Any notice issued by Hawa Dolo Limited based on the contact details you have provided will be deemed received by you, regardless of whether you have actually received the communication or not.
                        </span>
                      </li>
                      <h4 className="info_title">Prices</h4>

                      <li>
                        <span className="list_item_text">
                          All prices are shown in Kenyan Shilling (KES) inclusive of any VAT payable at the rate prevailing at the time of dispatch.
                          All prices include delivery which is deemed to be free of charge for orders with a value over KES 1,000 (Monthly Rental Price) to all Nairobi area.
                          A order with a value less than KES 1,000 will be added for orders under this amount.

                          We can deliver all of our items to any address within Nairobi. Unfortunately, we are unable to deliver to overseas.
                          Delivery to remote areas, which are not in Nairobi will be subject to additional delivery costs as confirmed below:
                          In Nairobi Area (Only for orders with a value less than KES 1,000 per month): KES 500.00
                          In case that the distance outside of Nairobi is too far for delivery, we may charge additional delivery fees.
                        </span>
                      </li>
                      <h4 className="info_title">Payment</h4>

                      <li>
                        <span className="list_item_text">
                          We accept the following payment methods: PayPal, Visa, Visa Debit, MasterCard, MasterCard Debit, and M-Pesa.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          Note: If you wish to make payments using M-Pesa, you must pay in full in advance all costs incurred during the contract period.
                          If you prefer to pay on a monthly basis, you must select a credit / Debit card as your payment method.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">

                          Card payments will be subject to fraud prevention.
                          Verified by Visa and MasterCard SecureCode are implemented on our site and you may be required to sign up to this service during the checkout process if you are not yet registered.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">

                          If the delivery address is different from the invoice address,
                          or depends on your credit notes, delivery places, we may require a copy of a recent utility bill and another form of identification for the prevention of fraud for both parties.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">

                          All prices are subject to change and withdrawal without notice.
                          We will not be held responsible for any price errors.
                          If in the case that an item is purchased at an incorrect price, we will contact you to either provide the correct price, give you the option to re-order or cancel with a full refund.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          We reserve the right to remove, alter or modify voucher codes at our discretion without prior notice.
                          You will automatically be billed for monthly rental fee on the same date as the first payment date each month within the contract period.
                          If you do not want to pay for your goods online, you can simply call our Sales Team on 0702062075 who will process your order and take your card details over the phone.
                        </span>
                      </li>
                      <h4 className="info_title">Delivery</h4>
                      <li>
                        <span className="list_item_text">
                          We will supply the product as supplied to us by the manufacturer.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          We will endeavor to deliver goods within the times stated but goods are subject to availability and any delay in the delivery of goods is sometimes out of our control.
                          Stated delivery times are approximate; we will contact you with confirmed delivery date after purchase at a time that is suitable for you.
                          If you have any queries regarding delivery prior to purchase, we can offer you more precise information by speaking to one of our Sales Team on 0702062075 or alternatively emailing us at {" "}
                          <Link className="link" href="hawadologroup@gmail.com">
                            hawadologroup@gmail.com
                          </Link>.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          We shall not be liable for any costs, damages, charges, losses or expenses caused by any delay for delivery of any item purchased from us.
                          Please allow enough time for items to be delivered before organising installation as we cannot be held responsible for any expenses resulting from delays in delivery.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          A contact telephone number must be provided on which we can reach you both the day before and the day of the delivery. Failure to provide a contact number or to be unavailable (after reasonable attempts) may result in cancellation of the order.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          Please remember that all deliveries require a signature AFTER inspection, items cannot be left without a signature, or cannot be signed &apos;unchecked&apos;.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          Should you notice any damage to any appliance or packaging, please note this down next to your signature. For example &quot;box damaged, broken, dented&quot;. The duty is on the buyer to prove the damaged was caused during transit.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          If any items are damaged and the delivery note has been marked &apos;unchecked&apos;,
                          at our discretion we will offer a 50% refund of the monthly rental price paid only.
                          It is therefore in the buyer&apos;s interest to open the item, check it and mark any damages on the driver&apos;s delivery note.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          Any damage must be reported within 7 days of delivery. We will not accept any claim made after the 1-week period.                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          It is your responsibility to ensure that you have signed for the correct number of goods delivered. At time of delivery, you must also check that you have received the correct goods in accordance with your order.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          If the premises have restricted access, potential parking problems or flights of stairs, this must be noted at the time of ordering. We reserve the right to refuse delivery to a property should a one-man delivery have been sent by us (based on your information or omission of information), but the access is considered in breach of health and safety guidelines by one of our drivers. Help on site may also be required for large bulky appliances such as range cookers, fridge-freezers, washing machines and any other item deemed too heavy under health and safety guidelines. Should assistance not be available during delivery this should be highlighted at the time of ordering. Clear access for the delivery vehicle will be required as close as possible to the entrance of the property. Whilst our own drivers are available to place your goods into the unobstructed room of your choice, we cannot be held responsible for any damage incurred (especially to furniture or floor coverings).
                        </span>
                      </li>

                      <li>
                        <span className="list_item_text">
                          Installation is included with delivery. All gas installations, connections and/ or disconnections must be performed ONLY by our registered engineer. All mains wired electric appliances should only be connected by a qualified electrician.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          If our personnel do not perform the installation and the customer opts to install the product themselves or through a third party, or in the event the product is reinstalled without notifying us, additional charges may apply.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          Please note: there are costs associated with the delivery process, and should delivery fail due to customers not being present during the organized delivery appointment, or for other customer or site-related reasons (i.e. restricted access or flights of stairs), then we reserve the right to charge a fee of up to KES 10,000 to cover the cost of further attempts.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          If you want the delivery address to be different from the invoice address, we may request a copy of a recent utility bill and another form of identification which connects you to the property for the prevention of fraud for both parties.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          <strong>Please Note: </strong>
                          If you have chosen to have an old appliance collected, please be sure to have the item disconnected, free of water and ready to collect upon delivery of your new item. We will not be able to collect any item that has not been uninstalled. A further collection fee of up to KES 10,000 will be charged if you require re-collection of an old appliance that has not been removed from housing.                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">
                      Product Relocation
                    </h4>
                    <li>
                      <span className="list_item_text">
                        If you wish to relocate or move the Product(s) from the registered address, you must submit a request to Hawa Dolo Limited at least two (2) weeks prior to the desired relocation date, along with proof of address for the new location. Upon receiving your request, Hawa Dolo Limited shall facilitate the removal or relocation of the Product through its personnel only, on a mutually agreed date with you. Relocation is subject to successful verification of your KYC documentation for the new address and serviceability of the new location by Hawa Dolo Limited. In the event that the new location is not serviceable by Hawa Dolo Limited, the relocation request shall be treated as an early termination of the Agreement, and rental dues shall be payable in accordance with the terms.
                      </span>
                    </li>

                    <h4 className="info_title">
                      Acceptance of Orders
                    </h4>
                    <li>
                      <span className="list_item_text">
                        The sending or giving to us of an order constitutes an offer which we may accept or decline to accept without giving any reason. Any e-mail or other electronic acknowledgment by us of receipt of an order placed by you does not constitute legal acceptance by us of your order, we reserve the right to cancel the order and provide a full refund if the order does not comply with any of our policies. We will confirm acceptance or otherwise of your order either by email or by telephone after purchase and provide an estimated delivery date. A contract will only be made between you and us once we accept your order and have charged your credit/ debit card or PayPal account.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Authority for payment must be given at the time of the order. Payment for your order will be taken once stock availability has been confirmed. If the goods ordered are unavailable, you will be contacted by e-mail or telephone and will have the option to wait until the stock is available, replace it with an alternative product or cancel your order. Payment will be taken for out of stock appliances to secure stock only if you agree to wait for the appliance.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If an order is received for a discontinued product we will provide the up-to-date equivalent automatically, providing it is available and the same price as the discontinued model. If this is not the case, we will contact you. Items with special or discounted prices are only available whilst stocks last.                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Many smaller items ordered before 11 AM and held in stock will be dispatched the same day for next two days delivery, in this case you will also receive a dispatch notification on the day of purchase. Orders after 1pm will usually be sent the following day and confirmed with a dispatch notification email. For weekend transactions, smaller items would be sent on Monday (excluding Bank Holidays).
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        For larger items requiring us to book a delivery appointment with you, a member of our Sales Team will be in contact within 24 hours (excluding weekends) and you will be given stock availability with an expected delivery date.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Small Items: Fan, Microwaves, Water Dispenser                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Large Items: Refrigerator, Washing Machine, Oven, TV
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        All orders are subject to availability while stocks last. You would be informed of any extended lead times beyond 7 days within 48 hours after purchase and offered the option to wait until the item is back in stock, an alternative item offered or given a complete refund.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Return of Products
                    </h4>
                    <li>
                      <span className="list_item_text">
                        We will contact you regarding the pick-up time for product returns 14 days prior to the end day of the contract period. If the return is delayed beyond the specified date due to reasons not deemed valid by us and are solely the responsibility of the customer, we reserve the right to impose a penalty of 5% of the monthly rental price of the product (not the promotion rental price, the regular price) for each day of delay. If the product is not returned after 20 days and attempts to contact are unsuccessful, the customer may be subject to legal action
                      </span>
                    </li>
                    <h4 className="info_title">
                      Guarantee
                    </h4>
                    <li>
                      <span className="list_item_text">
                        All products sold by us are covered by a minimum 12-month guarantee. You can see the exact guarantee offered for a chosen product within the item’s specification page.                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        You must not attempt to repair any items yourself or contact a third party to repair the faulty goods. This will void the manufacturers&apos; warranty. Fair wear and tear in our reasonable opinion, abnormal working conditions (i.e. non-domestic use),
                        failure to follow manufacturer instructions, misuse, alteration, accidental damage, deliberate damage or negligence will also void the manufacturers&apos; warranty.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Use of appliances for commercial purposes will invalidate any warranty.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Extended warranties are available from most manufacturers and other providers should your goods eventually fall outside of their warranty date. This is recommended by us.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Cancellation
                    </h4>
                    <li>
                      <span className="list_item_text">
                        You have the right to cancel this contract within 7 days without giving any reason. The cancellation period will expire after 7 days from the day on which you acquire, or a third party other than the carrier and indicated by you acquires, physical possession of the last good. To exercise the right to cancel, you must inform us HAWA DOLO Limited, 9 Hendred Road, Valley Arcade Mini Mall, Nairobi, Kenya of your decision to cancel this contract by a clear statement (e.g. a letter sent by post or e-mail). To meet the cancellation deadline, it is sufficient for you to send your communication concerning your exercise of the right to cancel before the cancellation period has expired. We will respond to your email within 2 working day. Under the terms of the distance selling directive, you as the customer have a duty of care for the product whilst it is in your possession. You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If you terminate the contract after 7 days from receiving the delivery, you will not be entitled to any refund for the monthly rental fee already paid, without valid reason. Furthermore, charges for the previously complimentary shipping service and promotion amount that you have received will be invoiced.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        The following table illustrates additional delivery costs incurred due to customer-initiated contract suspensions during the contract period.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        In Nairobi Area (Only for orders with a value over KES 1,000): KES 2,000 (Including first free shipping service)
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        In Nairobi Area (Only for orders with a value less than KES 1,000): KES 500
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        In case that the distance outside of Nairobi is too far for delivery, we may charge additional delivery fees.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Note: If cancellation is requested after 7 days, we reserve the right to withhold refunds without valid reasons. Additionally, early termination during the contracted period after 7 days may incur additional charges for discounted promotional costs received monthly.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Note: If the designated payment date (monthly recurring) has passed, and despite reasonable efforts to contact you, we are unable to reach you, the contract will be automatically canceled three days after the payment date. The customer can extend the payment period by up to 7 days, however, if the payment couldn’t be made in the 7-day period, the contract will be automatically terminated. Consequently, the customer will be liable to pay additional charges due to contract cancellation.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Effects of cancellation
                    </h4>
                    <li>
                      <span className="list_item_text">
                        If you cancel this contract, we will reimburse to you all payments received from you, including the costs of delivery (except for the supplementary costs arising if you chose a type of delivery other than the least ex-pensive type of standard delivery offered by us). We may make a deduction from the reimbursement for loss in value of any goods supplied, if the loss is the result of unnecessary handling by you.
                      </span>
                    </li>
                    <strong>How</strong>
                    <li>
                      <span className="list_item_text">
                        [a] 14 working days after the day we receive back from you any goods supplied, or
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        [b] (if earlier) 14 working days after the day you provide evidence that you have returned the goods, or
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        [c] if there were no goods supplied, 14 working days after the day on which we are informed about your decision to cancel this contract.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        We will make the reimbursement using the same means of payment as you used for the initial transaction, unless you have expressly agreed otherwise; in any event, you will not incur any fees as a result of the reimbursement. We may withhold reimbursement until we have received the goods back or you have supplied evidence of having sent back the goods, whichever is the earliest.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        You shall send back the goods or hand them over to us without undue delay and in any event not later than 7 days from the day on which you communicate your cancellation from this contract to us. The deadline is met if you send back the goods before the period of 7 days has expired. You will have to bear the direct cost of returning the goods. In case of goods, which by their nature cannot normally be returned by post, the cost is estimated at a maximum of KES 20,000. You are only liable for any diminished value of the goods resulting from the handling other than what is necessary to establish the nature, characteristics and functioning of the goods. Under the terms of the distance selling directive, you as the customer have a duty of care for the product whilst it is in your possession.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Please be aware – A maximum fee of KES 20,000 may apply to delivery or collection cancellations or rescheduled deliveries or collections. Where an order or collection has been cancelled, the cancellation fee will be deducted from your final refund. Where a delivery or collection has been rescheduled, we will require payment prior to re-delivery.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If after delivery it is found that you have ordered the incorrect item, please call or email us to arrange collection and subsequent re-delivery of an alternative product. Please be careful when selecting your appliances to ensure they are the ones you require as we charge for collections as follows:
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        In Nairobi Area (Only for orders with a value over KES 1,000): KES 2,000 (Including first free shipping service)
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        In Nairobi Area (Only for orders with a value less than KES 1,000): KES 500                        </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        In case that the distance outside of Nairobi is too far for delivery, we may charge additional delivery fees.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Damaged & Faulty & lost Items
                    </h4>
                    <li>
                      <span className="list_item_text">
                        Claims for damage after delivery will not be accepted once the item has been signed for. It is therefore essential to check all goods at the time of delivery and note this to the delivery team before they leave your property. If any of the goods are damaged, they must be refused at the point of delivery. Items cannot be left without a signature, or can be signed &apos;unchecked&apos;. Installation of a damaged item is classed as acceptance of the item and hence,  Hawa Dolo Limited is not required to swap or offer refunds goods where damage has been noted prior to installation.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If your product appears not to be working correctly, please first check the manufacturers instruction book to ensure that it has been installed and is being used correctly.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        All products sold by Hawa Dolo are covered by a minimum 12-month guarantee. You can see the exact guarantee offered for a chosen product within the item&apos;s specification page.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If you find a fault after the goods have been fitted, we reserve the right to request that you first email or call us (stating your order number) to report the defect within 2 days of discovery. Secondly, allow us to arrange a manufacturer&apos;s engineer to visit your home to inspect the faulty appliance. We shall at our option repair or replace such goods (or the defective part) or refund the price of such goods, whichever is considered to be economically viable by us.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Any damage must be reported within 7 days of delivery. We will not accept any claim made after the 1-week period.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If the engineer cannot find a fault with the product you may incur a call out charge.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If an exchange is necessary, the manufacturer will arrange this without unreasonable delay and without charge. In most cases an uplift number will be provided by the engineer to authorise a replacement, this must be provided to us before we can replace the faulty appliance.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        You must not attempt to repair any items yourself or contract a third party to repair the faulty goods. This will void the manufacturers&apos; warranty. Fair wear and tear in our reasonable opinion, abnormal working conditions (i.e. non-domestic use), failure to follow manufacturer instructions, misuse, alteration, accidental damage, deliberate damage or negligence will also void the manufacturers&apos; warranty.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Extended warranties are available from most manufacturers and other providers should your goods eventually fall outside of their warranty date. This is recommended by us.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        If you steal or lose the item, you are obligated to reimburse the full value of the item. In such cases, if intent is proven, you may also be subject to civil and criminal liabilities.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        Note: You agree to provide Hawa Dolo Limited, its employees or authorized agents with reasonable access and opportunity to inspect the rented products at any time, subject to appropriate notice. This includes, but is not limited to, inspections related to repair services or investigations into any suspected fraudulent use of the Products during the term of the Agreement.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Refunds
                    </h4>
                    <li>
                      <span className="list_item_text">
                        All requests for refunds can be made via email to
                        <Link className="link" href="hawadologroup@gmail.com">
                          hawadologroup@gmail.com
                        </Link>.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        All refunds due for whatever reason will be made immediately after the goods have been received back and inspected (it may take up to 14 working days for goods to be received back to us after collection from your premises). Any deductions applicable, such as collection charges, damage or missing items will be deducted from the refund due. Please note that the funds may not appear in your bank account or on your statement for 14 working days.                      </span>
                    </li>
                    <h4 className="info_title">
                      Product Swap Option
                    </h4>
                    <li>
                      <span className="list_item_text">
                        Hawa Dolo Limited provides you with an option to swap out the Products taken on a rental basis, subject to the following terms and conditions:
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        a. You are eligible to swap a Product after completing a minimum continuous tenure of 18 (eighteen) months;                       </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        b. The swap option is valid only for Products of equal or higher value compared to your current rented Product;
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        c. The time required for swapping a Product shall be 7 (seven) days from receipt of your request by Hawa Dolo Limited, subject to availability of the new requested Product; and
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        d. The swap option is available only for Products within the same product category.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Liability
                    </h4>
                    <li>
                      <span className="list_item_text">
                        We shall not be liable to you if we are prevented or delayed in performing any of our obligations to you if this is due to any cause beyond our reasonable control e.g. an act of God, explosion, flood, fire or accident, war or civil disturbance, strike, industrial action or stoppages of work, any form of government intervention, a third party act or omission, failure by you to give us a correct email address, contact telephone number or delivery address or notify us of any change of address. If this happens, we shall inform you as soon as is reasonably possible and if these circumstances continue for 30 days either you or we will be free to cancel the contract. If so, we will give you a full refund of any payment we have received from you within 30 days of cancellation.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Product Ownership
                    </h4>
                    <li>
                      <span className="list_item_text">
                        Hawa Dolo Limited and/or its business partners shall retain ownership and beneficial rights over the Products delivered to you pursuant to this Agreement at all times during the term of the Agreement. Nothing in this Agreement shall be construed as a transfer of ownership of the Products to you. You shall immediately notify Hawa Dolo Limited if any Product is about to become liable or is threatened with seizure. You shall indemnify Hawa Dolo Limited against all losses and damages caused by such actions taken against its Products.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Assignment of Rights and Obligations
                    </h4>
                    <li>
                      <span className="list_item_text">
                        You acknowledge that you shall not transfer or assign any rights or obligations outlined in the Agreement without prior written approval from Hawa Dolo Limited. Hawa Dolo Limited reserves the right to transfer or assign the Agreement, or any associated right or obligation, at any time. Furthermore, you consent to such assignment by Hawa Dolo Limited of any rights or obligations stipulated therein, provided that such transfer does not adversely impact your rights and obligations under the Agreement.                      </span>
                    </li>
                    <h4 className="info_title">
                      Indemnification
                    </h4>
                    <li>
                      <span className="list_item_text">
                        You shall indemnify, defend and hold Hawa Dolo Limited harmless from and against any claim, demand, cause of action, loss or liability (including but not limited to attorneys&apos; fees and costs) arising from your use of the Product, whether for damage to the Product or personal injury, except to the extent directly caused by Hawa Dolo Limited&apos;s negligence or willful misconduct. The provisions of this clause shall survive termination of this Agreement with respect to any claim or liability that accrued prior to such termination. Under no circumstances shall Hawa Dolo Limited be liable for any direct, indirect, special or consequential losses or damages resulting from your use of the Products.
                      </span>
                    </li>
                    <h4 className="info_title">
                      Credit Evaluation
                    </h4>
                    <li>
                      <span className="list_item_text">
                        Hawa Dolo Limited may seek your approval to obtain credit evaluation data from external sources, including mobile carriers, financial institutions, credit bureaus, or other third-party credit assessment companies. This information would be utilized to 1) contact you (if applicable), and 2) generate a credit profile, which could influence the pricing of our offerings based on your credit assessment. You reserve the right to grant or deny this request.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        By consenting to Hawa Dolo Limited&apos;s request (which may be conveyed to you through various channels, such as SMS or email during the purchase process), you authorize Hawa Dolo Limited to initiate procedures to acquire your personal details and credit evaluation (potentially involving an informational call). Furthermore, you agree to the sharing of your personal data between Uncle and the third-party credit assessment provider, subject to applicable legal requirements.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        You maintain the ability to revoke your consent at any stage by refusing to grant further permissions. Uncle&apos;s Privacy Policy governs all aspects of the credit evaluation information request. Uncle assumes no liability for any errors, delays, failures, or unavailability of the credit evaluation service. You agree to hold Uncle harmless from any detriment, damage, or loss you may incur due to unfavorable credit information, unavailability of credit information, or any errors, delays, failures, or unavailability of the service.
                      </span>
                    </li>
                    <h4 className="info_title">
                      General Provisions
                    </h4>
                    <li>
                      <span className="list_item_text">
                        <strong>Reporting Concerns: </strong>Hawa Dolo Limited takes concerns of misconduct seriously. To report suspected abuse, fraud, or issues with our employees/agents, email hawadologroup@gmail.com. Anonymous reports are accepted, but providing contact details may aid investigations. Good faith reporting is protected, but intentionally false reports may result in legal action. Reporter identities remain confidential as permitted by law.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        <strong>No Waiver: </strong>Any failure by Hawa Dolo Limited to enforce a term shall not constitute a continuing waiver of that term or any other term. If a term is deemed unenforceable, it may be modified to uphold the intended effect while maintaining other terms in full force.                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        <strong>Modifications: </strong> Hawa Dolo Limited may amend these Terms, rules, products and services at its discretion after providing notice.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                        <strong>Consumer Protection: </strong>No term shall violate applicable consumer protection laws. All terms operate subject to compliance with such laws.
                      </span>
                    </li>
                    <li>
                      <span className="list_item_text">
                      <strong>Governing Law: </strong>These Terms are governed by the laws of Kenya, whose courts shall have exclusive jurisdiction over any disputes relating to the Terms.
                      </span>
                    </li>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="tab_terms_conditions"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">
                      Terms and Conditions Agreement
                    </h3>
                    <p>
                      A terms and conditions agreement outlines the website
                      administrator`’`s rules regarding user behaviour and
                      provides information about the actions the website
                      administrator can and will perform. Essentially, your
                      terms and conditions text is a{" "}
                      <Link className="link" href="/contact">
                        contract between your website and its users
                      </Link>
                      . In the event of a legal dispute, arbitrators will look
                      at it to determine whether each party acted within their
                      rights.
                    </p>
                    <p>
                      Condition is not a new concept. Humans have always desired
                      privacy in their social as well as private lives. But the
                      idea of privacy as a human right is a relatively modern
                      phenomenon.
                    </p>
                    <h4 className="info_title">
                      Here are some of the main reasons:
                    </h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_text">
                          <strong>1. Improved Shopping Experience:</strong> We
                          use your information to enhance your shopping
                          experience, including personalized product
                          recommendations and seamless checkout processes.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          <strong>2. Order Processing:</strong> We collect data
                          to process and fulfill your orders, including shipping
                          and delivery.
                        </span>
                      </li>
                      <li>
                        <span className="list_item_text">
                          <strong>3. Marketing and Communication:</strong> With
                          your consent, we may send you promotional offers and
                          updates via email or SMS.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title">What We Collect</h4>
                    <p>
                      When you use our website, we may collect information such
                      as your name, email address, shipping address, and payment
                      details. This information is used solely for the purpose
                      of providing our services to you.
                      <Link className="link" href="/privacy-policy">
                        what clauses to include in your terms and conditions
                      </Link>
                      , but this clause essentially limits what customers can
                      hold you liable for.
                    </p>

                    <h4 className="info_title">Our Liability Limitations</h4>
                    <p>
                      At Ecomart, we are committed to
                      providing you with a seamless shopping experience.
                      However, {`it's`} essential to understand our limitations
                      and responsibilities. Please read the following carefully:
                    </p>
                    <ul className="icon_list unordered_list_block">
                      <li>

                        <span className="list_item_text">
                          <strong>1. Product Information Accuracy:</strong>{" "}
                          While we strive for accuracy, there may be occasional
                          inaccuracies or errors in product descriptions,
                          pricing, or availability. We reserve the right to
                          correct such errors and may cancel orders affected by
                          inaccuracies.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          <strong>2. Customer Satisfaction:</strong> We aim to
                          ensure your enjoyment when shopping with us. If you
                          have any concerns or are dissatisfied with your
                          purchase, please contact our customer support team,
                          and we will do our best to address your issues.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          <strong>3. Product and Website Availability:</strong>{" "}
                          While we strive to maintain the availability of our
                          products and website, there may be instances of
                          temporary downtime due to maintenance or technical
                          issues. We apologize for any inconvenience this may
                          cause and work to resolve such issues promptly.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          <strong>4. Security and Product Integrity:</strong> We
                          take precautions to protect our website from viruses
                          and spyware. However, we cannot guarantee absolute
                          security. We recommend using up-to-date antivirus
                          software and taking precautions when downloading files
                          or links from our platform.
                        </span>
                      </li>
                    </ul>
                    <p>
                      Please note that by using our website and making
                      purchases, you acknowledge and accept these limitations
                      and policies.
                    </p>

                    <h4 className="info_title">
                      To Outline Policies and Avoid Abusive Behavior
                    </h4>
                    <p className="mb-1">
                      You may direct questions, comments or reports to:
                    </p>
                    <p>
                      <Link
                        className="author_mail"
                        href="Ecomartadmin@gmail.com"
                      >
                        Ecomartadmin@gmail.com
                      </Link>
                    </p>
                    <h4 className="info_title">
                      Revisions to this Teams & Condition without Notice
                    </h4>
                    <p className="mb-0">
                      This Privacy Policy is dynamic. It will continually
                      change. You may not assume that it remains the same and
                      you agree to check the policy each time you visit the site
                      for changes. Unless, in the sole opinion of the website,
                      this policy changes so drastically as to suggest a posted
                      notification on the site or via email, you will receive no
                      notification of changes to this Privacy Policy nor, under
                      any circumstances, does this site promise notification.
                      Your continued use of this site always evidences your
                      acceptance of the terms this Privacy Policy or any
                      modifications.
                    </p>
                  </div>
                </div>

                <div
                  className="tab-pane fade"
                  id="product_refund_policy"
                  role="tabpanel"
                >
                  <div className="terms_conditions_content">
                    <h3 className="warpper_title">Product Refund Policy</h3>
                    <p>
                      At <strong>Ecomart</strong>, we strive to provide you with
                      high-quality products and an exceptional shopping
                      experience. However, we understand that there may be
                      instances where you need to return a product. We want to
                      make the process as smooth as possible for you, so please
                      take a moment to review our product refund policy.
                    </p>

                    <h4 className="info_title">Eligibility for Refund:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>

                        <span className="list_item_text">
                          To be eligible for a refund, the product must be in
                          its original condition, unused, and in its original
                          packaging.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          Returns must be initiated within <strong>7</strong>{" "}
                          days of receiving the product.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          Personalized or customized items may not be eligible
                          for a refund unless they arrive damaged or with a
                          defect.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title">Initiating a Return:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>

                        <span className="list_item_text">
                          To initiate a return, please contact our customer
                          support team at ecomartsupport@gmail.com or 025142874.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          Our customer support team will guide you through the
                          return process and provide you with a Return
                          Merchandise Authorization (RMA) number if required.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          Personalized or customized items may not be eligible
                          for a refund unless they arrive damaged or with a
                          defect.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">Return Shipping:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>

                        <span className="list_item_text">
                          Customers are responsible for the cost of return
                          shipping unless the product arrived damaged or with a
                          defect.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          We recommend using a trackable shipping service to
                          ensure that your return reaches us safely.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">Inspection and Processing:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>

                        <span className="list_item_text">
                          Once we receive your returned product, our team will
                          inspect it to ensure it meets our eligibility
                          criteria.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          If the product qualifies for a refund, we will process
                          the refund within [X] business days.
                        </span>
                      </li>
                      <li>

                        <span className="list_item_text">
                          Refunds will be issued to the original payment method
                          used for the purchase.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">Refund Amount:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>

                        <span className="list_item_text">
                          The refund amount will include the cost of the product
                          and any applicable taxes.
                        </span>
                      </li>

                      <li>

                        <span className="list_item_text">
                          Shipping fees are non-refundable unless the return is
                          due to a shipping error on our part.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title">
                      {" "}
                      Damaged or Defective Products:
                    </h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          If you receive a damaged or defective product, please
                          contact us immediately.
                        </span>
                      </li>

                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          We may request photos or other documentation to assess
                          the issue and provide a replacement or refund.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title"> Exchanges:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          We do not offer direct exchanges. If you need a
                          different product, please return the original item
                          following our refund policy guidelines and place a new
                          order.
                        </span>
                      </li>
                    </ul>

                    <h4 className="info_title"> Non-Refundable Items:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          Gift cards and downloadable software or digital
                          products are non-refundable.
                        </span>
                      </li>
                    </ul>
                    <h4 className="info_title"> Changes to this Policy:</h4>
                    <ul className="icon_list  unordered_list_block">
                      <li>
                        <span className="list_item_icon">
                          <i className="fas fa-circle"></i>
                        </span>
                        <span className="list_item_text">
                          <strong>Ecomart</strong> reserves the right to update
                          or modify this refund policy at any time without prior
                          notice. Any changes will be effective immediately upon
                          posting on our website.
                        </span>
                      </li>
                    </ul>
                    <p>
                      If you have any questions or concerns regarding our
                      product refund policy, please do not hesitate to contact
                      our customer support team. We are here to assist you and
                      ensure that you have a positive shopping experience with
                      us.
                      <br />
                      Thank you for choosing <strong>Ecomart</strong>!
                    </p>
                  </div>
                  <RefundForm />
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
