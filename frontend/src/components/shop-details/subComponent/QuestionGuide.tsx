import QuestionAboutProduct from "@/form/QuestionAboutProduct";
import React, { FC } from "react";
interface QuestionGuideProps{
  item:any
}
const QuestionGuide:FC<QuestionGuideProps> = ({item}) => {
  return (
    <>
      <div
        className="product__modal-sm modal fade"
        id="askQuestino"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered contact_modal"
          role="document"
        >
          <div className="modal-content">
            <div className="product__modal">
              <div className="product__modal-wrapper p-relative">
                <button
                  type="button"
                  className="close product__modal-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  <i className="fal fa-times"></i>
                </button>
                <div className="modal__inner">
                  <div>
                    <h2 className="text-center mb-30">Have a question?</h2>
                    <QuestionAboutProduct item={item}/>
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

export default QuestionGuide;
