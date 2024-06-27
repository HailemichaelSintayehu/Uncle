import React from "react";

type Props = {
  total?:number,
  page:number,
  setPage: (a:any) => void
}
const Pagination = ({total, page, setPage}:Props) => {
  return (
    <>
      <div className="col-xxl-12">
        <div
          className="bd-basic__pagination d-flex justify-content-center mt-40 mb-45"
          data-wow-delay=".3s"
        >
          <nav>
            <ul>
              {
                Array.from({ length: Math.ceil(total as number / 12)}).map((_, i) => (
                  <li key={i} className={page === i? "active" : ""}>
                    <button onClick={() => setPage(i)}>
                      {i + 1}
                    </button>
                  </li>
                ))
              }
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Pagination;
