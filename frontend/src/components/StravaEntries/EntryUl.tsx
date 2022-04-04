import React from "react";
import StravaEntry from "./StravaEntry.js";
import EmptyEntry from "./EmptyEntry";
import { EntryUIProps } from "./EntryTypes.js";
import { useGetAllEntriesQuery } from "../GlobalStore/services/entriesApi.js";

const EntryUI = ({
  showIndividualEntry,
  entries,
  entriesPerPage,
  currentPage,
  currentActivity,
  invalidEntry,
  sport,
  format,
}: EntryUIProps): JSX.Element => {
  const { data: totalEntries, isLoading } = useGetAllEntriesQuery();

  const currentEntries = entries.slice(
    currentPage * entriesPerPage - entriesPerPage,
    currentPage * entriesPerPage,
  );

  const renderEntries = currentEntries.map((entry, index) => {
    return currentActivity ? (
      <li key={index}>
        <StravaEntry
          currentActivity={currentActivity}
          showIndividualEntry={showIndividualEntry}
          no={currentPage === 1 && index >= 0 && index <= 3 ? index : undefined}
          sport={sport}
          entry={entry}
          format={format}
        />
      </li>
    ) : (
      <li key={index}>
        <StravaEntry
          showIndividualEntry={showIndividualEntry}
          no={currentPage === 1 && index >= 0 && index <= 3 ? index : undefined}
          sport={sport}
          entry={entry}
          format={format}
        />
      </li>
    );
  });

  if (isLoading) {
    return <div>Is Loading...</div>;
  }
  return totalEntries ? (
    <ul className="entry-uls">
      {(currentEntries.length === 0 && totalEntries.length) || invalidEntry === true ? (
        <EmptyEntry />
      ) : (
        renderEntries
      )}
    </ul>
  ) : (
    <div>Errored</div>
  );
};

export default EntryUI;
