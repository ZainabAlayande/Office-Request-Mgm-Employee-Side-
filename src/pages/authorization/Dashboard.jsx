import React from 'react'
import SideBar from "../molecules/SideBar"
import TopNav from "../molecules/TopNav"
import DashboardBody from "../body/DashboardBody"
import "../../styles/tailwind.css"

const Dashboard = () => {
  return (
    <div
      className="flex flex-row h-screen bg-white-100 overflow-x-auto"
      style={{ backgroundColor: "#F8F8F9" }}
    >
      <div>
        <SideBar />
      </div>

      <div className="w-full h-full">
        <TopNav />
        <DashboardBody />
      </div>
    </div>
  );
}

export default Dashboard