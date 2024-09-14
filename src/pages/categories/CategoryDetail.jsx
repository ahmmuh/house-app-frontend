import React, { useContext } from "react"
import { NavLink, useParams } from "react-router-dom"
import DashboardContext from "../../context/DashboardContext"
import HotelList from "../hotel/HotelList"

const CategoryDetail = (props) => {
  const { hotels } = useContext(DashboardContext)
  const { categoryId } = props
  const { id } = useParams()
  console.log("Hotels ", hotels)
  const hotelList = hotels.filter((hotel) => hotel.category === categoryId)
  if (hotelList.length > 0) {
    return <HotelList hotels={hotelList} />
  }

  console.log("hotelList from category component ", hotelList)
  console.log("ID from CategoryDetail component ", categoryId)
  console.log("categoryID with useParams", id)
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-">
          <div className="list-group">
            <li className="list-group-item">
              <h6>ID: {categoryId}</h6>
              <h6>categoryID: {id}</h6>
              <NavLink to={`${categoryId}`}>Name</NavLink>
            </li>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryDetail
