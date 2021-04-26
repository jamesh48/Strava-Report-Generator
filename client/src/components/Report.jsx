import React from 'react';
import PageNoUl from './pageNoContainer/PageNoUl.jsx';

const Report = (props) => {
  const { style, handleClick, currentPage, entries, entriesPerPage } = props;
  const { entryUls, pageNoUls } = style;

  return (
    <div id='report'>
      <ul className={entryUls}>
        {((props.currentEntries.length === 0 && props.isLoaded === true) || props.invalidEntry === true) ? props.renderEmpty() : props.renderEntries}
      </ul>
      <PageNoUl handleClick={handleClick} currentPage={currentPage} entries={entries} entriesPerPage={entriesPerPage} style={style} />
    </div>
  )
};

export default Report;
