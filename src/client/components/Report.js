import React, { Suspense } from "react";
import EntryUl from "StravaEntries/EntryUl.js";
import PageNoUl from "PaginationContainer/PageNoUl.js";
import { getIndividualEntry } from "./AppUtils.js";
import { useGlobalContext } from "GlobalStore";

const Report = (props) => {
  // Global Context
  const [{ totalEntries, isLoaded }] = useGlobalContext();
  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [entriesPerPage, setEntriesPerPage] = React.useState(7);
  // Entries
  const [invalidEntry, setInvalidEntry] = React.useState(false);
  const [currentActivity, setCurrentActivity] = React.useState({});
  const [entries, setEntries] = React.useState([]);

  React.useEffect(() => {
    if (typeof Number(props.distance) !== "number") {
      setInvalidEntry(true);
    } else {
      setInvalidEntry(false);
    }
  }, [props.distance]);

  React.useEffect(() => {
    if (isLoaded) {
      setEntries(
        totalEntries
          .filter((entry) => Number(props.distance) <= Number(entry.distance))
          .filter((remainingEntry) => props.sport === remainingEntry.type)
      );
    }
  }, [props.distance, props.sport, isLoaded]);

  const handlePaginationClick = ({ target: { id } }) => {
    setCurrentPage(Number(id));
  };

  const showIndividualEntry = async ({
    target: {
      dataset: { indentry },
    },
  }) => {
    event.preventDefault();
    const individualEntry = await getIndividualEntry(indentry);
    setCurrentActivity(individualEntry);
  };

  return (
    <div id="report">
      <EntryUl
        {...props}
        invalidEntry={invalidEntry}
        currentPage={currentPage}
        entries={entries}
        entriesPerPage={entriesPerPage}
        currentActivity={currentActivity}
        showIndividualEntry={showIndividualEntry}
      />
      <PageNoUl
        {...props}
        entriesPerPage={entriesPerPage}
        entries={entries}
        handleClick={handlePaginationClick}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Report;
