import React from "react"
import MainButton from "./MainButton"
function RoomCard({
  title,
  description,
  bathrooms,
  price,
  children,
  breakfastIncluded,
  image,
  fromStartDate,
  toEndDate,
  available,
  hotel,
  detailed,
  ...props
}) {
  console.log(hotel)
  return (
    <div className="container bg-light mb-3 p-5" {...props}>
      <div className="row">
        <div className="col-4">
          {/*      {
                        hotel.images.map((image, index) => (
                            <img key={index} src={`data:image/jpeg:base64, ${Buffer.from(image).toString("base64")}`}
                                 className="img-fluid" alt={`Hotel ${hotel.name}`}/>
                        ))
                    }*/}
          <h2>Images</h2>
        </div>
        <div className="col list-group">
          <h4 className="text-primary">{title}</h4>
          <p>{description}</p>
          <p>{bathrooms} m²</p>
          <p>
            <span>Price: USD {price}</span>
          </p>
          <p>Available {available}</p>
          <p>
            From <span>{fromStartDate}</span>
          </p>
          {detailed && (
            <div className="col ">
              <p className={"list-group-item"}>
                {" "}
                hotelRoomHeight {hotel?.hotelRoomHeight || "N/A"}
              </p>
              <p className={"list-group-item"}>
                hotelRoomWidth {hotel?.hotelRoomWidth || "No with"}
              </p>
              <p className={"list-group-item"}>
                squareMeters {hotel?.squareMeters || "No Square"}
              </p>
              <p className={"list-group-item"}>
                hotelRoomParking {hotel?.hotelRoomParking || false}
              </p>
              <p className={"list-group-item"}>
                {" "}
                hotelRoomWifi {hotel?.hotelRoomWifi ? "Wifi" : "No Wifi"}
              </p>
              <p className={"list-group-item"}>
                isNonSmokingRoom {hotel?.isNonSmokingRoom || false}
              </p>
              <p className={"list-group-item"}>
                privateToilet {hotel?.privateToilet || false}
              </p>
              <p className={"list-group-item"}>
                {" "}
                restaurant {hotel?.restaurant || false}
              </p>
              <p className={"list-group-item"}>
                {" "}
                roomService {hotel?.roomService || false}
              </p>
              <p className={"list-group-item"}>
                teaCoffeeMaker {hotel?.teaCoffeeMaker || false}
              </p>
              <MainButton
                title={"Book"}
                type={"submit"}
                textColor={"#fff"}
                bgColor={"#bb3dfd"}
              />
            </div>
          )}
          <p>
            To <span>{toEndDate}</span>
          </p>
          {breakfastIncluded && (
            <p>
              <strong>Breakfast included</strong>
            </p>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}

export default RoomCard
