import React from "react";
var PageNoLi = function (_a) {
    var handleClick = _a.handleClick, number = _a.number, page = _a.page;
    console.log(page, number);
    return (React.createElement("li", { key: number, style: Number(page) === number ? { backgroundColor: "coral" } : {}, id: "pageno-" + number, onClick: handleClick, className: "page-nos" }, number));
};
export default PageNoLi;
//# sourceMappingURL=PageNoLi.js.map