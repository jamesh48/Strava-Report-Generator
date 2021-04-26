import React from 'react';
import Entry from './Entry.jsx';
import EmptyEntry from './EmptyEntry.jsx';

export default (props) => {
  const { style, showIndividualEntry, entries, entriesPerPage, currentPage, currentActivity, isLoaded, invalidEntry, sport, format } = props;
  const { entryUls } = style;

  const currentEntries = entries.slice(((currentPage * entriesPerPage) - entriesPerPage), (currentPage * entriesPerPage))

  const renderEntries = currentEntries.map((entry, index) => {
    return <li key={index}><Entry style={style} currentActivity={currentActivity} showIndividualEntry={showIndividualEntry} no={(currentPage === 1 && (index >= 0 && index <= 3)) ? index : undefined} sport={sport} entry={entry} format={format} /></li>
  })

  return (
    <ul className={entryUls}>
      {((currentEntries.length === 0 && isLoaded === true) || invalidEntry === true) ? <EmptyEntry style={style} /> : renderEntries}
    </ul>
  )
}