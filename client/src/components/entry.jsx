import React from 'react';
import '../App.css';
import GeneralEntry from './Entries/GeneralEntry.jsx';
import DetailedEntry from './Entries/DetailedEntry.jsx';

export default (props) => {
  const { style, showIndividualEntry, sport, entry, format, no, currentActivity } = props;
  const { innerEntry, entryTitle, speed } = style;

  return (
    <div>
      <GeneralEntry style={style} sport={sport} no={no} entry={entry} format={format} showIndividualEntry={showIndividualEntry} />
      {currentActivity.id === entry.id ?
        <DetailedEntry style={style} currentActivity={currentActivity} /> : null
      }
    </div >
  )
}