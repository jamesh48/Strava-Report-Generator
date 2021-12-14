import React from "react";
import ReactDOM from "react-dom";
import "regenerator-runtime";
import App from "./components/App.js";
import { GlobalStoreProvider } from "./components/GlobalStore/globalStore.js";

const Index = () => {
  return (
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  );
};

// @ts-ignore
ReactDOM.createRoot(document.getElementById("root")).render(<Index />);

// ReactDOM.render(<Index/>, document.getElementById('root'));
