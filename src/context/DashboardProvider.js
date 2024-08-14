import DashboardContext from "./DashboardContext";
import {useEffect, useState} from "react";
import {getAllHotels} from "../backend/hotelService";
import {getAllHouseCategory} from "../backend/house-categoryService";

function DashboardProvider({children}) {
    const [hotels, setHotels] = useState([]);
    const [houseCategory, setHouseCategory] = useState([]);


    const fetchHouseCategories = async () => {
        const houseCategories = await getAllHouseCategory();
        setHouseCategory(houseCategories);
        //console.log("houseCategories", houseCategories);
    }


    const fetchHouses = async () => {
        const hotels = await getAllHotels();
        setHotels(hotels);
    }

    useEffect(() =>{
        fetchHouses().then(houses =>{})
        fetchHouseCategories().then(categories =>{})
    },[])
    //console.log("All Houses ", houses)
    return (
       <DashboardContext.Provider value={{
           hotels,
           houseCategory
       }}>
           {children}
       </DashboardContext.Provider>
    );
}

export default DashboardProvider;