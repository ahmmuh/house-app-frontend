import React from "react"
import { Link, Outlet } from "react-router-dom"

const HotelPage = (props) => {
  return (
    <div className={"container"}>
      <div className={"row"}>
        <div className={"nav nav-tabs"}>
          <li className={"nav-item"}>
            <Link
              className={"nav-link active"}
              to="/dashboard/hotels/hotelList"
            >
              Hotels
            </Link>{" "}
          </li>
          <li className={"nav-item"}>
            <Link className={"nav-link"} to={"/dashboard/hotels/create"}>
              Create Hotel
            </Link>
          </li>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default HotelPage
