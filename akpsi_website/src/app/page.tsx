"use client";

import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Restaurant from "./Podcasts";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | <Link to="/podcasts">Podcasts</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/podcasts" element={<Restaurant />} />
      </Routes>
    </Router>
  );
}

export default App;