import React, {useContext, useState,} from 'react';
import MainInput from "../components/MainInput";
import MainSelect from "../components/MainSelect";
import HouseContext from "../context/HouseContext";
import MainTextArea from "../components/MainTextArea";

function CreateHouse() {
    const houseData = useContext(HouseContext);

    const [house,setHouse] = useState({
        houseType:"",
        description:"",
        bathrooms: 1,
        thumbnail: "",
        yearBuilt: new Date().getFullYear(),
        squareMeters: 0,
        price: 0,
        rooms: 1,
        houseWifi: "",
        houseWater: "",
        toilets: 1,
        images: [],
        houseParking: "",
        houseStatus: "",
        location: {
            latitude: 0,
            longitude: 0
        }
    })


    const {houseType,
        houseTransactions,
        houseWater,
        houseWifi,
        houseParking} = houseData
    console.log("House wifi", houseWifi);
    console.log("House transactions", houseTransactions);
    console.log("House houseParking", houseParking);
    console.log("House water", houseWater);
    console.log("houseType", houseType);


    // gör om listorna till object med label och value så att de passar i options


const houseWaterOptions = houseWater.map(house_water =>({
    label: house_water,
    value: house_water,
}))

const houseWifiOptions = houseWifi.map(house_wifi =>({
label: house_wifi,
value: house_wifi,
}))

const houseParkingOptions = houseParking.map(house_parking =>({
    label: house_parking,
    value:house_parking,
}))

    const houseTransactionOptions = houseTransactions.map(house_transaction =>({
    label: house_transaction,
    value: house_transaction
}))
 const houseTypeOptions = houseType.map(type =>({
        label: type,
        value: type
    }))
    console.log("houseTypeOptions",houseTypeOptions)

    const changeHandler = (e) => {
        const {name,value} = e.target;
        setHouse((prevHouse) => (
            {...prevHouse, [name]: value}
        ));
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setHouse((prevHouse) => (
            {
                ...prevHouse,
                houseType
            }
        ))
      console.table(house);
    }
    return (
        <form onSubmit={handleSubmit}>
            <MainSelect
            label={'Nuuca guriga'}
            name={house.houseType}
            value={house.houseType.value}
            options={houseTypeOptions}
            onChange={changeHandler}

            />



  <MainSelect
            type="text"
            label={'Nuuca guriga'}
            name="houseStatus"
            value={house.houseStatus}
            placeholder={'houseStatus'}
            options={houseTransactionOptions}
            onChange={changeHandler}

        />

            <MainSelect
                type="text"
                label={'Biyo ma leyahay?'}
                name="houseWater"
                value={house.houseWater}
                placeholder={'houseWater'}
                options={houseWaterOptions}
                onChange={changeHandler}

            />

    <MainSelect
        type="text"
        label={'Parking'}
        name="houseParking"
        value={house.houseParking}
        placeholder={'houseParking'}
        options={houseParkingOptions}
        onChange={changeHandler}

    />

    <MainSelect
        type="text"
        label={'Internet?'}
        name="houseWifi"
        value={house.houseWifi}
        placeholder={'houseWifi'}
        options={houseWifiOptions}
        onChange={changeHandler}

    />
            <MainInput
                type="number"
                name="bathrooms"
                value={house.bathrooms}
                placeholder={'bathrooms'}
                label={"Bathroom"}
                onChange={changeHandler}

            />



            <MainInput
                type="number"
                name="price"
                value={house.price}
                placeholder={'Price'}
                label={"Price"}
                onChange={changeHandler}

            />

            <MainInput
                type="number"
                name="rooms"
                value={house.rooms}
                placeholder={'Rooms'}
                label={"Rooms"}
                onChange={changeHandler}

            />

            <MainInput
                type="number"
                name="squareMeters"
                value={house.squareMeters}
                placeholder={'SquareMeters'}
                label={"SquareMeters"}
                onChange={changeHandler}

            />



            <MainInput
                type="number"
                name="toilets"
                value={house.toilets}
                placeholder={'Toilets'}
                label={"Toilets"}
                onChange={changeHandler}

            />
            <MainInput
                type="text"
                name="toilets"
                value={house.water}
                placeholder={'Water'}
                label={"Water"}
                onChange={changeHandler}

            />

    <MainTextArea cols={40}
                  rows={10} placeholder={'Skiver lite beskrivning'}
                  changeHandler={changeHandler}>

    </MainTextArea>

<button type={'submit'} className={'btn btn-danger btn-md mt-2'}>Spara</button>
        </form>
    );
}

export default CreateHouse;