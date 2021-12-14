import React from "react";
import EntryDescriptor from "./EntryDescriptor";
import NestedEntryDescriptor from "./NestedEntryDescriptor";
var GeneralEntry = function (_a) {
    var no = _a.no, entry = _a.entry, sport = _a.sport, format = _a.format, showIndividualEntry = _a.showIndividualEntry;
    var m2y = 1.094;
    var mps2kph = 3.6;
    var pastTense = sport === "Walk"
        ? "Walked-"
        : sport === "Swim"
            ? "Swam-"
            : sport === "Ride"
                ? "Rode-"
                : sport === "Run"
                    ? "Ran"
                    : "traveled-";
    var handleTime = function (movingTime, pace) {
        if (movingTime !== Infinity) {
            if (pace) {
                return new Date(movingTime * 1000).toISOString().substr(15, 4);
            }
            return new Date(movingTime * 1000).toISOString().substr(11, 8);
        }
        else {
            return "00:00";
        }
    };
    return (React.createElement("div", { id: Number(no) === 0
            ? "entry1"
            : Number(no) === 1
                ? "entry2"
                : Number(no) === 2
                    ? "entry3"
                    : "", className: "inner-entry" },
        React.createElement("div", { className: Number(no) >= 0 && Number(no) <= 2
                ? "".concat("general-entry", " ").concat("special-entry")
                : "general-entry" },
            React.createElement("a", { className: "entry-title", "data-indentry": entry.activityId, href: "", onClick: showIndividualEntry }, entry.name),
            format !== "avgypace" ? (React.createElement(EntryDescriptor, { title: "Distance ".concat(pastTense), value: "".concat(entry.distance, " Meters") })) : (React.createElement(EntryDescriptor, { title: "Distance ".concat(pastTense), value: "".concat((entry.distance * 1.094).toFixed(), " Yards") })),
            React.createElement(EntryDescriptor, { title: "Time Elapsed- ", value: handleTime(entry.elapsed_time) }),
            React.createElement(EntryDescriptor, { title: "Moving Time- ", value: handleTime(entry.moving_time) }),
            format === "kph" ? (React.createElement(NestedEntryDescriptor, { title: "Avg Pace- ", value: ((entry.distance / entry.moving_time) * mps2kph).toFixed(2), extra: "kph" })) : format === "mph" ? (React.createElement(NestedEntryDescriptor, { title: "Avg Pace- ", value: ((entry.distance / entry.moving_time) * 2.237).toFixed(2), extra: "mph" })) : format === "mps" ? (React.createElement(NestedEntryDescriptor, { title: "Avg Pace- ", value: (entry.distance / entry.moving_time).toFixed(2), extra: "mps" })) : format === "avgypace" ? (React.createElement(NestedEntryDescriptor, { title: "Avg Pace- ", value: handleTime(entry.moving_time / ((entry.distance * 1.094) / 100), "pace"), extra: "/100 Yards" })) : format === "avgmpace" ? (React.createElement(NestedEntryDescriptor, { title: "Avg Pace- ", value: handleTime(entry.moving_time / (entry.distance / 100), "pace"), extra: "/100 Meters" })) : null,
            format === "kph" ? (React.createElement(NestedEntryDescriptor, { title: "Max Speed-", value: (entry.max_speed * mps2kph).toFixed(2), extra: "kph" })) : format === "mph" ? (React.createElement(NestedEntryDescriptor, { title: "Max Speed- ", value: (entry.max_speed * 2.237).toFixed(2), extra: "mph" })) : format === "mps" ? (React.createElement(NestedEntryDescriptor, { title: "Max Speed- ", value: entry.max_speed.toFixed(2), extra: "mps" })) : format === "avgypace" ? (React.createElement(NestedEntryDescriptor, { title: "Max Speed- ", value: handleTime(100 / (entry.max_speed * m2y), "pace"), extra: "/100 yards" })) : format === "avgmpace" ? (React.createElement(NestedEntryDescriptor, { title: "Max Speed- ", value: handleTime(100 / entry.max_speed, "pace"), extra: "/100 Meters" })) : null,
            React.createElement("p", { className: "entry-descriptor" }, new Date(entry.start_date).toLocaleString()))));
};
export default GeneralEntry;
//# sourceMappingURL=GeneralEntry.js.map