
import React from "react";
import { Routes, Route } from "react-router-dom";

import TopBar from "./TopBar";
import Dashboard from "./Dashboard";

const Home = () => {
  return (
    <>
      <TopBar />

      <Routes>
        {/* Dashboard root */}
        <Route path="/" element={<Dashboard />} />

        {/* Dashboard nested routes */}
        <Route path="/*" element={<Dashboard />} />
      </Routes>
    </>
  );
};

export default Home;
