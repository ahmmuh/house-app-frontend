import React, {useEffect} from 'react';
import DatePicker from "../../calender/InputDatePicker";
import GuestInputCounter from "../reusableInputs/GuestInputCounter";
import MainCard from "../reusableInputs/MainCard";
import RadioInput from "../reusableInputs/RadioInput";
import useHouseState from "../../states/houseState";
import {convertImagebase64} from "../../utils/convertImagebase64";
import {createHouse} from "../../backend/houseService";
import SaveButton from "../SaveButton";
function HotelBookingForm(props) {
    const [hotel,setHotel] = useHouseState()

    const changeHandler = (e) => {
        const {name,value,files, type, checked} = e.target;
        if (name === "images"){
            setHotel(prevState =>({
                ...prevState,
                images: [...files],
            }))
        }
        else {
            setHotel(prevState =>({
                ...prevState,
                fromStartDate: hotel.fromStartDate,
                toEndDate: hotel.toEndDate,
                [name]: type === 'checkbox'? checked: (type === 'radio' ? value === 'true': value ),
            }))
        }
        console.log(value)
    }

    useEffect(() => {
        const squareMeters = hotel.hotelRoomWidth * hotel.hotelRoomHeight;
        setHotel(prevState =>({
            ...prevState,
            squareMeters: squareMeters,
        }))
    }, [hotel.hotelRoomWidth, hotel.hotelRoomHeight]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const calculateSquareMeters = hotel.hotelRoomWidth* hotel.hotelRoomHeight;

        const images = await Promise.all(hotel.images.map(async (image) => {
            const base64 = await convertImagebase64(image);
            return {
                name: image.name,
                type: image.type,
                size: image.size,
                base64: base64
            };
        }));
        const newHotelRoom ={
            hotelName:hotel.hotelName,
            roomType:hotel.roomType,
            price:hotel.price,
            description:hotel.description,
            hotelRoomWidth:hotel.hotelRoomWidth,
            hotelRoomHeight:hotel.hotelRoomHeight,
            squareMeters:hotel.hotelRoomWidth * hotel.hotelRoomHeight,
            privateToilet:hotel.privateBathroom,
            available:hotel.available,
            fromStartDate: hotel.fromStartDate,
            toStartDate: hotel.toStartDate,
            children:hotel.children,
            adults:hotel.adults,
            hotelRoomWifi:hotel.hotelRoomWifi,
            hotelRoomParking:hotel.hotelRoomParking,
            airportShuttle:hotel.airportShuttle,
            restaurant:hotel.hotel.restaurant,
            isNonSmokingRoom:hotel.hotel.isNonSmokingRoom,
            roomService:hotel.roomService,
            frontDesk24hr:hotel.frontDesk24hr,
            breakfast:hotel.breakfast,
            category:hotel.category,
            images: images
        }
        setHotel(prevState => ({
            ...prevState,
            squareMeters: calculateSquareMeters
        }));
        //checkSelectedCategory(selectedCategory, house)
        createHouse(newHotelRoom).then(result => result);
        console.log("New house", newHotelRoom)

    };

    return (
       <div className={'container'}>
           <form onSubmit={handleSubmit}>
               <div className={'row'}>
                   <div className={'col'}>
                       <DatePicker
                           type="date"
                           name={'fromStartDate'}
                           selectedDate={hotel.fromStartDate}
                           id={'fromStartDate'}
                           changeHandler={changeHandler}

                       /> <i className="fa-solid fa-calendar-days"></i>
                   </div>
                   <div className={'col'}>
                       <DatePicker
                           type='date'
                           name={'toEndDate'}
                           id={'toEndDate'}
                           selectedDate={hotel.toEndDate}
                           changeHandler={changeHandler}

                       /> <i className="fa-solid fa-calendar-days"></i>
                   </div>
                   <div className={'col'}>
                       <GuestInputCounter type={'number'} name={'adults'} value={hotel.adults}
                                          changeHandler={changeHandler}/>
                       <i className="fa-solid fa-person" style={{marginLeft: '.2rem'}}></i>
                   </div>
                   <div className={'col'}>
                       <GuestInputCounter type={'number'} name={'children'} value={hotel.children}
                                          onChange={changeHandler}/>
                       <i className="fa-solid fa-children" style={{marginLeft: '.2rem'}}></i>
                   </div>
               </div>
               <div className={'row'}>
                   <MainCard title={'Wifi'}>
                       <RadioInput
                           type={'radio'}
                           name={'houseWifi'}
                           value={'true'}
                           id={'houseWifiYes'}
                           checked={hotel.houseWifi === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />

                       <RadioInput
                           type={'radio'}
                           name={'houseWifi'}
                           value={'false'}
                           id={'houseWifiNo'}
                           checked={hotel.houseWifi === false}
                           onChange={changeHandler}
                           label={'No'}

                       />
                   </MainCard>

                   {/*   <MainSelect
                   type="text"
                   label={'BookedRoom type'}
                   name="roomType"
                   value={hotelState.roomType}
                   placeholder={'roomType'}
                   options={houseRoomOptions}
                   onChange={changeHandler}

               />*/}

                   <MainCard title={'Airport transfer'}>
                       <RadioInput
                           type={'radio'}
                           name={'airportShuttle'}
                           value={'true'}
                           id={'airportShuttleYes'}
                           checked={hotel.airportShuttle === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />

                       <RadioInput
                           type={'radio'}
                           name={'airportShuttle'}
                           value={'false'}
                           id={'airportShuttleNo'}
                           checked={hotel.airportShuttle === false}
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
                           checked={hotel.frontDesk24hr === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />


                       <RadioInput
                           type={'radio'}
                           name={'frontDesk24hr'}
                           value={'false'}
                           id={'frontDesk24hrNo'}
                           checked={hotel.frontDesk24hr === false}
                           onChange={changeHandler}
                           label={'No'}

                       />
                   </MainCard>
                   <MainCard title={'Private Bath BookedRoom'}>
                       <i className="fa-solid fa-shower"></i>
                       <RadioInput
                           type={'radio'}
                           name={'privateBathroom'}
                           value={'true'}
                           id={'privateBathRoomYes'}
                           checked={hotel.privateBathroom === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />
                       <RadioInput
                           type={'radio'}
                           name={'privateBathroom'}
                           value={'false'}
                           id={'privateBathRoomNo'}
                           checked={hotel.privateBathroom === false}
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
                           checked={hotel.houseParking === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />


                       <RadioInput
                           style={{marginLeft: '10px'}}
                           type={'radio'}
                           name={'houseParking'}
                           value={'false'}
                           id={'parkingNo'}
                           checked={hotel.houseParking === false}
                           label={'No'}
                           onChange={changeHandler}
                       />
                   </MainCard>

                   <MainCard title={'BookedRoom Service'}>

                       <RadioInput
                           type={'radio'}
                           name={'roomService'}
                           value={'true'}
                           id={'roomServiceYes'}
                           checked={hotel.roomService === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />


                       <RadioInput
                           type={'radio'}
                           name={'roomService'}
                           value={'false'}
                           id={'roomServiceNo'}
                           checked={hotel.roomService === false}
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
                           checked={hotel.restaurant === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />


                       <RadioInput
                           type={'radio'}
                           name={'restaurant'}
                           value={'false'}
                           id={'RestaurantNo'}
                           checked={hotel.restaurant === false}
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
                           checked={hotel.breakfast === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />

                       <RadioInput
                           type={'radio'}
                           name={'breakfast'}
                           value={'false'}
                           id={'breakfastNo'}
                           checked={hotel.breakfast === false}
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
                           checked={hotel.teaCoffeeMaker === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />

                       <RadioInput
                           type={'radio'}
                           name={'teaCoffeeMaker'}
                           value={'false'}
                           id={'teaCoffeeMakerNo'}
                           checked={hotel.teaCoffeeMaker === false}
                           onChange={changeHandler}
                           label={'No'}

                       />
                   </MainCard>


               </div>
               <SaveButton
                   type={'submit'}
                   title={'Spara'}
                   textColor={'text-primary'}
                   backgroundColor={'btn btn-danger btn-md mt-3'}
               ></SaveButton>
           </form>
       </div>
    );
}

export default HotelBookingForm;