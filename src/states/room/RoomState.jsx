import { useState } from "react"

const RoomState = () => {
  const [room, setRoom] = useState({
    RomType: "",
    price: 0,
    description: "",
    roomAmenities: [],
    privateToilet: false,
    image: "",
    nonSmokingRooms: false,
    dailyCleaning: false,
    teaCoffeeMaker: false,
  })

  return [room, setRoom]
}

export default RoomState
