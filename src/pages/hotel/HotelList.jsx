import React, { useContext } from "react"
import RoomCard from "../../components/reusableInputs/RoomCard"
import DashboardContext from "../../context/DashboardContext"
import { Link, NavLink } from "react-router-dom"

const HotelList = (props) => {
  const { hotels } = useContext(DashboardContext)
  console.log("hotelData", hotels)

  return (
    <div className={"container"}>
      {hotels.map((hotel) => (
        <div className={"row"}>
          <RoomCard
            key={hotel.id}
            hotel={hotel}
            title={hotel.hotelName}
            name={hotel.name}
            bathrooms={hotel.bathrooms}
            price={hotel.price}
            description={hotel.description}
            breakfastIncluded={hotel.breakfastIncluded}
            image={hotel.image}
            available={hotel.available}
            fromStartDate={new Date(hotel.fromStartDate).toDateString()}
            toEndDate={new Date(hotel.toEndDate).toDateString()}
            detailed={false}
          >
            <div
              className={"d-flex justify-content-between"}
              style={{
                padding: ".1rem",
              }}
            >
              <NavLink
                className={"btn btn-outline-danger"}
                to={`/dashboard/hotels/room/${hotel._id}`}
              >
                View
              </NavLink>
              <NavLink className={"text-danger"} to={""}>
                <i className="fa-2x fa-regular fa-pen-to-square"></i>
              </NavLink>
              <NavLink to={""}>
                <i className="fa-2x fa-regular fa-trash-can text-danger"></i>
                Ahmed
              </NavLink>
            </div>
          </RoomCard>
        </div>
      ))}
    </div>
  )
}

export default HotelList
