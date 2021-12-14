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
import InputJSON from "./input.json";
import RadioColumn from "../Radios/RadioColumn";
import ProgressBar from "../ProgressBar/ProgressBar";
import { useGlobalContext } from "../../GlobalStore/globalStore.js";
var Radios = function (props) {
    var totalEntries = useGlobalContext()[0].totalEntries;
    var initArr = [
        {
            title: "Choose Sport",
            setCallback: props.setSport,
            radioValues: InputJSON.chooseSportRadios
        },
        {
            title: "Choose Distance",
            setCallback: props.setDistance,
            radioValues: props.sport === "Run"
                ? InputJSON.distanceRunRadios
                : props.sport === "Swim"
                    ? InputJSON.distanceSwimRadios
                    : [],
            customDistance: props.customDistance,
            distance: props.distance
        },
        {
            title: "Choose Format",
            setCallback: props.setFormat,
            radioValues: props.sport === "Run"
                ? InputJSON.formatRunRadios
                : props.sport === "Swim"
                    ? InputJSON.formatSwimRadios
                    : [],
            format: props.format
        }
    ];
    return (React.createElement("div", { id: "buttons-and-bar" },
        React.createElement("div", { id: "button-layout" }, initArr.map(function (radioColumn, index) {
            return (React.createElement(RadioColumn, __assign({ key: index }, radioColumn, { isLoaded: !!totalEntries.length })));
        })),
        React.createElement(ProgressBar, null)));
};
export default Radios;
//# sourceMappingURL=Radios.js.map