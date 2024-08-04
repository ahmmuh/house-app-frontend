import React, {useContext, useEffect, useState,} from 'react';
import MainInput from "../components/MainInput";
import MainSelect from "../components/MainSelect";
import HouseContext from "../context/HouseContext";
import MainTextArea from "../components/MainTextArea";
import {createHouse} from "../backend/houseService";
import {convertImagebase64} from "../utils/convertImagebase64";

function CreateHouse() {

    const houseData = useContext(HouseContext);
    const [house,setHouse] = useState({
        houseType:"",
        houseTransactions:"",
        description:"",
        bathrooms:1,
        yearBuilt:new Date().getFullYear(),
        houseWidth: 0,
        houseHeight: 0,
        squareMeters:0,
        price:0,
        rooms:1,
        houseWifi:"",
        houseWater:"",
        toilets:1,
       // thumbnail:null,
        images: [],
        houseParking: "",
  /*      location: {
            latitude: 0,
            longitude: 0
        }*/
    })


    const {houseType,
        houseTransactions,
        houseWater,
        houseWifi,
        houseParking} = houseData
   // console.log("House wifi", houseWifi);
    //console.log("House transactions", houseTransactions);
    //console.log("House houseParking", houseParking);
    //console.log("House water", houseWater);
    //console.log("houseType", houseType);


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
    //console.log("houseTypeOptions",houseTypeOptions)

    const changeHandler = (e) => {
        const {name,value,files} = e.target;
        if (name === "images"){
            setHouse(prevState =>({
                ...prevState,
                images: [...files],
            }))
        }
          else {
            setHouse(prevState =>({
                ...prevState,
                [name]:value
            }))
        }

    }


  useEffect(() => {
      const squareMeters = house.houseWidth * house.houseHeight;
      setHouse(prevState =>({
          ...prevState,
          squareMeters: squareMeters
      }))
    }, [house.houseWidth, house.houseHeight]);
    const handleSubmit = async (e) => {
        e.preventDefault();
      const calculateSquareMeters = house.houseWidth * house.houseHeight;

        const images = await Promise.all(house.images.map(async (image) => {
            const base64 = await convertImagebase64(image);
            return {
                name: image.name,
                type: image.type,
                size: image.size,
                base64: base64
            };
        }));
        const newHouse ={
            houseType:house.houseType,
            description: house.description,
            bathrooms: house.bathrooms,
            yearBuilt: house.yearBuilt,
            squareMeters:house.houseWidth * house.houseHeight,
            price:house.price,
            rooms: house.rooms,
            houseWifi:house.houseWifi,
            houseWater: house.houseWater,
            toilets: house.toilets,
            houseParking: house.houseParking,
            houseTransactions: house.houseTransactions,
            houseWidth: house.houseWidth,
            houseHeight: house.houseHeight,
            images: images
        }
        setHouse(prevState => ({
            ...prevState,
            squareMeters: calculateSquareMeters
        }));

        createHouse(newHouse).then(result => result);
        console.log("New house", newHouse)

    };

    return (
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <MainSelect
            label={'Nuuca guriga'}
            name="houseType"
            id="houseType"
            value={house.houseType}
            options={houseTypeOptions}
            onChange={changeHandler}

            />



  <MainSelect
            type="text"
            label={'Hawlaha guryaha'}
            name="houseTransactions"
            value={house.houseTransactions}
            placeholder={'houseTransactions'}
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
        type="date"
        name="yearBuilt"
        value={house.yearBuilt}
        placeholder={'yearBuilt'}
        label={"yearBuilt"}
        onChange={changeHandler}

    />
            <MainInput
                type="number"
                name="bathrooms"
                value={house.bathrooms}
                placeholder={'bathrooms'}
                label={"Bathroom"}
                min={0}
                onChange={changeHandler}

            />



            <MainInput
                type="number"
                name="price"
                value={house.price}
                placeholder={'Price'}
                label={"Price"}
                min={0}
                onChange={changeHandler}

            />

            <MainInput
                type="number"
                name="rooms"
                value={house.rooms}
                placeholder={'Rooms'}
                label={"Rooms"}
                min={1}
                onChange={changeHandler}

            />

            <MainInput
                type="number"
                name="houseWidth"
                value={house.houseWidth}
                placeholder={'houseWidth'}
                label={"Ballaca guriga"}
                min={0}
                onChange={changeHandler}

            />


            <MainInput
                type="number"
                name="houseHeight"
                value={house.houseHeight}
                placeholder={'houseHeight'}
                label={"Dhererka guriga"}
                min={0}
                onChange={changeHandler}

            />
            <MainInput
                type="number"
                name="squareMeters"
                value={house.squareMeters}
                placeholder={'SquareMeters'}
                label={"Laba jibaar "}
                disabled
                onChange={changeHandler}

            />

            <MainInput
                type="number"
                name="toilets"
                value={house.toilets}
                placeholder={'Toilets'}
                label={"Toilets"}
                min={1}
                onChange={changeHandler}

            />

          {/*  <MainInput
                type="file"
                name="thumbnail"
                placeholder={'thumbnail'}
                label={"thumbnail"}
                onChange={changeHandler}

            />*/}

<MainInput
        type="file"
        name="images"
        placeholder={'images'}
        label={"Images"}
        multiple
        onChange={changeHandler}

    />
    <MainTextArea cols={40}
                  name="description"
                  rows={10} placeholder={'Skiver lite beskrivning'}
                  changeHandler={changeHandler}>

    </MainTextArea>

<button type={'submit'} className={'btn btn-danger btn-md mt-2'}>Spara</button>
        </form>
    );
}

export default CreateHouse;