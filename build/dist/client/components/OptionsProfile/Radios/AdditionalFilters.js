import React from "react";
var AdditionalFilters = function (props) {
    return (React.createElement("div", { className: "additional-filters" },
        React.createElement("input", { placeholder: "Title Includes...", onChange: props.setTitleQuery, value: props.titleQuery, type: "text" })));
};
export default AdditionalFilters;
//# sourceMappingURL=AdditionalFilters.js.map