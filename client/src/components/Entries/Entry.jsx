import React from 'react';
import GeneralEntry from './GeneralEntry.jsx';
import DetailedEntry from './DetailedEntry.jsx';

export default (props) => {
  const { style, showIndividualEntry, sport, entry, format, no, currentActivity } = props;
  return (
    <div>
      <GeneralEntry style={style} sport={sport} no={no} entry={entry} format={format} showIndividualEntry={showIndividualEntry} />
      {currentActivity.id === entry.id ?
        <DetailedEntry style={style} currentActivity={currentActivity} /> : null
      }
    </div >
  )
}