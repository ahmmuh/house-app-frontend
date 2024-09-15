import { useState } from "react"
const useHotelState = () => {
  const [hotel, setHotel] = useState({
    hotelName: "",
    location: "",
    description: "",
    airportShuttle: false,
    breakfast: false,
    frontDesk24hr: false,
    restaurant: false,
    amenities: [],
    image: "",
    rooms: [],
    category: "",
  })
  return [hotel, setHotel]
}

export default useHotelState
