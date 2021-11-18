import React from 'react';

export default ({ handleClick, currentPage, number, page } ) => {

  return (
    <li
      key={number}
      id={number}
      style={Number(page) === number ? { backgroundColor: 'coral' } : null}
      onClick={handleClick}
      className='page-nos'
    >
      {number}
    </li>
  )
}