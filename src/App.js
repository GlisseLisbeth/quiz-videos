import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Root from "./routes";

const App = () => {
  return (
    <Router>
      <Root />
    </Router> 
  );
};

export default App;
