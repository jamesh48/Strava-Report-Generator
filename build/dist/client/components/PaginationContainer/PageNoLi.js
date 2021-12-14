import React from 'react';
export default (function (_a) {
    var handleClick = _a.handleClick, currentPage = _a.currentPage, number = _a.number, page = _a.page;
    return (React.createElement("li", { key: number, id: number, style: Number(page) === number ? { backgroundColor: 'coral' } : null, onClick: handleClick, className: 'page-nos' }, number));
});
//# sourceMappingURL=PageNoLi.js.map