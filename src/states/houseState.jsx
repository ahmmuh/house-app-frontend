// houseState.js
import { useState } from 'react';
import DatePicker from "../calender/InputDatePicker";


const useHouseState = () => {
    const [house, setHouse] = useState({
        houseType: "",
        houseTransactions: "",
        description: "",
        bathrooms: 1,
        houseWidth: 0,
        houseHeight: 0,
        squareMeters: 0,
        price: 0,
        rooms: 1,
        toilets: 1,
        roomType: "",
        images: [],
        category: "",
        houseStair: "",
        houseKitchen: "",
        houseParking: false,
        airportShuttle: false,
        familyRooms: false,
        restaurant: false,
        nonSmokingRooms: false,
        roomService: false,
        frontDesk24hr: false,
        teaCoffeeMaker: false,
        breakfast: false,
        terrace: false,
        laundry: false,
        elevator: false,
        dailyHousekeeping: false,
        houseWifi: false,
        houseWater: false,
        privateBathroom: false,
        yearBuilt: new Date().getFullYear(),
        fromStartDate: new Date(),
        toEndDate: new Date(),
        children: 0,
        adults:1,
    });

    return [house, setHouse];
};

export default useHouseState;
