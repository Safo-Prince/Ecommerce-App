import React from "react";
import _ from "lodash";

import "../css/Pagination.css";
const Pagination = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pagesCount = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  return (
    <>
      <nav className="pagination">
        <ul>
          {pages.map((page) => (
            <li
              className={`pagination__list ${
                page === currentPage ? "list__active" : null
              }`}
              onClick={() => onPageChange(page)}
              key={page}
            >
              {page}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
