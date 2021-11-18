import React from 'react';
import PageNo from './PageNoLi.js'

export default ({entries, entriesPerPage, currentPage, handleClick}) => {
  const renderPageNumbers = () => {
    return [...new Array(Math.ceil(entries.length / entriesPerPage))].map((x, index) => {
      return (index + 1);
    }).map(number => {
      return (
        <PageNo
        key={number}
        number={number}
        page={currentPage}
        handleClick={handleClick}
        />
      )
    });
  }

  return (
    <ul className='page-no-uls' id='page-numbers'>
      {renderPageNumbers()}
    </ul>
  )
}