import React, { useContext } from "react"
import DashboardContext from "../context/DashboardContext"
import { Outlet } from "react-router-dom"

const ContentContainer = () => {
  const data = useContext(DashboardContext)

  console.log("housesData from content", data)
  return (
    <div>
      {/* <ul className="list-group">
        {houseCategory.length <= 0
          ? "No Houses"
          : houseCategory.map((house) => (
              <>
                <li className={"list-group-item"} key={house._id}>
                  {house.houseType.map((item) => (
                    <div></div>
                  ))}
                </li>
                <p>{house.description}</p>
                <span>{house.price} $</span>
              </>
            ))}
      </ul> */}
      <Outlet />
    </div>
  )
}

export default ContentContainer
