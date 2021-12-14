import React from "react";
var AdditionalFilters = function (props) {
    return (React.createElement("div", { className: "additional-filters" },
        React.createElement("span", { className: "additional-filter-container" },
            React.createElement("input", { className: "additional-filter", placeholder: "Title Includes...", onChange: props.setTitleQuery, value: props.titleQuery, type: "text" })),
        React.createElement("span", { className: "additional-filter-container" },
            React.createElement("input", { className: "additional-filter", type: "date" }))));
};
export default AdditionalFilters;
//# sourceMappingURL=AdditionalFilters.js.map