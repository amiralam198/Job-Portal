import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import RecruiterLogin from "./components/RecruiterLogin";
import { AppContext } from "./context/AppContext";
import Application from "./pages/Application";
import ApplyJob from "./pages/ApplyJob";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

export default function App() {
  const {showRecruiterLogin} = useContext(AppContext)
  return (
    <div>
      { showRecruiterLogin && <RecruiterLogin/>}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply-job/:id" element={<ApplyJob />} />
        <Route path="/application" element={<Application />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}
