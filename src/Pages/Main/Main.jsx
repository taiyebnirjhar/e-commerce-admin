import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import AdminNavbar from "../Components/AdminNavbar";
import HeaderStats from "../Components/HeaderStats";
import Sidebar from "../Components/Sidebar";

function Main() {
  useEffect(() => {
    document.title = "tradeify : dash";
  }, []);
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 ">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -m-24">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default Main;
