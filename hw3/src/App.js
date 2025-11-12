import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import CountryList from "./components/CountryList";
import Population from "./components/Population";
import CustomChart from "./components/CustomChart";

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: "1rem" }}>
        <nav style={{ marginBottom: "1.5rem" }}>
          <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
          <Link to="/list" style={{ marginRight: "1rem" }}>Country List</Link>
          <Link to="/population" style={{ marginRight: "1rem" }}>Population</Link>
          <Link to="/custom" style={{ marginRight: "1rem" }}>Custom Chart</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<CountryList />} />
          <Route path="/population" element={<Population />} />
          <Route path="/custom" element={<CustomChart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
