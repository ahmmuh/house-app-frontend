import React, { useEffect } from "react"
import { Outlet, useLocation } from "react-router-dom"

const DashboardPage = () => {
  const location = useLocation()

  useEffect(() => {
    console.log("Location changed:", location.pathname)
  }, [location])
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
