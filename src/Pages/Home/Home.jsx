import React from "react";
import { Outlet } from "react-router-dom";
import HomeNav from "../HomeComponents/HomeNav";

function Home() {
  return (
    <div>
      <HomeNav />
      <Outlet />
    </div>
  );
}

export default Home;
