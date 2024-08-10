import React, {useContext, useEffect, useState,} from 'react';
import MainInput from "../components/reusableInputs/MainInput";
import MainSelect from "../components/reusableInputs/MainSelect";
import HouseEnumContext from "../context/HouseEnumContext";
import MainTextArea from "../components/reusableInputs/MainTextArea";
import {createHouse} from "../backend/houseService";
import {convertImagebase64} from "../utils/convertImagebase64";
import SaveButton from "../components/SaveButton";
import DashboardContext from "../context/DashboardContext";
import RadioInput from "../components/reusableInputs/RadioInput";
import MainCard from "../components/reusableInputs/MainCard";
import useHouseState from "../states/houseState";
import {checkSelectedCategory} from "../utils/checkSelectedCategory";
import HotelBookingForm from "../components/hotel/HotelBookingForm";
function CreateHouse() {

    const houseData = useContext(HouseEnumContext);
    //console.log("ALl house data", houseData)
    const {houseCategory} = useContext(DashboardContext)
    const [selectedCategory,setSelectedCategory] = useState('');
    const [selectHouseTransaction, setHouseTransaction] = useState('')
    // console.log("houseCategory", houseCategory);
    const [house,setHouse] = useHouseState();
    const {houseType,
        houseTransactions,
        houseWater,
        houseWifi,
        roomType,
        houseStairs,
        houseKitchen,
        houseParking} = houseData
    // console.log("House wifi", houseWifi);
    //console.log("House transactions", houseTransactions);
    //console.log("House houseParking", houseParking);
    //console.log("House water", houseWater);
    //console.log("houseType", houseType);
    //console.log("roomType", roomType);

    //console.log("house Stairs", houseStairs);
    //console.log("house Kitchen", houseKitchen);



    // gör om listorna till object med label och value så att de passar i options


    const houseStairsOptions = houseStairs.map(houseStair =>({
        label: houseStair,
        value: houseStair,
    }))

    /*
        const houseKitchenOptions = houseWater.map(kitchen =>({
            label: kitchen,
            value: kitchen,
        }))*/


    /*  const houseWaterOptions = houseWater.map(house_water =>({
          label: house_water,
          value: house_water,
      }))*/
    const houseRoomOptions = roomType.map(room =>({
        label: room,
        value: room,
    }))



    /*  const houseWifiOptions = houseWifi.map(house_wifi =>({
          label: house_wifi,
          value: house_wifi,
      }))
  */
    /*  const houseParkingOptions = houseParking.map(house_parking =>({
          label: house_parking,
          value:house_parking,
      }))*/

    const houseTransactionOptions = houseTransactions.map(house_transaction =>({
        label: house_transaction,
        value: house_transaction
    }))
    const houseCategoryOptions = houseCategory.map(category =>({
        label: category.name,
        value: category.name,
        id: category._id,
    }))

console.log("houseCategoryOptions", houseCategoryOptions)
    //select category
    const handleCategoryChange = (e)=>{
        setSelectedCategory(e.target.value)
        console.log("selectedCategory", e.target.value)
    }


    const handleHouseTransactionChange = (e)=>{
        setHouseTransaction(e.target.value)
        console.log("selectedHouseTransaction", e.target.value)
    }
    //console.log("houseTypeOptions",houseTypeOptions)

    const changeHandler = (e) => {
        const {name,value,files, type, checked} = e.target;
        if (name === "images"){
            setHouse(prevState =>({
                ...prevState,
                images: [...files],
            }))
        }
        else {
            setHouse(prevState =>({
                ...prevState,
                fromStartDate: house.fromStartDate,
                toEndDate: house.toEndDate,
                [name]: type === 'checkbox'? checked: (type === 'radio' ? value === 'true': value ),
            }))
        }
    console.log(value)
    }
    //console.log("House date", house)


    useEffect(() => {
        const squareMeters = house.houseWidth * house.houseHeight;
        setHouse(prevState =>({
            ...prevState,
            squareMeters: squareMeters,
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
            houseTransactions: house.houseTransactions,
            houseWidth: house.houseWidth,
            houseHeight: house.houseHeight,
            price: house.price,
            rooms: house.rooms,
            toilets: house.toilets,
            roomType: house.roomType,
            images: images,
            category: house.category,
            houseStair: house.houseStair,
            houseKitchen: house.houseKitchen,
            houseParking: house.houseParking,
            airportShuttle: house.airportShuttle,
            familyRooms: house.familyRooms,
            restaurant: house.restaurant,
            nonSmokingRooms: house.nonSmokingRooms,
            roomService: house.roomService,
            frontDesk24hr: house.frontDesk24hr,
            teaCoffeeMaker: house.teaCoffeeMaker,
            breakfast: house.breakfast,
            terrace: house.terrace,
            laundry: house.laundry,
            elevator: house.elevator,
            dailyHousekeeping: house.dailyHousekeeping,
            houseWifi: house.houseWifi,
            houseWater: house.houseWater,
            privateBathroom: house.privateBathroom,
            fromStartDate: house.fromStartDate,
            toEndDate: house.toEndDate,
            children: house.children,
            adults:house.adults,

        }
        setHouse(prevState => ({
            ...prevState,
            squareMeters: calculateSquareMeters
        }));
       checkSelectedCategory(selectedCategory, house)
        createHouse(newHouse).then(result => result);
        console.log("New house", newHouse)

    };
    // tar bort visa inmatningsfälts valuse
    // check selected Category

    return (
        <div className={'container'}>
            <div className={'row'}>
                    <MainSelect
                        label={'Nuuca guriga'}
                        name="category"
                        id="category"
                        value={house.category.name}
                        options={houseCategoryOptions}
                        onChange={handleCategoryChange}

                    />

                    {
                        selectedCategory  !== "" && (
                            <>
                                {/*Hotel*/}
                                <div>
                                    {
                                         selectedCategory === "Hotel" && (
                                            <>
                                                <MainCard title={'Guest Information'}>
                                                <HotelBookingForm />
                                                </MainCard>

                                            </>
                                        )
                                    }

                                    {
                                        house !== undefined && house !== "Hotel" && (
                                            <>
                                                <MainSelect
                                                    type="text"
                                                    label={'Hawlaha guryaha'}
                                                    name="houseTransactions"
                                                    value={house.houseTransactions}
                                                    placeholder={'houseTransactions'}
                                                    options={houseTransactionOptions}
                                                    onChange={handleHouseTransactionChange}

                                                />

                                            </>
                                        )
                                    }


                                    {
                                        selectedCategory === "Hotel" && (
                                            <>

                                             </>
                                        )
                                    }
                                </div>

                                {/*end hotel*/}

                                {/*Apartment */}
                                {

                                    selectedCategory === "Apartment" && (
                                        <>
                                            <MainCard title={'Apartment'}>
                                                <i className="fa-solid fa-restroom"></i>
                                                <MainInput
                                                    type="number"
                                                    name="toilets"
                                                    value={house.toilets}
                                                    placeholder={'Toilets'}
                                                    label={"Toilets"}
                                                    min={1}
                                                    onChange={changeHandler}

                                                />
                                                <i className="fa-solid fa-shower"></i>
                                                <MainInput
                                                    type="number"
                                                    name="bathrooms"
                                                    value={house.bathrooms}
                                                    placeholder={'bathrooms'}
                                                    label={"Bathroom"}
                                                    min={0}
                                                    onChange={changeHandler}

                                                />

                                            </MainCard>
                                            <MainCard title={'Mashiinka dharka lagu dhaqo'}>
                                                <RadioInput
                                                    type={'radio'}
                                                    name={'laundry'}
                                                    value={'true'}
                                                    id={'laundryYes'}
                                                    checked={house.laundry === true}
                                                    onChange={changeHandler}
                                                    label={'Yes'}

                                                />

                                                <RadioInput
                                                    type={'radio'}
                                                    name={'laundry'}
                                                    value={'false'}
                                                    id={'laundryNo'}
                                                    checked={house.houseWifi === false}
                                                    onChange={changeHandler}
                                                    label={'No'}

                                                />
                                            </MainCard>

                                            <MainCard title={'Jiko / Koshiin'}>

                                                <RadioInput
                                                    type={'radio'}
                                                    name={'houseKitchen'}
                                                    value={'true'}
                                                    id={'laundryYes'}
                                                    checked={house.houseKitchen === true}
                                                    onChange={changeHandler}
                                                    label={'Yes'}

                                                />

                                                <RadioInput
                                                    type={'radio'}
                                                    name={'houseKitchen'}
                                                    value={'false'}
                                                    id={'houseKitchenNo'}
                                                    checked={house.houseKitchen === false}
                                                    onChange={changeHandler}
                                                    label={'No'}

                                                />
                                            </MainCard>
                                        </>
                                    )
                                }

                                {/*Apartment ends */}
                                {
                                    selectedCategory !== "Hotel" && (
                                        <>

                                        </>
                                    )
                                }

                                {
                                    selectedCategory === "Dabaq" && (
                                       <>
                                           <MainSelect
                                               type="text"
                                               label={'Jaraan jaro'}
                                               name="houseStair"
                                               value={house.houseStair}
                                               placeholder={'houseStair'}
                                               options={houseStairsOptions}
                                               onChange={changeHandler}

                                           />

                                          <MainCard title={'Elevator'}>
                                              <RadioInput
                                                  type={'radio'}
                                                  name={'elevator'}
                                                  value={'true'}
                                                  id={'elevatorYes'}
                                                  checked={house.elevator === true}
                                                  onChange={changeHandler}
                                                  label={'Yes'}
                                              />

                                              <RadioInput
                                                  type={'radio'}
                                                  name={'elevator'}
                                                  value={'false'}
                                                  id={'elevatorNo'}
                                                  checked={house.elevator === false}
                                                  onChange={changeHandler}
                                                  label={'No'}
                                              />
                                          </MainCard>
                                       </>
                                    )
                                }



                               {/* <SaveButton
                                    type={'submit'}
                                    title={'Spara'}
                                    textColor={'text-primary'}
                                    backgroundColor={'btn btn-danger btn-md mt-3'}
                                ></SaveButton>*/}

                            </>
                        )
                    }
                    <p>{selectedCategory}</p>

            </div>
        </div>
    );
}

export default CreateHouse;