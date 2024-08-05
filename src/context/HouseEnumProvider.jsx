import React, {useEffect, useState} from 'react';
import {
    getHouseTransactionsEnums,
    getHouseWifiEnums,
    getHouseWaterEnums,
    getHouseparkingEnums,
    getHouseTypesEnums, getHouseRoomTypesEnums, getHouseStairsEnums, getHouseKitchenEnums
} from '../backend/enumService.js';
import HouseEnumContext from "./HouseEnumContext";
const HouseEnumProvider = ({ children }) => {
    const [houseType, setHouseType] = useState([]);
    const [houseTransactions, setHouseTransactions] = useState([]);
    const [houseWifi, setHouseWifi] = useState([]);
    const [houseWater, setHouseWater] = useState([]);
    const [houseParking, setHouseParking] = useState([]);

    const [roomType, setRoomType] = useState([]);
    const [houseStairs, setHouseStairs] = useState([]);
    const [houseKitchen,setHouseKitchen] = useState([]);
    //const [houseKitchen,setHouseKitchen] = useState([]);
    const loadRoomTypes = async () => {
        const roomTypes = await getHouseRoomTypesEnums("roomType");
        setRoomType(roomTypes);
    }

    const loadHouseStairs = async () => {
        const houseStairs = await getHouseStairsEnums("houseStairs");
        setHouseStairs(houseStairs);
    }

    const loadHouseKitchen = async () => {
        const houseKitchen = await getHouseKitchenEnums("houseKitchen");
        setHouseKitchen(houseKitchen);
    }
       const loadHouseTransactions = async () => {
           const houseTransactions = await getHouseTransactionsEnums("houseTransactions");
           setHouseTransactions(houseTransactions)
          // console.log("houseTransactions", houseTransactions);
       }

       const loadHouseWifi = async () => {
           const houseWifi =  await getHouseWifiEnums("houseWifi");
           setHouseWifi(houseWifi);
          // console.log("houseWifi", houseWifi);
       }

       const loadHouseWater = async () => {
           const houseWater = await getHouseWaterEnums("houseWater")
           setHouseWater( houseWater);
           //console.log("houseWater", houseWater);

       }
       const loadHouseParking = async () => {
           const houseParkings = await getHouseparkingEnums("houseParking")
           setHouseParking(houseParkings)
           //console.log("houseParking", houseParkings)
       }

    const loadHouseTypes = async () =>{
        const houseType = await getHouseTypesEnums("houseType");
        setHouseType(houseType);
        //console.log("houseType", houseType);
    }

    useEffect(() => {
        loadHouseTypes();
        loadHouseParking();
        loadHouseWater();
        loadHouseWifi()
        loadHouseTransactions()
        loadRoomTypes()
        loadHouseStairs()
        loadHouseKitchen()
    },[])

    return(

   <HouseEnumContext.Provider value={{
       houseType,
       houseTransactions,
       houseWater,
       houseWifi,
       houseParking,
       roomType,
       houseStairs,
       houseKitchen
   }}>
       {children}
   </HouseEnumContext.Provider>
    )


}


export default HouseEnumProvider;

