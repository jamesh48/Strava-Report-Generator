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
import React, { Suspense } from "react";
import { useGlobalContext } from "./GlobalStore/globalStore.js";
import { getUserActivities } from "./AppUtils.js";
import Report from "./StravaEntries/Report";
import FBUserProfile from "./UserProfile/FallbackProfile/FBUserProfile";
import UserProfile from "./UserProfile/UserProfile";
import Radios from "./OptionsProfile/Radios/Radios";
import "../App.scss";
var App = function () {
    var _a = useGlobalContext(), _b = _a[0], globalDispatch = _a[1];
    var _c = React.useState("Run"), sport = _c[0], setSport = _c[1];
    var _d = React.useState("kph"), format = _d[0], setFormat = _d[1];
    var _e = React.useState(""), titleQuery = _e[0], setTitleQuery = _e[1];
    var _f = React.useState(""), fromDateQuery = _f[0], setFromDateQuery = _f[1];
    var _g = React.useState(""), toDateQuery = _g[0], setToDateQuery = _g[1];
    var _h = React.useState(0), distance = _h[0], setDistance = _h[1];
    var _j = React.useState(false), customDistance = _j[0], setCustomDistance = _j[1];
    componentDidMount: React.useEffect(function () {
        document.title = "Strava Report Generator";
        var fetchEntries = function () { return __awaiter(void 0, void 0, void 0, function () {
            var returningEntries;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, getUserActivities()];
                    case 1:
                        returningEntries = _a.sent();
                        globalDispatch({ type: "SET TOTAL ENTRIES", payload: returningEntries });
                        return [2];
                }
            });
        }); };
        fetchEntries();
    }, []);
    reset_distance_on_sport_change: React.useEffect(function () {
        setDistance(0);
    }, [sport]);
    reset_format_on_sport_change: React.useEffect(function () {
        setFormat(sport === "Run" ? "kph" : sport === "Swim" ? "avgmpace" : "kph");
    }, [sport]);
    reset_checked_on_sport_change: React.useEffect(function () {
        setCustomDistance(false);
    }, [sport]);
    var setSportCallback = function (_a) {
        var value = _a.currentTarget.value;
        setSport(value);
    };
    var setDistanceCallback = function (_a) {
        var _b = _a.currentTarget, value = _b.value, placeholder = _b.placeholder;
        setDistance(Number(value));
        if (placeholder === "Custom Distance" && Number(value) !== 0) {
            setCustomDistance(true);
        }
        else {
            setCustomDistance(false);
        }
    };
    var setFormatCallback = function (_a) {
        var value = _a.currentTarget.value;
        setFormat(value);
    };
    var setTitleQueryCallback = function (event) {
        setTitleQuery(event.currentTarget.value);
    };
    var setFromDateQueryCallback = function (event) {
        setFromDateQuery(event.currentTarget.value);
    };
    var setToDateQueryCallback = function (event) {
        setToDateQuery(event.currentTarget.value);
    };
    return (React.createElement("div", { id: "body" },
        React.createElement(Suspense, { fallback: React.createElement("div", { id: "upper-section" },
                React.createElement(FBUserProfile, null),
                React.createElement(Radios, { sport: sport, customDistance: customDistance, distance: distance, format: format, titleQuery: titleQuery, setSport: setSportCallback, setDistance: setDistanceCallback, setFormat: setFormatCallback, setTitleQuery: setTitleQueryCallback, setFromDateQuery: setFromDateQueryCallback, setToDateQuery: setToDateQueryCallback })) },
            React.createElement("div", { id: "upper-section" },
                React.createElement(UserProfile, null),
                React.createElement(Radios, { setSport: setSportCallback, setDistance: setDistanceCallback, setFormat: setFormatCallback, setTitleQuery: setTitleQueryCallback, setFromDateQuery: setFromDateQueryCallback, setToDateQuery: setToDateQueryCallback, titleQuery: titleQuery, sport: sport, customDistance: customDistance, distance: distance, format: format }))),
        React.createElement(Report, { sport: sport, format: format, distance: distance, titleQuery: titleQuery, fromDateQuery: fromDateQuery, toDateQuery: toDateQuery })));
};
export default App;
//# sourceMappingURL=App.js.map