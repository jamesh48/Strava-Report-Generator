import React from 'react';
import CombinedReducers from './globalReducers.js';
var GlobalStoreContext = React.createContext();
var initialState = {
    totalEntries: [],
    isLoaded: null,
    sortCondition: 'speedDesc'
};
var GlobalStoreProvider = function (_a) {
    var children = _a.children;
    var _b = React.useReducer(CombinedReducers, initialState), state = _b[0], dispatch = _b[1];
    var store = React.useMemo(function () { return [state, dispatch]; }, [state]);
    return (React.createElement(GlobalStoreContext.Provider, { value: store }, children));
};
var useGlobalContext = function () {
    var context = React.useContext(GlobalStoreContext);
    if (context === undefined) {
        throw new Error('useGlobalContext must be used within a GlobalProvider');
    }
    return context;
};
export { useGlobalContext, GlobalStoreProvider };
//# sourceMappingURL=globalStore.js.map