import React from "react"
import { Link } from "react-router-dom"

function Menu(props) {
  return (
    <div className={"container-fluid pl-4 menu-bg"}>
      <div>
        <nav className="navbar navbar-expand-lg ">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className={"nav-item"}>
                <Link to={"/"} className="nav-link">
                  Start
                </Link>
              </li>
              <li className={"nav-item"}>
                <Link to={"/dashboard"} className="nav-link">
                  Dashboard
                </Link>
              </li>

              <li className={"nav-item"}>
                <Link to={"/dashboard/categories/create"} className="nav-link">
                  Add Category
                </Link>
              </li>
            </ul>
          </div>
          {/* <div className="d-flex ">
            <ul className="dropdown-menu">
              <li className="dropdown-item">
                <Link to={"/login"}>Login</Link>
              </li>
              <li className="dropdown-item">
                <Link to={"/login"}>Register</Link>
              </li>
            </ul>
          </div> */}
        </nav>
      </div>
    </div>
  )
}

export default Menu
