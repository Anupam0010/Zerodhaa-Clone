

import React,{useEffect} from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";

const Dashboard = () => {
   // ✅ STEP-2: email URL se read karke dashboard me save
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const emailFromUrl = params.get("email");

    if (emailFromUrl) {
      localStorage.setItem("userEmail", emailFromUrl);

      // URL clean (email hide)
      window.history.replaceState({}, "", "/");
    }
     const userEmail = localStorage.getItem("userEmail");

    if (!userEmail) {
      // ❌ Not logged in → go to frontend signup
      window.location.href = "https://zerodha121.netlify.app/signup";
    }
  }, []);
  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>

      <div className="content">
        <Routes>
          <Route index element={<Summary />} />
          <Route path="orders" element={<Orders />} />
          <Route path="holdings" element={<Holdings />} />
          <Route path="positions" element={<Positions />} />
          <Route path="funds" element={<Funds />} />
          <Route path="apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

