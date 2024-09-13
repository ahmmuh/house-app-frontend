import React from "react"
import { Link } from "react-router-dom"

const NotFoundPage = (props) => {
  return (
    <div className="row m-auto w-75 p-5">
      <div className={"alert alert-danger"}>
        <h3>The page is not found</h3>
        <Link to={"/"}>Back</Link>
      </div>
    </div>
  )
}

export default NotFoundPage
