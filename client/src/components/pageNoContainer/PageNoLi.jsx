import React from 'react';

export default (props) => {
  const { styleX, handleClick, currentPage, number, page } = props;
  const { pageNos } = styleX;

  return (
    <li
      key={number}
      id={number}
      style={Number(page) === number ? { backgroundColor: 'coral' } : null}
      onClick={handleClick}
      className={pageNos}
    >
      {number}
    </li>
  )
}