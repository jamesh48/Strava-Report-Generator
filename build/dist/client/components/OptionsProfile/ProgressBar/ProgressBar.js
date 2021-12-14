var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from "react";
import axios from "axios";
import { useProgressBarProgressStore } from "./useProgressBarProgress";
import { useInterval } from "./useInterval";
import { useGlobalContext } from "../../GlobalStore/globalStore.js";
var ProgressBar = function (props) {
    var _a = useGlobalContext(), isLoaded = _a[0].isLoaded, globalDispatch = _a[1];
    var _b = useProgressBarProgressStore(function (state) { return state; }), progressBarProgress = _b.progressBarProgress, incrementProgressBarProgress = _b.incrementProgressBarProgress, completeProgressBarProgress = _b.completeProgressBarProgress, resetProgressBarProgress = _b.resetProgressBarProgress;
    useInterval(function () {
        if (isLoaded) {
            completeProgressBarProgress();
            setTimeout(function () {
                resetProgressBarProgress();
            }, 750);
        }
        else if (isLoaded === false) {
            incrementProgressBarProgress();
        }
    }, isLoaded === true || isLoaded === null ? -1 : 75);
    var fillerStyles = {
        width: "".concat(progressBarProgress, "%")
    };
    var updateEntries = function () { return __awaiter(void 0, void 0, void 0, function () {
        var allActivities;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    globalDispatch({ type: "TOGGLE LOADED OFF" });
                    return [4, axios.post("/addAllActivities")];
                case 1:
                    allActivities = (_a.sent()).data;
                    globalDispatch({ type: "TOGGLE LOADED ON" });
                    globalDispatch({
                        type: "SET TOTAL ENTRIES",
                        payload: allActivities
                    });
                    return [2];
            }
        });
    }); };
    var setSortCondition = function (event) {
        globalDispatch({
            type: "SET SORT CONDITION",
            payload: event.currentTarget.value
        });
    };
    return progressBarProgress === 0 ? (React.createElement("div", { className: "update-button-container" },
        React.createElement("select", { className: "update-button", onChange: setSortCondition },
            React.createElement("option", { value: "speedDesc" }, "Speed: Fastest First"),
            React.createElement("option", { value: "movingTimeDesc" }, "Moving Time: Longest First"),
            React.createElement("option", { value: "movingTimeAsc" }, "Moving Time: Shortest First"),
            React.createElement("option", { value: "timeElapsedDesc" }, "Time Elapsed: Longest First"),
            React.createElement("option", { value: "timeElapsedAsc" }, "Time Elapsed: Shortest First")),
        React.createElement("input", { type: "button", className: "update-button", value: "Update!", onClick: updateEntries }),
        React.createElement("input", { type: "button", className: "update-button", value: "Destroy!", onClick: function () { return alert("This button does not do anything currently"); } }))) : (React.createElement("div", { className: "update-button-container" },
        React.createElement("div", { id: "progress-bar-container" },
            React.createElement("div", { className: "progress-bar-filler", style: fillerStyles },
                React.createElement("span", { className: "progress-bar-counter" }, "".concat(progressBarProgress, "%"))))));
};
export default ProgressBar;
//# sourceMappingURL=ProgressBar.js.map