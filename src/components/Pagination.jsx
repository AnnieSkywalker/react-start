import React from 'react';
import { getPagesArray } from '../utils/pages';

const Pagination = ({totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);

    return (
      <div className="pagination">
          {pagesArray.map(p =>
              <span onClick={() => changePage(p)} key={p} className={p === page? 'pagination__page pagination__page_current' : 'pagination__page'}>{p}</span>
          )}
      </div>
    );
}

export default Pagination;
