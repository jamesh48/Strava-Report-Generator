import React from "react";
import StravaEntry from "./StravaEntry.js";
import EmptyEntry from "./EmptyEntry";
import { useGlobalContext } from "../GlobalStore/globalStore.js";
import { EntryUIProps } from "./EntryTypes.js";


const EntryUI: React.FC<EntryUIProps> = ({
  showIndividualEntry,
  entries,
  entriesPerPage,
  currentPage,
  currentActivity,
  invalidEntry,
  sport,
  format,
  updateIndividualEntry
}) => {
  const [{ isLoaded }] = useGlobalContext();
  const currentEntries = entries.slice(
    currentPage * entriesPerPage - entriesPerPage,
    currentPage * entriesPerPage
  );

  const renderEntries = currentEntries.map((entry, index) => {
    return (
      <li key={index}>
        <StravaEntry
          currentActivity={currentActivity}
          showIndividualEntry={showIndividualEntry}
          updateIndividualEntry={updateIndividualEntry}
          no={currentPage === 1 && index >= 0 && index <= 3 ? index : undefined}
          sport={sport}
          entry={entry}
          format={format}
        />
      </li>
    );
  });

  return (
    <ul className="entry-uls">
      {(currentEntries.length === 0 && isLoaded === true) ||
      invalidEntry === true ? (
        <EmptyEntry />
      ) : (
        renderEntries
      )}
    </ul>
  );
};

export default EntryUI;
