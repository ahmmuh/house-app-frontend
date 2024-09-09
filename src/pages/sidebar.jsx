import React, { useContext } from "react"
import { Link } from "react-router-dom"
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
        <Link className="nav-link-item">List group item 1</Link>
      </li>
      <li className="list-group-item">
        <Link>List group item 2</Link>
      </li>
      <li className="list-group-item">
        <Link to={""}>List group item 3</Link>
      </li>
      <li className="list-group-item">
        <Link>List group item 4</Link>
      </li>
      <li className="list-group-item">
        <Link>List group item 5</Link>
      </li>
    </ul>
  )
}

export default Sidebar
