import React from "react";
import { BrowserRouter } from "react-router-dom";
import RouterMain from "./routers/RouterMain";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <RouterMain />
      </BrowserRouter>
    </>
  );
};

export default App;
