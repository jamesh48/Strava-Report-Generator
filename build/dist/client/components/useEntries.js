import create from "zustand";
export var useEntriesStore = create(function (set) { return ({
    entries: [],
    filterAndSortEntries: function (totalEntryPayload, sortCondition, distance, sport, titleQuery, fromDateQuery, toDateQuery) {
        return set(function (state) { return ({
            entries: totalEntryPayload
                .filter(function (entry) { return Number(distance) <= Number(entry.distance); })
                .filter(function (remainingEntry) { return sport === remainingEntry.type; })
                .filter(function (remainingEntry) { return remainingEntry.name.indexOf(titleQuery) > -1; })
                .filter(function (remainingEntry) {
                if (fromDateQuery === "" && toDateQuery === "") {
                    return remainingEntry;
                }
                var candidateDate = new Date(remainingEntry.start_date.slice(0, 10));
                if (toDateQuery === "") {
                    var filterFrom_1 = new Date(fromDateQuery);
                    return filterFrom_1 < candidateDate;
                }
                if (fromDateQuery === "") {
                    var filterTo_1 = new Date(toDateQuery);
                    return filterTo_1 > candidateDate;
                }
                var filterFrom = new Date(fromDateQuery);
                var filterTo = new Date(toDateQuery);
                return filterFrom < candidateDate && filterTo > candidateDate;
            })
                .slice()
                .sort(sortCondition === "speedDesc"
                ? function (a, b) { return b.distance / b.moving_time - a.distance / a.moving_time; }
                : sortCondition === "startDate"
                    ? function (a, b) {
                        return b.start_date - a.start_date;
                    }
                    : sortCondition === "timeElapsedDesc"
                        ? function (a, b) {
                            return b.elapsed_time - a.elapsed_time;
                        }
                        : sortCondition === "timeElapsedAsc"
                            ? function (a, b) { return a.elapsed_time - b.elapsed_time; }
                            : sortCondition === "movingTimeDesc"
                                ? function (a, b) { return b.moving_time - a.moving_time; }
                                : sortCondition === "movingTimeAsc"
                                    ? function (a, b) { return a.moving_time - b.moving_time; }
                                    : sortCondition === "dateDesc"
                                        ? function (a, b) {
                                            return (new Date(b.start_date) > new Date(a.start_date) && 1) || -1;
                                        }
                                        : sortCondition === "dateAsc"
                                            ? function (a, b) {
                                                return (new Date(a.start_date) > new Date(b.start_date) && 1) || -1;
                                            }
                                            : null)
        }); });
    }
}); });
//# sourceMappingURL=useEntries.js.map