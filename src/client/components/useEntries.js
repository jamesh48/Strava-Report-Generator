import create from "zustand";

export const useEntriesStore = create((set) => ({
  entries: [],
  filterAndSortEntries: (totalEntryPayload, sortCondition, distance, sport, titleQuery) =>
    set((state) => ({
      entries: totalEntryPayload
        .filter((entry) => Number(distance) <= Number(entry.distance))
        .filter((remainingEntry) => sport === remainingEntry.type)
        .filter((remainingEntry) => remainingEntry.name.indexOf(titleQuery) > -1)
        .slice()
        .sort(
          sortCondition === "speedDesc"
            ? (a, b) => b.distance / b.moving_time - a.distance / a.moving_time
            : sortCondition === "startDate"
            ? (a, b) => {
                return b.start_date - a.start_date;
              }
            : sortCondition === "timeElapsedDesc"
            ? (a, b) => {
                return b.elapsed_time - a.elapsed_time;
              }
            : sortCondition === "timeElapsedAsc"
            ? (a, b) => a.elapsed_time - b.elapsed_time
            : sortCondition === "movingTimeDesc"
            ? (a, b) => b.moving_time - a.moving_time
            : sortCondition === "movingTimeAsc"
            ? (a, b) => a.moving_time - b.moving_time
            : null
        )
    }))
}));
