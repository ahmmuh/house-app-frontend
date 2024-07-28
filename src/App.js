import './App.css';
import HouseContext from "./states/HouseContext";
import {getAllHouses} from "./backend/houseApi";
import {Outlet} from "react-router-dom";
import Menu from "./pages/menu";
import {useState,useEffect} from "react";

function App() {
    const [houses, setHouses] = useState([]);


    const getHouses = async () => {

        try{
            const data = await getAllHouses();
            return data;

        }
        catch(error){
            console.log(error);
            return []
        }


    }


    useEffect(() => {
        getHouses().then(r => {
            setHouses(r);
        });
    }, []);

    return (
        <HouseContext.Provider value={houses}>
            <Menu />
            <div className={'container'}>
                <Outlet/>

            </div>
        </HouseContext.Provider>
    );
}

export default App;
