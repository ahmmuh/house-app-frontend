import React, {useEffect, useState} from 'react';
import {
    getHouseWater,
    getHouseTypes,
    getHouseWifi,
    getHouseTransactions,
    getHouseparking
} from '../backend/houseService';
import HouseContext from "./HouseContext";
const HouseProvider = ({ children }) => {
    const [houseType, setHouseType] = useState([]);
    const [houseTransactions, setHouseTransactions] = useState([]);
    const [houseWifi, setHouseWifi] = useState([]);
    const [houseWater, setHouseWater] = useState([]);
    const [houseParking, setHouseParking] = useState([]);


       const loadHouseTransactions = async () => {
           const houseTransactions = await getHouseTransactions("houseTransactions");
           setHouseTransactions(houseTransactions)
          // console.log("houseTransactions", houseTransactions);
       }

       const loadHouseWifi = async () => {
           const houseWifi =  await getHouseWifi("houseWifi");
           setHouseWifi(houseWifi);
          // console.log("houseWifi", houseWifi);
       }

       const loadHouseWater = async () => {
           const houseWater = await getHouseWater("houseWater")
           setHouseWater( houseWater);
           //console.log("houseWater", houseWater);

       }
       const loadHouseParking = async () => {
           const houseParkings = await getHouseparking("houseParking")
           setHouseParking(houseParkings)
           //console.log("houseParking", houseParkings)
       }

    const loadHouseTypes = async () =>{
        const houseType = await getHouseTypes("houseType");
        setHouseType(houseType);
        //console.log("houseType", houseType);
    }

    useEffect(() => {
        loadHouseTypes();
        loadHouseParking();
        loadHouseWater();
        loadHouseWifi()
        loadHouseTransactions()

    },[])

    return(

   <HouseContext.Provider value={{
       houseType,
       houseTransactions,
       houseWater,
       houseWifi,
       houseParking
   }}>
       {children}
   </HouseContext.Provider>
    )


}


export default HouseProvider;

