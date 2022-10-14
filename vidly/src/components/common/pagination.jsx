import React, { Component } from "react";
// Input : Array of movies
// Output : Array separated
import _ from "lodash";

const Pagination = (props) => {
  const { itemsCount, pageSize } = props;
  let pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;

  const pages = _.range(1, pagesCount + 1);

  //console.log(itemsCount % pageSize !== 0);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((page) => (
          <li key={page} className="page-item">
            <a className="page-link" style={{ cursor: "pointer" }}>
              {page}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
