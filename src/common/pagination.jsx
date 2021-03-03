import React, { Component } from "react";
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize, currentPage, onPageChange } = props;
  console.log("c", currentPage);
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <div className="container">
      <nav>
        <ul className="pagination">
          {pages.map((page) => (
            <li
              key={page}
              className={
                page === currentPage ? "page-item active" : "page-item"
              }
            >
              <a
                className="page-link"
                onClick={() => {
                  onPageChange(page);
                }}
              >
                {page}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
