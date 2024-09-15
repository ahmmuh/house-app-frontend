import React from "react"
import { Link, NavLink, Outlet } from "react-router-dom"

const HotelRoomPage = (props) => {
  return (
    <div className={"container"}>
      <h5 className="lead">Diiwaan gali hotel cusub</h5>
      <div className={"row"}>
        <div className={"nav nav-tabs"}>
          {/* <li className={"nav-item"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link is-active" : "nav-link text-primary"
              }
              to="/dashboard/hotels/hotelList"
            >
              Hotels
            </NavLink>{" "}
          </li> */}
          {/* <li className={"nav-item"}>
            <NavLink
              className={({ isActive }) =>
                isActive ? "nav-link is-active" : "nav-link text-primary"
              }
              to={"/dashboard/hotels/create"}
            >
              Create Hotel
            </NavLink>
          </li> */}
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default HotelRoomPage
