import React, { useContext } from "react"
import { NavLink } from "react-router-dom"
import DashboardContext from "../context/DashboardContext"

function Sidebar(props) {
  const { houseCategory } = useContext(DashboardContext)

  return (
    <ul className={"list-group list-group-flush"}>
      {houseCategory.map((category) => (
        <li className="list-group-item" key={category._id}>
          <NavLink
            key={category._id}
            className={({ isActive }) =>
              isActive ? "is-active" : "text-primary"
            }
            to={`dashboard/categories/${category._id}`}
          >
            {category.name}
          </NavLink>
        </li>
      ))}
    </ul>
  )
}

export default Sidebar
