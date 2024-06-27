import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <section className="error-area">
    <div className="container container-small">
      <div className="row">
        <div className="col-lg-12">
          <div className="error-content">
            <h3>Payment Failed!!!</h3>
            <p>Payment was not Successfully completed </p>
            {/* <p>Transaction ID:1254284759352</p> */}
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default page