import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import DashboardContext from "../../context/DashboardContext"
import RoomCard from "../../components/reusableInputs/RoomCard"

const HotelDetail = (props) => {
  const { id } = useParams()
  const { hotels } = useContext(DashboardContext)
  console.log(hotels)
  const hotel = hotels.find((hotel) => hotel._id === id)
  console.log("The founded hotel ", hotel)
  console.log("HotelDetail", props, id)
  return (
    <>
      <RoomCard
        title={hotel.hotelName}
        price={hotel.price}
        description={hotel.description}
        available={hotel.available}
        fromStartDate={hotel.fromStartDate}
        endDate={hotel.endDate}
        airportShuttle={hotel.airportShuttle}
        hotelRoomHeight={hotel.hotelRoomHeight}
        hotelRoomWidth={hotel.hotelRoomWidth}
        hotelRoomParking={hotel.hotelRoomParking}
        hotelRoomWifi={hotel.hotelRoomWifi}
        isNonSmokingRoom={hotel.isNonSmokingRoom}
        isSingelRoom={hotel.isSingelRoom}
        privateToilet={hotel.privateToilet}
        restaurant={hotel.restaurant}
        roomService={hotel.roomService}
        squareMeters={hotel.squareMeters}
        teaCoffeeMaker={hotel.teaCoffeeMaker}
        detailed={true}
      />
    </>
  )
}

export default HotelDetail
