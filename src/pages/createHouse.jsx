import React, {useContext, useEffect, useState,} from 'react';
import MainInput from "../components/MainInput";
import MainSelect from "../components/MainSelect";
import HouseEnumContext from "../context/HouseEnumContext";
import MainTextArea from "../components/MainTextArea";
import {createHouse} from "../backend/houseService";
import {convertImagebase64} from "../utils/convertImagebase64";
import SaveButton from "../components/SaveButton";
import DashboardContext from "../context/DashboardContext";
import RadioInput from "../components/RadioInput";
import MainCard from "../components/MainCard";
import useHouseState from "../states/houseState";
import DatePicker from "../calender/DatePicker";
function CreateHouse() {

    const houseData = useContext(HouseEnumContext);
    console.log("ALl house data", houseData)
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
    console.log("House transactions", houseTransactions);
    //console.log("House houseParking", houseParking);
    //console.log("House water", houseWater);
    //console.log("houseType", houseType);
    console.log("roomType", roomType);

    console.log("house Stairs", houseStairs);
    console.log("house Kitchen", houseKitchen);



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
        value: category.name
    }))


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
                [name]: type === 'checkbox'? checked: (type === 'radio' ? value === 'true': value ),
            }))
        }

    }


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
            price:house.price,
            rooms: house.rooms,
            houseWifi:house.houseWifi,
            houseWater: house.houseWater,
            toilets: house.toilets,
            houseParking: house.houseParking,
            houseTransactions: house.houseTransactions,
            houseWidth: house.houseWidth,
            houseHeight: house.houseHeight,
            images: images,
            category: house.category
        }
        setHouse(prevState => ({
            ...prevState,
            squareMeters: calculateSquareMeters
        }));

        createHouse(newHouse).then(result => result);
        console.log("New house", newHouse)

    };

    return (
        <div className={'container'}>
            <div className={'row'}>
                <form onSubmit={handleSubmit} encType="multipart/form-data">
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
                                        selectedCategory !== undefined && selectedCategory !== "Hotel" && (
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

                                                <MainSelect
                                                    type="text"
                                                    label={'Room type'}
                                                    name="roomType"
                                                    value={house.roomType}
                                                    placeholder={'roomType'}
                                                    options={houseRoomOptions}
                                                    onChange={changeHandler}

                                                />
                                                <MainCard title={'Family Rooms'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'familyRooms'}
                                                        value={'true'}
                                                        id={'familyRoomsYes'}
                                                        checked={house.familyRooms === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'familyRooms'}
                                                        value={'false'}
                                                        id={'familyRoomsNo'}
                                                        checked={house.familyRooms === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />
                                                </MainCard>

                                                <MainCard title={'Airport transfer'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'airportShuttle'}
                                                        value={'true'}
                                                        id={'airportShuttleYes'}
                                                        checked={house.airportShuttle === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'airportShuttle'}
                                                        value={'false'}
                                                        id={'airportShuttleNo'}
                                                        checked={house.airportShuttle === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />



                                                </MainCard>
                                                <MainCard title={'Open 24/7'}>

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'frontDesk24hr'}
                                                        value={'true'}
                                                        id={'frontDesk24hrYes'}
                                                        checked={house.airportShuttle === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />


                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'frontDesk24hr'}
                                                        value={'false'}
                                                        id={'frontDesk24hrNo'}
                                                        checked={house.airportShuttle === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />
                                                </MainCard>

                                                {
                                                    selectedCategory === "Apartment" || selectedCategory === "Hotel" && (
                                                        <>
                                                            <MainCard title={'Wifi'}>
                                                                <RadioInput
                                                                    type={'radio'}
                                                                    name={'houseWifi'}
                                                                    value={'true'}
                                                                    id={'houseWifiYes'}
                                                                    checked={house.houseWifi === true}
                                                                    onChange={changeHandler}
                                                                    label={'Yes'}

                                                                />

                                                                <RadioInput
                                                                    type={'radio'}
                                                                    name={'houseWifi'}
                                                                    value={'false'}
                                                                    id={'houseWifiNo'}
                                                                    checked={house.houseWifi === false}
                                                                    onChange={changeHandler}
                                                                    label={'No'}

                                                                />
                                                            </MainCard>
                                                        </>
                                                    )
                                                }

                                                <MainCard title={'Private Bath Room'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'privateBathroom'}
                                                        value={'true'}
                                                        id={'privateBathRoomYes'}
                                                        checked={house.privateBathroom === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'privateBathroom'}
                                                        value={'false'}
                                                        id={'privateBathRoomNo'}
                                                        checked={house.privateBathroom === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />
                                                </MainCard>
                                                <MainCard title={'Parking'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'houseParking'}
                                                        value={'true'}
                                                        id={'parkingYes'}
                                                        checked={house.houseParking === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />


                                                    <RadioInput
                                                        style={{marginLeft: '10px'}}
                                                        type={'radio'}
                                                        name={'houseParking'}
                                                        value={'false'}
                                                        id={'parkingNo'}
                                                        checked={house.houseParking === false}
                                                        label={'No'}
                                                        onChange={changeHandler}
                                                    />
                                                </MainCard>

                                                <MainCard title={'Room Service'}>

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'roomService'}
                                                        value={'true'}
                                                        id={'roomServiceYes'}
                                                        checked={house.roomService === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />


                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'roomService'}
                                                        value={'false'}
                                                        id={'roomServiceNo'}
                                                        checked={house.roomService === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />

                                                </MainCard>
                                                <MainCard title={'Restaurant'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'restaurant'}
                                                        value={'true'}
                                                        id={'RestaurantYes'}
                                                        checked={house.restaurant === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />


                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'restaurant'}
                                                        value={'false'}
                                                        id={'RestaurantNo'}
                                                        checked={house.restaurant === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />
                                                </MainCard>

                                                <MainCard title={'Breakfast'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'breakfast'}
                                                        value={'true'}
                                                        id={'breakfastYes'}
                                                        checked={house.breakfast === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'breakfast'}
                                                        value={'false'}
                                                        id={'breakfastNo'}
                                                        checked={house.breakfast === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />


                                                </MainCard>
                                                <MainCard title={'Tea & Coffee Maker'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'teaCoffeeMaker'}
                                                        value={'true'}
                                                        id={'teaCoffeeMakerYes'}
                                                        checked={house.teaCoffeeMaker === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'teaCoffeeMaker'}
                                                        value={'false'}
                                                        id={'teaCoffeeMakerNo'}
                                                        checked={house.teaCoffeeMaker === false}
                                                        onChange={changeHandler}
                                                        label={'No'}

                                                    />
                                                </MainCard>

                                                <MainCard title={'Daily House keeping'}>
                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'dailyHousekeeping'}
                                                        value={'true'}
                                                        id={'smokingRoomsYes'}
                                                        checked={house.dailyHousekeeping === true}
                                                        onChange={changeHandler}
                                                        label={'Yes'}

                                                    />

                                                    <RadioInput
                                                        type={'radio'}
                                                        name={'dailyHousekeeping'}
                                                        value={'false'}
                                                        id={'smokingRoomsNo'}
                                                        checked={house.dailyHousekeeping === false}
                                                        onChange={changeHandler}
                                                        label={'No'}
                                                    />
                                                </MainCard>
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
                                                <MainInput
                                                    type="number"
                                                    name="toilets"
                                                    value={house.toilets}
                                                    placeholder={'Toilets'}
                                                    label={"Toilets"}
                                                    min={1}
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
                                                    name={'laundry'}
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
                                           <MainCard title={'Waqtigi la dhisay'}>
                                               <DatePicker name={'yearBuilt'}
                                                           value={house.yearBuilt}
                                                           onChange={changeHandler} />
                                           </MainCard>
                                        </>
                                    )
                                }
                                <MainCard title={'Water'}>
                                    <RadioInput
                                        type={'radio'}
                                        name={'houseWater'}
                                        value={'true'}
                                        id={'houseWaterYes'}
                                        checked={house.houseWater === true}
                                        onChange={changeHandler}
                                        label={'Yes'}
                                    />

                                    <RadioInput
                                        type={'radio'}
                                        name={'houseWater'}
                                        value={'false'}
                                        id={'houseWaterNo'}
                                        checked={house.houseWater === false}
                                        onChange={changeHandler}
                                        label={'No'}
                                    />
                                </MainCard>
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


                                <MainInput
                                    type="number"
                                    name="price"
                                    value={house.price}
                                    placeholder={'Price'}
                                    label={"Qiimaha"}
                                    min={0}
                                    onChange={changeHandler}

                                />
                                <MainCard title={'Cabirka guriga'}>
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
                                        value={`${house.squareMeters}`}
                                        label={`Waa`}
                                        disabled
                                        onChange={changeHandler}

                                    />

                                </MainCard>


                                <MainInput
                                    type="file"
                                    name="images"
                                    placeholder={'images'}
                                    label={"Images"}
                                    multiple
                                    onChange={changeHandler}

                                />
                                <MainTextArea
                                              name="description"
                                              cols={40}
                                              rows={10} placeholder={'Skiver lite beskrivning'}
                                              changeHandler={changeHandler}>

                                </MainTextArea>

                                <SaveButton
                                    type={'submit'}
                                    title={'Spara'}
                                    textColor={'text-primary'}
                                    backgroundColor={'btn btn-danger btn-md mt-3'}
                                ></SaveButton>

                            </>
                        )
                    }
                    <p>{selectedCategory}</p>
                </form>

            </div>
        </div>
    );
}

export default CreateHouse;