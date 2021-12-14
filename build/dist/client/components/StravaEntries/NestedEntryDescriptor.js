import React from "react";
var NestedEntryDescriptor = function (_a) {
    var title = _a.title, value = _a.value, extra = _a.extra;
    return (React.createElement("p", { className: "entry-descriptor" },
        title,
        " ",
        React.createElement("p", { className: "speed" }, value),
        " ",
        extra));
};
export default NestedEntryDescriptor;
//# sourceMappingURL=NestedEntryDescriptor.js.map