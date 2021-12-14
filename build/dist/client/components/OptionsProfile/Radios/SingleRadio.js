import React from "react";
export default (function (props) {
    return props.type === "radio" ? (React.createElement("div", { className: "single-radio-button-container" },
        React.createElement("input", { defaultChecked: props.index === 0, disabled: !props.isLoaded ? true : false, type: props.type, id: props.id, name: props.name, value: props.value, checked: props.name.indexOf('distance') > -1 && props.index === 0 && !props.distance ? "checked" : null, onClick: props.setCallback }),
        React.createElement("label", { htmlFor: "allresults" }, props.labelText),
        React.createElement("br", null))) : props.type === "radioAndText" ? (React.createElement("div", { className: "single-radio-button-container" },
        React.createElement("input", { type: "radio", name: props.name, disabled: true, hidden: true, checked: props.customDistance ? "Checked" : null }),
        React.createElement("input", { disabled: !props.isLoaded ? true : false, id: props.id, name: props.name, onChange: props.setCallback, type: "text", placeholder: props.placeholder, value: props.customDistance ? null : "" }))) : null;
});
//# sourceMappingURL=SingleRadio.js.map