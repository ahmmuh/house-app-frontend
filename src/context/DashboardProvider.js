import DashboardContext from "./DashboardContext";
import {useEffect, useState} from "react";
import {getAllHouses} from "../backend/houseService";
import {getAllHouseCategory} from "../backend/house-categoryService";

function DashboardProvider({children}) {
    const [houses, setHouses] = useState([]);
    const [houseCategory, setHouseCategory] = useState([]);


    const fetchHouseCategories = async () => {
        const houseCategories = await getAllHouseCategory();
        setHouseCategory(houseCategories);
        //console.log("houseCategories", houseCategories);
    }


    const fetchHouses = async () => {
        const houses = await getAllHouses();
        setHouses(houses);
    }

    useEffect(() =>{
        fetchHouses().then(houses =>{})
        fetchHouseCategories().then(categories =>{})
    },[])
    //console.log("All Houses ", houses)
    return (
       <DashboardContext.Provider value={{
           houses,
           houseCategory
       }}>
           {children}
       </DashboardContext.Provider>
    );
}

export default DashboardProvider;