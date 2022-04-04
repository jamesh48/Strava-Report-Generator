import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "regenerator-runtime";
import App from "./components/App";
import { GlobalStoreProvider } from "./components/GlobalStore/globalStore";
// import { GlobalStoreProvider } from "./components/GlobalStore/globalStore.js";
import { createStore } from "./components/GlobalStore/store";

const Index = () => {
  return (
    <GlobalStoreProvider>
      <Provider store={createStore()}>
        <App />
      </Provider>
    </GlobalStoreProvider>
  );
};

// @ts-ignore
createRoot(document.getElementById("root")).render(<Index />);

// ReactDOM.render(<Index/>, document.getElementById('root'));
