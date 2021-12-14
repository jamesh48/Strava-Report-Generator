import React from "react";
import StravaEntry from "StravaEntries/StravaEntry.js";
import EmptyEntry from "./EmptyEntry";
import { useGlobalContext } from "GlobalStore";
export default (function (_a) {
    var showIndividualEntry = _a.showIndividualEntry, entries = _a.entries, entriesPerPage = _a.entriesPerPage, currentPage = _a.currentPage, currentActivity = _a.currentActivity, invalidEntry = _a.invalidEntry, sport = _a.sport, format = _a.format, updateIndividualEntry = _a.updateIndividualEntry;
    var isLoaded = useGlobalContext()[0].isLoaded;
    var currentEntries = entries.slice(currentPage * entriesPerPage - entriesPerPage, currentPage * entriesPerPage);
    var renderEntries = currentEntries.map(function (entry, index) {
        return (React.createElement("li", { key: index },
            React.createElement(StravaEntry, { currentActivity: currentActivity, showIndividualEntry: showIndividualEntry, updateIndividualEntry: updateIndividualEntry, no: currentPage === 1 && index >= 0 && index <= 3 ? index : undefined, sport: sport, entry: entry, format: format })));
    });
    return (React.createElement("ul", { className: "entry-uls" }, (currentEntries.length === 0 && isLoaded === true) ||
        invalidEntry === true ? (React.createElement(EmptyEntry, null)) : (renderEntries)));
});
//# sourceMappingURL=EntryUl.js.map