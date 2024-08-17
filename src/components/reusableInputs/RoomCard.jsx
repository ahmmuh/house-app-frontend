import React from 'react';
import {Link} from "react-router-dom";
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
        <div className="container bg-light mb-3" {...props}>
            <div className="row p-4">
                <div className="col-5">
              {/*      {
                        hotel.images.map((image, index) => (
                            <img key={index} src={`data:image/jpeg:base64, ${Buffer.from(image).toString("base64")}`}
                                 className="img-fluid" alt={`Hotel ${hotel.name}`}/>
                        ))
                    }*/}
                    <h2>Images</h2>
                </div>
                <div className="col">
                    <h4 className="text-primary">{title}</h4>
                    <p>{description}</p>
                    <p>{bathrooms} m²</p>
                    <p><span>Price: USD {price}</span></p>
                    <p>Available {available}</p>
                    <p>From <span>{fromStartDate}</span></p>
                    {detailed && (
                        <div className="col-5">
                           <p> hotelRoomHeight {hotel?.hotelRoomHeight || 'N/A'}</p>
                            <p>hotelRoomWidth {hotel?.hotelRoomWidth || 'No with'}</p>
                            <p>squareMeters {hotel?.squareMeters || 'No Square'}</p>
                            <p>hotelRoomParking {hotel?.hotelRoomParking || false}</p>
                            <p> hotelRoomWifi {hotel?.hotelRoomWifi? 'Wifi' : 'No Wifi'}</p>
                            <p>isNonSmokingRoom {hotel?.isNonSmokingRoom || false}</p>
                            <p>privateToilet {hotel?.privateToilet || false}</p>
                            <p>  restaurant {hotel?.restaurant || false}</p>
                           <p> roomService {hotel?.roomService || false}</p>
                            <p>teaCoffeeMaker {hotel?.teaCoffeeMaker || false}</p>
                        </div>
                    )}
                    <p>To <span>{toEndDate}</span></p>
                    {breakfastIncluded && <p><strong>Breakfast included</strong></p>}
                </div>
            </div>

        </div>
    );
}

export default RoomCard;
