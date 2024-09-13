import React from "react"
import { Outlet } from "react-router-dom"
import Sidebar from "./sidebar"

const DashboardPage = () => {
  return (
    <div className="container mb-4 mt-2">
      <div className="row py-3">
        <div className={"col"}>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardPage
