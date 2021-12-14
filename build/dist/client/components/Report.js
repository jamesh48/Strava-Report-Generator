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
import EntryUl from "./StravaEntries/EntryUl.js";
import PageNoUl from "./PaginationContainer/PageNoUl";
import { getIndividualEntry } from "./AppUtils.js";
import { useGlobalContext } from "./GlobalStore/globalStore.js";
import { useEntriesStore } from "./useEntries.js";
var Report = function (props) {
    var _a = useGlobalContext()[0], totalEntries = _a.totalEntries, sortCondition = _a.sortCondition;
    var _b = React.useState(1), currentPage = _b[0], setCurrentPage = _b[1];
    var entriesPerPage = React.useState(7)[0];
    var _c = React.useState(false), invalidEntry = _c[0], setInvalidEntry = _c[1];
    var _d = React.useState({
        id: 0,
        name: "",
        kudos_count: 0,
        comment_count: 0,
        average_heartrate: 0,
        max_heartrate: 0,
        achievement_count: 0,
        description: "",
        device_name: "",
        photos: {
            primary: {
                urls: {
                    "600": ""
                }
            }
        }
    }), currentActivity = _d[0], setCurrentActivity = _d[1];
    var _e = useEntriesStore(function (state) { return state; }), entries = _e.entries, filterAndSortEntries = _e.filterAndSortEntries;
    React.useEffect(function () {
        setCurrentPage(1);
    }, [props.sport]);
    React.useEffect(function () {
        if (typeof Number(props.distance) !== "number") {
            setInvalidEntry(true);
        }
        else {
            setInvalidEntry(false);
        }
    }, [props.distance]);
    React.useEffect(function () {
        if (totalEntries.length) {
            filterAndSortEntries(totalEntries, sortCondition, props.distance, props.sport);
        }
    }, [sortCondition, props.distance, props.sport, totalEntries]);
    var handlePaginationClick = function (event) {
        var actualId = event === null || event === void 0 ? void 0 : event.currentTarget.id.split("-");
        setCurrentPage(Number(actualId[1]));
    };
    var showIndividualEntry = function (event) { return __awaiter(void 0, void 0, void 0, function () {
        var individualEntry;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    return [4, getIndividualEntry(event.currentTarget.dataset.indentry)];
                case 1:
                    individualEntry = _a.sent();
                    setCurrentActivity(individualEntry);
                    return [2];
            }
        });
    }); };
    var updateIndividualEntry = function (entryId) { return __awaiter(void 0, void 0, void 0, function () {
        var individualEntry;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4, getIndividualEntry(entryId)];
                case 1:
                    individualEntry = _a.sent();
                    setCurrentActivity(individualEntry);
                    return [2];
            }
        });
    }); };
    return (React.createElement("div", { id: "report" },
        React.createElement(EntryUl, __assign({}, props, { invalidEntry: invalidEntry, currentPage: currentPage, entries: entries, entriesPerPage: entriesPerPage, currentActivity: currentActivity, showIndividualEntry: showIndividualEntry, updateIndividualEntry: updateIndividualEntry })),
        React.createElement(PageNoUl, __assign({}, props, { entriesPerPage: entriesPerPage, entries: entries, handleClick: handlePaginationClick, currentPage: currentPage }))));
};
export default Report;
//# sourceMappingURL=Report.js.map