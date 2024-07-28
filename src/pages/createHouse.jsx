import React, {useContext, useState,} from 'react';
import MainInput from "../components/MainInput";
import MainSelect from "../components/MainSelect";
import HouseContext from "../states/HouseContext";

function CreateHouse(props) {
    const [house,setHouse] = useState({
        houseType:"",
        description:"",
        bathrooms: 1,
        houseSize: 90,
        thumbnail: "",
        yearBuilt: new Date().getFullYear(),
        squareMeters: 0,
        price: 0,
        rooms: 1,
        wifi: false,
        water: true,
        toilets: 1,
        images: [],
        parking: false,
        houseStatus: "",
        location: {
            latitude: 0,
            longitude: 0
        }
    })

const houseData = useContext(HouseContext);


    const houseTypesList = houseData.map((house) => ({
        value:house.houseType,
        label: house.houseType
    }));
/*    console.log("Object or array ", houseTypesList)*/

    const houseStatusList = houseData.map((house) => ({
        value:house.houseStatus,
        label: house.houseStatus
    }));

 console.log("House status", houseStatusList)

    const changeHandler = (e) => {
        const {name,value} = e.target;
        setHouse((prevHouse) => (
            {...prevHouse, [name]: value}
        ));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newHouseType = houseTypesList[0]?.houseType || "";
        setHouse((prevHouse) => (
            {
                ...prevHouse,
                houseType: newHouseType,
            }
        ))
      console.table(house);
    }
    return (
        <form onSubmit={handleSubmit}>
            <MainSelect
            label={house.houseType}
            name={house.houseType}
            value={house.houseType}
            options={houseTypesList}
            onChange={changeHandler}

            />



            <MainSelect
                type="text"
                label={'Nuuca guriga'}
                name="houseStatus"
                value={house.houseStatus}
                placeholder={'houseStatus'}
                options={houseStatusList}
                onChange={changeHandler}

            />

            <MainSelect
                value={house.wifi}
                onChange={changeHandler}
                options={house.wifi}
            />
            <MainSelect
                value={houseData.houseStatus}
                onChange={changeHandler}
                options={house.houseStatus}
            />
            <MainInput
                type="number"
                name="bathroom"
                value={house.bathrooms}
                placeholder={'bathrooms'}
                label={'Bathrooms'}
                onChange={changeHandler}

            />

            <MainInput
            type="text"
            name="description"
            value={house.description}
            placeholder={'description'}
            onChange={changeHandler}
            maxLength={40}
            label={'description'}
                />


<button type={'submit'} className={'btn btn-danger btn-sm'}>Spara</button>
        </form>
    );
}

export default CreateHouse;