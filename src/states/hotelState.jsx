import {useState} from 'react';

const useHotelState = (props) => {
    const [hotel, setHotel] = useState({
        hotelName:"",
        isSingelRoom:false,
        price:0,
        description:"",
        hotelRoomWidth:0,
        hotelRoomHeight:0,
        squareMeters:0,
        privateToilet:false,
        available:false,
        fromStartDate: new Date(),
        toEndDate: new Date(),
        hotelRoomWifi:false,
        hotelRoomParking:false,
        airportShuttle:false,
        restaurant:false,
        isNonSmokingRoom:false,
        roomService:false,
        frontDesk24hr:false,
        breakfast:false,
    });
    return [hotel, setHotel]
}

export default useHotelState;