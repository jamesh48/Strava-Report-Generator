import React from "react";
import ReactDOM from "react-dom";
import regeneratorRuntime from "regenerator-runtime";
import App from "./components/App.js";
import { GlobalStoreProvider } from "GlobalStore";
// import testData from './Test Data/testData.js';
// import profileTestData from './Test Data/profileTestData.js';

const Index = () => {
  return (
    <GlobalStoreProvider>
      <App />
    </GlobalStoreProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Index />);

// ReactDOM.render(<Index/>, document.getElementById('root'));
