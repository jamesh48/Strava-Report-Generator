import React from "react";
var SwimmingTotals = function (_a) {
    var ytd_swim_totals = _a.profile.ytd_swim_totals;
    return (React.createElement("div", { className: "ytd-totals profile-boxes" },
        React.createElement("h4", { className: "ytd-totals-title" }, "Year-To-Date Swim Totals"),
        React.createElement("p", { className: "ytd-descriptor" },
            "Number of Swims: ",
            ytd_swim_totals.count),
        React.createElement("p", { className: "ytd-descriptor" },
            "Total Distance: ",
            ytd_swim_totals.distance,
            " Meters"),
        React.createElement("p", { className: "ytd-descriptor" }, "Average Speed: ",
            ytd_swim_totals.count !== 0
                ? (ytd_swim_totals.distance / ytd_swim_totals.elapsed_time).toFixed(2)
                : 0,
            " ",
            "Meters per Second")));
};
export default SwimmingTotals;
//# sourceMappingURL=SwimmingTotals.js.map