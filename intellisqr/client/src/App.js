import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Topbar from "./components/topbar/topbar";
import Create from "./pages/Create/Create";
import Lists from "./pages/List/Lists";

function App() {
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route path="/" element={<Create />} />
        <Route path="/list" element={<Lists />} />
      </Routes>
    </Router>
  );
}

export default App;
