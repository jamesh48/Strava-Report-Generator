import React from "react";
import EntryUl from "./EntryUl.js";
import PageNoUl from "../PaginationContainer/PageNoUl";
import { getIndividualEntry } from "../AppUtils.js";
import { useGlobalContext } from "../GlobalStore/globalStore.js";
import { useEntriesStore } from "../useEntries.js";
import { ReportProps } from "../BaseProps";
import "./report.scss";
import { Entry } from "./EntryTypes.js";
import { useGetIndividualEntryQuery } from "../GlobalStore/services/entriesApi.js";

const Report: React.FC<ReportProps> = (props) => {
  // Global Context
  const [{ totalEntries, sortCondition }, globalDispatch] = useGlobalContext();
  // Pagination
  const [currentPage, setCurrentPage] = React.useState(1);
  const [entriesPerPage] = React.useState(7);
  // Entries
  const [invalidEntry, setInvalidEntry] = React.useState(false);
  const [currentActivityId, setCurrentActivityId] = React.useState(-1);
  // const [entries, setEntries] = React.useState([]);

  const { entries, filterAndSortEntries } = useEntriesStore((state) => state);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [props.sport]);

  React.useEffect(() => {
    if (typeof Number(props.distance) !== "number") {
      setInvalidEntry(true);
    } else {
      setInvalidEntry(false);
    }
  }, [props.distance]);

  React.useEffect(() => {
    if (totalEntries.length) {
      filterAndSortEntries(
        totalEntries,
        sortCondition,
        props.distance,
        props.sport,
        props.titleQuery,
        props.fromDateQuery,
        props.toDateQuery,
      );
    }
  }, [
    sortCondition,
    props.distance,
    props.sport,
    props.titleQuery,
    props.fromDateQuery,
    props.toDateQuery,
    totalEntries,
  ]);

  const handlePaginationClick: React.MouseEventHandler<HTMLLIElement> = (event) => {
    const actualId = event?.currentTarget.id.split("-");
    setCurrentPage(Number(actualId[1]));
  };

  const showIndividualEntry: React.MouseEventHandler<HTMLAnchorElement> = async (event) => {
    event.preventDefault();
    setCurrentActivityId(Number(event.currentTarget.dataset.indentry));
  };

  const { data: currentActivity } = useGetIndividualEntryQuery(currentActivityId, {
    skip: currentActivityId === -1,
  });

  return (
    <div id="report">
      {currentActivity ? (
        <EntryUl
          {...props}
          invalidEntry={invalidEntry}
          currentPage={currentPage}
          entries={entries}
          entriesPerPage={entriesPerPage}
          currentActivity={currentActivity}
          showIndividualEntry={showIndividualEntry}
        />
      ) : (
        <EntryUl
          {...props}
          invalidEntry={invalidEntry}
          currentPage={currentPage}
          entries={entries}
          entriesPerPage={entriesPerPage}
          showIndividualEntry={showIndividualEntry}
        />
      )}
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
