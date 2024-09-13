import React, { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import DashboardContext from "../context/DashboardContext"

function Sidebar(props) {
  const { houseCategory } = useContext(DashboardContext)

  console.log("Category tom", houseCategory)

  const changeHandler = (e) => {
    //console.log("Selected Category", e.target.value)
  }
  return (
    <ul className={"list-group list-group-flush"}>
      <li className="list-group-item">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "is-active" : "text-primary"
          }
          to={"/dashboard/hotels"}
        >
          Hotels
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "is-active" : "text-primary"
          }
          to={"/t1"}
        >
          List group item 2
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "is-active" : "text-primary"
          }
          to={"/t2"}
        >
          List group item 3
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "is-active" : "text-primary"
          }
          to="/t3"
        >
          List group item 4
        </NavLink>
      </li>
      <li className="list-group-item">
        <NavLink
          exact
          className={({ isActive }) =>
            isActive ? "is-active" : "text-primary"
          }
          to="/t4"
        >
          List group item 5
        </NavLink>
      </li>
    </ul>
  )
}

export default Sidebar
