import React from 'react';
import EntryUl from './Entries/EntryUl.jsx';
import PageNoUl from './pageNoContainer/PageNoUl.jsx';

const Report = (props) => {
  const { style, handleClick, currentPage, entries, entriesPerPage, currentActivity, showIndividualEntry, sport, format, isLoaded, invalidEntry } = props;

  return (
    <div id='report'>
      <EntryUl style={style} sport={sport} format={format} currentActivity={currentActivity} entries={entries} entriesPerPage={entriesPerPage} currentPage={currentPage} isLoaded={isLoaded} invalidEntry={invalidEntry} showIndividualEntry={showIndividualEntry} />
      <PageNoUl handleClick={handleClick} currentPage={currentPage} entries={entries} entriesPerPage={entriesPerPage} style={style} />
    </div>
  )
};

export default Report;
