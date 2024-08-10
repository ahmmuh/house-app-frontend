import {useState} from 'react';

const useHotelState = (props) => {
    const [hotel, setHotel] = useState({
        roomType:"",
        price:0,
        description:"",
        hotelRoomWidth:0,
        hotelRoomHeight:0,
        squareMeters:0,
        privateToilet:false,
        available:false,
        fromStartDate: new Date(),
        toStartDate: new Date(),
        children:0,
        adults:1,
        hotelRoomWifi:false,
        hotelRoomParking:false,
        airportShuttle:false,
        restaurant:false,
        isNonSmokingRoom:false,
        roomService:false,
        frontDesk24hr:false,
        breakfast:false,
        category:""
    });
    return [hotel, setHotel]
}

export default useHotelState;