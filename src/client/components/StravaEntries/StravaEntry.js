import React from "react";
import GeneralEntry from "StravaEntries/GeneralEntry.js";
import DetailedEntry from "StravaEntries/DetailedEntry.js";

export default ({
  showIndividualEntry,
  sport,
  entry,
  format,
  no,
  currentActivity
}) => (
  <div>
    <GeneralEntry
      sport={sport}
      no={no}
      entry={entry}
      format={format}
      showIndividualEntry={showIndividualEntry}
    />
    {currentActivity.id === Number(entry.activityId) && (
      <DetailedEntry currentActivity={currentActivity} />
    )}
  </div>
);
