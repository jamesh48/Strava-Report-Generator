import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";
import App from "./components/App.js";
import { GlobalStoreProvider } from "./components/GlobalStore/globalStore.js";
var Index = function () {
    return (React.createElement(GlobalStoreProvider, null,
        React.createElement(App, null)));
};
ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(Index, null));
//# sourceMappingURL=index.js.map