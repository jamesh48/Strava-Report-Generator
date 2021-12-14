import React from "react";
var RunningTotals = function (_a) {
    var ytd_run_totals = _a.profile.ytd_run_totals;
    return (React.createElement("div", { className: "ytd-totals profile-boxes" },
        React.createElement("h4", { className: "ytd-totals-title" }, "Year-To-Date Run Totals"),
        React.createElement("p", { className: "ytd-descriptor" },
            "Number of Runs: ",
            ytd_run_totals.count),
        React.createElement("p", { className: "ytd-descriptor" },
            "Total Distance: ",
            ytd_run_totals.distance,
            " Meters"),
        React.createElement("p", { className: "ytd-descriptor" }, "Average Speed: ",
            ytd_run_totals.count === 0
                ? 0
                : (ytd_run_totals.distance / ytd_run_totals.elapsed_time).toFixed(2),
            " ",
            "Meters per Second")));
};
export default RunningTotals;
//# sourceMappingURL=RunningTotals.js.map