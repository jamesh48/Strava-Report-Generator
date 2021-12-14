import create from "zustand";
export var useEntriesStore = create(function (set) { return ({
    entries: [],
    filterAndSortEntries: function (totalEntryPayload, sortCondition, distance, sport) {
        return set(function (state) { return ({
            entries: totalEntryPayload
                .filter(function (entry) { return Number(distance) <= Number(entry.distance); })
                .filter(function (remainingEntry) { return sport === remainingEntry.type; })
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
                                    : null)
        }); });
    }
}); });
//# sourceMappingURL=useEntries.js.map