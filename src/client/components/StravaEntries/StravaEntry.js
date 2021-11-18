import React from 'react';
import GeneralEntry from 'StravaEntries/GeneralEntry.js';
import DetailedEntry from 'StravaEntries/DetailedEntry.js';

export default ({ showIndividualEntry, sport, entry, format, no, currentActivity }) => {

  return (
    <div>
      <GeneralEntry sport={sport} no={no} entry={entry} format={format} showIndividualEntry={showIndividualEntry} />
      {currentActivity.id === entry.id ?
        <DetailedEntry currentActivity={currentActivity} /> : null
      }
    </div >
  )
}