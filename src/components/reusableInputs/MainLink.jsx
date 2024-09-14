import React from "react"
import { NavLink } from "react-router-dom"

const MainLink = ({ path, className, children, ...props }) => {
  return (
    <NavLink to={path} className={className} {...props}>
      {children}
    </NavLink>
  )
}

export default MainLink
