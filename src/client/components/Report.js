import React, { Suspense } from "react";
import EntryUl from "StravaEntries/EntryUl.js";
import PageNoUl from "PaginationContainer/PageNoUl.js";
import { getIndividualEntry } from "./AppUtils.js";
import { useGlobalContext } from "GlobalStore";
import { useEntriesStore } from "./useEntries.js";

const Report = (props) => {
  // Global Context
  const [{ totalEntries, isLoaded, sortCondition }] = useGlobalContext();
  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [entriesPerPage, setEntriesPerPage] = React.useState(7);
  // Entries
  const [invalidEntry, setInvalidEntry] = React.useState(false);
  const [currentActivity, setCurrentActivity] = React.useState({});
  // const [entries, setEntries] = React.useState([]);

  const { entries, filterAndSortEntries } = useEntriesStore((state) => state);

  reset_page_on_sport_change: React.useEffect(() => {
    setCurrentPage(1);
  }, [props.sport]);

  set_invalid_entry_on_distance_change: React.useEffect(() => {
    if (typeof Number(props.distance) !== "number") {
      setInvalidEntry(true);
    } else {
      setInvalidEntry(false);
    }
  }, [props.distance]);

  change_filtered_entries_on_change: React.useEffect(() => {
    if (totalEntries.length) {
      filterAndSortEntries(
        totalEntries,
        sortCondition,
        props.distance,
        props.sport
      );
    }
  }, [sortCondition, props.distance, props.sport, totalEntries]);

  const handlePaginationClick = ({ target: { id } }) => {
    setCurrentPage(Number(id));
  };

  const showIndividualEntry = async ({
    target: {
      dataset: { indentry }
    }
  }) => {
    event.preventDefault();
    const individualEntry = await getIndividualEntry(indentry);
    setCurrentActivity(individualEntry);
  };

  const updateIndividualEntry = async (entryId) => {
    const individualEntry = await getIndividualEntry(entryId);
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
        updateIndividualEntry={updateIndividualEntry}
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
