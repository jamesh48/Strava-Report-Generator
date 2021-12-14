var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import React from "react";
import SingleRadio from "OptionsProfile/Radios/SingleRadio";
export default (function (props) {
    return (React.createElement("div", { className: "choose-radio-container" },
        React.createElement("h4", { className: "choose-title", id: props.title.split(' ').join('-').toLowerCase() }, props.title),
        React.createElement("div", { className: "multiple-radio-button-container" }, props.radioValues.map(function (radio, index) {
            return React.createElement(SingleRadio, __assign({}, radio, props, { index: index }));
        }))));
});
//# sourceMappingURL=RadioColumn.js.map