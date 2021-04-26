import React from 'react';
import PageNo from './PageNoLi.jsx'

export default (props) => {
  const { style, entries, entriesPerPage, currentPage, handleClick } = props;
  const { pageNoUls } = style;

  const renderPageNumbers = () => {
    return [...new Array(Math.ceil(entries.length / entriesPerPage))].map((x, index) => {
      return (index + 1);
    }).map(number => {
      return (
        <PageNo key={number} styleX={style} number={number} page={currentPage} handleClick={handleClick} />
      )
    });
  }

  return (
    <ul className={pageNoUls} id='page-numbers'>
      {renderPageNumbers()}
    </ul>
  )
}