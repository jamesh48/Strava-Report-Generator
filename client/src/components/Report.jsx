import React from 'react';
const Report = (props) => {
  const {style} = props;
  const {entryUls} = style;

  return (
    <div id='report'>
      <ul className={entryUls}>
        {((props.currentEntries.length === 0 && props.isLoaded === true) || props.invalidEntry === true) ? props.renderEmpty() : props.renderEntries}
      </ul>
      <ul className='page-no-uls' id='page-numbers'>
        {props.renderPageNumbers()}
      </ul>
    </div>
  )
};

export default Report;
