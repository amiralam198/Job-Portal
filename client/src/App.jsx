import React from "react";
import { Route, Routes } from "react-router-dom";
import Application from "./pages/Application";
import ApplyJob from "./pages/ApplyJob";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/application" element={<Application />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
