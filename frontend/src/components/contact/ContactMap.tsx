import React from "react";

const ContactMap = () => {
  return (
    <>
      <div className="contact-map-area mb-120">
        <div className="container container-small">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-map-wrapper">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.569129828207!2d36.8219466!3d-1.2920659!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2552b8bd1%3A0x584c70e7b89b0215!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2sus!4v1623685733837!5m2!1sen!2sus"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
