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
var combineReducers = function (slices) { return function (state, action) {
    return Object.keys(slices).reduce(function (acc, prop) {
        var _a;
        return (__assign(__assign({}, acc), (_a = {}, _a[prop] = slices[prop](acc[prop], action), _a)));
    }, state);
}; };
var totalEntries = function (state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case "SET TOTAL ENTRIES":
            return action.payload;
        default:
            return state;
    }
};
var sortCondition = function (state, action) {
    if (state === void 0) { state = "speedDesc"; }
    switch (action.type) {
        case "SET SORT CONDITION":
            return action.payload;
        default:
            return state;
    }
};
var isLoaded = function (state, action) {
    if (state === void 0) { state = null; }
    switch (action.type) {
        case "TOGGLE LOADED ON":
            return true;
        case "TOGGLE LOADED OFF":
            return false;
        default:
            return state;
    }
};
export default combineReducers({ totalEntries: totalEntries, isLoaded: isLoaded, sortCondition: sortCondition });
//# sourceMappingURL=globalReducers.js.map