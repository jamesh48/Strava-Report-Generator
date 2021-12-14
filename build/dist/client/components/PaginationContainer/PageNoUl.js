var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import React from "react";
import PageNo from "./PageNoLi";
var PageNoUl = function (_a) {
    var entries = _a.entries, entriesPerPage = _a.entriesPerPage, currentPage = _a.currentPage, handleClick = _a.handleClick;
    var renderPageNumbers = function () {
        return __spreadArray([], new Array(Math.ceil(entries.length / entriesPerPage)), true).map(function (x, index) {
            return index + 1;
        })
            .map(function (number) {
            return (React.createElement(PageNo, { key: number, number: number, page: currentPage, handleClick: handleClick }));
        });
    };
    return (React.createElement("ul", { className: "page-no-uls", id: "page-numbers" }, renderPageNumbers()));
};
export default PageNoUl;
//# sourceMappingURL=PageNoUl.js.map