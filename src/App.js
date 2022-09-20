// import React, { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/query=:query" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
