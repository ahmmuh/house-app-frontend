import React, {useEffect} from 'react';
import DatePicker from "../../calender/InputDatePicker";
import MainCard from "../../components/reusableInputs/MainCard";
import RadioInput from "../../components/reusableInputs/RadioInput";
import useHouseState from "../../states/houseState";
import {convertImagebase64} from "../../utils/convertImagebase64";
import SaveButton from "../../components/SaveButton";
import MainTextArea from "../../components/reusableInputs/MainTextArea";
import MainInput from "../../components/reusableInputs/MainInput";
function CreateHotel({selectedCategory}) {
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
        const category = selectedCategory;
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
            //roomType:hotel.roomType,
            price:hotel.price,
            description:hotel.description,
            hotelRoomWidth:hotel.hotelRoomWidth,
            hotelRoomHeight:hotel.hotelRoomHeight,
            squareMeters:hotel.hotelRoomWidth * hotel.hotelRoomHeight,
            privateToilet:hotel.privateToilet,
            available:hotel.available,
            fromStartDate: hotel.fromStartDate,
            toEndDate: hotel.toEndDate,
            hotelRoomWifi:hotel.hotelRoomWifi,
            hotelRoomParking:hotel.hotelRoomParking,
            airportShuttle:hotel.airportShuttle,
            restaurant:hotel.restaurant,
            isNonSmokingRoom:hotel.isNonSmokingRoom,
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
       // createHouse(newHotelRoom).then(result => result);
        console.log("New house", newHotelRoom)

    };

    return (
       <div className={'container'}>
           <form onSubmit={handleSubmit}>
               <div className={'row'}>
                   <MainCard title={'Hotel Name'}>
                       <MainInput type={'text'}
                                  name={'hotelName'} className={'form-control'}
                                  value={hotel.name}
                                  onChange={changeHandler}

                       />

                       <MainInput type={'number'}
                                  name={'price'} className={'form-control'}
                                  value={hotel.price}
                                  onChange={changeHandler} />
                   </MainCard>
                       <MainCard title={'RoomType?'}>
                           <RadioInput
                               type={'radio'}
                               name={'isSingelRoom'}
                               value={'true'}
                               id={'isSingelRoomYes'}
                               checked={hotel.isSingelRoom === true}
                               onChange={changeHandler}
                               label={'Yes'}

                           />
                           <RadioInput
                               type={'radio'}
                               name={'isSingelRoom'}
                               value={'false'}
                               id={'isSingelRoomNo'}
                               checked={hotel.isSingelRoom === false}
                               onChange={changeHandler}
                               label={'No'}

                           />

                       </MainCard>

               </div>
               <div className={'row'}>
                   <MainCard title={'Available'}></MainCard>
                   <div className={'col-6'}>
                       <MainCard title={'From'}>
                           <DatePicker
                               type="date"
                               name={'fromStartDate'}
                               selectedDate={hotel.fromStartDate}
                               id={'fromStartDate'}
                               aria-describedby="basic-addon1"
                               changeHandler={changeHandler}/>
                       </MainCard>
                   </div>
                   <div className={'col-6'}>
                       <MainCard title={'To'}>
                           <DatePicker
                               type='date'
                               name={'toEndDate'}
                               id={'toEndDate'}
                               selectedDate={hotel.toEndDate}
                               changeHandler={changeHandler}/>
                       </MainCard>

                   </div>

                   {/*     <div className={'col'}>
                       <div className="input-group mb-3">From
                           <span className="input-group-text" id="basic-addon1">
                           <i className="fa-solid fa-calendar-days"></i>
                           </span>*/}

                   {/*     </div>


                   </div>*/}
                   <div className={'col'}>
                       <div className={'input-group mb-3'}>To
                           <span className="input-group-text" id="basic-addon1">
                           <i className="fa-solid fa-calendar-days"></i>
                           </span>

                       </div>
                   </div>

                   <MainCard title={'Cabirka guriga'}>
                       <MainInput
                           type="number"
                           name="hotelRoomWidth"
                           value={hotel.hotelRoomWidth}
                           placeholder={'hotelRoomWidth'}
                           label={"Ballaca guriga"}
                           min={0}
                           onChange={changeHandler}

                       />


                       <MainInput
                           type="number"
                           name="hotelRoomHeight"
                           value={hotel.hotelRoomHeight}
                           placeholder={'hotelRoomHeight'}
                           label={"Dhererka guriga"}
                           min={0}
                           onChange={changeHandler}

                       />
                       <MainInput
                           type="number"
                           name="squareMeters"
                           value={`${hotel.squareMeters}`}
                           label={`Waa`}
                           disabled
                           onChange={changeHandler}

                       />

                   </MainCard>

                   <MainTextArea
                       name="description"
                       cols={40}
                       rows={10} placeholder={'Skiver lite beskrivning'}
                       changeHandler={changeHandler}>
                   </MainTextArea>
               </div>
               <div className={'row'}>
               <MainCard title={'Wifi'}>
                       <RadioInput
                           type={'radio'}
                           name={'hotelRoomWifi'}
                           value={'true'}
                           id={'hotelRoomWifiYes'}
                           checked={hotel.hotelRoomWifi === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />

                       <RadioInput
                           type={'radio'}
                           name={'hotelRoomWifi'}
                           value={'false'}
                           id={'hotelRoomWifiNo'}
                           checked={hotel.hotelRoomWifi === false}
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

                   <MainCard title={'Smoking?'}>
                       <RadioInput
                           type={'radio'}
                           name={'isNonSmokingRoom'}
                           value={'true'}
                           id={'isNonSmokingRoomYes'}
                           checked={hotel.isNonSmokingRoom === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />

                       <RadioInput
                           type={'radio'}
                           name={'isNonSmokingRoom'}
                           value={'false'}
                           id={'isNonSmokingRoomNo'}
                           checked={hotel.isNonSmokingRoom === false}
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
                   <MainCard title={'Available'}>
                       <RadioInput
                           type={'radio'}
                           name={'available'}
                           value={'true'}
                           id={'availableYes'}
                           checked={hotel.available === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />
                       <RadioInput
                           type={'radio'}
                           name={'available'}
                           value={'false'}
                           id={'availableNo'}
                           checked={hotel.available === false}
                           onChange={changeHandler}
                           label={'No'}

                       />

                   </MainCard>
                   <MainCard title={'Private Toilet'}>
                       <RadioInput
                           type={'radio'}
                           name={'privateToilet'}
                           value={'true'}
                           id={'privateToiletYes'}
                           checked={hotel.privateToilet === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />
                       <RadioInput
                           type={'radio'}
                           name={'privateToilet'}
                           value={'false'}
                           id={'privateToiletNo'}
                           checked={hotel.privateToilet === false}
                           onChange={changeHandler}
                           label={'No'}

                       />

                   </MainCard>
                   <MainCard title={'Parking'}>
                       <RadioInput
                           type={'radio'}
                           name={'hotelRoomParking'}
                           value={'true'}
                           id={'hotelRoomParkingYes'}
                           checked={hotel.hotelRoomParking === true}
                           onChange={changeHandler}
                           label={'Yes'}

                       />


                       <RadioInput
                           style={{marginLeft: '10px'}}
                           type={'radio'}
                           name={'hotelRoomParking'}
                           value={'false'}
                           id={'hotelRoomParkingNo'}
                           checked={hotel.hotelRoomParking === false}
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

                <MainCard title={'Sawirro'}>
                    <MainInput
                        type="file"
                        name="images"
                        placeholder={'images'}
                        label={"Images"}
                        multiple
                        onChange={changeHandler}

                    />
                </MainCard>
               </div>
               <SaveButton
                   type={'submit'}
                   title={'Spara'}
                   textColor={'text-primary'}
                   backgroundColor={'btn btn-success btn-md mt-3'}
               ></SaveButton>
           </form>
           Ny selected category{selectedCategory}
       </div>
    );
}

export default CreateHotel;