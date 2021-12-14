import React from "react";
import "./additionalFilters.scss";
var AdditionalFilters = function (props) {
    return (React.createElement("div", { className: "additional-filters" },
        React.createElement("span", { className: "additional-filter-container" },
            React.createElement("span", { className: "date-filter" },
                React.createElement("label", null, "From..."),
                React.createElement("input", { className: "additional-filter", type: "date", onChange: props.setFromDateQuery })),
            React.createElement("span", { className: "date-filter" },
                React.createElement("label", null, "To..."),
                React.createElement("input", { className: "additional-filter", type: "date", onChange: props.setToDateQuery }))),
        React.createElement("span", { className: "additional-filter-container" },
            React.createElement("input", { className: "additional-filter", placeholder: "Title Includes...", onChange: props.setTitleQuery, value: props.titleQuery, type: "text" }))));
};
export default AdditionalFilters;
//# sourceMappingURL=AdditionalFilters.js.map